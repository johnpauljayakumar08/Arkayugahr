#!/bin/bash

# Arkayuga HR Consulting - Setup Script

echo "🚀 Arkayuga Backend Setup"
echo "========================"
echo ""

# Check if MySQL is installed
if ! command -v mysql &> /dev/null; then
    echo "❌ MySQL is not installed. Please install MySQL first."
    echo "   Visit: https://dev.mysql.com/downloads/mysql/"
    exit 1
fi

echo "✅ MySQL found"

# Create database
echo ""
echo "📦 Creating MySQL database..."
read -p "Enter MySQL root password: " mysql_password

mysql -u root -p$mysql_password -e "CREATE DATABASE IF NOT EXISTS arkayuga_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

if [ $? -eq 0 ]; then
    echo "✅ Database created successfully"
else
    echo "❌ Failed to create database"
    exit 1
fi

# Setup server environment
echo ""
echo "⚙️  Setting up server environment..."

if [ ! -f server/.env ]; then
    cp server/.env.example server/.env
    echo "✅ Created server/.env"
    
    # Update password in .env
    sed -i "s/your_mysql_password/$mysql_password/" server/.env
    echo "✅ Updated database password"
else
    echo "⚠️  server/.env already exists, skipping..."
fi

# Install dependencies
echo ""
echo "📥 Installing dependencies..."
cd server
npm install

if [ $? -eq 0 ]; then
    echo "✅ Backend dependencies installed"
else
    echo "❌ Failed to install backend dependencies"
    exit 1
fi

cd ..
npm install

if [ $? -eq 0 ]; then
    echo "✅ Frontend dependencies installed"
else
    echo "❌ Failed to install frontend dependencies"
    exit 1
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "🚀 To start the application:"
echo "   Terminal 1: cd server && npm start"
echo "   Terminal 2: npm run dev"
echo ""
echo "📖 For more information, see BACKEND_SETUP.md"
