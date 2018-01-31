function findChildren(santasList, children) {
    return children.sort().filter( s => santasList.includes( s ) );
}
/*    children.forEach(child => {
        santasList.forEach(s => {
            if(child.toLowerCase() === s.toLowerCase()){

                var longerLength = Math.max(child.length, s.length);
                for(var i = 0; i < longerLength; i++){
                    if (child[i] !== s[i]){
                        console.log(child);
                        return i;

                    }
                    console.log(child);
                    break;
                }
            }
        });

    });

}
*/

let santasList = ["Tom", "Errol", "Sam", "mistyMay","Peter","Jennifer", "macMerphy"];
let children = ["Errol", "Peter", "jennifer", "mistymay", "MacMerphy"];

console.log(findChildren(santasList, children));
