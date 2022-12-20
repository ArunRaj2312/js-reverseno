let n=parseInt(prompt("enter the value"));
let a=n.toString().length;
let r;
let b=n;
let c=0;

for(i=1;i<=a;i++){
    r=b%10;
    b=(b-r)/10;
    c=c*10+r;
} 
document.write(c);