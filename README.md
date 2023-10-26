# TAG Frontend

Powered by [Nuxt 3](https://nuxt.com/)

# Setup
## Requirements
* [NodeJS](https://nodejs.org/)
* [pnpm](https://pnpm.io/)
* Visual Studio Code extensions
    * Vue Language Features (Volar)
    * TypeScript Vue Plugin (Volar)
    * Icons
    * ESLint
    * Prettier ESLint
    * Nuxtr
    * Prettier - Code formatter
    * EditorConfig for VS Code
    * Tailwind CSS IntelliSense

Visual Studio Code should automatically ask you to install these extensions

## Install project dependencies
Run
```
pnpm install
```
and
```
pnpm prepare
```

## Setup .env file
* Copy `.env.example` and rename it to `.env`
* Fill values


## Run server
### Development
Starts with debug features on `http://localhost:3000`
```bash
pnpm run dev
```

### Production
Build app for production:
```
pnpm run build
```

Locally preview production build:
```
pnpm run preview
```
