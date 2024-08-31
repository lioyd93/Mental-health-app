
Mental health support network web application that contains a supportive community and valuable resources 
# Mental Health App

## Project Overview

This project is a Mental Health App designed to help users track and manage their mental health. The application includes both a backend server built with Django and a frontend application built with React.

## Features

- User management
- Mental health records tracking
- RESTful API for interaction between frontend and backend

## Technologies Used

- Backend: Django, Django REST framework
- Frontend: React
- Database: Postgresql (for development)

## Getting Started

### Prerequisites

- Python 3.x
- Node.js and npm

### Backend Setup

1. Create a virtual environment and activate it:

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

2. Install the required packages:

    ```bash
    pip install -r requirements.txt
    ```

3. Apply the migrations:

    ```bash
    python manage.py migrate
    ```

4. Run the development server:

    ```bash
    python manage.py runserver
    ```

### Frontend Setup

1. Navigate to the `Frontend` directory:

    ```bash
    cd Frontend
    ```

2. Install the required packages:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm start
    ```

## API Endpoints

- `/api/users/` - List and create users
- `/api/mentalhealthrecords/` - List and create mental health records

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add some awesome feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a pull request

