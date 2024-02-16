const db = require('../config/db')

class Blogs{
    constructor(){

    }

    async getBlogs(){

   const resData = await db.execute('SELECT * FROM blogs').then((data)=>{
            return data[0]
        }).catch((err)=>{
            return err
        })
        return resData
    }
    async postBlogs(blogData){
        const query = `INSERT INTO blogs 
        (blog_name,blog_content,author) 
        VALUES 
        ("${blogData.blog_name}","${blogData.blog_content}","${blogData.author}")`

    const resData    = await db.execute(query).then((data)=>{
            return data
        }).catch((err)=>{
            return err
        })
    return resData
    }
}

module.exports ={Blogs}