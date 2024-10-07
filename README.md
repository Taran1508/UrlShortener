# URL Shortener

A simple URL shortener application that allows users to shorten long URLs, manage their shortened URLs, and redirect shortened URLs to the original links.

## Features

- Shorten long URLs into a concise, shareable link
- Redirect shortened URLs to the original URLs

## Tech Stack

- **Backend**: Node.js, Express
- **Frontend**: HTML, CSS, JavaScript 
- **Other Dependencies**: 
  - [Shortid](https://www.npmjs.com/package/shortid) (for generating unique short URLs)
  - [dotenv](https://www.npmjs.com/package/dotenv) (for environment variables)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js installed on your machine

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Taran1508/UrlShortener.git
    cd urlshortener
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add your configurations:
    ```env
    PORT=3000
    BASE_URL=http://localhost:3000
    ```

4. **Start the application**:
    ```bash
    npm start
    ```

5. Open your browser and visit `http://localhost:3000`.

## Usage

1. Enter a long URL in the input field and click on the "Shorten" button.
2. You will receive a shortened URL that you can copy and share.
3. Access the shortened URL to be redirected to the original URL.

## API Endpoints

| Method | Endpoint             | Description                          |
|--------|----------------------|--------------------------------------|
| POST   | `/shorten`           | Shorten a long URL                   |
| GET    | `/:id`               | Redirect to the original URL         |

## Folder Structure

```
urlshortener/
│
├── .env             # Environment variables
├── package.json     # NPM dependencies
├── public/          # Static files (HTML, CSS, JS)
├── src              # Source file
   ├── controllers/     # Controller functions for handling requests
   ├── routes/          # API routes
   └── app.js           # Main server file
├── views/           # View templates (if using templating engine)
├── LICENSE
└── Readme.md        # Readme File
```

## Contributing

Feel free to open issues or submit pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
