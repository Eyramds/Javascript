

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

    return (chaine.split(/\s|_/)).map(word => ucfirst(word.toLowerCase())).join(" ");
}

function camelCase(chaine) {

  if (typeof chaine !== "string" || chaine === "" )
    {
        return "";
    }

    return (chaine.split(/\s|_/)).map(word => ucfirst(word.toLowerCase())).join("");
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

    chaine.replace(/A/gi , 4);
    chaine.replace(/E/gi , 3);
    chaine.replace(/I/gi , 1);
    chaine.replace(/O/gi , 0);
    chaine.replace(/U/gi , '(_)');
    chaine.replace(/Y/gi , 7);

   return chaine.replace(/[AEIOUY]/gi , function(e){
        switch(e.toLowerCase()){
            case 'a': return 4;
            case 'e': return 3;
            case 'i': return 1;
            case 'o': return 0;
            case 'u': return '(_)';
            case 'y': return 7;
        }
    })
}

function prop_access(objet, chaine) {
    if (typeof chaine !== "string" || chaine === ""|| typeof objet !== "object" )
    {
        return "";
    }
    
    let chaineReverse = [];
     
    for(word of (chaine.split('.')) )
    {
        chaineReverse.push((word.split('')).reverse().join(""));
    }
    return chaineReverse.join(" ");
}
  
function verlan(chaine) {
    if (typeof chaine !== "string" || chaine === "" )
    {
        return "";
    }
    
    return chaine.split(' ').map(word => (word.split('')).reverse().join("")).join(" ");
}

function yoda(chaine) {
    if (typeof chaine !== "string" || chaine === "" )
    {
        return "";
    }

    return chaine.split(' ').reverse().join(" ");
}

console.log(verlan('toggleCase is the_coolest'));
