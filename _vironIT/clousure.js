
function shuffle(arr){
	let j, temp;
	for(let i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

function rIndex(top){
	return 1 + Math.round(Math.random()*(top-1))
}

function makepre(top){
	let arr = [];
	for (let i = 1; i <= top; i++) {
		arr.push(i)
	}
	shuffle(arr);
	return arr;
}

function makepost(arr) {
	post = arr.slice();
	let r = rIndex(arr.length);
	console.log(post[r] +' index[' + r +']');
	post.splice(r, 1);
	return post
}

function findmissing(arrpre, arrpost) {
	let presum = eval(arrpre.join('+'));
	let postsum = eval(arrpost.join('+'))
	console.log(presum);
	console.log(postsum);
	return presum - postsum
}

console.log("Ответ: " + findmissing(makepre(10), makepost(makepre(10))))
/*arrpre = makepre(10)


let evalstring = arr.join('+');
let sumpre = eval(arr.join('+'))
console.log(shuffle(arr));

let sumpost = eval(arr.join('+'))

function arrsome(pre, post) {
	return presum - postsum
}
*/
