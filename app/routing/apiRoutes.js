// require in the friends data
var friendData = require("../data/friends");

// route for displaying all friends in JSON format
app.get("/api/friends", function(req, res) {
    res.json(friendData);
});

// route for posting new friends - CORRECT??
app.post("/api/friends", function(req, res) {
    friendData.push(req.body);
})

