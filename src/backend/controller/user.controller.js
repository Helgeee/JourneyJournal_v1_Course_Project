const db = require('../db')

class UserController {
    async createUser(req ,res){ //Создание User
        const { login , email , password , type_account } = req.body
        const newUsers = await db.query('INSERT INTO users(  login , email , password ) value ($1 ,$2 ,$3) RETURNING * ', [  login , email , password , type_account ])
        res.json(newUsers)
    }   
    async getUsers(req ,res){ // Все User 
        const users = await db.query('SELECT * FROM users')
        res.json(users.rows)
    }
    async getOneUser(req ,res){ //поиск уникального  User
        const id = req.params.user_id 
        const users = await db.query('SELECT * FROM users where user_id = $1 ', [id])
        res.json(users.rows[0])
    }
    async updatedUser(req ,res){ //Обновление User
        const { user_id , name , surname} = req.body
        const users = await db.query('UPDATE users set  , login = $1 , email = $2 , password = $3 ,  type_account= $4 where user_id = $5 RETURNING *' , [ login , email , password , type_account , user_id])
        
        res.json(users.rows[0])
    }
    async deleteUser(req ,res){ //Удаление User
        const id = req.params.user_id 
        const users = await db.query('DELETE FROM users where user_id = $1 ', [user_id])
        res.json(users.rows[0])
    }
}

module.exports = new UserController()