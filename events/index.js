/*
var count = 0;

var print = function(){
	count++;
	console.log('Click - ', count);
};

//-------------------------------------
var Event = require('events');
var emt = new Event();



//emt.on('do', print);
//emt.addListener('do', print);
emt.once('do', print);

emt.emit('do');
emt.emit('do');
emt.emit('do');



//--------------------------------
var Event = require('events');

var emt = new Event();

emt.on('event', function(){
	console.log('Do 1');
})
emt.on('event', function(){
	console.log('Do 2');
})
emt.on('event', function(){
	console.log('Do 3');
})

emt.emit('event');


//------------------------------
var Event = require('events');

var emt = new Event();

emt.on('event', function(){
	setImmediate(function(){
		console.log('Do 1');
	});
})
emt.on('event', function(){
	console.log('Do 2');
})
emt.on('event', function(){
	console.log('Do 3');
})

emt.emit('event');


//--------------------------------------
var Event = require('events');
var emt = new Event();

emt.on('myEvent', test);
emt.emit('myEvent');

emt.removeListener('myEvent', test);
console.log('Listener  removed');

emt.emit('myEvent');
emt.emit('myEvent');
emt.emit('myEvent');
emt.emit('myEvent');
emt.emit('myEvent');

function test(){
	 console.log('Run test function, man');
}

//----------------------------------
var Event = require('events');
var emt = new Event();

emt.on('myEvent', function(a, b){
	//console.log(a, b);
	console.log(arguments);
	
});

emt.emit('myEvent', {id: 45, name: 'Adam'});

*/
var Event = require('events');
var emt = new Event();

emt.setMaxListeners(100);

emt.on('event', function(){
	console.log('Do 1');
});
emt.on('event', function(){
	console.log('Do 2');
});
emt.on('event', function(){
	console.log('Do 3');
});
emt.on('event', function(){
	console.log('Do 1');
});
emt.on('event', function(){
	console.log('Do 2');
});



emt.emit('event');






























