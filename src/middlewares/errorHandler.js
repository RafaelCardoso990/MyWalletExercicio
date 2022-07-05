export function errorHandling(error, req, res, next){
    if(error.type === "input-not-found") return res.send(error.message).status(422)
    console.log(error)
    return res.sendStatus(500)
}
