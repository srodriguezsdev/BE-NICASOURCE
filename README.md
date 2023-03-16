### Node Express Dev Project Setup Guide
This guide will walk you through the steps needed to set up and run a Node Express dev project from your GitHub repository using Node version 18 and TypeScript.

### Prerequisites
Node.js 18 installed on your machine
Basic knowledge of TypeScript and Express.js
Text editor of your choice

You should set a .env file for the project with the following variables:

    PORT="8080" // local port
    JWT_SECRET_KEY="" // any key to sign with JWT
    DATABASE_NAME="" // database information
    DATABASE_USER="" // database information
    DATABASE_PASSWORD="" // database information
    DATABASE_HOST="" // database information
    DATABASE_PORT="" // database information

### Step 1: Install dependencies
Navigate into the cloned repository directory and install the required dependencies for our project by running the following command:
	
    npm install

### Step 2: Run the server
To start the server, run the following command:

    npm run dev

> Some clarifications:
- The used nomenclature in this project is camelCase for code variables and snake_case for refering to database fields.

[API Documentation](https://buttered-alfalfa-20a.notion.site/NICASOURCE-BE-DOCUMENTATION-fd8da74ad09a46cba77f916f80299120)