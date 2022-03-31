var container = document.getElementsByClassName('container');

var shaper = document.getElementById('shaper')

var btn = document.getElementById('change-color');
var btn2 = document.getElementById('change-shape');

var colors = [
	'red',
	'green',
	'blue',
	'yellow',
	'orange',
	'purple',
	'pink',
	'brown',
	'black',
];

var shapes = [
  "square",
  "rectangle",
  "triangle-up",
  "triangle-down",
  "triangle-bottom-left",
  "triangle-bottom-right",
  "triangle-top-left",
  "triangle-top-right"
];

btn.addEventListener('click', function () {
	console.log('click');
	container[0].style.backgroundColor =
		colors[
			Math.floor(Math.random() * colors.length)
		];
});

btn2.addEventListener('click', function () {
  var next_shape = shapes[Math.floor(Math.random()*shapes.length)]
  shaper.setAttribute("class", next_shape)
})
