# Sanchara - Waiting List

[![Deploy to GitHub Pages](https://github.com/shravan20/sanchara/actions/workflows/deploy.yml/badge.svg)](https://github.com/shravan20/sanchara/actions/workflows/deploy.yml)

A simple waiting list page for the upcoming Sanchara application. Users can join the waiting list as either users or contributors.

## 🚀 Live Demo

Visit the live application: [https://shravan20.github.io/sanchara/](https://shravan20.github.io/sanchara/)

## Features

- **Join Waiting List**: Users can sign up with their name and email
- **Role Selection**: Choose to join as a User, Contributor, or both
- **Admin Dashboard**: View waiting list entries and statistics
- **NocoDB Integration**: All data is stored in NocoDB database

## Quick Start

```sh
# Clone and install
git clone https://github.com/shravan20/sanchara.git
cd sanchara
bun install

# Start development server
bun run dev
```

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui components
- NocoDB for database
- GitHub Pages for deployment

## Deployment

The project automatically deploys to GitHub Pages when you push to the main branch. The application will be available at `https://shravan20.github.io/sanchara/`

## Environment Setup

Copy `.env.example` to `.env` and configure your NocoDB credentials:

```bash
VITE_NOCODB_BASE_URL=https://projectID.nocodb.com
VITE_NOCODB_API_TOKEN=your_token_here
VITE_NOCODB_PROJECT_ID=your_project_id
VITE_NOCODB_TABLE_ID=your_table_id
```
