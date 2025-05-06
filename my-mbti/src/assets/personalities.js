export const personalities = {
    INTJ: {
        mybp: 'INTJ',
        title: 'The Mastermind',
        spriteUrl: '/sprites/INTJ.png',
        compatible: ['ENFP', 'ENTP', 'INFJ'],
        incompatible: ['ESFP', 'ISFP', 'ESFJ'],
        race: 'Norwegian Forest cat',
        job: 'Grand Strategist',
        item: 'Crystal Ball of Foresight',
        desc: `Norwegian Forest cats are intelligent, self-reliant, and quietly poised. 
        As the Mastermind you are a strategic visionary, always plotting several moves ahead 
        as if life were a grand chess game. You get along best with imaginative planners and clash with unpredictable free spirits.`,
        stats: ['Intelligence: 95', 'Wisdom: 90', 'Charisma: 65', 'Defense: 75'],
    },
    INTP: {
        mybp: 'INTP',
        title: 'The Logician',
        spriteUrl: '/sprites/INTP.png',
        compatible: ['ENFP', 'ENTJ', 'INFP'],
        incompatible: ['ESFJ', 'ISFJ', 'ESTJ' ],
        race: 'Sphynx cat',
        job: 'Artificer',
        desc: `Sphynx cats are unconventional, brainy, and always poking into nooks and crannies. 
        As the Logician you are a quirky idea factory, forever tinkering, easy-going but fiercely logical. 
        You bond with fellow intellectual explorers and clash with those who are stern or overly emotional.`,
        stats: ['Intelligence: 99', 'Wisdom: 85', 'Dexterity: 65', 'Luck: 50'],
    },
    ENTJ: {
        mybp: 'ENTJ',
        title: 'The Commander',
        spriteUrl: '/sprites/ENTJ.png',
        compatible: ['INTP', 'ENTP', 'INTJ' ],
        incompatible: ['ISFP', 'INFP', 'ESFP' ],
        race: 'Siamese cat',
        job: ' Warlord',
        desc: `Siamese cats are vocal, bossy, and regal, clearly running the household.
        loves taking charge and turning big plans into reality. As the Commander, 
        you are a natural leader rallying others with confident logic and expect competence. 
        You bond best with quick thinkers and go-getters but clash with laid-back or sensitive souls.`,
        stats: ['Charisma: 90', 'Intelligence: 90', 'Strength: 75', 'Initiative: 95'],
    },
    ENTP: {
        mybp: 'ENTP',
        title: 'The Debater',
        spriteUrl: '/sprites/ENTP.png',
        compatible: ['INFJ', 'INTJ', 'ENFP'],
        incompatible: ['ISFJ', 'ESFJ', 'ISTJ'],
        race: 'Cheshire cat',
        job: 'Sorcerer of Chaos',
        desc: `Cheshire cats are clever, mischievous, and one step ahead in the game of curiosity. 
        As the Debater you are quick-witted charmers and born innovators, always ready to challenge ideas as the devils advocate. 
        You get along famously with those who enjoy witty banter and clash with more traditional or sensitive types.`,
        stats: ['Charisma: 90', 'Intelligence: 90', 'Luck: 75', 'Crit Rate: 80'],
    },
    INFJ: {
        mybp: 'INFJ',
        title: 'The Sage',
        spriteUrl: '/sprites/INFJ.png',
        compatible: ['ENFP', 'ENTP', 'INTJ'],
        incompatible: ['ESTP', 'ESFP', 'ISTP'],
        race: 'Russian Blue cat',
        job: 'Scholar',
        desc: `Russian Blue cats are calm, watchful, and seemingly psychic about peoples moods. 
        As the Sage you are a compassionate visionary who intuitively understands people’s hopes and fears. 
        You form profound connections with those who share similar values and clash with aggressive or inconsiderate types.`,
        stats: ['Charisma: 80', 'Intelligence: 85', 'Wisdom: 95', 'Mana: 75'],
    },
    INFP: {
        mybp: 'INFP',
        title: 'The Dreamer',
        spriteUrl: '/sprites/INFP.png',
        compatible: ['ENFJ', 'ENFP', 'INFJ'],
        incompatible: ['ESTJ', 'ENTJ', 'ESTP'],
        race: 'Persian cat',
        job: 'Druid',
        desc: `Persian cats are affectionate, peaceful, and a bit of a daydreamer basking in the sun.
        As the Dreamer you see the good in others and champion causes close to your heart. 
        You connect best with people who appreciate your caring, creative soul and clash with no-nonsense pragmatists.`,
        stats: ['Charisma: 85', 'Wisdom: 90', 'Luck: 78', 'Mana : 82'],
    },
    ENFJ: {
        mybp: 'ENFJ',
        title: 'The Protagonist',
        spriteUrl: '/sprites/ENFJ.png',
        compatible: ['INFP', 'INFJ', 'ESFJ'],
        incompatible: ['ISTP', 'ESTP', 'INTP'],
        race: 'Maine Coon cat',
        job: 'Paladin',
        desc: `Maine Coon cats are sociable, protective, and absolute units.
        As the "maine" protagonist you are a natural leader driven by a desire to help others grow. 
        Warm and articulate, you cultivate harmony with ease and find fast friends in those who share your enthusiasm. 
        You clash with fiercely independent or aloof types.`,
        stats: ['Charisma: 95', 'Wisdom: 85', 'Hit Points: 80', 'Defense: 75'],
    },
    ENFP: {
        mybp: 'ENFP',
        title: 'The Campaigner',
        spriteUrl: '/sprites/ENFP.png',
        compatible: ['INFJ', 'INTJ', 'INFP'],
        incompatible: ['ISTJ', 'ESTJ', 'ISFJ'],
        race: 'Orange Tabby cat',
        job: 'Adventurer',
        desc: `Orange Tabby cats are playful, affectionate, and into everything at once.
        As the Campaigner you are a free spirit brimming with creativity and 
        warmth as every day is an adventure and every stranger a potential friend. 
        You click with people who share your curiosity and zest but clash against overly strict or routine-bound folks.`,
        stats: ['Charisma: 90', 'Dexterity: 75', 'Luck: 85', 'Wisdom: 78'],
    },
    ISTJ: {
        mybp: 'ISTJ',
        title: 'The Inspector',
        spriteUrl: '/sprites/ISTJ.png',
        compatible: ['ESTJ', 'ISFJ', 'ESFJ'],
        incompatible: ['ENFP', 'ENTP', 'INFP'],
        race: 'British Shorthair cat',
        job: 'Stalwart Knight',
        desc: `British Shorthair cats are reserved, dignified, and no-nonsense, preferring routine and comfy order. 
        As the Inspector you are hard-working and dutiful, valuing tradition, facts, and a well-organized plan. 
        People tend to count on you to be the responsible and detail-oriented one. 
        You bond with others who prove reliable and respectful and clash with those who are erratic or careless.`,
        stats: ['Defense: 95', 'Intelligence: 80', 'Constitution: 90', 'Accuracy: 88'],
    },
    ISFJ: {
        mybp: 'ISFJ',
        title: 'The Guardian Angel',
        spriteUrl: '/sprites/ISFJ.png',
        compatible: ['ESFJ', 'ISTJ', 'ENFJ'],
        incompatible: ['ENTP', 'ENFP', 'ESTP'],
        race: 'Ragdoll cat',
        job: 'White Mage',
        desc: `Ragdoll cats are gentle, affectionate, and happiest in the comfort of home and family.
        As the Guardian Angel you are a nurturing caregiver with incredible empathy and a strong sense of responsibility to your loved ones.
        You tend to avoid arguments and prefer to maintain harmony and peace, thriving around those who appreciate your warmth 
        and clashing with abrasive or overly analytical types.`,
        stats: ['Constitution: 85', 'Intelligence: 90', 'Wisdom: 78', 'Charisma: 75'],
    },
    ESTJ: {
        mybp: 'ESTJ',
        title: 'The Executive',
        spriteUrl: '/sprites/ESTJ.png',
        compatible: ['ISTJ', 'ESFJ', 'ESTP'],
        incompatible: ['INFP', 'INTP', 'ENFP'],
        race: 'Siberian cat',
        job: 'Warlord',
        desc: `Siberian cats are proud, fearless, and authoritative yet loving with their family, keeping everyone in line.
        As the Executive you take-charge and love to bring structure and order to any chaos. 
        You value people who pull their weight and follow through and clash with overly impulsive or sensitive individuals.`,
        stats: ['Charisma: 85', 'Strength: 80', 'Defense: 88', 'Accuracy: 90'],
    },
    ESFJ: {
        mybp: 'ESFJ',
        title: 'The Consul',
        spriteUrl: '/sprites/ESFJ.png',
        compatible: ['ISFJ', 'ESTJ', 'ENFJ'],
        incompatible: ['INTP', 'INTJ', 'ENTP'],
        race: 'Birman cat',
        job: 'Cleric',
        desc: `Birman cats are loving, people-oriented, and always underfoot seeking affection or supervising the household.
        As the Consul you are a sociable caretaker who excels at creating comfort and shouldering burdens. 
        You are the friend who remembers everyone’s birthday and brings the group together, bonding well with people who value your warmth and dependability
        and clash with detached, overly sarcastic types`,
        stats: ['Charisma: 92', 'Defense: 85', 'Wisdom: 78', 'Hit Points: 80'],
    },
    ISTP: {
        mybp: 'ISTP',
        title: 'The Virtuoso',
        spriteUrl: '/sprites/ISTP.png',
        compatible: ['ESTP', 'INTP', 'ISFP'],
        incompatible: ['ENFJ', 'ESFJ', 'ENFP'],
        race: 'Feral Alley cat',
        job: 'Rogue',
        desc: `Feral Alley cats are independent, stealthy, and street-smart, prowling solo and answering to no one.
        As the Virtuoso you are a cool-headed troubleshooter and adventure lover who moves through life with a lockpick set in hand and a daredevil twinkle in your eye. 
        You jive with those who respect independence and practical skills and clash with anyone who micromanages or brings needless drama.`,
        stats: ['Dex: 92', 'Intelligence: 78', 'Initiative: 80', 'Crit Rate: 99'],
    },
    ISFP: {
        mybp: 'ISFP',
        title: 'The Lone Wanderer',
        spriteUrl: '/sprites/ISFP.png',
        compatible: ['ESFP', 'ISFJ', 'INFP'],
        incompatible: ['ENTJ', 'ESTJ', 'ENFJ'],
        race: 'Calico cat',
        job: 'Ranger',
        desc: `Calico cats are quietly independent with a unique style, affectionate on their own terms and a bit elusive when they want to be.
        As a Lone Wanderer you are daringly creative as you live in the moment, sneaking off to paint the sunset or help a lost creature in the middle of the journey.
        You befriend those who encourage your free-spirited artistry but clash against controlling or critical personalities.`,
        stats: ['Dexterity: 90', 'Wisdom: 80', 'Luck: 85', 'Charisma: 78'],
    },
    ESTP: {
        mybp: 'ESTP',
        title: 'The Dynamo',
        spriteUrl: '/sprites/ESTP.png',
        compatible: ['ISTP', 'ESFP', 'ESTJ'],
        incompatible: ['INFJ', 'INFP', 'ISFJ'],
        race: 'Spotted Bengal cat',
        job: 'Barbarian',
        desc: `Spotted Bengal cats are athletic, curious, and a little wild, likely to knock things over in pursuit of fun.
        As the Dyanmo you are bold, direct, and always ready for action as you prefer to leap into the fray vs sitting around planning.
        You vibe with fellow thrill-seekers and straight-shooters and clash with cautious or overly introspective types.`,
        stats: ['Dexterity: 92', 'Initiative: 99', 'Strength: 85', 'Crit Rate: 88'],
    },
    ESFP: {
        mybp: 'ESFP',
        title: 'The Entertainer',
        spriteUrl: '/sprites/ESFP.png',
        compatible: ['ESFJ', 'ISFP', 'ESTP'],
        incompatible: ['INTJ', 'INTP', 'ISTJ'],
        race: 'Siamese-mix cat',
        job: 'Bard',
        desc: `Siamese-mix cats or “party cats” are affectionate, loud, and the center of attention knocking stuff off your desk just because.
        As the Entertainer you live to spread joy as a vivacious performer. You are the friend who turns life into a party wherever they go 
        getting along effortlessly with people who share your energy and clash with those who dampen the mood or demand solitude.`,
        stats: ['Charisma: 90', 'Intelligence: 90', 'Luck: 75', 'Crit Rate: 80'],
    },
}