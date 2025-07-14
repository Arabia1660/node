const http = require('http');

const server = http.createServer();
server.on ('connection', (socket) => {
    console.log('New connection...');
});
server.listen(3000);

console.log('listening on port 3000..');







// // const logger = require('./logger');

// // logger.log('massage')

// //for the pat setup 
// // const path = require('path');

// // var patObj = path.parse(__filename);

// // console.log(patObj);

// // for the os path 

// // const os = require('os');

// // var totalMemory = os.totalmem();
// // var freeMemory = os.totalmem();

// // console.log(totalMemory);
// // console.log(freeMemory);


// const Logger = require('./logger');
// const logger = new Logger();
// //const EventEmitter = require('events');
// //const emitter = new EventEmitter ();
// // //registure a listener 
// emitter.on('massahlog', (arg) =>{
//    console.log('Listener called',arg);

// });
// logger.log('message');

// //emitter.emit('massahlog',{id:1, url: 'http://'});
