$(document).ready(function() {
  var videobackground = new $.backgroundVideo($('.contract__video'), {
    "align": "centerX",
    "width": 1280,
    "height": 720,
    "path": "../../img/video/",
    "filename": "boat_classic",
    "types": ["mp4"],
    "preload": true,
    "autoplay": true,
    "loop": true
  });
});
