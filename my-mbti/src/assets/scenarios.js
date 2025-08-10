// scenarios.js
// Normal scoring increases with likelihood; reversed flips it for opposing poles
const LIKERT_SCORES_ASC = [1, 1, 2, 2, 3];
const LIKERT_SCORES_DESC = [3, 3, 2, 1, 1];

function makeLikertChoices(nextNodeId, scores) {
  return scores.map((score) => ({ next: nextNodeId, score }));
}

export const scenarios = {
  // 1) Friends night out → Extraversion vs Introversion (two Likert items)
  start: {
    id: 'start',
    bg: 'rave_blob.png',
    text: 'The Last Night on Earth: Neon lights fade as you and your friends spill into the night air. You naturally step into the spotlight, rallying the group, keeping the energy up!',
    dichotomy: 0,
    choices: makeLikertChoices('start_followup', LIKERT_SCORES_ASC),
  },
  start_followup: {
    id: 'start_followup',
    bg: 'intro_blob.png',
    text: 'The city hums. Your friends tug you from circle to circle, introducing new faces with every step. You feel the need to slip out early to recharge.',
    dichotomy: 0,
    choices: makeLikertChoices('isekai', LIKERT_SCORES_ASC),
  },

  // Transition to isekai
  isekai: {
    id: 'isekai',
    bg: 'truckun.png',
    text: 'A comically timed honk cuts through your thoughts. Truck-kun appears, as if summoned by narrative convenience.',
    choices: [{ label: 'continue', next: 'secondDichotomy', score: 0 }],
  },

  /* <-------------------------------- 2nd Dichotomy (Sensing vs iNtuition) --------------------------------> */
  secondDichotomy: {
    id: 'secondDichotomy',
    bg: 'library.png',
    text: 'You awaken as a kitten in a library of prismatic glass. To find your way, you rely on concrete clues more so than your gut feeling.',
    dichotomy: 1,
    choices: makeLikertChoices('sense_followup', LIKERT_SCORES_ASC),
  },
  sense_followup: {
    id: 'sense_followup',
    bg: 'kitty_raven.png',
    text: 'After some time wandering you have befriended a raven for guidance. You prefer reaching the destination over the journey.',
    dichotomy: 1,
    choices: makeLikertChoices('thirdDichotomy', LIKERT_SCORES_DESC),
  },

  /* <-------------------------------- 3rd Dichotomy (Thinking vs Feeling) --------------------------------> */
  thirdDichotomy: {
    id: 'thirdDichotomy',
    bg: '3Start.png',
    text: 'The raven has led you to the Chamber of Heart and Claw. Guardians prowl around a ruby heart, triggering your intrusive thoughts to swipe it. You weigh the pros and cons with logistics and facts rather than prioritizing harmony.',
    dichotomy: 2,
    choices: makeLikertChoices('think_followup', LIKERT_SCORES_DESC),
  },
  think_followup: {
    id: 'think_followup',
    bg: '3B.png',
    text: 'You have been caught by the guardians and attempt to present a clear, candid case. You will state the truth directly if it leads to the right outcome—even if it ruffles fur.',
    dichotomy: 2,
    choices: makeLikertChoices('fourthDichotomy', LIKERT_SCORES_DESC),
  },

  /* <-------------------------------- 4th Dichotomy (Judging vs Perceiving) --------------------------------> */
  fourthDichotomy: {
    id: 'fourthDichotomy',
    bg: '4Start.png',
    text: 'The guardians have thrown you into the Garden of Shifting Paths: The maze breathes; the walls bloom and wither. Faced with branching paths, you would rather decide promptly and follow the plan than keep options open and wander on impulse.',
    dichotomy: 3,
    choices: makeLikertChoices('judge_followup', LIKERT_SCORES_DESC),
  },
  judge_followup: {
    id: 'judge_followup',
    bg: '4C.png',
    text: '2 Years have passed and you wave goodbye to the friends you made along the way. You chose to embrace the journey rather than a plan and map to the exit.',
    dichotomy: 3,
    choices: makeLikertChoices('end', LIKERT_SCORES_DESC),
  },

  // End screen
  end: {
    id: 'end',
    bg: 'evo_kitty.png',
    text: 'You have finished the quiz and trials! The new world proclaims you to be...',
    choices: [{ label: 'continue', next: '', score: 0, id: 'end' }],
  },
}
