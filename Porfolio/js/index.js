"use strict";
var msg='Hello javascript';
console.log(msg);
var resultDiv=document.getElementById("google");
resultDiv.innerHTML="<h1>this is from JAVAScript</h1>";

// var result= {
// 	name : "JQuery",
// 	language: "javascript",
// 	score: 4.5,
// 	showLog: function(){

// 	},
// 	owner : {
// 		login: "quypham",
// 		id:12345,
// 	}
// };
// result.phoneNumber = "123-456-789";
// console.log(result.owner.login);


var results=[
 {
	name : "JQuery",
	language: "javascript",
	score: 4.5,
	showLog: function(){

	},
	owner : {
		login: "quypham",
		id:12345,
	}
},
 {
	name : "JQuery UI",
	language: "javascript",
	score: 3.5,
	showLog: function(){

	},
	owner : {
		login: "quypham",
		id:12345,
	}
}
];
// console.log(results.length);
// console.log(results[1].owner.id);
for (var x = 0;x < results.length; x++){
	var result=results[x];
	if (result.score > 4) continue;
	console.log(result.name);
}
// results.push(result);


// console.log("msg is "+typeof(msg));
// console.log("resultDiv is "+ typeof(resultDiv));

// var none;
// console.log("none is "+typeof(none));

// var aNumber=0;
// console.log("aNumber is "+typeof(aNumber));

// var trueFalse=true;
// console.log("trueFalse is "+typeof(trueFalse));

// // mgss="sdasdasdas";

// if(none == undefined){
// 	console.log("none is undefind");
// }

// // function showMsg(msg){
// // 	console.log("showMsg: "+msg);
// // }
// function showMsg(msg,more){
// 	if(more){
// 		console.log("showMsg: "+msg+ " " +more);
// 	}else{
// 		console.log("showMsg "+msg);
// 	}
	
// }

// showMsg("some infomation");
// showMsg("more infomation","and more");

// var showIt=function(msg){
// 	console.log(msg);
// }
// showIt("Some message");

// function showItThen(msg,callback){
// 	showIt(msg);
// 	callback();
// }

// showItThen("showItThen called",function(){
// 	console.log("callback called");
// });

// var inGlobal=true;

// function testMe(){
// 	console.log("testMe(): " +inGlobal);

// 	var someMsg= "some message";
// 	console.log("testMe() : "+someMsg);

// 	showItThen("Do with Closure", function(){
// 		showIt("testMe() with Closure : "+someMsg);
// 	});
// }
// // console.log("global: "+someMsg);

// testMe();