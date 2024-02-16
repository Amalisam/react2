const blogList = document.querySelector('.blogList')
const submitBtn =document.querySelector('.btn')
const form = document.querySelector('.form')

document.addEventListener("DOMContentLoaded", async(e)=>{
   const responceData = await fetch('http://localhost:5000/blogs/getblogs')
    .then(data=>data.json())
    .then(jdata=>jdata)
    .catch(err=>console.log(err))







    responceData.forEach((rd)=>{
      blogList.innerHTML += ` <div class="blogHead">
                                    <h1>${rd.blog_name}</h1>
                                </div>
                                <div class="blogBody">
                                    <p> ${rd.blog_content}</p>
                                </div>
                                <div class="blogAuthor">
                                    <h4>${rd.author}</h4>
                                </div>
                                `
    })
        
    });

submitBtn.addEventListener('click',(e)=>{
 e.preventDefault()

 const form1 = new FormData(form)
const respondLoad = JSON.stringify(Object.fromEntries(form1.entries()))

console.log(respondLoad)
 fetch('http://localhost:5000/blogs/postblogs',{
    method:"POST",
    headers:{
        "Content-Type":"Application/json",
        "Accept":"Application/json"
    },
    body:respondLoad
 }).then(()=>{
    form.reset()
 })

})
