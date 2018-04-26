var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){
	if(req.url === '/hello'){
		fs.readFile('index.html', function (err, data){
			res.write(data);
			res.end();
		});
	}
}).listen(3000, function(){
	console.log('Sever on localhost:3000');
});
