function checkPrime(num){
let count=0;
let num=13;
  for(let i=1;i<=num;i++){
  if(num%i==0){
    count++;
}
}
   if(count==2){
   console.log("it is prime number");
}
else{
console.log("it is not prime number");
}
}