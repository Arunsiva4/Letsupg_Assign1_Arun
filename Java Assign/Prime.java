import java.util.*;

class Prime{
public static void main(String args[]){
Scanner s=new Scanner(System.in);
System.out.println("Enter a number:");
int num=s.nextInt();
int m=num/2;
int flag=0;

if(num==0 || num==1)
    System.out.println(num + " is not a prime number");
for (int i=2;i<=m;i++){
if(num%i==0){
System.out.println(num + " is not a prime number");
flag=1;
break;
}
}

if(flag==0){
System.out.println(num + " is prime number");
}
}
}