;(function (exports) {
    var ImageSet = function(params) {
        if (params === undefined) 
            params = {}
        var list = params.obj || [];
        var success = params.fn || undefined;
        var error = params.fn2 || undefined;
        var count = 0;
        if (params.Image !== undefined)
            Image = params.Image;
        var myimages = [];
        this.add = function(src) {
            list.push(src);
            return this
        }
        this.success = function(fn) {
            success = fn;
            return this
        }
        this.error = function(fn) {
            error = fn;
            return this
        }
        this.loaded = function() {
            count++;
            if (count === list.length) {
                success(myimages);
            }
        };
        this.done = function() {
            if (success !== undefined)
                list.forEach(function(src) {
                    var that = this;
                    var img = new Image();
                    img.onerror = function() {
                        if (error !== undefined) error("image load error!");
                    };
                    img.onabort = function() {
                        if (error !== undefined) error("image load abort!");
                    };
                    img.onload = function() {
                        that.loaded();
                    };
                    img.src = src;
                    myimages.push(img);
                },this);
        };
    };
    if (exports.Window !== undefined) {
        exports.ImageSet =  ImageSet;
    } else if ((module !== undefined) && (module.exports !== undefined)) {
        exports = module.exports = ImageSet;
    }
})(typeof exports === 'undefined' ?  this : exports)
