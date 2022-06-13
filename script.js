// Double click the flames to see le magic

const confettiShower = [];
const numConfettis = 300;
const container = document.body;
const colors = [
  '#FABB24', //yellow
  '#EF3971', //pink
  '#C6DA2C', //green
  '#EC6A63', //peach
  //   '#ED1D24', //red
  '#3495C2', //blue
  '#EE798B', //pink-light
  '#96D4DD', //tealish
  '#F5F0A6', //sun
  '#5CBB65', //green dark
  '#F2ABE7', // icing pink
  '#9FA3EC', // purple
  '#86D2E1 ', // cyan
  '#FEC31E ', // another yellow
];

function create() {
  w = Math.floor(Math.random() * 5 + 5);
  h = w;
  x = Math.floor(Math.random() * 100);
  y = Math.floor(Math.random() * 100);
  c = colors[Math.floor(Math.random() * colors.length)];
  var newConfetti =
    '<div class="confetti" style="bottom:' +
    y +
    '%; left:' +
    x +
    '%;width:' +
    w +
    'px; height:' +
    h +
    'px;"><div class="rotate"><div class="askew" style="background-color:' +
    c +
    '"></div></div></div>';
  container.innerHTML += newConfetti;
}

function animateConfetti() {
  for (var i = 1; i <= numConfettis; i++) {
    create();
  }
  var confettis = document.querySelectorAll('.confetti');
  for (var i = 0; i < confettis.length; i++) {
    var opacity = Math.random() + 0.2;
    var animated = confettis[i].animate(
      [
        { transform: 'translate3d(0,0,0)', opacity: opacity },
        { transform: 'translate3d(10vw,100vh,1vw)', opacity: 1 },
      ],
      {
        duration: Math.random() * 3000 + 3000,
        iterations: Infinity,
        delay: -(Math.random() * 5000),
      }
    );
    confettiShower.push(animated);
  }
}
$('.cake-overlay').click(function () {
  $('body').css({ 'background-color': '#000' });
  $('.clue2').addClass('text-animation');
  $('.cake-overlay').hide();
});

$('.flame').dblclick(function () {
  console.log('test');
  animateConfetti();
  $('.candle').hide();
  $('.cherry').show();
  $('.hbd').show()
  $('.clue2').hide();
  $('.cherry').addClass('fall');
  $('.hbd').addClass('text-animation');
});