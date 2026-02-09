# Arkayuga HR Consulting - Backend Setup

## Prerequisites

### MySQL Installation
Before setting up the backend, ensure MySQL is installed and running on your system.

**Windows:**
- Download from https://dev.mysql.com/downloads/mysql/
- Or use `choco install mysql` if you have Chocolatey

**Mac:**
- `brew install mysql`
- `brew services start mysql`

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get update
sudo apt-get install mysql-server
sudo service mysql start
```

## Installation

### 1. Create MySQL Database

Open MySQL and run:
```bash
mysql -u root -p
```

Then execute:
```sql
CREATE DATABASE arkayuga_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 2. Install Backend Dependencies
```bash
cd server
npm install
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env` in the server directory:
```bash
cp .env.example .env
```

Edit `server/.env` with your MySQL credentials:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=arkayuga_db
PORT=5000
```

### 4. Install Frontend Dependencies (if not already done)
```bash
cd ..
npm install
```

## Running the Application

### Terminal 1 - Start Backend Server
```bash
cd server
npm start
# or for development with auto-reload
npm run dev
```

Server runs on: **http://localhost:5000**

You should see:
```
✅ Arkayuga Backend Server running on http://localhost:5000
✅ MySQL database connected successfully
✅ Tables created/verified
```

### Terminal 2 - Start Frontend Development Server
```bash
npm run dev
```

Frontend runs on: **http://localhost:5173** (or another port if 5173 is in use)

## API Endpoints

### Submit Contact Form
- **POST** `/api/contacts`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91 1234567890",
    "company": "Tech Company",
    "message": "We need HR services"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Contact form submitted successfully",
    "id": 1
  }
  ```

### Get All Contacts (Admin)
- **GET** `/api/contacts`
- **Response:** 
  ```json
  {
    "success": true,
    "data": [...],
    "count": 5
  }
  ```

### Get Specific Contact
- **GET** `/api/contacts/:id`
- **Response:** Single contact object

### Health Check
- **GET** `/api/health`
- **Response:** Server and database status

## Database

- **Type:** MySQL
- **Database:** `arkayuga_db`
- **Table:** `contacts`
- **Fields:**
  - id (auto-increment, primary key)
  - name (VARCHAR 255)
  - email (VARCHAR 255)
  - phone (VARCHAR 20)
  - company (VARCHAR 255)
  - message (LONGTEXT)
  - createdAt (TIMESTAMP)
  - Indexes: email, createdAt

## Troubleshooting

### MySQL Connection Error
```
Error: Access denied for user 'root'@'localhost'
```
**Solution:** 
- Verify MySQL is running: `mysql -u root -p`
- Check credentials in `server/.env`
- Ensure database exists: `CREATE DATABASE arkayuga_db;`

### Port Already in Use
```
Error: listen EADDRINUSE :::5000
```
**Solution:**
- Kill process on port 5000, or
- Change PORT in `server/.env` to another port (e.g., 5001)
- Update `VITE_API_URL` in `.env` accordingly

### CORS Errors
If you get CORS errors:
- Ensure backend is running on `http://localhost:5000`
- Check that frontend is on `http://localhost:5173` or `http://localhost:3000`
- Backend CORS is configured to allow both ports

### Database Query Errors
- Run `SHOW TABLES;` in MySQL to verify contacts table exists
- Check MySQL user has proper permissions: `GRANT ALL PRIVILEGES ON arkayuga_db.* TO 'root'@'localhost';`

## Testing the API

### Using cURL (Windows PowerShell):
```powershell
$body = @{
  name = "Test User"
  email = "test@example.com"
  phone = "+91 1234567890"
  company = "Test Company"
  message = "Test message"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:5000/api/contacts" `
  -Method POST `
  -Headers @{"Content-Type"="application/json"} `
  -Body $body
```

### Using Postman:
1. Open Postman
2. Create new POST request to `http://localhost:5000/api/contacts`
3. Set Content-Type to `application/json`
4. Add JSON body with contact fields
5. Send request

## Production Deployment

### Before Deploying:

1. **Add Authentication**
   - Implement JWT or session-based auth
   - Add authentication middleware to admin endpoints

2. **Input Validation**
   - Validate all inputs
   - Sanitize data to prevent SQL injection

3. **Rate Limiting**
   - Add rate limiting to prevent spam
   - Use package like `express-rate-limit`

4. **Environment Variables**
   - Use secure methods to store sensitive data
   - Never commit `.env` files

5. **Database**
   - Use managed MySQL service (AWS RDS, DigitalOcean, etc.)
   - Enable SSL for database connections
   - Set up regular backups

6. **Deployment Options**
   - **Railway.app** (recommended for beginners)
   - **Render.com**
   - **Heroku** (with extensions)
   - **AWS Elastic Beanstalk**
   - **DigitalOcean App Platform**

### Deployment Example (Railway.app):
1. Push code to GitHub
2. Connect Railway to GitHub repo
3. Set environment variables in Railway dashboard
4. Deploy
5. Update `VITE_API_URL` in frontend to production URL

## Monitoring

Monitor your server:
```bash
# Check if server is running
curl http://localhost:5000/api/health

# View MySQL connections
mysql -u root -p -e "SHOW PROCESSLIST;"

# Check database size
mysql -u root -p -e "SELECT table_schema, ROUND(SUM(data_length+index_length)/1024/1024, 2) AS 'Size in MB' FROM information_schema.tables GROUP BY table_schema;"
```
