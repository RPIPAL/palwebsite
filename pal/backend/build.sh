#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Set environment to production
export NODE_ENV=production

echo "Starting production build process..."

# Step 1: Install dependencies
echo "Installing dependencies..."
npm install

# Step 4: Restart PM2 with new configuration
echo "Restarting application with PM2..."
pm2 reload pm2.config.json --update-env

# Step 5: Save PM2 process list
pm2 save

echo "Production build complete. Application is running."

# Step 6: Optional - Start PM2 startup script to run on reboot
pm2 startup