# Vite React App with TypeScript and Material UI

### This project is built using Vite, ReactJS, TypeScript, and Material UI. The app features a chatbox that interacts with OpenAlex and OpenAI.

## Features

- **State Management**: Zustand was used to manage the state, which was minimal enough not to require Redux or more
  complex solutions. useContext could have been sufficient but Zustand provided more flexibility and simplicity.
- **API Communication**: Axios is used to make requests to OpenAlex.
- **Validation**: Zod was utilized to validate the responses from OpenAI.
- **Results Handling**: The chatbox renders only the first 5 search results, with a button to load the full object in
  the results panel.

## Mock UI

A mock-up of the real web application was created in order to envision an interface that could be adapted in the
existing application. This mock helped shape
the design the chatbox for a more user-friendly experience.

## Notes

I have not utilized AI-generated code in this project, except for the TypeScript interface for the OpenAlex API, which I
used to save time in manually defining each property. While I understand that AI-generated code might not always be
entirely accurate, based on my testing so far, I have not encountered any inconsistencies. All other code has been
written entirely by me, without any assistance beyond consulting the official documentation for the various
technologies.

## Prerequisites

Before running the app, ensure you have Docker installed and running on your machine.

## Setup

1. **Environment Variables**:  
   Create a `.env` file in the root directory by copying the provided `.env.example` file:

    ```bash
    cp .env.example .env
    ```

   Then, fill in the required `VITE_OPENAI_KEY` environment variable.

2. Run the Application: To build and run the app, use Docker Compose:
    ```bash
      docker compose up --build
    ```
   This will start the app, which should be accessible at http://localhost:3000.
