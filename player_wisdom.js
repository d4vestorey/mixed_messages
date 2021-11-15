var items = ['Stam', 'Campbell', 'Vidic'];
var first_item = items[Math.floor(Math.random() * items.length)];

var items2 = ['Beckham', 'Giggs', 'Scholes'];
var second_item = items2[Math.floor(Math.random() * items.length)];

var items3 = ['Cole', 'Yorke', 'van Nistelrooy'];
var third_item = items3[Math.floor(Math.random() * items.length)];

let combined = (`The defender is: ${first_item}; The midfielder is: ${second_item}; The striker is: ${third_item}`);

console.log(combined);