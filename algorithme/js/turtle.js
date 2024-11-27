"use strict";
// JavaScript statements
// =====================================================================================
let color = {
	white: "#ffffff",
	black: "#000000",
	red: "#ff0000",
	green: "#00ff00",
	blue: "#0000ff",
	yellow: "#ffff00",
	fuchsia: "#ff00ff",
	aqua: "#00ffff"
};

let turtle = {
	x: 0,
	y: 0,
	angleInRadians: 0,
	penDown: true,
	penColor: "#000000",
	lineWidth: 2,
	col:0
};

let canvas = document.getElementById('myDrawing');

if (canvas && canvas.getContext) { // does the browser support 'canvas'?
	turtle.ct = canvas.getContext("2d"); // get drawing context
	turtle.ct.fillStyle = "#888888";
	turtle.ct.fillRect(0,0,600,600);
} else {
	alert('You need a browser which supports the HTML5 canvas!');
}

// =====================================================================================

turtle.forward = function (length) {
	let x0 = this.x,
		y0 = this.y;
	this.x += length * Math.sin(this.angleInRadians);
	this.y += length * Math.cos(this.angleInRadians);
	if (this.ct) {
		if (this.penDown) {
			this.ct.beginPath();
			this.ct.lineWidth = this.lineWidth;
			this.ct.strokeStyle = this.penColor;
			this.ct.moveTo(x0, y0);
			this.ct.lineTo(this.x, this.y);
			this.ct.stroke();
		}
	} else {
		this.ct.moveTo(this.x, this.y);
	}
	return this;
};

turtle.arcLeft = function(radius, arc) {
	let x0 = this.x,
		y0 = this.y;
	let theta0 = this.angleInRadians;
	let xc = x0 + radius*Math.cos(theta0);
	let yc = y0 - radius*Math.sin(theta0);
	let startAngle = theta0 - Math.PI;
	arc = arc * Math.PI / 180;
	let endAngle = startAngle + arc;
	
	if(arc < 0) {
		endAngle = Math.PI - theta0;
		startAngle = endAngle + arc;
	}
	
	if(this.penDown) {
		this.ct.beginPath();
		this.ct.lineWidth = this.lineWidth;
		this.ct.strokeStyle = this.penColor;
		for(let angle = startAngle ; angle <= endAngle ; angle += 0.001) {
			let x = xc + radius*Math.cos(angle);
			let y = yc - radius*Math.sin(angle);
			this.ct.lineTo(x,y);
		}
		this.ct.stroke();
	}
	
	let angle = endAngle;
	if(arc < 0) {
		angle = startAngle;
	}
	this.x = xc + radius*Math.cos(angle);
	this.y = yc - radius*Math.sin(angle);
	this.angleInRadians += arc;
	
	return this;
}

turtle.arcRight = function(radius, arc) {
	let x0 = this.x,
		y0 = this.y;
	let theta0 = this.angleInRadians;
	let xc = x0 - radius*Math.cos(theta0);
	let yc = y0 + radius*Math.sin(theta0);
	let startAngle = theta0;
	arc = arc * Math.PI / 180;
	let endAngle = startAngle - arc;
	
	if(arc < 0) {
		endAngle = theta0;
		startAngle = endAngle - arc;
	}
	
	if(this.penDown) {
		this.ct.beginPath();
		this.ct.lineWidth = this.lineWidth;
		this.ct.strokeStyle = this.penColor;
		for(let angle = startAngle ; angle >= endAngle ; angle -= 0.001) {
			let x = xc + radius*Math.cos(angle);
			let y = yc - radius*Math.sin(angle);
			this.ct.lineTo(x,y);
		}
		this.ct.stroke();
	}
	
	let angle = endAngle;
	if(arc < 0) {
		angle = startAngle;
	}
	this.x = xc + radius*Math.cos(angle);
	this.y = yc - radius*Math.sin(angle);
	this.angleInRadians -= arc;
	
	return this;
}

turtle.backward = function (length) {
	this.forward(-length);
	return this;
};

turtle.left = function (angleInDegrees) {
	this.angleInRadians += angleInDegrees * Math.PI / 180.0;
	return this;
};

turtle.right = function (angleInDegrees) {
	this.left(-angleInDegrees);
	return this;
};


turtle.angle = function () {
	return this.angleInRadians * 180.0 / Math.PI;
};

turtle.changeColor = function (col) {
	turtle.penColor = col;
}

turtle.down = function () {
	turtle.penDown = true;
}

turtle.up = function () {
	turtle.penDown = false;
}

turtle.setPos = function (x,y) {
	turtle.x = x;
	turtle.y = y;
}

turtle.setLineWidth = function(n) {
	turtle.lineWidth = n;
}


function colorScale(n) {
    let k = Math.floor((n%(6*255))/255);
    let r = 0, g = 0, b = 0;
    if(k == 0) {
        r = 255;
        g = n%255;
    } else if(k == 1) {
        r = 255-n%255;
        g=255;
    } else if(k == 2) {
        g = 255;
        b = n%255;
    } else if(k == 3) {
        g = 255-n%255;
        b = 255;
    } else if(k == 4) {
        r = n%255;
        b = 255;
    } else {
        r = 255;
        b = 255-n%255;
    }
    let c= r*256*256+g*256+b;
    let col = "#" + c.toString(16).padStart(6,'0');
    return col;
}

turtle.shiftColor = function(x) {
    let n = Math.floor(x*255*6);
    turtle.col = (turtle.col+n)%(255*6);
    turtle.changeColor(colorScale(turtle.col));
}
