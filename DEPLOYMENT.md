# Deploying MinifyMe to Render

This guide will help you deploy your MinifyMe URL shortener application to Render.

## Prerequisites

1. A Render account (free tier available)
2. A MongoDB database (MongoDB Atlas recommended)
3. Your code pushed to a Git repository (GitHub, GitLab, etc.)

## Step 1: Prepare Your MongoDB Database

1. **Set up MongoDB Atlas** (recommended):
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a free cluster
   - Create a database user with read/write permissions
   - Get your connection string

2. **Create the database and collection**:
   - Database name: `minifyme`
   - Collection name: `urls`

## Step 2: Deploy to Render

### Option A: Using render.yaml (Recommended)

1. **Push your code to Git**:
   ```bash
   git add .
   git commit -m "Add Render deployment configuration"
   git push origin main
   ```

2. **Connect to Render**:
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" and select "Blueprint"
   - Connect your Git repository
   - Render will automatically detect the `render.yaml` file

3. **Configure Environment Variables**:
   - In the Render dashboard, go to your service
   - Navigate to "Environment" tab
   - Add the following environment variable:
     - `MONGODB_URI`: Your MongoDB connection string

### Option B: Manual Deployment

1. **Create a new Web Service**:
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" and select "Web Service"
   - Connect your Git repository

2. **Configure the service**:
   - **Name**: `minifyme`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Branch**: `main` (or your default branch)

3. **Add Environment Variables**:
   - `NODE_ENV`: `production`
   - `MONGODB_URI`: Your MongoDB connection string

## Step 3: Environment Variables

Make sure to set these environment variables in Render:

| Variable | Value | Description |
|----------|-------|-------------|
| `NODE_ENV` | `production` | Sets the environment to production |
| `MONGODB_URI` | `mongodb+srv://...` | Your MongoDB connection string |

## Step 4: Deploy

1. Click "Create Web Service"
2. Render will automatically build and deploy your application
3. Wait for the build to complete (usually 2-5 minutes)
4. Your app will be available at the provided URL

## Step 5: Custom Domain (Optional)

1. In your Render service dashboard, go to "Settings"
2. Scroll down to "Custom Domains"
3. Add your domain and configure DNS settings

## Troubleshooting

### Common Issues:

1. **Build fails**:
   - Check that all dependencies are in `package.json`
   - Ensure Node.js version is compatible (Render uses Node 18+)

2. **MongoDB connection fails**:
   - Verify your `MONGODB_URI` is correct
   - Ensure your MongoDB Atlas cluster allows connections from anywhere (0.0.0.0/0)
   - Check that your database user has the correct permissions

3. **App crashes on startup**:
   - Check the logs in Render dashboard
   - Verify all environment variables are set correctly

### Useful Commands:

- **View logs**: Go to your service dashboard and click "Logs"
- **Redeploy**: Click "Manual Deploy" in the dashboard
- **Environment variables**: Check the "Environment" tab

## Cost

- **Free tier**: 750 hours/month (enough for personal projects)
- **Paid plans**: Start at $7/month for always-on services

## Support

- [Render Documentation](https://render.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
