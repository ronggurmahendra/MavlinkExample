/*************
Initialization
**************/

//Requiring module
var mavlinkv1module = require('mavlink');

//MAVLink object
var mavLinkv1receive = new mavlinkv1module(0,0,"v1.0",["common"]);
var mavLinkv1send = new mavlinkv1module(1,255,"v1.0",["common"]);
exports.mavLinkv1receive = mavLinkv1receive;
exports.mavLinkv1send = mavLinkv1send;

//Nunggu sampe module mavlink ready
mavLinkv1receive.on('ready', function (){
    mavLinkv1send.on('ready', function(){
        var mavLinkv1ready = true;
        exports.mavLinkv1ready = mavLinkv1ready;
        
        /********
        Receiving
        *********/

        mavLinkv1receive.on('PARAM_VALUE',function(message,fields){
            console.log(fields);
        });

        mavLinkv1receive.on('HEARTBEAT', function(message,fields){
            console.log('v1 dapet heartbeat...')
        });

    });
});

//Fungsi parser v1
function v1parse(data) {
    mavLinkv1receive.parse(data);
};
exports.v1parse = v1parse;