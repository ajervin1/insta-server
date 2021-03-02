const express = require('express')
const instatouch = require('instatouch')
const app = express()
const cors = require('cors')
app.use(cors())
// Search
app.get('/search', async (req, res) => {
	
	// Get Query Params
	// Get Results Of Insta
	const results = await instatouch.user(req.query.username, {
		count: 6,
		mediaType: req.query.media_type,
		endCursor: req.query.end_cursor,
		session: 'sessionid=314672176%3ASi8kdUmRtoAyE4%3A17'
	})
	res.send(results)
})




// Start Server
app.listen(4000, () => {
	console.log('server started')
})
