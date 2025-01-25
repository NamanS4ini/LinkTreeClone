# Linktree Clone

A simple, free, and open-source Linktree clone where anyone can claim their handle and create their Linktree without requiring login. This project prioritizes simplicity and ease of use, allowing users to quickly create and share their personalized link pages.

## Features

- **No Login Required**: Anyone can claim a handle and create their Linktree instantly.
- **Custom Handles**: Create a unique handle for your profile (e.g., `localhost:3000/your-handle`).
- **Instant Setup**: Add and share your links without any complicated setup.

## How It Works

1. Visit the website and enter your desired handle.
2. Add your links and submit.
3. Share your unique Linktree URL.

> Note: Since there is no login, **links cannot be edited once submitted**. If you need to make changes, you can claim a new handle and recreate your Linktree.

## Environment Variables

The project requires the following environment variables to run:

- `MONGODB_URI`: The connection string for your MongoDB database.
- `NEXT_PUBLIC_HOST`: The public URL of your hosted application (e.g., `http://localhost:3000`).

## Tech Stack

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **MongoDB**: NoSQL database for storing user handles and links.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- MongoDB Atlas or a local MongoDB instance.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NamanS4ini/LinkTreeClone.git
   cd LinkTreeClone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add the required environment variables:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_HOST=your_public_host_url
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Deployment

To deploy the application:

1. Set up your environment variables in your hosting platform (e.g., Vercel, Netlify).
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the build folder or connect your repository to the hosting platform.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request.


---

Enjoy using the Linktree Clone! 🎉
