const blog = require('../models/blog');

let express			 			=		require('express'),
	router			 			=		express.Router(),
	Blog 			 			=		require('../models/blog');

router.get('/landingblog/list/:uid', (req, res)=>{
    Blog.find({userId:req.params.uid, approved: true }, '_id title header image userId  approved date', (blogListErr, blogList) =>{
        if(blogList){
             res.send(blogList)
        }else if(blogListErr || !blogList[0]._id){
            res.sendStatus(404)
        }
    })
})


router.get('/landingblog/view/:blogid', (req, res)=>{
    Blog.findById(req.params.blogid, (blogErr, blog)=>{
        if(blog.approved){
                    blog.read+=1
                    blog.save()
                    res.send(blog)
        }else if(blogErr || !blog._id){
            res.sendStatus(404)
        }
        
    })
})
router.get('/landingblogs', (req, res)=>{
    Blog.find({approved: true}, '_id title header image date publisher read', (blogsAllErr, blogsAll) =>{
        res.send(blogsAll)
    })
})

module.exports		=		router;