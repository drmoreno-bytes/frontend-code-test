# Genially Frontend Code Test Solution

This project is an interactive application that allows users to manage, select, move, and customize boxes within a canvas, supporting multiple selections, local state persistence, and undo/redo capabilities.

## 🎨 Design Features & UI/UX Highlights

I focused on creating a minimalist and intuitive interface with careful attention to user experience:

### 🔑 Key Features

-   Box management (add/remove)
-   Visual selection indicators
-   Drag & drop using interact.js
-   Color customization
-   Multi-box selection support
-   Local state persistence
-   Undo/Redo capabilities

### 🎯 Smart Box Placement

-   [✅] New boxes are intelligently placed within canvas boundaries
-   [✅] Visual feedback during interactions

### 🎨 Visual Design

-   Clean, minimalist interface
-   Consistent iconography
-   High contrast for better accessibility
-   Responsive design principles

## 🛠 Technical Implementation

### Prerequisites

-   Node.js (recommended version: 16.x)
-   npm or pnpm package manager

### Installation

```bash
git clone [REPOSITORY_URL]
npm install
# or
pnpm install
```

### Available Scripts

```bash
# Development mode
npm start

# Production build
npm run build

# Run tests
npm test
```

### Technologies Used

-   React 16.12.0
-   MobX State Tree (MST)
-   Interact.js
-   Node.js

### 🎮 Mouse Controls

-   Double-click to select
-   Drag to move boxes
