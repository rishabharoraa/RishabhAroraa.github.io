let i = 0;
let text = ' & a Full Stack Web Developer'; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

let scroller = function(id){
  document.getElementById(id).scrollIntoView({block: "center", inline: "center"});
}