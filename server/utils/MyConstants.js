const MyConstants = {
    DB_SERVER: 'cluster0.kjkuilu.mongodb.net',
    DB_USER: 'rengarwolf12_db_user',
    DB_PASS: 'Ken080903',
    DB_DATABASE: 'ShoppingOnline',
    EMAIL_USER: 'rengarwolf12@gmail.com', // Gmail app-password required, not the account password
    EMAIL_PASS: 'otjiqbybpsdzzuts',
    JWT_SECRET: 'abciooiqwe',
    // jsonwebtoken expects expiresIn in seconds or a timespan like "1d" or "60".
    // This value was previously wrapped in <> and broke token generation.
    JWT_EXPIRES: 356658435649999999999,
};
module.exports = MyConstants;

