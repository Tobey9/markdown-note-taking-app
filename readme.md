# 📝 Markdown Note-Taking API

A simple Node.js + Express API to save, list, and render Markdown files as HTML.

## 📦 Features

- Save notes written in Markdown
- List all saved notes
- Render any note as HTML using the `marked` library

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/markdown-note-taking-app.git
cd markdown-note-taking-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm run dev
```

## 🔧 API Endpoints

`POST /api/notes`
Save markdown note.
**Request Body:**

```json
{
  "filename": "first.md",
  "content": "# My First Note\nHello all"
}
```

`GET /api/notes`
List all saved Markdown files.
**Response**

```json
["first.md", "todo.md"]
```

`GET /api/notes/:filename/render
Render a Markdown file as HTML
**Example:**

```POSTMAN
GET /api/notes/first.md/render
```

## 📁 File Structure

```bash
markdown-note-taking-app/
│
├── controllers/
│   └── noteController.js
├── routes/
│   └── noteRoutes.js
├── uploads/             # Where Markdown notes are stored
├── app.js               # Main server file
├── .gitignore
└── README.md
```

## 🛠 Tech Stack

- Node.js
- Express
- marked (markdown to HTML)
