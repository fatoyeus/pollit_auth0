let   express		            =		require('express'),
	   router		            =		express.Router();
const connect			         =		require('../lib/connect'),
      { PutObjectCommand }    =     require("@aws-sdk/client-s3"),
      { s3 }                  =     require("../lib/s3client"),
      blogs_micros 	         = 		process.env.BLOGS_MICROS,
      multer 		            = 		require('multer'),
	   storage		            =		multer.memoryStorage(),
	   upload 		            = 		multer({ storage: storage });




//blog routes 
router.get('/blog/view/:blogid', (req, res)=>{
   connect(req._parsedUrl.pathname, res, blogs_micros)
})
router.post('/blogs/create', upload.single('blogpic'), (req, res)=>{
   const newBody = req.body
   var ckey =`blogimages/${req.body.userid}/${req.file.originalname}`
   newBody.image = `https://pollitblog.s3.us-east-2.amazonaws.com/blogimages/${req.body.userid}/${req.file.originalname}`
   const params = {
                     Bucket: "pollitblog",
                     ACL: "public-read",
                     Key: ckey,
                     Body: req.file.buffer
                  }
   const run = async () => {
               try{
                     const filesave =  await s3.send(new PutObjectCommand(params))
                     if(filesave.ETag){
                        connect(req._parsedUrl.pathname, res, blogs_micros, newBody)
                     }
                  }catch (error) {
                     console.log(`error: ${error}`)
                  }
               }
   run()
})
router.get('/blogsall/', (req, res)=>{	
   connect(req._parsedUrl.pathname, res, blogs_micros)
}) 
module.exports = router;

