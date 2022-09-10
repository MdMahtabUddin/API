// PH 33-2 Intro to JSON, JSON Structure, parse, stringify

const shop ={
    name: 'shopable',
    
    address: '43/c chanmia housing'
};

console.log(shop)
// object to string convert 
console.log(JSON.stringify(shop))
// string to convert normal js object using JSON.parse