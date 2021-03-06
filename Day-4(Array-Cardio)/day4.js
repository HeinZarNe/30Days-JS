const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const fifteens = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1599)
console.table(fifteens)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const fullnames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
console.table(fullnames)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
console.table(ordered)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const lived = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
}, 0)
console.log(lived)

// 5. Sort the inventors by years lived

const mostTime = inventors.sort((a, b) => {
    let guy = a.passed - a.year
    let nextGuy = b.passed - b.year
    return guy > nextGuy ? 1 : -1
})
console.table(mostTime)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris



// 7. sort Exercise
// Sort the people alphabetically by last name
const alphabet = people.sort((lastOne, nextOne) => {

    let [aLastName, aFirstName] = lastOne.split(",")
    let [bLastName, bFirstName] = nextOne.split(",")
    return aLastName > bLastName ? 1 : -1
})
console.log(alphabet)


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

let transportation = data.reduce((obj, item) => {

    if (!obj[item]) {

        obj[item] = 0

    }

    obj[item]++

        return obj

}, {})

console.log(transportation)