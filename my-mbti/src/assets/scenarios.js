// scenarios.js
export const scenarios = {
  start: {
    id: 'start',
    bg: '/firstDichotomy/intro_blob.png',
    text: "You are walking home from a night out with your friends! Your heart is full as you recall memories of the night. You think of ",
    dichotomy: 0,
    choices: [
      { label: "Successfully sneaking away from the party to go home early, you old now and need sleep", next: 'startA', score: 1},
      { label: "Singing your heart out (terribly) at karaoke with your friends and 2 soju towers.", next: 'startB', score: 2},
      { label: "How lucky you were finally finding your friends in the crowd of a concert", next: 'startC', score: 3},
    ]
  },
  startA: {
    id: 'startA',
    bg: '/firstDichotomy/party_blob.png',
    text: "Thinking back, you remember escaping by",
    dichotomy: 0,
    choices: [
      { label: "Pretending to use the bathroom and hopping out the window", next: 'startA1', score: 1},
      { label: "Phasing through a bush to escape the other side", next: 'startA2', score: 2},
      { label: "Announcing to the people that the parties over cause you’re leaving ", next: 'startA3', score: 3},
      
    ]
  },
  startA1: {
    id: 'start0A',
    bg: '/firstDichotomy/firstA/choiceA.png',
    text: "You murmur an “excuse me” and go to the restroom. Inside, you unlatch the tiny window and vanish before anyone notices",
    choices: [
      { label: "Continue", next: 'isekai', score: 0},
    ]
  },
  startA2: {
    id: 'start0A',
    bg: '/firstDichotomy/firstA/choiceB.png',
    text: "You drift toward the nearest shrubbery, pressing your back against the leaves. You slide through the greenery and depart hidden by rustling foliage",
    choices: [
      { label: "Continue", next: 'isekai', score: 0},
    ]
  },
  startA3: {
    id: 'start0A',
    bg: '/firstDichotomy/firstA/choiceC.png',
    text: "You stand on a table and shout “PARTIES OVER CAUSE IM GOING HOME”, everybody claps as you walk out the door",
    choices: [
      { label: "Continue", next: 'isekai', score: 0},
    ]
  },
  startB: {
    id: 'startB',
    bg: '/firstDichotomy/karaoke_blob.png',
    text: "With a couple of drinks in your system you find the courage to",
    dichotomy: 0,
    choices: [
      { label: "Awkwardly mouth the words from the sidelines, still shy to raise your voice", next: 'startB1', score: 1},
      { label: "Be a backup singer for your friends, hyping them up as you go", next: 'startB2', score: 2},
      { label: "Own the mic and show your friends they can't embarass themselves as much as you can embarass yourself", next: 'startB3', score: 3},
      
    ]
  },
  startB1: {
    id: 'startB1',
    bg: '/firstDichotomy/firstB/choiceA.png',
    text: "You quietly mouth the words from the corner thinking you're too sober for this shit",
    choices: [
      { label: "Continue", next: 'isekai', score: 0},
    ]
  },
  startB2: {
    id: 'startB2',
    bg: '/firstDichotomy/firstB/choiceB.png',
    text: "You join in on choruses only, adding surprisingly decent backup vocals while your friends take the lead",
    choices: [
      { label: "Continue", next: 'isekai', score: 0},
    ]
  },
  startB3: {
    id: 'startB3',
    bg: '/firstDichotomy/firstB/choiceC.png',
    text: `WHOOOO wanna rock with JENNIE? Keep your hair done, nails done, like JENNIE, Who else got 'em obsessed, like JENNIE?
Like, like, like (JENNIE, JENNIE, JENNIE, JENNIE)`,
    choices: [
      { label: "Continue", next: 'isekai', score: 0},
    ]
  },
  startC: {
    id: 'startC',
    bg: '/firstDichotomy/firstC/followUp.png',
    text: "You recall your best friend Natalie coming to your group with a vodka redbull in each hand! you immediately ",
    dichotomy: 0,
    choices: [
      { label: "Start sobbing, you already have one from the last round T_T", next: 'startC1', score: 1},
      { label: "Take her credit card so she can’t buy anymore", next: 'startC2', score: 2},
      { label: "Hand the drinks off and go with her to buy more for the group!", next: 'startC3', score: 3},
      
    ]
  },
  startC1: {
    id: 'startC1',
    bg: '/firstDichotomy/firstC/choiceA.png',
    text: "Seeing Natalie with drinks in hand, you look at yours through your blurred vision to notice each hand holding one from the previous round. You breakdown in tears as the drinks keep coming ",
    choices: [
      { label: "Continue", next: 'isekai', score: 0},
    ]
  },
  startC2: {
    id: 'startC2',
    bg: '/firstDichotomy/firstC/choiceB.png',
    text: "You gently slip Natalie’s credit card from her hand, and tuck it into your pocket ensuring those Vodka Red Bulls are the last round she buys tonight",
    choices: [
      { label: "Continue", next: 'isekai', score: 0},
    ]
  },
  startC3: {
    id: 'startC3',
    bg: '/firstDichotomy/firstC/choiceC.png',
    text: "Grinning, you hand them to the nearest friends, then hook arms with Natalie, weaving through the crowd toward the concession stands to keep the party fueled for everyone",
    choices: [
      { label: "Continue", next: 'isekai', score: 0},
    ]
  },
  isekai: {
    id: 'isekai',
    bg:'/firstDichotomy/truckun.png',
    text: "A sudden car horn snaps you out of your thoughts! Oh No its truk-kun!!!",
    choices: [{ label: "continue", next: 'secondDichotomy', score: 0}]
  },

   /* <-------------------------------- 2nd Dichotomy --------------------------------> */

  secondDichotomy: {
    id: 'secondDichotomy',
    bg: '/secondDichotomy/kitty_stats.png',
    text: "You awaken in another world as a kitty! Confused and jobless, you set out on a mission to find yourself!",
    choices: [
      { label: "continue", next: 'start2', score: 0},
    ]
  },
  start2: {
    id: 'start2',
    bg: '/secondDichotomy/library.png',
    text: "You blink and find yourself in a crystal library of meowgic. Within towering glass shelves, enchanted tomes whisper of hidden realms and arcane lore. What do you do first?",
    dichotomy: 1,
    choices: [
      { label: "You creep silently through the glowing crystal corridors, your whiskers tingling with magical energy as you carefully avoid the notice of busy wizard apprentices", next: 'startD', score: 1},
      { label: "You discover you can speak to the spirit animals of the crystal corridors, forming an unlikely friendship with a ghostly raven ", next: 'startE', score: 2},
      { label: "You snoop through the corridors and randomly touch things that strike your fancy", next: 'startF', score: 3},
      
    ]
  },
  startD: {
    id: 'startD',
    bg: '/secondDichotomy/dimsum_kitty.png',
    text: "You accidentally knock over an entire steamer of dimsum while reaching for a dumpling, you forgot you don’t have thumbs!! Instinctively you",
    dichotomy: 1,
    choices: [
      { label: "Flatten your ears from embarrassment and skedaddle, leaving behind sticky paw prints that smell faintly of shumai", next: 'startD1', score: 1},
      { label: "Channel your embarrassment into an unexpected burst of feline magic!", next: 'startD2', score: 2},
      { label: "Perform an elaborate series of aerial somersaults collecting all the dumplings before they fall", next: 'startD3', score: 3},
    ]
  },
  startD1: {
    id: 'startD1',
    bg: '/secondDichotomy/secondA/choiceA.png',
    text: "You slink beneath the long, star-speckled robes of distracted wizard apprentices, as you calculate which shadowy corner would be safest to lay low while the chaos unfolds",
    choices: [
      { label: "continue", next: 'thirdDichotomy', score: 0},
    ]
  },
  startD2: {
    id: 'startD2',
    bg: '/secondDichotomy/secondA/choiceB.png',
    text: "The scattered dumplings float gently back into formation. Placing your paw directly into the sauce dish you trace a glowing rune that transforms the dumplings into miniature food golems",
    choices: [
      { label: "continue", next: 'thirdDichotomy', score: 0},
    ]
  },
  startD3: {
    id: 'startD3',
    bg: '/secondDichotomy/secondA/choiceC.png',
    text: "Instinctively, you use your new found dexterity to quickly gather the dumplings before they touch the floor. Indeed such a feat was truly impossible in your previous past life",
    choices: [
      { label: "continue", next: 'thirdDichotomy', score: 0},
    ]
  },
  startE: {
    id: 'startE',
    bg: '/secondDichotomy/kitty_raven.png',
    text: "While perched atop the castle's highest tower you connect with the raven and plan your next activity. You decide to",
    dichotomy: 1,
    choices: [
      { label: "Curl up beside your raven companion and trauma dump your feelings.", next: 'startE1', score: 1},
      { label: "Create the perfect cat burglar team to pull innocent heists", next: 'startE2', score: 2},
      { label: "Search for a way to level up and get stronger together", next: 'startE3', score: 3},
    ]
  },
  startE1: {
    id: 'startE1',
    bg: '/secondDichotomy/secondB/choiceA.png',
    text: "You start talking about the KBBQ restaurant you miss and how you're now unable to use chopsticks. The Raven listens to your 1st world problems, silently judging you as you spew nonsense",
    choices: [
      { label: "continue", next: 'thirdDichotomy', score: 0},
    ]
  },
  startE2: {
    id: 'startE2',
    bg: '/secondDichotomy/secondB/choiceB.png',
    text: "Slipping through narrow passages while the raven scouts ahead, you successfully raid a room full of enchanted objects shaped like foods from your former world",
    choices: [
      { label: "continue", next: 'thirdDichotomy', score: 0},
    ]
  },
  startE3: {
    id: 'startE3',
    bg: '/secondDichotomy/secondB/choiceC.png',
    text: "You and the raven combine your unique energies! Your nine cat lives and their twilight essence activate an ancient moonstone that transforms into a map leading to the next area to grind",
    choices: [
      { label: "continue", next: 'thirdDichotomy', score: 0},
    ]
  },
  startF: {
    id: 'startF',
    bg: '/secondDichotomy/dragon_kitty.png',
    text: "You bond with an ancient staff that transforms you into a majestic cat-dragon hybrid, allowing you to soar through rainbow skies. With your new found abilities you decide to",
    dichotomy: 1,
    choices: [
      { label: "Curl up on a cloud cushion to reminisce", next: 'startF1', score: 1},
      { label: "Host a sky-feast to celebrate!", next: 'startF2', score: 2},
      { label: "Search for a way to un-isekai yourself!", next: 'startF3', score: 3},
    ]
  },
  startF1: {
    id: 'startF1',
    bg: '/secondDichotomy/secondC/choiceA.png',
    text: "You drift into a magical meditation that reveals glimpses of your past life making hot pot and singing karaoke, causing a single glittering tear to form at the corner of your eye",
    choices: [
      { label: "continue", next: 'thirdDichotomy', score: 0},
    ]
  },
  startF2: {
    id: 'startF2',
    bg: '/secondDichotomy/secondC/choiceB.png',
    text: "You feast with the friendly spirits who taught you how to control your powers. Conjuring spectral versions of foods that taste almost like the ones from home",
    choices: [
      { label: "continue", next: 'thirdDichotomy', score: 0},
    ]
  },
  startF3: {
    id: 'startF3',
    bg: '/secondDichotomy/secondC/choiceC.png',
    text: "You found a book. There was a book this whole time ._.",
    choices: [
      { label: "continue", next: 'thirdDichotomy', score: 0},
    ]
  },

     /* <-------------------------------- 3rd Dichotomy --------------------------------> */
  thirdDichotomy: {
    id: 'thirdDichotomy',
    bg: '/thirdDichotomy/3Start.png',
    text: "You blink and find yourself in the Chamber of Heart and Claw! A grand hall with a glowing ruby heart and guardians at its center. To obtain the heart you plan to",
    dichotomy: 2,
    choices: [
      { label: "Observe the guardians movements with calculated precision", next: 'startG', score: 1},
      { label: "Approach the guardian cats and engage in a respectful conversation", next: 'startH', score: 2},
      { label: "Roll onto your back in complete vulnerability to overload them with cuteness ", next: 'startI', score: 3},
    ]
  },
  startG: {
    id: 'startG',
    bg: '/thirdDichotomy/3A.png',
    text: "You crouch in the shadows analyzing the guardian cats' patrol routes calculating their exact positions and behaviors. With this information you",
    dichotomy: 2,
    choices: [
      { label: "Wait patiently for the perfect window to snatch the ruby heart", next: 'startG1', score: 1},
      { label: "Attempt to charm and bond with the guardians", next: 'startG2', score: 2},
      { label: "Decide to just abandon all strategic planning and simply walk straight toward the guardians to bargain", next: 'startG3', score: 3},
    ]
  },
  startG1: {
    id: 'startG1',
    bg: '/thirdDichotomy/thirdA/choiceA.png',
    text: "A sudden noise causes the guardians to turn around and investigate, giving you the chance to quickly yoink the ruby and skedaddle! ",
    choices: [
      { label: "continue", next: 'fourthDichotomy', score: 0},
    ]
  },
  startG2: {
    id: 'startG2',
    bg: '/thirdDichotomy/thirdA/choiceB.png',
    text: "You notice one particularly fierce-looking guardian cat has whiskers that twitch when you hum the opening theme of One Piece, inspiring you to sing with confidence! The guardians back away slowly off screen",
    choices: [
      { label: "continue", next: 'fourthDichotomy', score: 0},
    ]
  },
  startG3: {
    id: 'startG3',
    bg: '/thirdDichotomy/thirdA/choiceC.png',
    text: "With Churu treats in hand, you easily get the guardians to agree to the trade",
    choices: [
      { label: "continue", next: 'fourthDichotomy', score: 0},
    ]
  },
  startH: {
    id: 'startH',
    bg: '/thirdDichotomy/3B.png',
    text: "Using a combination of logical points and heartfelt memories of returning home, you find a middle ground between asserting your rights and acknowledging their sacred duty. They agree to give you the ruby heart after you’ve",
    dichotomy: 2,
    choices: [
      { label: "Challenged the senior guardian to a battle of wits ", next: 'startH1', score: 1},
      { label: "Weaved an enchanted story tapestry in the air between you and the guardian to tell your story", next: 'startH2', score: 2},
      { label: "You gently place your paw atop the guardian's, sharing a direct emotional connection through connected toe beans ", next: 'startH3', score: 3},
    ]
  },
  startH1: {
    id: 'startH1',
    bg: '/thirdDichotomy/thirdB/choiceA.png',
    text: "You attempt to solve an arcane puzzle cube where each correct move goes deeper into a Schrödinger cat scenario and your mind becomes everything everywhere all at once",
    choices: [
      { label: "continue", next: 'fourthDichotomy', score: 0},
    ]
  },
  startH2: {
    id: 'startH2',
    bg: '/thirdDichotomy/thirdB/choiceB.png',
    text: "Logical plot points intertwine with emotional moments from your adventures, the guardian's eyes widen when your magic reveals how much of a degenerate you were in your past life",
    choices: [
      { label: "continue", next: 'fourthDichotomy', score: 0},
    ]
  },
  startH3: {
    id: 'startH3',
    bg: '/thirdDichotomy/thirdB/choiceC.png',
    text: "The guardian experiences your memory of waiting hours to eat at a hyped restaurant just for the food to be mid. Tears form in the elder cat's eyes as they recognize a foolish kindred spirit",
    choices: [
      { label: "continue", next: 'fourthDichotomy', score: 0},
    ]
  },
  startI: {
    id: 'startI',
    bg: '/thirdDichotomy/3C.png',
    text: "You expose your belly to the guardian cats, getting them to lower their guard for a chance to",
    dichotomy: 2,
    choices: [
      { label: "Gracefully execute a series of nimble movements to nab the ruby heart", next: 'startI1', score: 1},
      { label: "Magically project a glowing ball of yarn containing your most treasured memories", next: 'startI2', score: 2},
      { label: "Hit them with a heartfelt plea ", next: 'startI3', score: 3},
    ]
  },
  startI1: {
    id: 'startI1',
    bg: '/thirdDichotomy/thirdC/choiceA.png',
    text: "As you make off with the prize, the guardians are in utter disbelief that they fell for such an obvious honey pot",
    choices: [
      { label: "continue", next: 'fourthDichotomy', score: 0},
    ]
  },
  startI2: {
    id: 'startI2',
    bg: '/thirdDichotomy/thirdC/choiceB.png',
    text: "You show the guardians your treasure trove of One Piece theories and Pokemon Go knowledge ",
    choices: [
      { label: "continue", next: 'fourthDichotomy', score: 0},
    ]
  },
  startI3: {
    id: 'startI3',
    bg: '/thirdDichotomy/thirdC/choiceC.png',
    text: "Voice as soft as a purr, you recount how the ruby’s warm glow once comforted lonely kittens. Moved by your open vulnerability and the sincerity in your plea, the Guardians step forward, tears glistening, and entrust you with the heart in an act of compassion",
    choices: [
      { label: "continue", next: 'fourthDichotomy', score: 0},
    ]
  },

  
     /* <-------------------------------- 4th Dichotomy --------------------------------> */
  fourthDichotomy: {
    id: 'fourthDichotomy',
    bg: '/fourthDichotomy/4Start.png',
    text: "You blink and find yourself in the Garden of Shifting Paths! Winding hedges that form ever-changing walkways under floating lanterns. Your first instinct is to",
    dichotomy: 3,
    choices: [
      { label: "Meticulously mark each turn with a glowing paw print, ensuring you'll never get lost in this maze", next: 'startJ', score: 1},
      { label: "Observe. You notice the lantern spirits follow patterns and create a timetable for their movements, organizing them by color and brightness the same way you arrange your Omeowkase set", next: 'startK', score: 2},
      { label: "Abandon any notion of finding the exit, instead choosing to leap joyfully from lantern to lantern, making friends with each spirit you meet and learning their stories and embracing the journey", next: 'startL', score: 3},
    ]
  },
  startJ: {
    id: 'startJ',
    bg: '/fourthDichotomy/4A.png',
    text: "As you continue to wander the maze, you grow tired of the brute force approach and instead decide to",
    dichotomy: 3,
    choices: [
      { label: "Just stick with the plan", next: 'startJ1', score: 1},
      { label: "Charm a playful lantern spirit", next: 'startJ2', score: 2},
      { label: "Abandon any fixed path entirely, choosing to follow your instincts", next: 'startJ3', score: 3},
      
    ]
  },
  startJ1: {
    id: 'startJ1',
    bg: '/fourthDichotomy/fourthA/choiceA.png',
    text: "You carefully sketch a detailed map of the labyrinth on a magical leaf, continuing to always stick left to avoid taking duplicate paths",
    choices: [
      { label: "continue", next: 'end', score: 0},
    ]
  },
  startJ2: {
    id: 'startJ1',
    bg: '/fourthDichotomy/fourthA/choiceB.png',
    text: "You convince a lantern spirit into becoming your companion through the labyrinth, letting it lead you on unexpected detours that might reveal hidden treasures and eventually the exit",
    choices: [
      { label: "continue", next: 'end', score: 0},
    ]
  },
  startJ3: {
    id: 'startJ1',
    bg: '/fourthDichotomy/fourthA/choiceC.png',
    text: "You choose instead to leap joyfully from light to light, letting each new encounter determine your next move",
    choices: [
      { label: "continue", next: 'end', score: 0},
    ]
  },
  startK: {
    id: 'startK',
    bg: '/fourthDichotomy/4B.png',
    text: "It seems some lanterns are sporadic and seem to be tricking you; almost attempting to outsmart you. Changing your strategy you decide to",
    dichotomy: 3,
    choices: [
      { label: "Document each lantern spirit's behavior on a magical leaf scroll to find which are trustworthy", next: 'startK1', score: 1},
      { label: "Use your sensitive whiskers to feel the subtle energy changes as lanterns float by", next: 'startK2', score: 2},
      { label: "Abandon all plans and go with you gut feeling", next: 'startK3', score: 3},
      
    ]
  },
  startK1: {
    id: 'startK1',
    bg: '/fourthDichotomy/fourthB/choiceA.png',
    text: "Using your keen senses you notice the slightest tells for which spirits are trying to trick you and which are helping you. When you are 100% certain you follow the correct spirit out the labyrinth  ",
    choices: [
      { label: "continue", next: 'end', score: 0},
    ]
  },
  startK2: {
    id: 'startK1',
    bg: '/fourthDichotomy/fourthB/choiceB.png',
    text: "You make a mental note of each feeling. Gathering information and following spirits that give the most pleasant sensations, you find hidden pathways that lead you out the labyrinth",
    choices: [
      { label: "continue", next: 'end', score: 0},
    ]
  },
  startK3: {
    id: 'startK1',
    bg: '/fourthDichotomy/fourthB/choiceC.png',
    text: "You simply follow whatever glowing spirit catches your fancy at the moment, trusting your new found instincts to guide you through the labyrinth",
    choices: [
      { label: "continue", next: 'end', score: 0},
    ]
  },
  startL: {
    id: 'startL',
    bg: '/fourthDichotomy/4C.png',
    text: "After a 2 year time skip within the Garden of Shifting Paths, you wave good bye to the spirits you have grown so fond of and recall the events that led you here",
    dichotomy: 3,
    choices: [
      { label: "You arrange selected spirits in a circle and conduct a formal tea ceremony serving spectral dimsum every day", next: 'startL1', score: 1},
      { label: "Your competitive nature lead you to having fun competitions with spirits, going head to head on a day to day basis", next: 'startL2', score: 2},
      { label: "You continue leaping from lantern to lantern with no particular destination, letting each spirit's story inspire your next move as flowers bloom beneath your paws", next: 'startL3', score: 3},
      
    ]
  },
  startL1: {
    id: 'startL1',
    bg: '/fourthDichotomy/fourthC/choiceA.png',
    text: "As you coexist with the spirits you subconsciously learn the rules and behaviors of the labyrinth itself. There is a specific window you can leave but until then, you choose to enjoy your time with the spirits",
    choices: [
      { label: "continue", next: 'end', score: 0},
    ]
  },
  startL2: {
    id: 'startL2',
    bg: '/fourthDichotomy/fourthC/choiceB.png',
    text: "As you continue winning you continuously level up, eventually becoming recognized and respected by the spirits and the labyrinth itself",
    choices: [
      { label: "continue", next: 'end', score: 0},
    ]
  },
  startL3: {
    id: 'startL3',
    bg: '/fourthDichotomy/fourthC/choiceC.png',
    text: "Continuing to embrace the journey and win over the spirits has allowed you to know the location of the exit, you now choose when you wish to leave and not the labyrinth",
    choices: [
      { label: "continue", next: 'end', score: 0},
    ]
  },
  end: {
    id: 'end',
    bg: '/fourthDichotomy/evoKitty.png',
    text: "You have reached the end of your grind! You have evolved into",
    choices: [{label: "continue", next: '', score: 0, id: 'end'}] 
  }
}
  