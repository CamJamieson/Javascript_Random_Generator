let noun = [];
let adjective = [];
let verb = [];
let adverb = [];
let pluralNoun = [];
let partOfTheBody = [];

let myMadLibs = `Ye can always pretend to be a bloodthirsty (noun), threatening everyone by waving yer (adjective) sword in the air, but until ye learn to (verb) like a pirate, ye'll never be (adverb) accepted as an authentic (noun). So here's what ye do: Cleverly work into yer daily converations (adjective) pirate phrases such as "Ahoy there, (plural-noun)", "Avast, ye (plural-noun)", and "Shiver me (plural-noun)". Remember to drop all yer gs when ye say such words as sailin', splittin', and fightin'. This will give ye a/an (part-of-the-body) start to being recognized as a swashbucklin' (noun). Once ye have the lingo down pat, it helps to wear a three-cornered (noun) on yer head, stash a/an (noun) in yer pants, and keep a/an (noun) perched atop yer (part-of-the-body). Aye, now ye be a real pirate!`;

let madLibsArray = myMadLibs.split(' ');
console.log(madLibsArray);


let changeableLibs = [];
let tempVar = "";

for (let a = 0; a < madLibsArray.length; a++){
    console.log(madLibsArray[a]);
    tempVar = madLibsArray[a];
    if(tempVar[0] === "("){
        changeableLibs.push(tempVar)
    }

}

console.log(changeableLibs);