"use strict";


// JavaScript statements
// =====================================================================================
let waitTime = 30;
let totalTime = 0;
// =====================================================================================

function forward(length) {
	setTimeout(() => {turtle.forward(length);}, totalTime);
	totalTime += waitTime;
}

function left(angle) {
	setTimeout(() => {turtle.left(angle);}, totalTime);
	totalTime += waitTime;
}

function right(angle) {
	setTimeout(() => {turtle.right(angle);}, totalTime);
	totalTime += waitTime;
}

function backward(angle) {
	setTimeout(() => {turtle.backward(angle);}, totalTime);
	totalTime += waitTime;
}

function changeColor(col) {
	setTimeout(() => {turtle.changeColor(col);}, totalTime);
	totalTime += waitTime;
}

function down() {
	setTimeout(turtle.down, totalTime);
	totalTime += waitTime;
}

function up() {
	setTimeout(turtle.up, totalTime);
	totalTime += waitTime;
}

function setPos(x,y) {
	setTimeout(() => {turtle.setPos(x,y);}, totalTime);
	totalTime += waitTime;
}

function setLineWidth(n) {
	setTimeout(() => {turtle.setLineWidth(n);}, totalTime);
	totalTime += waitTime;
}

function arcLeft(radius, angle) {
	setTimeout(() => {turtle.arcLeft(radius,angle);}, totalTime);
	totalTime += waitTime;
}

function arcRight(radius, angle) {
	setTimeout(() => {turtle.arcRight(radius,angle);}, totalTime);
	totalTime += waitTime;
}

function faceLeft() {
	setTimeout(() => {turtle.angleInRadians=-Math.PI/2;}, totalTime);
	totalTime += waitTime;
}

function faceRight() {
	setTimeout(() => {turtle.angleInRadians=Math.PI/2;}, totalTime);
	totalTime += waitTime;
}

function faceUp() {
	setTimeout(() => {turtle.angleInRadians=Math.PI;}, totalTime);
	totalTime += waitTime;
}

function faceDown() {
	setTimeout(() => {turtle.angleInRadians=0;}, totalTime);
	totalTime += waitTime;
}

function shiftColor(x) {
    setTimeout(() => {turtle.shiftColor(x);},totalTime);
    totalTime += waitTime;
}
