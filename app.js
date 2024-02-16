const express = require('express')

const app = express()
const blogRouter = require('./router/blogRoutes')


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))



app.get('/',(req,res)=>{
   res.sendFile('./views/index.html',{root:__dirname})
})

app.use('/blogs',blogRouter)






app.listen(5000,()=>{
    console.log('listen on port 5000')
})