# Description

Introducing the Infinite Scroll Web App, a dynamic application seamlessly integrated with the Unsplash API. This user-friendly platform offers an infinite scrolling experience, presenting users with a continuous stream of high-quality, random images.

# Getting Started

To run this web app locally, follow these steps:

Clone the Repository:

    $ git clone https://github.com/Mickunaru/Infinite-Scroll.git
    $ cd Infinite-Scroll

Install Dependencies:

    $ npm install

Set Up Unsplash API Key:

Obtain your Unsplash API key by creating a developer account on Unsplash.
Copy your API ACCESS KEY.

Create a .env file in the project root (a sample.env is provided as an example):

    $ touch .env

Open the .env file and add your Unsplash API key:

    API_ACCESS_KEY=YOUR-API-ACCESS-KEY

Run the Server:

    $ nodemon server.js

Run the Client:

You can use a development server to run the client-side code. To make things easy, simply use the live-server extension and click on "Go Live" on the bottom right of VS Code.
