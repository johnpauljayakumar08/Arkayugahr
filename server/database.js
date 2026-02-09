import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// MySQL connection pool
let pool;

// Create connection pool
export async function initDb() {
  try {
    pool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'Johnpaul@123',
      database: process.env.DB_NAME || 'arkayuga_db',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    // Test connection
    const connection = await pool.getConnection();
    console.log('✅ MySQL database connected successfully');
    connection.release();

    // Create table if it doesn't exist
    await createTables();
  } catch (error) {
    console.error('❌ Database connection error:', error);
    throw error;
  }
}

// Create tables
async function createTables() {
  try {
    const connection = await pool.getConnection();
    
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS contactshr (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        company VARCHAR(255),
        message LONGTEXT,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_email (email),
        INDEX idx_createdAt (createdAt)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    
    console.log('✅ Tables created/verified');
    connection.release();
  } catch (error) {
    console.error('❌ Error creating tables:', error);
    throw error;
  }
}

// Add contact
export async function addContact(name, email, phone, company, message) {
  try {
    const connection = await pool.getConnection();
    
    const [result] = await connection.execute(
      'INSERT INTO contactshr (name, email, phone, company, message) VALUES (?, ?, ?, ?, ?)',
      [name, email, phone, company, message]
    );
    
    connection.release();
    return result;
  } catch (error) {
    console.error('Error adding contact:', error);
    throw error;
  }
}

// Get all contacts
export async function getAllContacts() {
  try {
    const connection = await pool.getConnection();
    
    const [rows] = await connection.execute(
      'SELECT * FROM contacts ORDER BY createdAt DESC'
    );
    
    connection.release();
    return rows;
  } catch (error) {
    console.error('Error getting contacts:', error);
    throw error;
  }
}

// Get contact by ID
export async function getContactById(id) {
  try {
    const connection = await pool.getConnection();
    
    const [rows] = await connection.execute(
      'SELECT * FROM contacts WHERE id = ?',
      [id]
    );
    
    connection.release();
    return rows[0];
  } catch (error) {
    console.error('Error getting contact:', error);
    throw error;
  }
}

// Get contacts by email
export async function getContactsByEmail(email) {
  try {
    const connection = await pool.getConnection();
    
    const [rows] = await connection.execute(
      'SELECT * FROM contacts WHERE email = ? ORDER BY createdAt DESC',
      [email]
    );
    
    connection.release();
    return rows;
  } catch (error) {
    console.error('Error getting contacts by email:', error);
    throw error;
  }
}

// Close database connection
export async function closeDb() {
  try {
    if (pool) {
      await pool.end();
      console.log('Database connection closed');
    }
  } catch (error) {
    console.error('Error closing database:', error);
  }
}

export default pool;
