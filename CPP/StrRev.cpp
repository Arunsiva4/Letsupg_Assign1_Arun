#include<iostream>
#include<string>
using namespace std;

string reverseString(const string& input){
	int i=0;
	string rev;
	for(i=input.length()-1;i>=0;--i){
		rev.push_back(input[i]);
	}
	return rev;
}

int main(){
	string ipstr;
	cout<<"Enter String:";
	cin>>ipstr;
	string revStr= reverseString(ipstr);
	cout<<"Reversed String:"<<revStr<<endl;
	return 0;
}
