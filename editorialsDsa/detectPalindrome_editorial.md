## Detect Palindrome

Given an integer, print "Yes" (without quotes) if that integer is a [Palindrome](https://www.hackerrank.com/external_redirect?to=https://en.wikipedia.org/wiki/Palindrome), else print "No" (without quotes)

A **palindrome** is a word, [number](https://en.wikipedia.org/wiki/Palindromic_number), phrase, or other sequence of [characters](https://en.wikipedia.org/wiki/Character_(symbol)) which reads the same backward as forward.

1.Keep an iterator from 0 to mid of the given string length.

2.Check equality of 1st and last element  , 2nd and last butone and so on..

3.If there is even one instance is false that particular string is not pallindrome hence return "No", else return "Yes"