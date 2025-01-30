let express			 			=		require('express'),
	router			 			=		express.Router(),
	Blog 			 			=		require('../models/blog');
	




//candidate routes
//create and update candidate profile

router.get('/blog/view/:blogid', (req, res)=>{
	Blog.findById(req.params.blogid, (blogErr, blog)=>{
		if(blog){
		blog.read+=1
		blog.save()
		res.send(blog)
		}else{
			res.sendStatus(404)
		}
	})
})
router.post('/blogs/approve', (req, res)=>{
	Blog.findByIdAndUpdate(req.body.blogid, {approved: true}, (blUpdErr, blUpd)=>{
		if(blUpdErr){
			res.sendStatus(404)
		}
		if(blUpd){
			res.sendStatus(200)
		}
	})
})
router.get('/blogs/blogscount', (req, res)=>{
	Blog.find().estimatedDocumentCount((err, count)=>{
		res.send({count})
	})
})
router.post('/blogs/create', (req, res)=>{
	const blog = new Object()
	blog.title = req.body.title
	blog.header = req.body.header
	blog.userId = req.body.userid
	blog.publisher = req.body.publisher
	blog.constituentid = req.body.constituentid
	blog.image = req.body.image
	blog.body = JSON.parse(req.body.body)
	Blog.create(blog)
	res.send({status: 200})
})
router.get('/blogs/demography/:id', (req, res)=>{
	Blog.find({constituentId: req.params.demography}, (blogerr, fblogs)=>{
		res.send(fblogs)
	})
})
router.get('/blogs/list', (req, res)=>{
	Blog.find({}, (fblogerr, fblog)=>{
      if(fblogerr){
         res.sendStatus(404)
      }
      if(fblog){
		res.send(fblog)
      } 
	})
})
router.post('/blogs/suspend', (req, res)=>{
	Blog.findByIdAndUpdate(req.body.blogid, {approved: false}, (blUpdErr, blUpd)=>{
		if(blUpdErr){
			res.sendStatus(404)
		}
		if(blUpd){
			res.sendStatus(200) 
		}
	})
})
router.get('/blogsall/:constid', (req, res)=>{
	console.log('blogsall was called')
	Blog.find({approved: true}, '_id title header image date publisher', (blogsAllErr, blogsAll) =>{
		res.send(blogsAll)
	})
})
module.exports		=		router;