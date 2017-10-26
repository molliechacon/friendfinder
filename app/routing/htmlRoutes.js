var path = require("path");

module.exports = function(app) {
    api.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    api.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};