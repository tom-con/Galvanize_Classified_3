// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'classified_dev',
    }
  },
  "production": {
    "client": "pg",
    "connection": process.env.DATABASE_URL
  }

};
