let memory = [];

function reset() {
	memory = [];
}

function p(n) {
	memory.push(n);
}

function duplicate() {
	p(memory[memory.length-1]);
}

function r() {
	return memory.pop();
}

function add() {
	let a = r();
	let b = r();
	p(a+b);
}

function sub() {
	p(r() - r());
}

function twice() {
	duplicate();
	add();
}	

function print() {
	console.log("Contenu actuel :");
	for(let i = 0 ; i < memory.length ; i++) {
		console.log(i,'->',memory[i]);
	}
}

// Niveau 1
console.log("Niveau 1");
reset();
p(2);
p(8);
print();

// Niveau 2
console.log("Niveau 2");
reset();
p(2);
twice();
print();

// Niveau 3
console.log("Niveau 3");
reset();
p(53);
for(let i = 0 ; i < 4; i++) {
	p(53);
	add();
}

p(1);
for(let i = 0 ; i < 9 ; i++) {
	twice();
}

add();
print();

// Niveau 4
console.log("Niveau 4");
memory = [];
let level2 = 5;
for(let i = 0 ; i<level2 ; i++) {
	p(i+1);
}
print();
while(memory.length>1) {
	add();
}
print();

// Niveau 5
console.log("Niveau 5");
let level5 = 5;
reset();

p(0);
for(let i = 0 ; i < level5-1 ; i++) {
	// TODO
}

print(); // Doit afficher :
// 0 -> 0
// 1 -> 1
// 2 -> 3
// 3 -> 7
// 4 -> 15