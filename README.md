# User Directory

A small React + TypeScript mini project from my **react-ts-basics 30d** challenge.

This app is focused on practicing core React patterns with TypeScript: component composition, typed props, local state, derived data, controlled forms, and conditional rendering.

## Features

- Display a list of users
- Search users by name
- Filter users by role
- Switch between predefined views:
  - `all-users`
  - `admins`
  - `young`
- Select a user and open a details panel
- Add a new user through a form
- Delete users from the list
- Show simple form status feedback (`loading`, `success`, `error`)

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS

## What I Practiced

- `useState` for UI and form state
- Type-safe props and callbacks
- Union types and interfaces for user data
- Filtering and deriving UI state from source data
- Controlled form inputs
- Conditional rendering
- Splitting UI into reusable components

## Project Structure

```txt
src/
  components/
    AddUserForm.tsx
    SearchBar.tsx
    UserCard.tsx
    UserDetails.tsx
    UserList.tsx
  data/
    users.ts
  types/
    user.ts
  App.tsx
  main.tsx
  index.css
```
