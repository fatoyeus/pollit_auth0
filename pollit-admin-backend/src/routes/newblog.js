let express			 			=		require('express'),
	router			 			=		express.Router();
	const connect				=		require('../lib/connect');
	const  blogs_micros 		= 		process.env.BLOGS_MICROS 

router.get('/blog/view/:blogid', (req, res)=>{
	connect(req._parsedUrl.pathname, res, blogs_micros)
	})
router.post('/blogs/approve', (req, res)=>{
	connect(req._parsedUrl.pathname, res, blogs_micros, req.body)
})
router.get('/blogs/blogscount', (req, res)=>{
	connect(req._parsedUrl.pathname, res, blogs_micros)
})
router.get('/blogs/list', (req, res)=>{
	connect(req._parsedUrl.pathname, res, blogs_micros)
})
router.post('/blogs/suspend', (req, res)=>{
	connect(req._parsedUrl.pathname, res, blogs_micros, req.body)
})


module.exports		=		router;