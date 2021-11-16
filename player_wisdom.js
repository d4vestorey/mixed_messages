// Object to contain a selection of Man Utd players stored by position
const manUtdPlayers = {
    goalKeepers: ['Schmeichel', "van der Gouw", "Bosnic", "van der Sar"],
    defenders: ["Pallister", "Bruce", "Stam", "Ferdinand"],
    midfielder1: ["Keane", "Scholes", "Butt"],
    midfielder2: ["Beckham", "Giggs", "Veron"],
    forward: ["van Nistelrooy", "Cole", "Yorke", "Solskjaer"]
};
// empty array to holds results
let team = [];

// random number generator to use with for in loop
let randomSelect = arrayLength => {
	return Math.floor(Math.random() * arrayLength);
}

// for in loop with switch statement that pushes result of each case (position) to the team array
for(let property in manUtdPlayers){
    let randomIndex = randomSelect(manUtdPlayers[property].length);
    switch (property) {
        case 'goalKeepers':
            team.push(manUtdPlayers[property][randomIndex]);
            break;
        case 'defenders':
            team.push(manUtdPlayers[property][randomIndex]);
            break;
        case 'midfielder1':
            team.push(manUtdPlayers[property][randomIndex]);
            break;
        case 'midfielder2':
            team.push(manUtdPlayers[property][randomIndex]);
            break;
        case 'forward':
            team.push(manUtdPlayers[property][randomIndex]);
            break;
    }
}
console.log(team.join(', '));
  