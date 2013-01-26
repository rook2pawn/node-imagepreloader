imagepreloader
==============

The same file works in both places.

In Node
-------

You can either 

    var Preload = require('imagepreloader');
    var Image = require('canvas').Image;
    var preload = new Preload({Image:Image});

Or,

In your browser
---------------

Just copy the index.js file so that you can load it from HTML. Feel free to rename it.
    
    <script src='index.js'></script>
    <script>
        var Preload = new Preload;
    </script>


How To Use
==========

Just open your browser to 

    example/browser/index.html

Or cd /example/node and run 

    node test.js
