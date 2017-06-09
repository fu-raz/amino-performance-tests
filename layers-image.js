'use strict';

if (process.argv.length == 2) {
    console.log('Missing integer parameter!');
    return;
}

const layers = process.argv[2];
const amino = require('aminogfx-gl');

const gfx = new amino.AminoGfx({
    //resolution: '1080p@60',
    //resolution: '720p@60',

    //swapInterval: 3,

    perspective: {
        orthographic: false
    }
});

gfx.start(function (err) {
    if (err) {
        console.log('Amino error: ' + err.message);
        return;
    }

    //root
    var root = this.createGroup();

    this.setRoot(root);

    //Note: not seeing any difference
    //root.depth(true);

    //layers
    for (var i = 0; i < layers; i++) {
        root.add(createRect());
    }

    //some info
    console.log('screen: ' + JSON.stringify(gfx.screen));
    console.log('window size: ' + this.w() + 'x' + this.h());
    //console.log('runtime: ' + JSON.stringify(gfx.runtime));

    //pixels
    const pixels = this.w() * this.h() * layers;

    console.log('Pixels: ' + (pixels / 1000000) + ' MP')
});

/**
 * Create a layer.
 */
function createRect(z, textColor) {
    //rect
    var rect = gfx.createImageView().size('stretch').src(__dirname + '/full-hd-image.jpg');

    rect.w.bindTo(gfx.w);
    rect.h.bindTo(gfx.h);

    return rect;
}