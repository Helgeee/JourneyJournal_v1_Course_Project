class PostController {
    async createPost(req , res){
        const { user_id , img_note, note_title , coordinatex , note_text } = req.body
        const newNotes = await db.query('INSERT INTO notes(  user_id , img_note, note_title , coordinatex , note_text ) value ($1 ,$2 ,$3 , $4 , $5 ) RETURNING * ', [  user_id , img_note, note_title , coordinatex , note_text ])
        res.json(newNotes.rows[0])
    }
    async getPostsByUser(req , res){
        const user_id = req.query.user_id
        const notes = await db.query('select * from post where user_id = $1' , [user_id])
        res.json(notes.rows)
    }
}

module.exports = new PostController()