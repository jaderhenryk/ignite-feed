# ignite-feed

This is a simple ReactJS application created using Vite. The app is a feed of posts where users can interact with each post by adding comments, deleting comments, and cheering comments.

## Features

- **View Posts**: Display a feed of posts.
- **Comment** on Posts: Add comments to any post.
- **Delete Comments**: Remove any comment that has been added to a post.
- **Cheer Comments**: Cheer on a comment to show support.

## Technologies used

- **ReactJS**: For building the user interface.
- **Vite**: For fast and lightweight bundling and development.
- **TailwindCSS**: For styling components in a utility-first approach.
 
## Getting Started

### Running on your machine using node
Make sure you have the following installed:

- [Node.js](https://nodejs.org) (version 16 or higher recommended)
- npm or [Yarn](https://yarnpkg.com/)

### Installation

1 - Install dependencies

    npm install or yarn install

2 - Running the app

    npm run dev or yarn dev


### Running with Docker
Make sure you have [Docker](https://www.docker.com/) installed.

1 - build the image

    docker build -t ignite-feed .

2 - run the container

    docker run -p 8080:80 ignite-feed

