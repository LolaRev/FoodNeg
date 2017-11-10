var serial; // variable to hold an instance of the serialport library
var portName = 'COM5';
var inData; 
var tHeight = 180;
// var input;
var analyzer;
//var img;
var lolaok;
var lolafood;




//add
  function preload() {
  //img = loadImage("assets/lola1.png");
lolaok = loadAnimation("assets/sleep1.png", "assets/sleep6.png");
lolafood = loadAnimation("assets/feed1.png", "assets/feed15.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(219, 219, 219);

    // Create an Audio input
  // input = new p5.AudioIn();

  // input.start();

//new
serial = new p5.SerialPort(); // make a new instance of the serialport library
 serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing
 
 serial.list();// list the serial ports
 var options = { baudrate: 9600}; 
 serial.open(portName);              // open a serial port
}
//end
// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 console.log(i + " " + portList[i]);
 }
} 
function serverConnected() {
  console.log('connected to server.');
}
 
function portOpen() {
  console.log('the serial port opened.')
}
 
 
function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}
 
function portClose() {
  console.log('The serial port closed.');
}
//end
function serialEvent() {
  inData = Number(serial.read());

  console.log(inData);
//serial.list();// list the serial ports
 //var options = { baudrate: 9600}; 
 //serial.open(portName);              // open a serial port


}

  

function draw() {

	if (inData) {
		if (inData>=0&&inData<=80){
			background(219, 219, 219);
		animation(lolafood, width/2, height/2);}
	
	if (inData>=81){
		background(219, 219, 219);
	animation(lolaok, width/2, height/2);}
}
  
}