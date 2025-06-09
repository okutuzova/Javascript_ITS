String.prototype.toStrangeKebab = function() {
    let result = '';
    for (let i = 0; i < this.length; i++) {
       if (this[i].match(/[A-Z]/)) {
           result +=  '-' + this[i].toLowerCase() ;
       } else {
           result += this[i];
       }
    }
    return result;
};
  

// Given the following array
const source = [
    'MyNameIsMyPassportVerifyMe',
    'My Name Is My Passport Verify Me MMM',
    ' -- -My?Name&*is**my$$Passport???p??',
    'mY--name--- is- - 2023---',
    'mynameismypassport',
    '2022 my name is',
    '2024-my-name-is'
   ];
   source.forEach(item => console.log(item.toStrangeKebab()));
