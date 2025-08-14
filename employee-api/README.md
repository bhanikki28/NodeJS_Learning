### BootStrap

To bootstrap the project ,run command npm init -y

### Modules to be installed

    -   express
    -   dotenv
    -   pg
    -   cors
    -   joi 

    npm i --save-dev nodemon


### Bringing up the docker env

    - Install the Docker Desktop
    - https://docs.docker.com/desktop/setup/install/mac-install/
    - Enable the Terminal
    - docker pull postgres
    - docker run --name employee-db -e POSTGRES_PASSWORD=welcome -p 5432:5432 -d postgres


### Setting Up DB Client (DBeaver)

    Fill in the host name as localhost, port as 5432, key in username as postgres and the 
    configured password

    Test Connection

    Create New Database


### Checking the connection

    app.get("/", async (req,res)=> {
        result = await pool.query("SELECT current_database()")
        res.send(` The database name is :${result.rows[0].current_database}`)
        console.log()
    })