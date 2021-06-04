"use strict";
//MAVLink v2
/*************
Initialization
**************/
//TypeScript
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var node_mavlink_1 = require("@ifrunistuttgart/node-mavlink");
var message_registry_1 = require("./assets/message-registry");
var serialport_1 = __importDefault(require("serialport"));
var heartbeat_1 = require("./assets/messages/heartbeat");
var mavLink = new node_mavlink_1.MAVLinkModule(message_registry_1.messageRegistry, 255, true);
var serialport = new serialport_1["default"]('COM7', {
    baudRate: 115200
});
/********
Receiving
*********/
//1. Parse data dari serialport
//Bakalan dihasilin 3 jenis event :
// 1. 'message'
// 2. 'error'
// 3. spesifik message (attitude, gps, dsb)
serialport.on('data', function (data) {
    mavLink.parse(data);
});
mavLink.on('message', function (message) {
    //handle setiap message
});
mavLink.on('error', function (e) {
    //handle setiap error
});
mavLink.on('HEARTBEAT', function (message) {
    //console.log(message);
});
mavLink.on('ATTITUDE', function (message) {
    //console.log('ini roll:');
    //console.log(message.roll);
});
/********
 Sending
*********/
var myHeartbeat = new heartbeat_1.Heartbeat(1, 255);
myHeartbeat.type = 1;
myHeartbeat.autopilot = 1;
myHeartbeat.base_mode = 1;
// dan sebagainya...
//Buat buffernya
var heartbeatBuffer = mavLink.pack([myHeartbeat]);
serialport.write(heartbeatBuffer);
console.log('heartbeatnya:');
console.log(myHeartbeat);
console.log('buffernya:');
console.log(heartbeatBuffer);
