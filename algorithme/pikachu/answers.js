function pikachu(a,b) {
	let result = 0;
	for(let i=0; i<a; i++) {
		result += b; // result = result+b;
	}
	return result;
}

function plafond(a,b) {
	let result = 0;
	for(let i=0; i<a; i++) {
		result = b;
	}
	return result;
}

function tableur(a,b) {
	let result=0;
	for(let i=0; i<=a; i++) {
		result += b;
	}
	return result;
}

function lol(a,b) {
	let result=0;
	for(let i=0.0; i<a; i+=0.5) {
		result += b;
	}
	return result;
}

function wolverine(a,b) {
	let result=0;
	for(let i=0; i<a; i++) {
		for(let j = 0 ; j < b ; j++) {
			result++;
		}
	}
	return result;
}

function ventilateur(a,b) {
	let result = 0;
	for(let i=a; i<a; i++) {
		result += b;
	}
	return result;
}

function bob(a,b,c) {
	let result=0;
	for(let i=0; i<a; i++) {
		for(let j=0; j<b; j++) {
			for(let k=0; k<c; k++) {
				result += 1;
			}
		}
	}
	return result;
}

function calcul(a) {
	let aaa=1;
	for(let i=2; i<=a; i++) {
		aaa *= i;
		// aaa = aaa*i;
	}
	return aaa;
}

function python(a) {
	let monResultat;
	if(a<2) {
		monResultat = 1;
	} else {
		monResultat = a*python(a-1);
	}
	return monResultat;
}

function erogahtyp(a) {
	let x;
	if(a%2 == 0) {
		x = a/2;
	}
	else {
		x = 3*a+1;
	}
	return x;
}

function pythagore(a,b) {
	let result = a;
	for(let i=0; i<b; i++) {
		result=erogahtyp(result);
	}
	return result;
}

function aceeilnrtt(a) {
	let tluser = 0;
	let v = a;
	while(v != 1) {
		v = erogahtyp(v);
		tluser++;
	}
	return tluser;
}

function micmath(a,b) {
	let c=0;
	while(a>=b) {
		a/=b;
		c++;
	}
	return c;
}

function stylo(a,b) {
	let result = 1;
	for(let i=0; i<b; i++) {
		result *= a;
	}
	return result;
}

function crayon(a,b) {
	let result = 0;
	for(let i=0; i<b; i++) {
		result *= a;
	}
	return result;
}

function minecraft(a) {
	let result = 1;
	for(let i=0; i<a; i++) {
		result *= a;
	}
	return result;
}

function nenio(a) {
	let result = Math.random(); // Google ?
	result = Math.floor(result);
	return result;
}

function carapuceSamourai(a) {
	let tortank = 1;
	for(let i=0; i<a; i++) {
		tortank = 1-tortank;
	}
	return tortank;
}

function bouteilleDEau(a) {
	let result;
	if(a<0) {
		result=0;
	}
	else {
		if(a>0) {
			result = -1;
		}
		else {
			result = 1;
		}
	}
	return result;
}

function spiderman(a) {
	let result = 1;
	for(let i=0; i<a; i++) {
		result = bouteilleDEau(result);
	}
	return result;
}

function az(a) {
	let result = 0;
	for(let i = 0 ; i < 20 ; i++) {
		if(i*a < 100) {
			result++;
		}
	}
	return result;
}

function er(a) {
	let result1 = 1;
	let result2 = 1;
	for(let i = 0 ; i < a ; i++) {
		result1++;
		result2 += result1;
		result1++;
	}
	
	return result2-result1;
}

function ty(a) {
	let result = 0;
	for(let i = 0 ; i < 20 ; i++) {
		if(i*a < 100); {
			result++;
		}
	}
	
	return result;
}

function ui(a) {
	let result = 0;
	for(let i = 0 ; i < a ; i++) {
		for(let j = 0 ; i < a ; i++) {
			result++;
		}
	}
	return result;
}

function op(a) {	
	let ooo = 0;
	let oOo = a;
	let o0o = -4;
	for(let oOO = 0; oOo > oOO ; ooo++) {
		oOo += o0o;
		o0o -= 1;
		oOO *= a;
	}
	return ooo;
}

// You need to understand "ty" first
function qs(a) {
	let tluser = 1;
	for(;tluser<a;tluser*=2);
	return tluser;
}

function df(a,b) {
	let result = 0;
	for(let i = 0 ; i < a ; i++) {
		for(let j = 0 ; j < b ; j++) {
			result++;
			i++;
		}
	}
	return result;
}

function gh(a,b) {
	return a&b;
}

function jk(a,b) {
	return a|b;
}


function lm(a,b) {
	return a^b;
}

function wx(a,b) {
	return a<<b;
}

function cv(a,b) {
	return a>>b;
}