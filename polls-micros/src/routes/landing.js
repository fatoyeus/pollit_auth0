let   express		=		require('express'),
	   router		=		express.Router(),
      Poll        =     require('../models/poll');
      

//poll routes 
router.get('/landingpolls', (req, res)=>{
   Poll.findOne({officeScopeId:'x06PR0112plx06PR0112pl'}, (pollerr, poll)=>{
            if(poll){
                        res.send(poll.candidates)
                     }
      }  
   )
})
router.get('/landingpolls/governorshipcount', (req, res)=>{
	Poll.countDocuments({officeId:"x03GO0112gp"}, (err, count)=>{
		res.send({pollcount:count})
	})
})
router.get('/landingpolls/houseofrepcount', (req, res)=>{
	Poll.countDocuments({officeId:"x04HRxx10hp"}, (err, count)=>{
		res.send({pollcount:count})
	})
})
router.get('/landingpolls/localgovtcount', (req, res)=>{
	Poll.countDocuments({officeId:"x01LGxx09lt"}, (err, count)=>{
		res.send({pollcount:count})
	})
})
router.get('/landingpolls/pollcount', (req, res)=>{
	Poll.find().estimatedDocumentCount((err, count)=>{
		res.send({pollcount:count})
	})
})
router.get('/landingpolls/senatecount', (req, res)=>{
	Poll.countDocuments({officeId:"x05SE0306se"}, (err, count)=>{
		res.send({pollcount:count})
	})
})
router.get('/landingpolls/staterepcount', (req, res)=>{
	Poll.countDocuments({officeId:"x02SRxx08sp"}, (err, count)=>{
		res.send({pollcount:count})
	})
})
router.get('/landingreports/polls/partydist', (req, res)=>{
   Poll.aggregate([
      {
         $project: {
            "candidates.partyAbbv":1
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
       },
       {
         $unwind: {
            path: "$poll"
         }
       },
       {
         $sortByCount: "$poll.partyAbbv"
       }
   ], (err, cands)=>{
      res.send(cands)
   })
})


module.exports = router;

