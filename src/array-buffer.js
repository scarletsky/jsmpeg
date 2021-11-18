JSMpeg.Source.ArrayBuffer = (function(){ "use strict";

var ArrayBufferSource = function (data, options) {
    options = options || {};

    this.data = data;

    this.destination = null;
    this.request = null;
    this.streaming = false;

    this.completed = false;
    this.established = false;
    this.progress = 0;

    this.onEstablishedCallback = options.onSourceEstablished;
    this.onCompletedCallback = options.onSourceCompleted;
};

ArrayBufferSource.prototype.connect = function(destination) {
    this.destination = destination;
};

ArrayBufferSource.prototype.start = function() {
    this.onLoad(this.data);
};

ArrayBufferSource.prototype.resume = function(secondsHeadroom) {

};

ArrayBufferSource.prototype.destroy = function() {

};

ArrayBufferSource.prototype.onProgress = function(ev) {
    this.progress = 1;
};

ArrayBufferSource.prototype.onLoad = function(data) {
    this.established = true;
    this.completed = true;
    this.progress = 1;

    if (this.onEstablishedCallback) {
        this.onEstablishedCallback(this);
    }
    if (this.onCompletedCallback) {
        this.onCompletedCallback(this);
    }

    if (this.destination) {
        this.destination.write(data);
    }
};

return ArrayBufferSource;

})();
