/*************
Initialization
**************/

import {MAVLinkModule, MAVLinkMessage} from '@ifrunistuttgart/node-mavlink';
import {messageRegistry} from './assets/message-registry';

export const mavLinkv2 = new MAVLinkModule(messageRegistry,255,true);

/********
Receiving
*********/

mavLinkv2.on('message',function(message : MAVLinkMessage){
    //handle message
});

mavLinkv2.on('error', function (e: Error){
    //handle error
});

mavLinkv2.on('HEARTBEAT',function(message:MAVLinkMessage){
    //handle heartbeat
    console.log('v2 dapet heartbeat...');
});

//Fungsi v2parse
export function v2parse (data : Buffer) {
    mavLinkv2.parse(data);
};