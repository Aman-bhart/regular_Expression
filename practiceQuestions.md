### **Type 1: Explanation**  
1. What does the expression `"cat, bat, rat".match(/b\w+/)` do?  
 . it will gives word starting with b

2. What will `"123-456-7890".match(/\d{3}/)` return?
 . first three digit number

3. What does `"hello\nworld".match(/.\n./)` return?
 . find the line last letter and next line first letter.(i.e o\nw) 

4. What will `"name@example.com".match(/\w+@\w+\.\w+/)` return?
 . will return the email structured string
 example - "()name@gmail.com" match name@gmail.com

5. What does `"file.txt".match(/\.txt/)` do?  
 . it match .txt extension

6. What does `"red green blue".match(/green/)` do?  
 . green matching 

7. What will `"abcdef".match(/[a-c]/)` return?  
 . character btw a to c

8. What does `"The quick brown fox".match(/q.+?k/)` return?  
 . it matches the word starts with q and ends eith k and atleast one char.

9. What does `"apple".match(/a[a-z]+/)` return? 
 . match the string which have a in it and atleast one char. 

10. What will `"a1b2c3".match(/\d+/)` return?  
 . it matches the continious digits

11. What does `"good food mood".match(/o+o/)` do?  
 . it matches the o letters with atleast two `o` 

12. What does `"@username".match(/@\w+/)` return?
 . it matche the @ and the next words

13. What does `"path/to/file".match(/\/to\//)` do?  
 . match for `/to/`

14. What does `"1.23".match(/\d\.\d+/)` return?
 . match for a single digit with decimal values atleast one. 

15. What will `"AB123CD".match(/[A-Z]+\d+/)` return?  
 . match capital alphabet followed by atleast one digit.

16. What does `"hello_world".match(/\w+_\w+/)` return?  
 . 

22. What does `"123abc456".match(/\d{3}/)` return?  
23. What does `"My name is John".match(/name\s\w+/)` return?  
24. What will `"https://example.com".match(/https?:\/\/\w+\.\w+/)` return?  
25. What does `"abcdEFGH".match(/[A-Z]+/)` return?  
26. What does `"abc123".match(/(\w)(\d)/)` return?  
27. What will `"hello world".match(/(\w+)\s(\w+)/)` return?  
28. What does `"1234".match(/\d{2,3}/)` return?  
29. What will `"aaaabbb".match(/a{2,}/)` return?  
30. What does `"hello".match(/[aeiou]{2}/)` return?  
31. What does `"ABCD1234".match(/[A-Z]+\d+/)` return?  
32. What does `"file_name.ext".match(/(\w+)\.(\w+)/)` return?  
33. What does `"Mississippi".match(/s{2,}/)` return?  
34. What will `"hello world".match(/(\w)(?=\s\w)/)` return?  
35. What does `"2025-01-01".match(/\d{4}-(\d{2})-(\d{2})/)[2]` return?  
36. What does `"abc123".match(/(\d+)(\w+)/)` return?  
37. What does `"hello123".match(/\D+/)` return?  
38. What will `"yes no maybe".match(/(\w+)\s(\w+)\s(\w+)/)` return?  
39. What does `"color: #123456".match(/#[0-9a-fA-F]{6}/)` return?  
40. What does `"aaa111bbb222".match(/([a-z]+)(\d+)/)` return?  
41. What will `"1,234.56".match(/\d{1,3}(,\d{3})*\.\d{2}/)` return?  
42. What does `"aabbcc".match(/a(b{2})c/)` return?  
43. What does `"xyzz".match(/x(y(z))/)` return?  
44. What does `"abab".match(/(ab)\1/)` return?  
45. What will `"abc123abc".match(/(abc)\d+\1/)` return?  

---

### **Type 2: Task**  
1. Match any string that contains a number.  
2. Find all lowercase letters in a string.  
3. Match a string that ends with "ed".  
4. Match the word "yes" in a string.  
5. Find any two consecutive vowels in a string.  
6. Match any string containing the word "hello".  
7. Find a string that contains exactly two spaces.  
8. Find a string that starts with "abc".  
9. Match any string that contains the digit `7`.  
10. Find all occurrences of the letter `e`.  
11. Match a string that has at least one uppercase letter.  
12. Find a string with a period (`.`) in it.  
13. Match a string that contains a single space.  
14. Match all words that start with the letter `c`.  
15. Match a string that contains the sequence "123".  
16. Match a string that contains a forward slash (`/`).  
17. Find all strings that contain "and".  
18. Match a string that starts and ends with the same letter.  
19. Match all lowercase letters except "x" and "y".  
20. Find all words in a string that are exactly 5 letters long.  
21. Match all words starting with a vowel.  
22. Find all sequences of two or more consecutive digits.  
23. Match all words that contain exactly three letters.  
24. Find all occurrences of the word "cat" or "dog".  
25. Capture the first and last name from a string like `"John Doe"`.  
26. Match strings with repeating characters (e.g., `"aa"`, `"bb"`).  
27. Extract all the hashtags from a tweet.  
28. Validate a 24-hour time format like `"23:59"`.  
29. Capture the area code and phone number from `(123) 456-7890`.  
30. Find sequences of whitespace followed by a word.  
31. Match strings containing at least one uppercase and one digit.  
32. Find all non-alphanumeric characters in a string.  
33. Match email addresses.  
34. Validate dates in the format `YYYY-MM-DD`.  
35. Extract the filename and extension from a path like `/path/to/file.txt`.  
36. Find all duplicate words in a sentence.  
37. Match words that do not contain the letter "e".  
38. Extract the domain name from a URL like `https://www.example.com`.  
39. Match strings containing three consecutive vowels.  
40. Find all 4-letter palindromes in a string. 