#question 1
We first input the numbers L,R,K using prompt which gives value as strings hence varseint is used to convert it into number

var count = 0(this will store how many numbers are found)
then we check every number form L to R 
We check the divisibilty by K using % which gives remainder , if x%k == 0, that means it is divisible,
then we check if the number has 0 or not and also add the digits, we assign num = x because the number will be split up
if digit is 0 we break the loop which we start as num>0
Then we check prime as 0 and 1 are not prime we say if num>2 the number is prime 
if the number is prime we add it to the count of he total numbers and we have the output through alert().

#question 2
prompt() asks for input .
we need to run the loop exactly threee times so (var i=1;i <= 3; i++>)
Then we check if the current is even using %, if even we apply the formula current / 2 + seed if not current * 3 - seed ,
then check if the final number is between 100 and 999 inclusive, we extract the middle digit using parseInt(current / 10) % 10 as if for example number is 457 then 457/10 =45.7,  parseInt(45.7) removes 7 hence we get 45 then 45%10 gives 5 which is the middle digit for 457 and then final step we check if the middle digit== final seed.

#question 3
We take input using prompt()
var answer = -1 states that if we dont find a x then the output will be -1.
to check all the possibilty we run a loop from 0 to 100000 to find a valid x if not the output will be -1.
then we check if the number is palindrome using split, rev and join and also the reaminder.

#question 4
This program takes base fare, distance, minutes late, and seed as input.It first calculates the fare using the formula base + 7 × distance.Then it checks if the ride is late by more than 15 minutes and adds 20 if true.If the distance is more than 10, it adds floor of 10% of the current fare.After that, it checks whether the seed is odd or even. If odd, it subtracts the seed; otherwise, it adds the seed.Finally, it rounds the fare up to the nearest multiple of 5 using Math.ceil() and shows the result using alert().

#question 5
The program takes N and seed as input and calculates divisor = seed + 2.Then it starts adding numbers from 1 onward, but skips all numbers divisible by the divisor.It continues until the sum becomes greater than or equal to N.The number at which this happens is stored as m. Finally, the program displays m and the computed sum using alert().


#question 6
The program will take three numbers as its inputs for the correctly answered questions, partially answered questions, and wrongly answered questions.It will use the formula 3a + b – 2c to calculate the score.The score would be made equal to zero if it were less than zero.The total sum of questions submitted will then be tested, and if it were more than 50, 10 marks will be deducted as a penalty.If the score obtained is 60 or more, the output is PASS otherwise FAIL.Alert() is used to display output messages.
