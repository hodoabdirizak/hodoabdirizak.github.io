// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter.typeString('hey there!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString('nice to meet you.')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("my name is hodo.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i'm a student at ryerson university (go rams!)")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i'm studying computer science.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i'm also interested in design.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("thanks for visiting!")
    .pauseFor(1000)
    .deleteAll()
    .start();

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-70px";
  }
}