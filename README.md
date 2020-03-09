# express-app
Node JS Apps Using Express

Installation and Hosting Instruction

1. Clone this repo

2. Create new Database in your local MySQL Database

3. Import the file ``` express-app.sql ``` into your database

4. Configure Database Connection for the application in ``` ./config/database.js ```
    ```
    host: "localhost",
    user: "root",
    password: "",
    database: "express-app"
    
    ```
5. Open CMD and run command ``` node server.js ```

6. Now you can access the web service in port 3000 ``` http://localhost:3000/ ```