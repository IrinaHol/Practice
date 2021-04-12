module.exports = {
    PORT: 5000,
    MONGO_DB: process.env.MONGO_URL || 'mongodb://localhost:27017/users',
    JWT_SECRET: process.env.JWT_SECRET || 'SECRET',
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'REFRESH SECRET',

    SERVICE_EMAIL: process.env.SERVICE_EMAIL || 'myhwemail@gmail.com',
    SERVICE_EMAIL_PASSWORD: process.env.SERVICE_EMAIL_PASSWORD || '1111',

    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || '1995irina',

    SENTRY_DSN: process.env.SENTRY_DSN || 'https://e51114e049624f43b843904c0cf27158@o562823.ingest.sentry.io/5701914'
};
