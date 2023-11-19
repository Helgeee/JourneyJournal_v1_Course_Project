const express = require('express')
const userRouter = require('./routes/user.routes')
const postRouter = require('./routes/post.routes')

const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())

// app.get('/', (req , res) => {
//     res.send('hello')
// })

app.use('/api, userRouter')


app.listen(PORT , () => console.log ('server started on post ${PORT}') )