	var a = 1120;
	var b = 4450;
	var c = 430;
	// Using AND Logical Operator - returns true if both operands are true; otherwise, returns false
	if(a > b && a > c) {
		console.log("A is Greater than B&C : " +a);
	}
	else if(b > a && b > c){
		console.log("B is Greater than A&C : " +b);
	}
	else { 
		console.log("C is Greater than A&B : " +c);
	}
