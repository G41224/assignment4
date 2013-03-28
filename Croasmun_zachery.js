/*
Croasmun Zachery
SDI project 4 term: 1303
library
*/


//alert("JavaScript works!");





var library = function (){
	
	//check phone number function
	var phoneNum = function (val){
		var phLen = val.length
		
			var totl  = 12 === phLen,
				char3 = val.charAt(3) === "-",
				char7 = val.charAt(7) === "-";	
			
			if (totl && char3 && char7){
					return true;
			
			}else {
				return false;
			
			}
		
		
		
		
	}
	// email checker 
	// I cannot get this function to work please help 
	// no matter what i try it is always true or always false
	var emailCheck = function(val){
		
		var emaLen = val.length;
			
		for (var k=0; k<=emaLen; k++){
			var atChar = val.charAt(k);
			
			if(val.charAt(k) === "@"){ // my problem is here i am having trouble with the if to find the @ and the . both as they would be the only constant char.
			return true;
			
			};
		};
		
		
	};
//check url function
	var urlCheck = function (val){
		
		var len = val.length,
			char1 = val.charAt(0) === "h",
			char2 = val.charAt(2) === "t",
			char3 = val.charAt(3) === "p";			
			
		if (char1 && char2 && char3 && len <= 8){
				
			return true;
				
		};
			
		
	};
	
	//tital case a string
	
	var changeCap = function(val){
   		var wordAt = val.split(" ");
   		var email = Array();
   		
   		for (i in wordAt){
      		
      		temp1 = wordAt[i];
      		
      		temp2 = temp1.charAt(0).toUpperCase() + temp1.substring(1);
      		
      		email.push(temp2);
   		};
   		
   		return email.join(" ");
	};
		
		
		// next smallest array function 
	var arrFunk = function(val, val2){
		
		var inPut = val,
			inPut2 = val2,
			numArr = [];
		
			for (var i=inPut2-1; i < inPut2; i++){
				 	
		  		numArr.push(inPut[i]);
		  	
			};
		return numArr;
		
	};
	
	
	var addArr = function(val){
		var addThis = val
		
		for (var i=0; i<addThis.length; i++){
			
			
		};
		
		
		
	};
	
	
	var changeSt = function(val){
		var str = val;
		
		if (str === ""){
			return number(str);
			
		};
		return str;
		
	};
	
	
	return{
		"phoneNum":   phoneNum,
		"emailCheck": emailCheck,
		"urlCheck":   urlCheck,
		"changeCap":  changeCap,
		"arrFunk":    arrFunk,
		"addArr": 	  addArr,
		"changeSt":   changeSt
	};

	
	
	
};


var newLib = new library();

console.log(newLib.phoneNum("509-237-4867"));
console.log(newLib.emailCheck("haha@gogor.com"))
console.log(newLib.urlCheck("https://"))
console.log(newLib.changeCap("hello everyone this is fun"))
console.log(newLib.arrFunk([1,3,4,5,7,8,9], 5))
console.log(newLib.changeSt("10"))
