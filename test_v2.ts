//MAVLink v2
/*************
Initialization
**************/
//TypeScript

import {MAVLinkModule, MAVLinkMessage} from '@ifrunistuttgart/node-mavlink';
import {messageRegistry} from './assets/message-registry';
import Serialport from 'serialport';
import mavlink from 'mavlink';
import { Heartbeat } from './assets/messages/heartbeat';

const mavLink = new MAVLinkModule(messageRegistry,255,true);
const serialport = new Serialport('COM7',{
    baudRate : 115200
});

/********
Receiving
*********/
//1. Parse data dari serialport
//Bakalan dihasilin 3 jenis event :
// 1. 'message'
// 2. 'error'
// 3. spesifik message (attitude, gps, dsb)

serialport.on('data', function(data : Buffer) {
    mavLink.parse(data);
});

mavLink.on('message', function(message : MAVLinkMessage) {
    //handle setiap message
});

mavLink.on('error', function(e : Error) {
    //handle setiap error
});

mavLink.on('HEARTBEAT', function(message : MAVLinkMessage) {
    //console.log(message);
});

mavLink.on('ATTITUDE', function(message : MAVLinkMessage){
    //console.log('ini roll:');
    //console.log(message.roll);
});

/********
 Sending 
*********/



//buat messagenya scr manual
//pack menjadi buffer
//kirim serialport

let myHeartbeat : MAVLinkMessage = new Heartbeat(1,255);
myHeartbeat.type = 1;
myHeartbeat.autopilot = 1;
myHeartbeat.base_mode = 1;
// dan sebagainya...

//Buat buffernya
let heartbeatBuffer : Buffer = mavLink.pack([myHeartbeat]);

serialport.write(heartbeatBuffer);

console.log('heartbeatnya:');
console.log(myHeartbeat);

console.log('buffernya:');
console.log(heartbeatBuffer);

//https://github.com/ifrunistuttgart/node-mavlink
//dokumentasi librarynya sebenernya ini^
//cuman ada beberapa yg ga lengkap, sisanya gw coba2
//sbnrnya guide untuk sending n receiving mavlink
//udah gw tulis di google drive, folder telemetri
//tapi untuk yg mavlink v1 belum, yg v2 udah