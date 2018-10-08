var gpio = require('rpi-gpio');

var pin   = 0; //A0?
var delay = 1000;

gpio.setup(pin, gpio.DIR_OUT, on);

function on() {

    setTimeout(function() {
        gpio.write(pin, 1, off);
    }, delay);
}

function off() {
    setTimeout(function() {
        gpio.write(pin, 0, on);
    }, delay);
}
