"use strict";
/*************
Initialization
**************/
exports.__esModule = true;
exports.v2parse = exports.mavLinkv2 = void 0;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
var message_registry_1 = require("./assets/message-registry");
exports.mavLinkv2 = new node_mavlink_1.MAVLinkModule(message_registry_1.messageRegistry, 255, true);
/********
Receiving
*********/
exports.mavLinkv2.on('message', function (message) {
    //handle message
});
exports.mavLinkv2.on('error', function (e) {
    //handle error
});
exports.mavLinkv2.on('HEARTBEAT', function (message) {
    //handle heartbeat
    console.log('v2 dapet heartbeat...');
});
//PROTOCOL_VALUE
setTimeout(function () {
    exports.mavLinkv2.emit('PROTOCOL_VALUE');
}, 2500);
//Fungsi v2parse
function v2parse(data) {
    exports.mavLinkv2.parse(data);
}
exports.v2parse = v2parse;
;
