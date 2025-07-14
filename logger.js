const EventEmitter = require('events');
//const emitter = new EventEmitter ();
let url = 'http://mylogger.io/log';

class Logger extends EventEmitter  {
 log (message){
    console.log(message);

    this.emit('massahlog',{id:1, url: 'http://'});
}

}

//registure a listener 
// function log (message){
//     console.log(message);

//     emitter.emit('massahlog',{id:1, url: 'http://'});
// }
// module.exports.log = log;
//Module.exports.endPoint = url; 
module.exports = Logger ;

