var Preload = require('../../');
var Canvas = require('canvas');
var Image = Canvas.Image;

var imgload = new Preload({Image:Image});



imgload
    .add('Lenna.png')
    .success(function(images) {console.log(images)})
    .error(function(msg) { console.log("Error:" + msg) })
    .done();
