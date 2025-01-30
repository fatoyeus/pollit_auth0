let   express		      =		require('express'),
	   router		      =		express.Router(),
      Poll              =     require('../models/poll');
const connectms	      =		require('../lib/connectms');
const accounts_micros   =		process.env.ACCOUNTS_MICROS  
const demography_micros =		process.env.DEMOGRAPHY_MICROS
	



//poll routes 
router.get('/polls', async(req, res)=>{
		res.set({
					'Cache-Control'	:	'no-cache'
				   });	
      if(req.query.path){           
                  connectms(`/staterep/constituent/${req.query.path}`, demography_micros, null, function(data){
                  var fsr = data
                  if(fsr){
                           Poll.aggregate([{
                                           $match:    {
                                                         officeScopeId: {
                                                                           $in: [fsr._id.toString(), fsr.localGovtId.toString(), fsr.stateId.toString(), fsr.houseOfRepId.toString(), fsr.senate.toString(), 'x06PR0112plx06PR0112pl']
                                                                        }
                                                      }
                                        },
                                        {  
                                          $project:   { 
                                                         candidates: 1
                                                      }
                                        },
                                        {
                                          $group:     {
                                                         _id: null,
                                                         poll: {
                                                                        $accumulator: {
                                                                           init: function(){
                                                                              return { polls: []}
                                                                           },
                                                                           accumulate: function(state, newCandidates){
                                                                              return {polls: state.polls.concat(newCandidates)}
                                                                           },
                                                                           accumulateArgs: ['$candidates'],
                                                                           merge: function(state1, state2){
                                                                              return state1.polls.concat(state2.poll)   
                                                                           },
                                                                           finalize: function(state){
                                                                              return state.polls
                                                                           },
                                                                           lang: "js"
                                                                        }
                                                                     }
                                                      }
                                        }                                                    
                                       ], (err, data)=>{
                                          if(data.length>0){
                                              res.send(data[0].poll) 
                                          } 
                                       })
                     
                     }else{
                           Poll.find({officeScopeId:'x06PR0112plx06PR0112pl'}, (pollerr, poll)=>{
                                    if(poll){
                                                res.send(poll.candidates)
                                             }
                           })
                      }
                })
            }
}) 
router.post('/polls/addcandidate', (req, res)=>{
	Poll.findById(req.body.pollId, (fpollerr, fpoll)=>{
      if(fpoll){
         let newCandidate                 = req.body
             newCandidate.officeId        = fpoll.officeId
             newCandidate.office          = fpoll.office
             newCandidate.officeScopeId   = fpoll.officeScopeId
             newCandidate.officeScope     = fpoll.officeScope
             fpoll.candidates.push(newCandidate)
             fpoll.save()
             res.send({status: true})
      }
      if(fpollerr){
         res.sendStatus(404)
      }
   })
})
router.post('/polls/create', (req, res)=>{
   Poll.findOne({officeScopeId: req.body.officeScopeId}, (err, fpoll)=>{
      if(!fpoll){
         let   newPoll                 =  new Object()
               newPoll.officeId		   =  req.body.officeId
               newPoll.office			   =  req.body.office
               newPoll.officeScopeId	=  req.body.officeScopeId
               newPoll.officeScope 	   =  req.body.officeScope	 
               Poll.create(newPoll).then((createdPoll)=>{
                  req.body.pollId = createdPoll._id
                  req.body.votes = new Array()
                  req.body.poll = 0
                  createdPoll.candidates.push(req.body) 
                  createdPoll.save()
                  res.send(createdPoll._id)
            
            })
      }else{
         let candidate = fpoll.candidates.filter(({partyAbbv})=> partyAbbv.match(req.body.partyAbbv))
         if(!candidate.length > 0){
         req.body.pollId = fpoll._id
         req.body.votes = new Array()
         req.body.poll = 0
         fpoll.candidates.push(req.body)
         fpoll.save()
         res.send(fpoll._id)
         }else{
         res.send(fpoll._id)
      }
   }
   })
})
router.post('/polls/create/wocand', (req, res)=>{
   Poll.findOne({officeScopeId: req.body.officeScopeId}, (err, fpoll)=>{
      if(!fpoll){
         let   newPoll                 =  new Object()
               newPoll.officeId		   =  req.body.officeId
               newPoll.office			   =  req.body.office
               newPoll.officeScopeId	=  req.body.officeScopeId
               newPoll.officeScope 	   =  req.body.officeScope	 
               Poll.create(newPoll).then((createdPoll)=>{
                  res.send({id:createdPoll._id, officeScope:createdPoll.officeScope}) 
            })
      }else{
         res.send({id:fpoll._id, officeScope: fpoll.officeScope})
      }
   })	
})
router.get('/polls/list', (req, res)=>{
	Poll.find({Active:false}, '-candidates -__v -officeScopeId', (fpollerr, fpoll)=>{
      if(fpollerr){
         res.sendStatus(404)
      }
      if(fpoll){
		   res.send(npoll)
      }
	})
})
router.get('/polls/mypoll/:uid', (req, res)=>{
   res.set({
      'Cache-Control'		:	'no-cache'
   });
   //get candidate details from, accounts microservice and execute poll request
   connectms(`/candidate/${req.params.uid}`, accounts_micros, null, function(data){
   var pcand = data
   if(pcand){
            Poll.findById(pcand.pollId, 'candidates office officeScope', (mypollerr, mypoll)=>{
                     if(mypollerr){
                                    res.sendStatus(404)
                     }else if(mypoll){
                                    res.send(mypoll)
                     }
                  })
            }else{
                  res.sendStatus(404)
                  } 
});
                        
    
})
router.get('/polls/pollcount', (req, res)=>{
	Poll.find().estimatedDocumentCount((err, count)=>{
		res.send({pollcount: count})
	})
})
router.get('/polls/view/:pollId', (req, res)=>{
   Poll.findById(req.params.pollId, '_id candidates office officeScope', (pollviewerr, pollview)=>{
      if(pollviewerr){
         res.sendStatus(404)
      }else if(pollview){
         res.send(pollview)
      }
   })
})
router.post('/polls/vote', (req, res)=>{
   Poll.findById(req.body.pollId, 'candidates').then(async (poll) => {
         let flag = poll.candidates.findIndex((candidate) => candidate._id.toString() === req.body.candidateId.toString())
         poll.candidates[flag].poll+=1
         poll.candidates[flag].votes.push(req.body.userId)
         poll.markModified('candidates')
         let checkSave_1 = await poll.save();
         if(checkSave_1){
            connectms('/user/vote', accounts_micros, req.body, function(data){
               if(data.status === 'OK'){
                  res.status(200).send(data)
               }else{
                  res.status(404)
               }
            })
         }
      })
   
})
router.post('/polls/withdrawvote', (req, res)=>{
         Poll.findById(req.body.pollId, 'candidates').then(async (poll) => {
         let flag = poll.candidates.findIndex((candidate) => candidate._id.toString() === req.body.candidateId.toString())
         poll.candidates[flag].poll-=1
         poll.candidates[flag].votes.splice(poll.candidates[flag].votes.indexOf(req.body.userId), 1)
         poll.markModified('candidates')
         let checkSave_3 = await poll.save();
         if(checkSave_3){
            connectms('/user/withdrawvote', accounts_micros, req.body, function(data){
               if(data.status === 'OK'){
                  res.status(200).send(data)
               }else{
                  res.status(404)
               }
            })
         }
      })
})
module.exports = router;

