var a = parseFloat(prompt('Please enter the value [cm] of the base side of the triangle', '0')),
	h = parseFloat(prompt('Please enter the height [cm] value of the triangle', '0')),
	triangleArea = a * h / 2;

alert('The triangle has an area of ' + triangleArea + ' [cm2].');

console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);