function play(str) {
    if (str === "q" || str === "Q") {
      document.getElementById('display').innerText = "Pachelbel - Canon in D Major";
    } else if (str === "w" || str === "W") {
      document.getElementById('display').innerText = "Mozart - Overture to the Marriage of Figaro K-492";
    } else if (str === "e" || str === "E") {
      document.getElementById('display').innerText = "Händel - Hallelujah";
    } else if (str === "a" || str === "A") {
      document.getElementById('display').innerText = "Vivaldi - Concerto for Mandolin and Strings in D RV-425";
    } else if (str === "s" || str === "S") {
      document.getElementById('display').innerText = "Bach - Aria Variata BWV-989 Variation No. 1";
    } else if (str === "d" || str === "D") {
      document.getElementById('display').innerText = "Daniel Veesey - Sonata No. 1 in F minor Op. 2 No. 1 IV. Prestissimo";
    } else if (str === "z" || str === "Z") {
      document.getElementById('display').innerText = "Schubert - Ave Maria";
    } else if (str === "x" || str === "X") {
      document.getElementById('display').innerText = "Liszt - Hungarian Rhapsody No. 2 S-2442";
    } else if (str === "c" || str === "C") {
      document.getElementById('display').innerText = "Monteverdi - Toccata from L'Orfeo";
    }
    var audio = document.getElementById(str);
    if((audio.paused==false)&&(audio.ended==false)){
      audio.pause();}
    else{
      audio.play();
            }  }

  window.document.onkeyup = function (event) {
    let keystroke = event.key;
    if (keystroke === "q" || keystroke === "Q") {
      play("Q");
    } else if (keystroke === "w" || keystroke === "W") {
      play("W");
    } else if (keystroke === "e" || keystroke === "E") {
      play("E");
    } else if (keystroke === "a" || keystroke === "A") {
      play("A");
    } else if (keystroke === "s" || keystroke === "S") {
      play("S");
    } else if (keystroke === "d" || keystroke === "D") {
      play("D");
    } else if (keystroke === "z" || keystroke === "Z") {
      play("Z");
    } else if (keystroke === "x" || keystroke === "X") {
      play("X");
    } else if (keystroke === "c" || keystroke === "C") {
      play("C");
    } 
  }