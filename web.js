var express = require('express');

var app = express.createServer(express.logger());

var createURL = function(fileName) {
	return 'http://alltheragefaces.com/img/faces/png/' + fileName;
}

app.get('/', function(request, response) {
	response.redirect(createURL('neutral-feel-like-a-sir.png'));
});

app.get('/100', function(request, response) {
	response.redirect(createURL('neutral-feel-like-a-sir.png'));
});

app.get('/200', function(request, response) {
	response.redirect(createURL('happy-epic-win.png'));
});

app.get('/401', function(request, response) {
	response.redirect(createURL('fuck-yeah-gtfo.png'));
});

app.get('/403', function(request, response) {
	response.redirect(createURL('angry-no.png'));
});

app.get('/404', function(request, response) {
	response.redirect(createURL('fuck-that-bitch-scared-yao.png'));
});

app.get('/405', function(request, response) {
	response.redirect(createURL('misc-got-a-badass-over-here.png'));
});

app.get('/406', function(request, response) {
	response.redirect(createURL('cereal-guy-cereal-guy-spitting.png'));
});

app.get('/408', function(request, response) {
	response.redirect(createURL('worried-me-culpa.png'));
});

app.get('/409', function(request, response) {
	response.redirect(createURL('determined-serious-chiseled-not-okay.png'));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on " + port);
});
