// scenarios.js
export const scenarios = {
  start: {
    id: 'start',
    bg: '/firstDichotomy/intro_blob.png',
    text: "You are walking home from a night out with your friends! Your heart is full as you recall memories of the night. You think of ",
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
    text: "You dive into the Rainbow Abyss clutching your feather-staff tightly between your teeth, following your cat-dragon instincts to hunt down the legendary Yarn of Fate and the string that was severed representing your past life",
    choices: [
      { label: "continue", next: 'thirdDichotomy', score: 0},
    ]
  },

     /* <-------------------------------- 3rd Dichotomy --------------------------------> */
  thirdDichotomy: {
    id: 'thirdDichotomy',
    bg: '/secondDichotomy/kitty_stats.png',
    text: "You blink and find yourself in the Chamber of Heart and Claw! A grand hall where paw-shaped gavel statues guard a glowing ruby heart",
    choices: [
      { label: "continue", next: 'start2', score: 0},
    ]
  },
  start3: {
    id: 'start3',
    bg: '/secondDichotomy/library.png',
    text: "You blink and find yourself in a crystal library of meowgic. Within towering glass shelves, enchanted tomes whisper of hidden realms and arcane lore. What do you do first?",
    choices: [
      { label: "You creep silently through the glowing crystal corridors, your whiskers tingling with magical energy as you carefully avoid the notice of busy wizard apprentices", next: 'startD', score: 1},
      { label: "You discover you can speak to the spirit animals of the crystal corridors, forming an unlikely friendship with a ghostly raven ", next: 'startE', score: 2},
      { label: "You snoop through the corridors and randomly touch things that strike your fancy", next: 'startF', score: 3},
      
    ]
  },
  end: {
    id: 'end',
    text: "You’ve answered all questions! Here’s your type…",
    choices: []  // empty signals “game over”
  }
}
  