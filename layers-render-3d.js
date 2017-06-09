/*
 Timings:
 1s  56 FPS
 2s  52 FPS
 3s  53 FPS
 ...
 ns  ~52 FPS

 Problems:
 Alpha channel is no longer 255 colors, but only 1
 */


var Amino = require('aminogfx-gl');
var gfx = new Amino.AminoGfx();
gfx.start(function (err) {
    var root = this.createGroup();
    this.setRoot(root);

    var slide = this.createGroup();
    slide.w(1920).h(1080);
    slide.depth(true);
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

    // Here we add the layers top layer down
    layer4.x(100).y(100).z(4);
    slide.add(layer4);

    layer3.x(600).y(100).z(3);
    slide.add(layer3);

    layer2.z(2);
    slide.add(layer2);

    layer1.z(1);
    slide.add(layer1);
});