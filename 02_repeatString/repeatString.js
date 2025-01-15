const repeatString = function(word,times) {
    let i =0;
    let string = ''
    if(times <0){
        return "ERROR"
    }
    while(i<times){
        string+=word
        i++;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
