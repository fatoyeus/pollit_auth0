let   express			=		require('express'),
	   router			=		express.Router(),
	   User			   = 		require('../models/user');
	   const{create}	=		require('xmlbuilder2');
	


const poll =
	   [
  { id: '1', party: 'YDP', firstName:'John', lastName:'Doe', verified: true, poll: 18978, inRace: true, office:'presidential', officeId: 'x06PR0112pl', localGovtId:'somolu', votes:[], picture: null, userId:'2bjfj99bbb'},
  { id: '2', party: 'SDP', firstName:'Femi', lastName:'John', verified: true, poll: 998978, inRace: true, office:'presidential', officeId: 'x06PR0112pl', localGovtId:'surulere', votes:[], picture: null, userId:'8brbeubeu'},
  { id: '3', party: 'NYP', firstName:'Lanre', lastName:'Adelu', verified: true, poll: 9988, inRace: true, office:'presidential', officeId: 'x06PR0112pl', localGovtId:'yaba', votes:[], picture: null, userId:'7UHnnubeu'},
  { id: '4', party: 'SDP', firstName:'Wilson', lastName:'Ateda', verified: true, poll: 99098, inRace: true, office:'senate', officeId: 'x05SE0306se', localGovtId:'ikeja', votes:[], picture: null, userId:'89Hjdiber'},
  { id: '5', party: 'ANPP', firstName:'Ore', lastName:'Briggs', verified: true, poll: 2903, inRace: true, office:'senate', officeId: 'x05SE0306se', localGovtId:'apapa', votes:[], picture: null, user:'4hgjuf0j9r'},
  { id: '6', party: 'NYP', firstName:'Esther', lastName:'Rose', verified: true, poll: 10708, inRace: true, office:'senate', officeId: 'x05SE0306se', localGovtId:'somolu', votes:[], picture: null, user:'9bhdei93nd'},
  { id: '7', party: 'ONDP', firstName:'Yemi', lastName:'Banjo', verified: true, poll: 1129, inRace: true, office:'houseOfRep', officeId: 'x04HRxx10hp', localGovtId:'alimosho', votes:[], picture: null, user:'7ydfivi89n'},
  { id: '8', party: 'NIIP', firstName:'Lati', lastName:'Bello', verified: true, poll: 8042, inRace: true, office:'houseOfRep', officeId: 'x04HRxx10hp', localGovtId:'somolu', votes:[], picture: null, user:'9bhdei93nd'},
  { id: '9', party: 'NDOP', firstName:'Emeka', lastName:'John', verified: true, poll: 10799, inRace: true, office:'houseOfRep', officeId: 'x04HRxx10hp', localGovtId:'surulere', votes:[], picture: null, user:'6u9Ubvjnvo'},
  { id: '10', party: 'NPP', firstName:'Adamu', lastName:'Idris', verified: true, poll: 799, inRace: true, office:'houseOfRep', officeId: 'x04HRxx10hp', localGovtId:'eti-osa', votes:[], picture: null, user:'6niHoYYOi9o'},
  { id: '11', party: 'OPP', firstName:'Oga', lastName:'Ade', verified: true, poll: 19008, inRace: true, office:'governorship', officeId: 'x03GO0112gp', localGovtId:'epe', votes:[], picture: null, user:'4ubffYnYYo'},
  { id: '12', party: 'YPP', firstName:'Sanya', lastName:'Olu', verified: true, poll: 12908, inRace: true, office:'governorship', officeId: 'x03GO0112gp', localGovtId:'somolu', votes:[], picture: null, user:'2YhdbbfUU9'},
  { id: '13', party: 'YOP', firstName:'Bola', lastName:'Tolu', verified: true, poll: 19108, inRace: true, office:'stateRep', officeId: 'x02SRxx08sp', localGovtId:'kosofe', votes:[], picture: null, user:'9ybddU7u0o'},
  { id: '14', party: 'PPP', firstName:'Segun', lastName:'Aje', verified: true, poll: 7108, inRace: true, office:'stateRep', officeId: 'x02SRxx08sp', localGovtId:'ikeja', votes:[], picture: null, user:'8ybbeoGHHH'},
  { id: '15', party: 'UNP', firstName:'Tunji', lastName:'Oba', verified: true, poll: 2098, inRace: true, office:'localGovt', officeId: 'x01LGxx09lt', localGovtId:'somolu', votes:[], picture: null, user:'7uuub832HH'},
  { id: '16', party: 'PAP', firstName:'Salle', lastName:'Olu', verified: true, poll: 9998, inRace: true, office:'localGovt', officeId: 'x01LGxx09lt', localGovtId:'ikeja', votes:[], picture: null, user:'5rxy87gvH'},
]

//user routes
//create user
router.get('/polls', (req, res)=>{
		res.set({
					'Cache-Control'		:	'no-cache'
				});	
		console.log('request received');
	   res.send(poll)
	})

module.exports = router;