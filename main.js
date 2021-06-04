console.log('Initializing MAVLink...');

var v1 = require('./v1.js');
var v2 = require('./v2.js');
var serialportmodule = require('serialport');

var serialport = new serialportmodule('COM7',{
    baudRate : 115200
});

//Variabel untuk menentukan penggunaan parser mavlink v1
var use_v1 = false;

//Timeout 3 detik untuk menunggu module selesai inisialisasi
setTimeout(()=>{
    if (v1.mavLinkv1ready) {
        console.log('MAVLink ready.');

        //Parse data dari serialport
        serialport.on('data',function(data){
            v2.v2parse(data);
            if (use_v1) {
                //Jika use_v1 bernilai true
                v1.v1parse(data);
            };
        });
        

        //Membaca seluruh parameter pada PX4.
        //Menunggu 5 detik kemudian me-request param dengan mavlink v1
        setTimeout(()=>{
            v1.mavLinkv1send.createMessage('PARAM_REQUEST_LIST',{
                //Membuat messagenya terlebih dahulu
                target_system : 1,
                target_component : 1
            }, function(message){
                console.log('Requesting all parameters to PX4...');
                //Gunakan mavlink v1 (karena meliputi array of char)
                use_v1 = true;
                setTimeout(()=>{
                    //Mengirim PARAM_REQUEST_LIST ke PX4
                    serialport.write(message.buffer);
                },1000);
                setTimeout(()=>{
                    //Timeout untuk mematikan parser mavlink v1
                    use_v1 = false;
                },2000);
            })
        },5000);


    } else {
        console.log('Failed to start');
    }
},3000);