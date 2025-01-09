# Finance Management Tracking System

A Finance Management Tracking System to help users manage their income and track their expenses effectively. Whether you're tracking your monthly budget to monitor your financial health, analyzing spending habits, or planning for future savings. The app provides an intuitive interface for categorizing transactions, setting spending limits, and gaining insights through visual analytics.



## **Features**

### **User Authentication**
- **Register**: Create a new account with a unique email and password.
- **Login**: Securely log in to your account.
- **Logout**: Log out of your account and clear session data.

### **Income Management**
- **Add Income**: Record your income with details like title, amount, category, description, and date.
- **View Income**: See a list of all your income transactions.
- **Delete Income**: Remove unwanted or incorrect income entries.

### **Expense Management**
- **Add Expense**: Record your expenses with details like title, amount, category, description, and date.
- **View Expenses**: See a list of all your expense transactions.
- **Delete Expense**: Remove unwanted or incorrect expense entries.

### **Dashboard**
- **Total Income**: View the total amount of income recorded.
- **Total Expenses**: View the total amount of expenses recorded.
- **Balance**: See your current balance (Total Income - Total Expenses).
- **Transaction History**: View a summary of recent transactions.

### **User-Specific Data**
- Each user has their own dashboard with personalized data.
- Data is securely stored and accessible only to the logged-in user.

---

## **Project Contents**

### **Backend**
- **Database Connection**: Handles the connection to MongoDB.
- **Models**: Define the structure of the data (User, Income, Expense).
- **Controllers**: Handle the logic for user authentication and transaction management.
- **Routes**: Define the API endpoints for the application.
- **Middleware**: Includes authentication middleware and error handling.

## **Technologies Used**

### **Backend**
- **Node.js**: A JavaScript runtime for building the backend.
- **Express**: A web framework for Node.js.
- **MongoDB**: A NoSQL database for storing user and transaction data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB.
- **JWT (JSON Web Tokens)**: For user authentication and authorization.
- **CORS**: To handle cross-origin requests.
- **Cookie Parser**: To parse cookies for authentication.

### **Other Tools**
- **Postman**: For testing API endpoints.
- **Git**: For version control.

---

## **Installation**

### **Prerequisites**
- Node.js and npm installed on your machine.
- MongoDB installed and running.

### **Steps**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/shahdHesham13/personal-Finance-App.git
   cd personal-Finance-App
   ```

2. **Install Dependencies**
   - For the backend:
     ```bash
     cd backend
     npm install
     ```
     
3. **Set Up Environment Variables**
   - Create a `.env` file in the `backend` folder and add the following:
   
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     CLIENT_URL=http://localhost:3000
     PORT=5000
     ```

4. **Run the Backend**
   ```bash
   cd backend
   npm start
   ```
   
