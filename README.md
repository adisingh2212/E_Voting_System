# 🗳️ E_Voting – Full Stack Electronic Voting Software  

**eVoting** is a complete **full-stack digital voting platform** built using **React.js**, **Node.js**, **Java**, and **MySQL**.  
It enables users to securely cast their votes online, view live results, and ensures transparency through real-time updates and a multi-layered architecture.  
The system integrates a modern frontend, robust backend, Java middleware for database operations, and a MySQL server for persistent storage.

### ⚙️ Technologies Used
- **Frontend:** React.js, Bootstrap, Tailwind CSS, Axios  
- **Backend:** Node.js, Express.js (REST API, Authentication)  
- **Middleware:** Java (DatabaseConfig, DatabaseManager, UserMiddleware)  
- **Database:** MySQL (JDBC Connection)  
- **Additional Tools:** JWT Authentication, Socket.IO for live results, Git & GitHub for version control  

### 🌟 Main Features
- 🔐 **Secure Login System** – Voter authentication using JWT  
- 📊 **Real-Time Results** – Live vote counting and progress visualization  
- 🧑‍💼 **Admin Dashboard** – Manage candidates, polls, and view statistics  
- 🧠 **Java Middleware Layer** – Handles database connectivity and business logic securely  
- 💬 **Responsive Frontend** – Interactive UI with React and Bootstrap  
- ⚡ **Scalable Architecture** – Easily extendable for future modules or cloud deployment  

### 🧩 System Architecture
- Frontend (React.js)
-     ↓
- Backend (Node.js + Express)
-     ↓
- Middleware (Java JDBC Layer)
-     ↓
- Database (MySQL)


### 🛠️ How to Run
1. **Clone the repository:**  
   `git clone https://github.com/yourusername/eVoting-Software.git`
2. **Setup database:** Create `evoting_db` in MySQL and configure credentials in `DatabaseConfig.java`.
3. **Run Java middleware:** Compile and run Java files (`DatabaseConfig`, `DatabaseManager`, `UserMiddleware`).
4. **Start backend server:**  
   Navigate to `/server` → run `npm install` → `npm start`.
5. **Start frontend:**  
   Navigate to `/client` → run `npm install` → `npm start`.
6. Access the app at `http://localhost:3000`.

### 🧾 Summary
This project represents a **secure, transparent, and scalable online voting solution** integrating **React**, **Node**, **Java**, and **MySQL** — demonstrating modern full-stack development, API handling, middleware integration, and real-time web systems.

> 🧑‍💻 Developed by **Aditya Singh** – A full-stack voting software ensuring security, scalability, and simplicity.
