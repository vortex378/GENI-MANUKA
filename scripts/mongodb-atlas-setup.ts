console.log(`
🌟 MongoDB Atlas Setup Guide 🌟
===============================

Follow these steps to set up your MongoDB Atlas database:

STEP 1: Create a MongoDB Atlas Account
-------------------------------------
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up for a free account
3. Complete the registration process

STEP 2: Create a New Cluster
---------------------------
1. Click "Build a Database"
2. Choose the FREE tier (M0)
3. Select your preferred cloud provider (AWS, Google Cloud, or Azure)
4. Choose a region closest to your users
5. Click "Create Cluster"

STEP 3: Set Up Database Access
----------------------------
1. While your cluster is being created, click on "Database Access" in the left menu
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Enter a username and password (SAVE THESE CREDENTIALS!)
5. Set privileges to "Read and write to any database"
6. Click "Add User"

STEP 4: Configure Network Access
------------------------------
1. Click on "Network Access" in the left menu
2. Click "Add IP Address"
3. For development, you can click "Allow Access from Anywhere" (0.0.0.0/0)
   (Note: For production, you should restrict to specific IP addresses)
4. Click "Confirm"

STEP 5: Get Your Connection String
--------------------------------
1. Go back to "Database" in the left menu
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Select "Node.js" and version "4.1 or later"
5. Copy the connection string

STEP 6: Update Your .env.local File
---------------------------------
1. Replace the placeholder in your .env.local file:

   DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/manuka-honey-db?retryWrites=true&w=majority"

2. Replace:
   - "username" with your database username
   - "password" with your database password
   - "cluster.mongodb.net" with your actual cluster address
   - "manuka-honey-db" with your preferred database name

STEP 7: Test Your Connection
--------------------------
1. Run the test script:
   npm run test:db

🎉 You're all set! Your MongoDB Atlas database is now ready to use with your application.
`)
