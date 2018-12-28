'use strict';
function isMultipleOfSeventeen(a){
return a.filter(a%17===1);
}
module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
