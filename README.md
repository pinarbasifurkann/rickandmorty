# How To Run

In the project directory, you can run:

`yarn install` to install necessary packages

`yarn start` to run project

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

or

You can view project on deployed version

https://rickandmorty-kappa-teal.vercel.app

# Tech Stacks

ReactJS

TypeScript

Mobx (State Management)

Vercel (Deployment)

# Folder Structure

    │
    │
    ├── assets
    │
    ├── components
    │      ├── Dropdown
    │            ├── index.tsx            # Parent component of dropdown,
    │            ├── header.tsx           # Header part of dropdown,
    │            ├── menu.tsx             # Menu part of dropdown,
    │
    │      ├── Text
    │            ├── BoldedText.tsx       # Bolded text component,
    │
    │      ├── Loader
    │            ├── index.tsx            # Loading spinner component,
    │
    │      ├── Divider
    │            ├── index.tsx            # Divider component,
    │
    │      ├── Main
    │            ├── Layout.tsx           # Main Layout component,
    │
    │      ├── Parts
    │            ├── InformationPart.tsx  # Component information part,
    │
    │      ├── Box
    │            ├── MessageBox.tsx       # Message box component to show errors,
    │
    ├── helpers
    │      ├── keyboardListener.ts        # Keyboard listeners for keyboard navigation,
    │
    ├── stores
    │      ├── allStores.ts               # Stores file which combine all stores
    │      ├── apiStore.ts                # Api store which I create api instance for all api uses
    │      ├── characterStore.ts          # Character store which has most of the services and states for characters
    │
    ├── styles
    │      ├── Dropdown.css               # Styling file for dropdown
    │      ├── Loader.css                 # Styling file for loader
    │      ├── MessageBox.css             # Styling file for message box
    │      ├── Divider.css                # Styling file for divider
    │      ├── InformationPart.css        # Styling file for information part
    │      ├── Layout.css                 # Styling file for main layout component
