//MAVLink v1
/*************
Initialization
**************/

var mavlinkmodule = require('mavlink');
var serialportmodule = require('serialport');

var mavLinkreceive = new mavlinkmodule(1,1,"v1.0",["common"]);
var mavlinksend = new mavlinkmodule(1,255,"")
var serialport = new serialportmodule('COM7',{
    baudRate : 115200
});

mavLink.on('ready', function(){
    /********
    Receiving
    *********/
    serialport.on('data', function(data){
        mavLink.parse(data);
    });

    mavLink.on('message',function(message){
        //mau diapain
        console.log('dapet message');
    });

    mavLink.on('ATTITUDE',function(message,fields){
        //console.log(message);
    });

    
    /********
     Sending 
    *********/
    mavLink.createMessage('HEARTBEAT',{
        type : 1,
        autopilot : 1,
        base_mode : 1,
        custom_mode : 1,
        system_status : 1,
        mavlink_version : 3       
    },function(message){
        console.log('ngirim heartbeat');
        console.log(message);
        serialport.write(message.buffer);
    });


});

/*
1. Saat inisialisasi module, system dan component
idnya harus sesuai dgn si FC. kalau tidak, gabisa
dengerin message dari FC.
2. Saat kita ngirim message, system dan component
id message yg tertulis adalah yg dimasukin ke argument
tadi.
*/