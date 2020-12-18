var audiosprite = require('audiosprite')

var files = ['assets/fg.mp3']

var opts = {};
opts.output = 'assets/audiosprite';       //Name for the output files.                                               [default: "output"]
opts.path = '';                           //Path for files to be used on final JSON.                                 [default: ""]
opts.export = "ogg,mp3";                  //Limit exported file types. Comma separated extension list.               [default: "ogg,m4a,mp3,ac3"]
opts.format = "howler";                   //Format of the output JSON file (jukebox, howler, createjs).              [default: "jukebox"]
opts.log = "error";                       //Log level (debug, info, notice, warning, error).                         [default: "info"]
opts.autoplay = null;                     //Autoplay sprite name.                                                    [default: null]
opts.loop = '';                           //Loop sprite name, can be passed multiple times.                          [default: null]
opts.silence = 0;                         //Add special "silence" track with specified duration.                     [default: 0]
opts.gap = 1;                             //Silence gap between sounds (in seconds).                                 [default: 1]
opts.minlength = 0;                       //Minimum sound duration (in seconds).                                     [default: 0]
opts.bitrate = 128;                       //Bit rate. Works for: ac3, mp3, mp4, m4a, ogg.                            [default: 128]
opts.vbr = -1;                            //VBR [0-9]. Works for: mp3. -1 disables VBR.                              [default: -1]
opts.samplerate = 44100;                  //Sample rate.                                                             [default: 44100]
opts.channels = 2;                        //Number of channels (1=mono, 2=stereo).                                   [default: 1]
opts.rawparts = "";                       //Include raw slices(for Web Audio API) in specified formats.              [default: ""]
opts.ignorerounding = 0;                  //Bypass sound placement on whole second boundaries (0=round,1=bypass).    [default: 0]

audiosprite(files, opts, function (err, obj) {
  if (err) return console.error(err)

  console.log(JSON.stringify(obj, null, 2))
})