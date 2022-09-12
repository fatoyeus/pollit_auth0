let   express		=		require('express'),
	   router		=		express.Router(),
      Candidate   =     require('../models/candidate'),
	   User			= 		require('../models/user'),
      Poll        =     require('../models/poll'),
      Staterep    =     require('../models/staterep')
	const{create}	=		require('xmlbuilder2');
	



//poll routes 


router.get('/polls', (req, res)=>{
		res.set({
					'Cache-Control'		:	'no-cache'
				});	
      if(req.query.path){
            User.findOne({uid: req.query.path}, 'constituentId').then((user)=>{
               if(user.constituentId){
                  Staterep.findById(user.constituentId, '-name',(fsrerr, fsr)=>{
                     if(fsrerr){
                           res.send(fsrerr)
                     }else{
                           Poll.aggregate([{
                                           $match:     
                                                      {
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
                     }
                  })}else{
                     Poll.find({officeScopeId:'x06PR0112plx06PR0112pl'}, (pollerr, poll)=>{
                        if(poll){
                           res.send(poll.candidates)
                        }
                      })
               }
            })
      }else{
             Poll.findOne({officeScopeId:'x06PR0112plx06PR0112pl'}, (pollerr, poll)=>{
               if(poll){
                  res.send(poll.candidates)
               }               
             })
      } 
      
	}) 
//get candidates poll
router.get('/polls/mypoll/:pollid', (req, res)=>{
   res.set({
      'Cache-Control'		:	'no-cache'
   });
   Candidate.findOne({uid:req.params.pollid}, 'pollId', (pcanderr, pcand)=>{
      if(pcand){
         Poll.findById(pcand.pollId, 'candidates office officeScope', (mypollerr, mypoll)=>{
            if(mypollerr){
               res.send({})
            }else if(mypoll){
               res.send(mypoll)
            }
         })
      }else{
         res.sendStatus(404)
      }     
   })
})
router.post('/polls/vote', (req, res)=>{
   Candidate.findById(req.body.candidateId, 'pollId office').then((cand) => {
      Poll.findById(cand.pollId, 'candidates').then(async (poll) => {
         let flag = poll.candidates.findIndex((candidate) => candidate._id.toString() === req.body.candidateId.toString())
         poll.candidates[flag].poll+=1
         poll.candidates[flag].votes.push(req.body.userId)
         poll.markModified('candidates')
         let checkSave_1 = await poll.save();
         if(checkSave_1){
            User.findOne({uid:req.body.userId}, 'votedOffices').then(async (upduser) => {
                upduser.votedOffices[cand.office] = req.body.candidateId
                upduser.markModified('votedOffices')
                let checkSave_2 = await upduser.save()
                upduser.unmarkModified('votedOffices')
                if(checkSave_2){
                  res.status(200).send({ status: 'OK'})
                }
            })
         }
      })
   })
})
router.post('/polls/withdrawvote', (req, res)=>{
   Candidate.findById(req.body.candidateId, 'pollId').then((cand) => {
      Poll.findById(cand.pollId, 'candidates').then(async (poll) => {
         let flag = poll.candidates.findIndex((candidate) => candidate._id.toString() === req.body.candidateId.toString())
         poll.candidates[flag].poll-=1
         poll.candidates[flag].votes.splice(poll.candidates[flag].votes.indexOf(req.body.userId), 1)
         poll.markModified('candidates')
        let checkSave_3 = await poll.save();
         if(checkSave_3){
            User.findOneAndUpdate({uid:req.body.userId},  {votedOffices: {
                                                                              presidential: null,
                                                                              senate: null,
                                                                              houseOfRep: null,
                                                                              governorship: null,
                                                                              stateRep: null,
                                                                              localGovt: null
                                                                           }})
                  .then((rmuser) => {
                                       res.status(200).send({ status: 'OK'});
                                    }
            )
         }
      })
   })
})
module.exports = router;

