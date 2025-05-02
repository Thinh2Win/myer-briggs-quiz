// scenarios.js
export const scenarios = {
    start: {
      id: 'start',
      bg: '/firstDichotomy/intro_blob.png',
      text: "You are walking home from a night out with your friends! Your heart is full as you recall memories of the night. You think of ",
      choices: [
        { label: "Successfully sneaking away from the party to go home early, you old now and need sleep", next: 'start0A', score: 1},
        { label: "Singing your heart out (terribly) at karaoke with your friends and 2 soju towers.", next: 'start0B', score: 2},
        { label: "How lucky you were finally finding your friends in the crowd of a concert", next: 'start0C', score: 3},
      ]
    },
    start0A: {
      id: 'start0A',
      bg: '/firstDichotomy/party_blob.png',
      text: "...",
      choices: [
        { label: "Continue", next: 'startA', score: 0},
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
    start0B: {
      id: 'start0B',
      bg: '/firstDichotomy/karaoke_blob.png',
      text: "Ahhhh yes, here you are at karaoke",
      choices: [
        { label: "Continue", next: 'startB', score: 0},
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
    start0C: {
      id: 'start0C',
      bg: '/firstDichotomy/rave_blob.png',
      text: "!!!",
      choices: [
        { label: "Continue", next: 'startC', score: 0},
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
      choices: [{ label: "continue", next: 'startC', score: 0}]  // empty signals “game over”
    },

   /* <-------------------------------- 2nd Dichotomy --------------------------------> */

   secondDichotomy: {
    id: 'secondDichotomy',
    bg: '/secondDichotomy/intro_blob.png',
    text: "You are walking home from a night out with your friends! Your heart is full as you recall memories of the night. You think of ",
    choices: [
      { label: "", next: 'start0D', score: 1},
      { label: "", next: 'start0E', score: 2},
      { label: "", next: 'start0F', score: 3},
    ]
  },
    end: {
      id: 'end',
      text: "You’ve answered all questions! Here’s your type…",
      choices: []  // empty signals “game over”
    }
  }
  