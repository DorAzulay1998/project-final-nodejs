## Features

- User listing and detail endpoints
- Fetch random dog images from an external API
- Modular structure with controllers, services, and utilities
- Environment variable support

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

```sh
npm install
```

### Running the Application

To start the server:

```sh
npm run dev
```

The server will run on the port specified in your [.env](.env) file (default: 5002).

### API Endpoints

- `GET /users` - List all users
- `GET /users/:id` - Get user by ID
- `GET /api/dogs` - Get a random dog image

## Project Structure

```
config/         # Configuration files
controllers/    # Route controllers
mockdata/       # Mock data for users
public/         # Static assets (CSS, etc.)
routes/         # Express route definitions
services/       # Business logic and external API calls
utils/          # Utility functions (logging, hashing, etc.)
```

## License

MIT
