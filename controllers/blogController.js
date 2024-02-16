const blogModel = require('../model/blogModel')
const blogIns = new blogModel.Blogs()


exports.getBlogs = async (req,res)=>{
   blogIns.getBlogs().then((data)=>{
   res.json(data)

   })
}

exports.postBlogs = async(req,res)=>{
   blogIns.postBlogs(req.body).then((data)=>{
      res.send('success')
   })
}