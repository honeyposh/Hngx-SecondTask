# API DOCUMENTATION
This API is capable of CRUD opertaion on a person resources

### Prerequisites

- firstly you have to install Node.js
- You can install mongodb locally or use mongo Atlas

### Installation
1.Clone the repository

```
git clone https://github.com/honeyposh/Hngx-SecondTask.git

```

2.Navigate to the project directory

3.Install the dependecies

```
npm install
```

4.Configure environment variable by creating .env file in your root directory
db_user="yourusername"
db_password="yourpassword"

5.Start the server

```
npm start
```

### Usage
There are four different endpoint
#### router.post("/api")

- To create a person resources

#### router.get("/api/:user_id")

- To get details of a person by using the parameter

#### router.patch("/api/:user_id)

- To update details of an existing person

#### router.delete("/api/:user_id")

- To remove a person
