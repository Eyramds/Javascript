

function ucfirst(chaine) {
    if (typeof chaine !== "string" || chaine === "")
    {
        return "";
    }

    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function capitalize(chaine) {

    if (typeof chaine !== "string" || chaine === "" )
    {
        return "";
    }

    let chaineCapitalized = [];

    for(word of (chaine.split(' ')) )
    {
        chaineCapitalized.push(ucfirst(word.toLowerCase())) ;
    }

    return chaineCapitalized.join(" ");
}

function camelCase(chaine) {

  if (typeof chaine !== "string" || chaine === "" )
    {
        return "";
    }
    
    let chaineCapitalized = [];

    for(word of (chaine.split(' ')) )
    {
        chaineCapitalized.push(ucfirst(word.toLowerCase())) ;

    }

    return chaineCapitalized.join("");
}

function snake_case(chaine) {

    if (typeof chaine !== "string" || chaine === "" )
      {
          return "";
      }
    
      return (chaine.split(' ')).join("_").toLowerCase();
}

function leet(chaine) {

    if (typeof chaine !== "string" || chaine === "" )
    {
        return " ";
    }

    chaine.replace(/aA/ , 4);
    chaine.replaceAll('e' , 3);
    chaine.replace(/iI/ , 1);
    chaine.replace(/iI/ , 0);
    chaine.replace(/uU/ , '_');
    chaine.replace(/yY/ , 7);

    let chaineReverse = [];
     
    for(word of (chaine.split(' ')) )
    {
        let wordReverse = [];

        for( lettre of (word.split(' ')) ) {
            wordReverse.reverse();
        }

        chaineReverse.push(wordReverse.join(""));
    }

    return chaine.replace('e' , 3);
}
  
function verlan(chaine) {
    if (typeof chaine !== "string" || chaine === "" )
    {
        return "";
    }
    
    let chaineReverse = [];
     
    for(word of (chaine.split(' ')) )
    {
        chaineReverse.push((word.split('')).reverse().join(""));
    }
    return chaineReverse.join(" ");
}

function yoda(chaine) {
    if (typeof chaine !== "string" || chaine === "" )
    {
        return "";
    }

    return chaine.split(' ').reverse().join(" ");
}

console.log(capitalize(' test'));
