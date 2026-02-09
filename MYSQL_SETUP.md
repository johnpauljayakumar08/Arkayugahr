# MySQL Setup for Windows

## Step 1: Install MySQL

### Option A: Download Installer
1. Go to https://dev.mysql.com/downloads/mysql/
2. Download MySQL Installer for Windows
3. Run the installer and follow the setup wizard
4. Choose "Server" installation type
5. Configure MySQL Server with default settings
6. Remember the root password you set

### Option B: Using Chocolatey
If you have Chocolatey installed:
```powershell
choco install mysql
```

### Option C: Using Windows Subsystem for Linux (WSL)
```bash
wsl
sudo apt-get update
sudo apt-get install mysql-server
sudo service mysql start
```

## Step 2: Verify MySQL Installation

Open PowerShell and test the connection:
```powershell
mysql -u root -p
```

Enter your MySQL root password. If successful, you'll see:
```
Welcome to the MySQL monitor. Commands end with ; or \g.
Your MySQL connection id is 8
...
mysql>
```

Type `exit` to close.

## Step 3: Create Database

Run this command (replace `your_password` with your MySQL root password):
```powershell
mysql -u root -p your_password -e "CREATE DATABASE arkayuga_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
```

## Step 4: Configure Backend

1. Navigate to the server folder:
```powershell
cd server
```

2. Copy and edit the environment file:
```powershell
Copy-Item .env.example .env
```

3. Edit `server\.env` with your credentials:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=arkayuga_db
PORT=5000
```

## Step 5: Start Backend

```powershell
npm start
```

You should see:
```
✅ Arkayuga Backend Server running on http://localhost:5000
✅ MySQL database connected successfully
✅ Tables created/verified
```

## Troubleshooting

### MySQL Service Not Running
Start the MySQL service:
```powershell
# For MySQL 8.0
net start MySQL80

# Or find your version
Get-Service MySQL*
net start <service_name>
```

### Access Denied Error
Check your credentials:
```powershell
mysql -u root -p
# Enter password when prompted
```

### Port 3306 Already in Use
MySQL port is in use. Either:
- Close other MySQL services
- Change MySQL port in MySQL configuration

### "Can't connect to MySQL server"
Ensure MySQL is running:
```powershell
# Check if MySQL service is running
Get-Service -Name "MySQL80"

# If not running, start it
Start-Service -Name "MySQL80"
```

## Managing MySQL

### Access MySQL Command Line
```powershell
mysql -u root -p
```

### View Databases
```sql
SHOW DATABASES;
```

### View Tables in arkayuga_db
```sql
USE arkayuga_db;
SHOW TABLES;
```

### View Contact Data
```sql
SELECT * FROM contacts;
```

### Delete All Contacts (if needed)
```sql
DELETE FROM contacts;
```

### Reset Auto Increment ID
```sql
ALTER TABLE contacts AUTO_INCREMENT = 1;
```

## Backup and Restore

### Backup Database
```powershell
mysqldump -u root -p arkayuga_db > arkayuga_backup.sql
```

### Restore Database
```powershell
mysql -u root -p arkayuga_db < arkayuga_backup.sql
```

## GUI Tools (Optional)

You can use these tools for easier MySQL management:

1. **MySQL Workbench** - Official GUI tool
   - Download: https://www.mysql.com/products/workbench/

2. **HeidiSQL** - Lightweight alternative
   - Download: https://www.heidisql.com/

3. **DBeaver** - Universal database tool
   - Download: https://dbeaver.io/

## Next Steps

Once MySQL is set up:
1. Create `.env` file in server directory
2. Run `npm install` to install dependencies
3. Run `npm start` to start the backend
4. The database tables will be created automatically
