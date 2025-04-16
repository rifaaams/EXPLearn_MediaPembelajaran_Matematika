function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5wMY0e4DUd2":
        Script1();
        break;
      case "6q7xLDOrE1k":
        Script2();
        break;
      case "6cVnhWTTY42":
        Script3();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();


// Ambil semua nilai dari text entry
var jawaban = [
  player.GetVar("TextEntry"),    // = 6
  player.GetVar("TextEntry1"),   // = 3
  player.GetVar("TextEntry2"),   // = 6
  player.GetVar("TextEntry3"),   // = 2
  player.GetVar("TextEntry4"),   // = 3
  player.GetVar("TextEntry5"),   // = 6
  player.GetVar("TextEntry6"),   // = 3
  player.GetVar("TextEntry7"),   // = 2
  player.GetVar("TextEntry8"),   // = 6
  player.GetVar("TextEntry9"),   // = 3
  player.GetVar("TextEntry10"),  // = 7
  player.GetVar("TextEntry11")   // = 3
];


// Jawaban yang benar
var kunci = [6, 3, 6, 2, 3, 6, 3, 2, 6, 3, 7, 3];

// Bandingkan
var benar = true;
for (var i = 0; i < kunci.length; i++) {
  if (parseInt(jawaban[i]) !== kunci[i]) {
    benar = false;
    break;
  }
}


// Set nilai variabel trigger untuk show layer
player.SetVar("hasilBenar", benar);
}

function Script2()
{
  var player = GetPlayer();

var videoTime = player.GetVar("Slider1"); // Ambil nilai slider

var videoElement = document.querySelector("video"); // Ambil elemen video 
videoElement.currentTime = videoTime; // Lompat ke waktu yang diinginkan
}

function Script3()
{
  var player = GetPlayer();

var videoElement = document.querySelector("video"); // Ambil elemen video



// Update slider berdasarkan waktu video setiap detik 
setInterval(function(){
    player.SetVar("Slider1", videoElement.currentTime);
}, 1000);
}

