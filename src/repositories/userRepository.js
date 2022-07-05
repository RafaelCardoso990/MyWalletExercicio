import connection from "../database.js"

async function insertUser({name, email, password}){    
    
    return connection.query(`
        INSERT INTO users (name, email, password) VALUES ($1, $2, $3)
    `,
    [name, email, password])
}

export {insertUser};