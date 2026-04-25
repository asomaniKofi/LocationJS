# 📍 LocationJS

**LocationJS** (internally named `garbage-location-api`) is a RESTful API built with Node.js, TypeScript, and Express for managing garbage collection locations. It uses MongoDB for data persistence, supports email notifications via Nodemailer, and includes a full integration test suite powered by Jest and Supertest.

---

## ✨ Features

- 🗺️ **Location Management** — CRUD operations for garbage collection location data stored in MongoDB
- 📧 **Email Notifications** — Sends notifications via Nodemailer/Gmail when location events occur
- 🔐 **Environment Config** — Sensitive credentials managed via `.env` and `dotenv`
- 🧪 **Integration Testing** — Full test suite using Jest, Supertest, and an in-memory MongoDB server for isolated testing
- 📋 **Request Logging** — HTTP request logging via Morgan
- 🔒 **CORS Support** — Cross-origin requests handled via the `cors` middleware
- 🏗️ **TypeScript** — Fully typed codebase compiled to ES6 with strict mode enabled

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Runtime | Node.js |
| Language | TypeScript 5 |
| Framework | Express 4 |
| Database | MongoDB (via Mongoose 8) |
| Email | Nodemailer |
| Testing | Jest, Supertest, mongodb-memory-server |
| Logging | Morgan |
| Config | dotenv |
| Build | tsc (TypeScript compiler) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster (or local MongoDB instance)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/asomaniKofi/LocationJS.git
   cd LocationJS
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the project root with the following variables:

   ```env
   MONGO_URL=<your_mongodb_connection_string>
   GMAIL=<your_gmail_address>
   ```

   > ⚠️ **Never commit your `.env` file to version control.** Make sure it is listed in `.gitignore`.

4. **Build the project**

   ```bash
   npm run build
   ```

5. **Start the server**

   ```bash
   npm start
   ```

   For development with auto-recompilation:

   ```bash
   npm run dev
   ```

---

## 🧪 Running Tests

The test suite uses Jest, Supertest, and an in-memory MongoDB instance so no live database connection is required.

```bash
npm test
```

Tests are located in the `tests/` directory and match the pattern `**/*.test.ts`.

---

## 📁 Project Structure

```
LocationJS/
├── src/             # TypeScript source code
│   └── index.ts     # Application entry point
├── locations/       # Location-related route/model logic
├── tests/           # Jest integration tests
│   └── setup.ts     # Test environment setup
├── out/             # Compiled JavaScript output (generated)
├── .env             # Environment variables (do not commit)
├── jest.config.ts   # Jest configuration
├── tsconfig.json    # TypeScript configuration
└── package.json
```

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm start` | Compiles TypeScript and starts the server |
| `npm run dev` | Watches for changes and recompiles TypeScript |
| `npm run build` | Compiles TypeScript to `out/` |
| `npm test` | Runs the Jest test suite |

---

## 🔒 Security Notes

- Store all sensitive credentials (MongoDB URI, email credentials) in a `.env` file — **never hardcode them** or commit them to source control.
- Ensure `.env` is included in your `.gitignore`.
- Consider rotating any credentials that may have been previously exposed.

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👤 Author

**asomaniKofi** — [GitHub Profile](https://github.com/asomaniKofi)
