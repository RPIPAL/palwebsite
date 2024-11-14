#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Set environment to production
export NODE_ENV=production

echo "Starting production build process..."

# Step 1: Install dependencies
echo "Installing dependencies..."
npm ci --only=production

# Step 2: Run any necessary build commands (Optional)
# If you have a build step for your frontend assets, include it here:
# echo "Building application..."
# npm run build

# Step 3: Start or reload PM2 process
echo "Restarting application with PM2..."
pm2 reload pm2.config.json --update-env --no-daemon

# Step 4: Save PM2 process list
pm2 save

echo "Production build complete. Application is running."
