let noun = ["animal", "beast", "beggar", "monster", "criminal" , "skipper", "crook"];
let adjective = ["beautiful", "majestic", "fancy", "extravagant", "powerful"];
let verb = ["yell", "shout", "bellow", "call out"];
let adverb = ["fully", "rightfully", "totally", "completely"];
let pluralNoun = ["matey", "chaps", "people", "strangers"];
let partOfTheBody = ["arm", "limb", "leg", "hand", "finger"];

let myMadLibs = `Ye can always pretend to be a bloodthirsty (noun), threatening everyone by waving yer (adjective) sword in the air, but until ye learn to (verb) like a pirate, ye'll never be (adverb) accepted as an authentic (noun). So here's what ye do: Cleverly work into yer daily converations (adjective) pirate phrases such as "Ahoy there, (plural-noun)", "Avast, ye (plural-noun)", and "Shiver me (plural-noun)". Remember to drop all yer gs when ye say such words as sailin', splittin', and fightin'. This will give ye a/an (part-of-the-body) start to being recognized as a swashbucklin' (noun). Once ye have the lingo down pat, it helps to wear a three-cornered (noun) on yer head, stash a/an (noun) in yer pants, and keep a/an (noun) perched atop yer (part-of-the-body). Aye, now ye be a real pirate!`;

let madLibsArray = myMadLibs.split(' ');
console.log(madLibsArray);


function randomWord(type){
     let randomNum = Math.floor(Math.random() * type.length);
     return type[randomNum];
}



let changeableLibs = [];
let tempVar = "";
let tempVar2 = "";
for (let a = 0; a < madLibsArray.length; a++){
    console.log(madLibsArray[a]);
    tempVar = madLibsArray[a];
    if(tempVar[0] === "("){
        for(let b = 1; b < tempVar.length; b++){
            if(tempVar[b] === ")"){
                if(b === tempVar.length - 1){
                    changeableLibs.push(tempVar);
                }
                else{
                    tempVar2 = tempVar.slice(0, b+1);
                    for(let c = b+1; c < tempVar.length; c++){
                        tempVar2 += tempVar[c];
                    }
                    
                    changeableLibs.push(tempVar2);
                }
            }
        }
        
        
    }

}

console.log(changeableLibs);