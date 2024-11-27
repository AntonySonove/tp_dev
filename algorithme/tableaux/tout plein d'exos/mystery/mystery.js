arr=[1,2,3,4,5,6,7,8,9,10];

function f1(arr) {
	let result = 0;
	for(let i = 0 ; i < arr.length ; i++) {
		if(arr[i]%2==0) {
			result += arr[i];
		}
	}
	return result;
}
console.log("f1",f1(arr));
	
function f2(arr) {
	let result = 0;
	for(let i = 0 ; i < arr.length ; i++) {
		if(i%2==0) {
			result += arr[i];
		}
	}
	return result;
}
console.log("f2",f2(arr));
// Écrire une fonction f3 qui prend un tableau en entrée
// et qui retourne la somme des numéros de cases des éléments pairs d'un tableau

function f3(arr){
	let result=0;
	for(let i=0; i<arr.length; i++){
		if(arr[i]%2==0){
			result+=i;
		}
	}
	return result
}
console.log("f3",f3(arr));