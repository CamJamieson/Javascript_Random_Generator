let noun = ["animal", "beast", "beggar", "monster", "criminal" , "skipper", "crook"];
let adjective = ["beautiful", "majestic", "fancy", "extravagant", "powerful"];
let verb = ["yell", "shout", "bellow", "call out"];
let adverb = ["fully", "rightfully", "totally", "completely"];
let pluralNoun = ["matey", "chaps", "people", "strangers"];
let partOfTheBody = ["arm", "limb", "leg", "hand", "finger"];

let myMadLibs = `Ye can always pretend to be a bloodthirsty (noun), threatening everyone by waving yer (adjective) sword in the air, but until ye learn to (verb) like a pirate, ye'll never be (adverb) accepted as an authentic (noun). So here's what ye do: Cleverly work into yer daily converations (adjective) pirate phrases such as "Ahoy there, (plural-noun)", "Avast, ye (plural-noun)", and "Shiver me (plural-noun)". Remember to drop all yer gs when ye say such words as sailin', splittin', and fightin'. This will give ye a/an (part-of-the-body) start to being recognized as a swashbucklin' (noun). Once ye have the lingo down pat, it helps to wear a three-cornered (noun) on yer head, stash a/an (noun) in yer pants, and keep a/an (noun) perched atop yer (part-of-the-body). Aye, now ye be a real pirate!`;

let madLibsArray = myMadLibs.split(' ');


function randomWord(type){
     let randomNum = Math.floor(Math.random() * type.length);
     return type[randomNum];
}



let changeableLibs = [];
let tempVar = "";
let tempVar2 = "";
let tempVar3 = "";
let tempVar4 = "";


//Loop to go through entire word array
for (let a = 0; a < madLibsArray.length; a++){
    tempVar = madLibsArray[a];
    //checks if there is the bracket indicating a fill in the blank
    if(tempVar[0] === "("){
        //checks the place that the close bracket is
        for(let b = 1; b < tempVar.length; b++){
            if(tempVar[b] === ")"){
                if(b === tempVar.length - 1){
                    tempVar3 = tempVar.slice(1,b);
                    if(tempVar3 === "noun"){
                        changeableLibs.push(randomWord(noun));
                    } else if(tempVar3 === "adjective"){
                        changeableLibs.push(randomWord(adjective));
                    } else if(tempVar3 === "verb"){
                        changeableLibs.push(randomWord(verb));
                    } else if(tempVar3 === "adverb"){
                        changeableLibs.push(randomWord(adverb));
                    } else if(tempVar3 === "plural-noun"){
                        changeableLibs.push(randomWord(pluralNoun));
                    } else if(tempVar3 === "part-of-the-body"){
                        changeableLibs.push(randomWord(partOfTheBody));
                    } else{changeableLibs.push("ERROR");}
                }
                
                
                else{
                    tempVar2 = tempVar.slice(1, b);

                    if(tempVar2 === "noun"){
                        tempVar4 = randomWord(noun);
                    } else if(tempVar2 === "adjective"){
                        tempVar4 = randomWord(adjective);
                    } else if(tempVar2 === "verb"){
                        tempVar4 = randomWord(verb);
                    } else if(tempVar2 === "adverb"){
                        tempVar4 = randomWord(adverb);
                    } else if(tempVar2 === "plural-noun"){
                        tempVar4 = randomWord(pluralNoun);
                    } else if(tempVar2 === "part-of-the-body"){
                        tempVar4 = randomWord(partOfTheBody);
                    } else{changeableLibs.push("ERROR");}


                    for(let c = b+1; c < tempVar.length; c++){
                        tempVar4 += tempVar[c];
                    }
                    changeableLibs.push(tempVar4)
                }
            }
        }
        
        
    }
    else{changeableLibs.push(tempVar);}

}

let finishedMadLib = changeableLibs.join(' ');
console.log(finishedMadLib);