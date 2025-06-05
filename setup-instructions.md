# Database Setup Instructions

## 1. Install Dependencies
\`\`\`bash
npm install
\`\`\`

## 2. Set up Environment Variables
Copy `.env.local.example` to `.env.local` and fill in your database URL and other credentials.

## 3. Generate Prisma Client
\`\`\`bash
npm run db:generate
\`\`\`

## 4. Push Schema to Database
\`\`\`bash
npm run db:push
\`\`\`

## 5. Seed the Database
\`\`\`bash
npm run db:seed
\`\`\`

## 6. Test Database Connection
\`\`\`bash
npm run db:init
\`\`\`

## 7. Open Prisma Studio (Optional)
\`\`\`bash
npm run db:studio
\`\`\`

## Default Credentials
- **Admin**: admin@manuka-bio-organik.com / admin123
- **Test User**: user@example.com / user123

## MongoDB Setup
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Add it to your `.env.local` file

## Troubleshooting
- Make sure your MongoDB connection string is correct
- Ensure your IP is whitelisted in MongoDB Atlas
- Check that all environment variables are set correctly
