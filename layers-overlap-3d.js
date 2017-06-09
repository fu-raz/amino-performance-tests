/*
Timings:
1s  42 FPS
2s  49 FPS
3s  45 FPS
...
ns  ~45 FPS
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

    l5.z(5).x(100).y(100);
    slide.add(l5);

    l4.z(4).x(200).y(200);
    slide.add(l4);

    l3.z(3).x(300).y(300);
    slide.add(l3);

    l2.z(2);
    slide.add(l2);

    l1.z(1);
    slide.add(l1);
});