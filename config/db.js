const db = require('../models');

async function connectToDatabase() {
  try {
    await db.sequelize.authenticate();
    console.log('Database connection successfully.');

    await db.sequelize.sync({ alter: true });
    console.log('Database synchronized successfully.');
  
} catch (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1); // Exit the process with an error code
  }
}

module.exports = connectToDatabase;