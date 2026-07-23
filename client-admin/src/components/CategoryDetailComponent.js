import axios from 'axios';
import React, { Component } from 'react';
import MyContext from '../contexts/MyContext';

class CategoryDetail extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);
    this.state = {
      txtID: '',
      txtName: ''
    };
  }

  render() {
    return (
      <div className="float-right">
        <h2 className="text-center">CATEGORY DETAIL</h2>

        <form>
          <table>
            <tbody>
              <tr>
                <td>ID</td>
                <td>
                  <input
                    type="text"
                    value={this.state.txtID}
                    disabled
                    readOnly
                  />
                </td>
              </tr>

              <tr>
                <td>Name</td>
                <td>
                  <input
                    type="text"
                    value={this.state.txtName}
                    onChange={(e) =>
                      this.setState({ txtName: e.target.value })
                    }
                  />
                </td>
              </tr>

              <tr>
                <td></td>
                <td>
                  <input
                    type="submit"
                    value="ADD NEW"
                    onClick={(e) => this.btnAddClick(e)}
                  />

                  <input
                    type="submit"
                    value="UPDATE"
                    onClick={(e) => this.btnUpdateClick(e)}
                  />

                  <input
                    type="submit"
                    value="DELETE"
                    onClick={(e) => this.btnDeleteClick(e)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.item &&
      this.props.item !== prevProps.item
    ) {
      this.setState({
        txtID: this.props.item._id,
        txtName: this.props.item.name
      });
    }
  }

  //=========================
  // ADD
  //=========================
  btnAddClick(e) {
    e.preventDefault();

    const name = this.state.txtName.trim();

    if (name === '') {
      alert('Please input category name');
      return;
    }

    const cate = {
      name: name
    };

    this.apiPostCategory(cate);
  }

  apiPostCategory(cate) {
    const config = {
      headers: {
        'x-access-token': this.context.token
      }
    };

    axios
      .post('/api/admin/categories', cate, config)
      .then((res) => {
        const result = res.data;

        if (result) {
          alert('ADD SUCCESS!');

          this.setState({
            txtID: '',
            txtName: ''
          });

          this.apiGetCategories();
        } else {
          alert('ADD FAIL!');
        }
      });
  }

  //=========================
  // UPDATE
  //=========================
  btnUpdateClick(e) {
    e.preventDefault();

    const id = this.state.txtID;
    const name = this.state.txtName.trim();

    if (id === '') {
      alert('Please choose a category');
      return;
    }

    const cate = {
      name: name
    };

    this.apiPutCategory(id, cate);
  }

  apiPutCategory(id, cate) {
    const config = {
      headers: {
        'x-access-token': this.context.token
      }
    };

    axios
      .put('/api/admin/categories/' + id, cate, config)
      .then((res) => {
        const result = res.data;

        if (result) {
          alert('UPDATE SUCCESS!');
          this.apiGetCategories();
        } else {
          alert('UPDATE FAIL!');
        }
      });
  }

  //=========================
  // DELETE
  //=========================
  btnDeleteClick(e) {
    e.preventDefault();

    if (window.confirm('ARE YOU SURE?')) {
      const id = this.state.txtID;

      if (id) {
        this.apiDeleteCategory(id);
      } else {
        alert('Please choose a category');
      }
    }
  }

  apiDeleteCategory(id) {
    const config = {
      headers: {
        'x-access-token': this.context.token
      }
    };

    axios
      .delete('/api/admin/categories/' + id, config)
      .then((res) => {
        const result = res.data;

        if (result) {
          alert('DELETE SUCCESS!');

          this.setState({
            txtID: '',
            txtName: ''
          });

          this.apiGetCategories();
        } else {
          alert('DELETE FAIL!');
        }
      });
  }

  //=========================
  // GET LIST
  //=========================
  apiGetCategories() {
    const config = {
      headers: {
        'x-access-token': this.context.token
      }
    };

    axios
      .get('/api/admin/categories', config)
      .then((res) => {
        const result = res.data;
        if (result && result.success === false) {
          this.context.setToken('');
          this.context.setUsername('');
          return;
        }
        this.props.updateCategories(Array.isArray(result) ? result : []);
      });
  }
}

export default CategoryDetail;