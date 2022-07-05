import connection from "../database.js"

async function findUser(req,res,next){
  const email = req.body
  console.log(email)
    try {
        const existingUsers = await connection.query(
            `SELECT * FROM "users" WHERE "email"=$1`,
            [email]
          );
    
          if (existingUsers.rowCount > 0) {
            return res.sendStatus(409);
          }
          next();
    } catch (error) {
        res.sendStatus(500)
    }
}

export {findUser}