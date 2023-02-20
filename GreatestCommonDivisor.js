function mygcd(a,b){
  //your code here 
  while(a != b){
      	if(a > b) {
          	a -= b;
      	}
      	else {
          	b -= a;
      	}
  	}
  	return a;
}
