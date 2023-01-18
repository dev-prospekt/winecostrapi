const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'dedi3734.your-server.de'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'winekl_db1'),
      user: env('DATABASE_USERNAME', 'winekl_1'),
      password: env('DATABASE_PASSWORD', 'J2tqdPzSu26ZzDHF'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    // connection: {
    //   host: env('DATABASE_HOST', '127.0.0.1'),
    //   port: env.int('DATABASE_PORT', 3306),
    //   database: env('DATABASE_NAME', 'winekl_db1'),
    //   user: env('DATABASE_USERNAME', 'root'),
    //   password: env('DATABASE_PASSWORD', ''),
    //   // ssl: {
    //   //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
    //   // },
    // },
    debug: false,
  },
});
