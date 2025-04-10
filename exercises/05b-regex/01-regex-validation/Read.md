# Exercise: 01-regex-validation 

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
1.Email Address  
Expected pattern: [any characters]@[any characters].[2-4 letters]  
2.Phone Number  
Expected pattern: [optional + or country code] [digits, possibly separated by dashes or spaces]  
3.Password  
Expected pattern: [at least 8 characters, including at least one uppercase letter, one lowercase 
letter, one digit, and one special character]  
4.URL  
Expected pattern: [protocol]://[domain].[top-level domain]/[optional path]?[optional query 
string]#[optional fragment]  
Note  
Invent multiple test cases to thoroughly test your regular expressions  

 
## Solution
- I created an `index.html` file with basic HTML structure.
- In the `main.js` file the required Regular Expressions are tested. 
1. Email Address   
Pattern `/^.+@.+\.[A-Za-z]{2,4}$/`     
^ is used to mark the start of the string.   
.+ matches one or more characters before @.  
@.+ matches one or more characters after @. 
\. - a literal dot with a backslash as an escape character.   
[A-Za-z]{2,4} ensures that the domain name is from 2 to 4 letters long. 
$ ensures the pattern matches the entire string.  

    PatternOptimized ```/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/```  
^ is used to mark the start of the string.      
[a-zA-Z0-9._%+-]+ before @ there must be at least one of the chars in the brackets.  
@[a-zA-Z0-9.-]+ after @ there must be at least one of the chars in the brackets.  
{2,}$ at least two chars or more for the Top Level Domain. 


2. Phone Number
```/^\+?([0-9]{1,3})([-\s]?[0-9]{1,4}){1,3}$/```  
^ is used to mark the start of the string.    
\+? is used to indicate that a plus is optional and it is a literal plus and not a quantifier.  
([0-9]{1,3}) an expression that says there must be digits in a quantity between 1 and 3.  
([-\s]?[0-9]{1,4}){1,3}$   
[-\s]? an expression inside the parentheses may have either an optional hyphen or a space.   
[0-9]{1,4} an expression indicates there will be a group of digits from 1 to 4 max. {1,3} outside the parentheses says there might be a one or three groups of digits.    


3. Password  
```/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/```    
(?=.*[0-9]) means that the password must contain a single digit from 1 to 9.  
(?=.*[a-z]) means that the password must contain one lowercase letter.  
(?=.*[A-Z]) means that the password must contain one uppercase letter.  
(?=.*\W) means that the password must contain one special character.  
.{8,} means that the password must be at least 8 characters long.     


4. URL  
```/^(https?|ftp):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9/-]*)?(\?[a-zA-Z0-9&=]*)?(#[a-zA-Z0-9]*)?$/```
(https?|ftp) allows https, http or ftp protocols.  
:\/\/  = :// with escape characters.
[a-zA-Z0-9.-]+ lowercase or uppercase chars including digits, a dot and hyphens followed by a quantifier indicating one or more.   
\.[a-zA-Z]{2,} matches TLD allowing not less than two chars.      
(\/[a-zA-Z0-9/-]*)? an optional path which may contain letters, digits, hyphens, or slashes. 
(\?[a-zA-Z0-9&=]*)? an optional query string, which starts with ? and includes key-value pairs (& to separate them).    
(#[a-zA-Z0-9]*)?  an optional fragment starting with #.   

## Files:
- `index.html` - Basic HTML structure.
- `01-email-address.js` - RegExp checking email format.
- `02-phone-number.js` - RegExp checking phone format.
- `03-password.js` - RegExp checking password format.
- `04-url.js` - RegExp checking password format.
- `Read.md` - exercise requirements and solution. 
