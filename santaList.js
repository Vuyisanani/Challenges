function findChildren(santasList, children) {
    return children.sort().filter( s => santasList.includes( s ) );
}
//Parameter List 1
// var was used to declare the array as we used the same arguments for different parameters
var santasList = ["Tom","Errol","Sam","Peter","Jennifer"];
var children = ["Errol", "Peter", "Jennifer"];
console.log(findChildren(santasList, children));
console.log('----------------------------------------------------------------------');

//Parameter list 2
var santasList = ["Tom", "Errol", "Sam", "mistyMay","Peter","Jennifer", "macMerphy"];
var children = ["Errol", "Peter", "jennifer", "mistymay", "MacMerphy"];

console.log(findChildren(santasList, children));
