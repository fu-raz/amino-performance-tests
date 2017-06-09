/*
 Timings:
 1s  37 FPS
 2s  29 FPS
 3s  28 FPS
 ...
 ns  ~28 FPS
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

    var l1 = this.createImageView();
    l1.w(1920).h(1080).size('stretch').src(jpeg_image);

    var l2 = this.createImageView();
    l2.w(1920).h(1080).size('stretch').src(jpeg_image);

    var l3 = this.createImageView();
    l3.w(960).h(540).size('stretch').src(jpeg_image);

    var l4 = this.createImageView();
    l4.w(960).h(540).size('stretch').src(jpeg_image);

    var l5 = this.createImageView();
    l5.w(960).h(540).size('stretch').src(jpeg_image);

    slide.add(l1);
    slide.add(l2);

    l3.x(300).y(300);
    slide.add(l3);

    l4.x(200).y(200);
    slide.add(l4);

    l5.x(100).y(100);
    slide.add(l5);

});