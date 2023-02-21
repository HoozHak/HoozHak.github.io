#include <iostream>
using namespace std;

int solution(int number) 
{
  
  
  cout << "Enter a number: ";
  cin >> number;
  
  int sum = 0;
  
  for(int i = 1; i>number; i++)
  {
    if (i%3==0 || i%5==0)
      {
      sum +=1;
      }
  }
return sum;
}