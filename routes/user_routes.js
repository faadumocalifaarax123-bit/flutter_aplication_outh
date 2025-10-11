import exparess from 'express'

import { createNewUser, deleteUser, login, updateUser } from '../controller/controller.js';
import { admin, protect } from '../middleware/authmiddleware.js';


const uesrRouters = exparess.Router()


uesrRouters.post('/login', login )
uesrRouters.post('/create_user', createNewUser)
uesrRouters.post('/update-User/:id',protect,updateUser)
uesrRouters.post('/delete-User/:id',protect,admin,deleteUser)



  export default uesrRouters
