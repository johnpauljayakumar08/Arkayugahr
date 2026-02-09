import express from 'express';
import cors from 'cors';
import { addContact, getAllContacts, getContactById, initDb, closeDb } from './database.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));
app.use(express.json());

// Initialize database and start server
let isDbReady = false;

initDb()
  .then(() => {
    isDbReady = true;
    app.listen(PORT, () => {
      console.log(`✅ Arkayuga Backend Server running on http://localhost:${PORT}`);
      console.log(`📧 Contact form endpoint: POST http://localhost:${PORT}/api/contacts`);
      console.log(`📋 Get all contacts: GET http://localhost:${PORT}/api/contacts`);
    });
  })
  .catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
  });

// Routes

// POST - Submit contact form
app.post('/api/contacts', async (req, res) => {
  try {
    const { name, email, phone, company, message } = req.body;

    // Validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and phone are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    // Add to database
    const result = await addContact(name, email, phone, company || '', message || '');

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      id: result.insertId
    });
  } catch (error) {
    console.error('Error submitting contact:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit contact form'
    });
  }
});

// GET - Retrieve all contacts (admin only - add auth in production)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await getAllContacts();
    res.json({
      success: true,
      data: contacts,
      count: contacts.length
    });
  } catch (error) {
    console.error('Error retrieving contacts:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to retrieve contacts'
    });
  }
});

// GET - Retrieve specific contact by ID
app.get('/api/contacts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await getContactById(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Contact not found'
      });
    }

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    console.error('Error retrieving contact:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to retrieve contact'
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    database: isDbReady ? 'Connected' : 'Connecting...'
  });
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down server...');
  await closeDb();
  process.exit(0);
});
