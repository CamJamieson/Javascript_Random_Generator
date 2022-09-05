# Project Plan
## Project Scope
For this project, you will build a message generator program. Every time a user runs a program, they should get a new, randomized output. You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes. To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. Take what you know of JavaScript syntax so far to build the program and customize it to your liking.
## My Project Concept
Rather than making a simple phrase that won't make complete sense, my project will be a mad lips generator.
### The Mad Libs Template
https://i.pinimg.com/originals/bd/4e/6c/bd4e6c20a005258c6814a05fe11dddf0.png <br>
Ye can always pretend to be a bloodthirsty <u>**(noun)**</u>, threatening everyone by waving yer <u>**(adjective)**</u> sword in the air, but until ye learn to <u>**(verb)**</u> like a pirate, ye'll never be <u>**(adverb)**</u> accepted as an authentic <u>**(noun)**</u>. So here's what ye do: Cleverly work into yer daily converations <u>**(adjective)**</u> pirate phrases such as "Ahoy there, <u>**(plural-noun)**</u>", "Avast, ye <u>**(plural-noun)**</u>", and "Shiver me <u>**(plural-noun)**</u>". Remember to drop all yer gs when ye say such words as *sailin'*, *splittin'*, and *fightin'*. This will give ye a/an <u>**(part-of-the-body)**</u> start to being recognized as a swashbucklin' <u>**(noun)**</u>. Once ye have the lingo down pat, it helps to wear a three-cornered <u>**(noun)**</u> on yer head, stash a/an <u>**(noun)**</u> in yer pants, and keep a/an <u>**(noun)**</u> perched atop yer <u>**(part-of the-body)**</u>. Aye, now ye be a real pirate!

### Necessary Word Arrays
- noun
- adjective
- verb
- adverb
- plural-noun
- part of the body

It would also be a good idea to only let the word be used once, so that the mad libs doesn't have repetative words... ***(Not yet complete. I tested this program numerous times and didn't notice many repeating words, so it is going to stay completely random for now)***

### List of Words in the Word Arrays
    let noun = ["animal", "beast", "beggar", "monster", "criminal" , "skipper", "crook"];
    let adjective = ["beautiful", "majestic", "fancy", "extravagant", "powerful"];
    let verb = ["yell", "shout", "bellow", "call out"];
    let adverb = ["fully", "rightfully", "totally", "completely"];
    let pluralNoun = ["matey", "chaps", "people", "strangers"];
    let partOfTheBody = ["arm", "limb", "leg", "hand", "finger"];

## Project Output (Three of Many Possible Variations)
1. Ye can always pretend to be a bloodthirsty skipper, threatening everyone by waving yer fancy sword in the air, but until ye learn to yell like a pirate, ye'll never be rightfully accepted as an authentic skipper. So here's what ye do: Cleverly work into yer daily converations extravagant pirate phrases such as "Ahoy there, people", "Avast, ye strangers", and "Shiver me people". Remember to drop all yer gs when ye say such words as sailin', splittin', and fightin'. This will give ye a/an limb start to being recognized as a swashbucklin' monster. Once ye have the lingo down pat, it helps to wear a three-cornered beggar on yer head, stash a/an skipper in yer pants, and keep a/an beast perched atop yer limb. Aye, now ye be a real pirate!
2. Ye can always pretend to be a bloodthirsty animal, threatening everyone by waving yer fancy sword in the air, but until ye learn to yell like a pirate, ye'll never be rightfully accepted as an authentic beast. So here's what ye do: Cleverly work into yer daily converations powerful pirate phrases such as "Ahoy there, chaps", "Avast, ye chaps", and "Shiver me chaps". Remember to drop all yer gs when ye say such words as sailin', splittin', and fightin'. This will give ye a/an hand start to being recognized as a swashbucklin' criminal. Once ye have the lingo down pat, it helps to wear a three-cornered skipper on yer head, stash a/an criminal in yer pants, and keep a/an skipper perched atop yer limb. Aye, now ye be a real pirate!
3. Ye can always pretend to be a bloodthirsty beggar, threatening everyone by waving yer beautiful sword in the air, but until ye learn to bellow like a pirate, ye'll never be totally accepted as an authentic skipper. So here's what ye do: Cleverly work into yer daily converations majestic pirate phrases such as "Ahoy there, strangers", "Avast, ye people", and "Shiver me people". Remember to drop all yer gs when ye say such words as sailin', splittin', and fightin'. This will give ye a/an leg start to being recognized as a swashbucklin' crook. Once ye have the lingo down pat, it helps to wear a three-cornered monster on yer head, stash a/an beggar in yer pants, and keep a/an beggar perched atop yer leg. Aye, now ye be a real pirate!
