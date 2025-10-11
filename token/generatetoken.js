import jwt from 'jsonwebtoken'
const generateToke = (id) =>{
    return jwt.sign({id},"usermg123456", {})
}

export default generateToke