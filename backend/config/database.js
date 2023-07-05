module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '50.18.98.55'),    
      // host: env('DATABASE_HOST', 'localhost'),    
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ecommerce'),
      // database: env('DATABASE_NAME', 'V-Mart'),
      user: env('DATABASE_USERNAME', 'vmart'),
      // user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'vmartharsh'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      //  ssl: {
      //    rejectUnauthorized: false,
      //  },
    },
    // debug: false,
  },
});
