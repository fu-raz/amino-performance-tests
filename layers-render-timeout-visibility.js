/*
Timings:
1s  49 FPS
2s  39 FPS
3s  60 FPS
...
ns  60 FPS
 */

var Amino = require('aminogfx-gl');
var gfx = new Amino.AminoGfx();

gfx.start(function (err) {
    var root = this.createGroup();
    this.setRoot(root);

    var slide = this.createGroup();
    slide.w(1920).h(1080);
    root.add(slide);

    var jpeg_image = __dirname + '/full-hd-image.jpg',      // file is 1920x1080
        png_image = __dirname + '/text-layer.png';    // file is 500x500

    var layer1 = this.createImageView();
    layer1.w(1920).h(1080).size('stretch').src(jpeg_image);

    var layer2 = this.createImageView();
    layer2.w(1920).h(1080).size('stretch').src(jpeg_image);

    var layer3 = this.createImageView();
    layer3.w(500).h(500).size('stretch').src(png_image);

    var layer4 = this.createImageView();
    layer4.w(500).h(500).size('stretch').src(png_image);

    slide.add(layer1);
    slide.add(layer2);  // By adding this layer, the first one is no longer visible

    layer4.x(100).y(100);
    slide.add(layer4);

    layer3.x(600).y(100);
    slide.add(layer3);

    setTimeout(function() {
        // After 2 seconds we 'disable' the first layer
        layer1.visible(false);
    }, 2000);
});