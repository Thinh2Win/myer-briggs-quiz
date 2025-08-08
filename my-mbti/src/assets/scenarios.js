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
    bg: 'intro_blob.png',
    text: 'The Last Night on Earth: Neon lights fade as you and your friends spill into the night air. In big social settings, you naturally step into the spotlight—starting the karaoke, rallying the group, keeping the energy up.',
    dichotomy: 0,
    choices: makeLikertChoices('start_followup', LIKERT_SCORES_ASC),
  },
  start_followup: {
    id: 'start_followup',
    bg: 'rave_blob.png',
    text: 'The city hums. Your friends tug you from circle to circle, introducing new faces with every step. You feel more energized by fresh conversations and group chaos than by slipping out early.',
    dichotomy: 0,
    choices: makeLikertChoices('isekai', LIKERT_SCORES_ASC),
  },

  // Transition to isekai
  isekai: {
    id: 'isekai',
    bg: 'truckun.png',
    text: 'A comically timed honk cuts through your laughter. Truck-kun appears, as if summoned by narrative convenience. Darkness—then softness. You awaken somewhere else with whiskers, tiny paws, and nine chances to reroll your fate.',
    choices: [{ label: 'continue', next: 'secondDichotomy', score: 0 }],
  },

  /* <-------------------------------- 2nd Dichotomy (S vs N) --------------------------------> */
  secondDichotomy: {
    id: 'secondDichotomy',
    bg: 'kitty_stats.png',
    text: 'Trial I — The Crystal Stacks: You awake a jobless kitten in a library of prismatic glass and floating tomes. To find your way, you rely on concrete clues—book spines, etched runes, pawprints—more than on hunches or patterns.',
    dichotomy: 1,
    choices: makeLikertChoices('sense_followup', LIKERT_SCORES_DESC),
  },
  sense_followup: {
    id: 'sense_followup',
    bg: 'library.png',
    text: 'Pages whisper riddles, shelves re-arrange themselves. Step-by-step instructions comfort you more than leaps of symbolism or prophetic vibes.',
    dichotomy: 1,
    choices: makeLikertChoices('thirdDichotomy', LIKERT_SCORES_DESC),
  },

  /* <-------------------------------- 3rd Dichotomy (T vs F) --------------------------------> */
  thirdDichotomy: {
    id: 'thirdDichotomy',
    bg: '3Start.png',
    text: 'Trial II — The Chamber of Heart and Claw: Guardians prowl around a ruby heart, and decisions carry weight. You tend to weigh pros and cons with cool logic rather than prioritize harmony and feelings.',
    dichotomy: 2,
    choices: makeLikertChoices('think_followup', LIKERT_SCORES_DESC),
  },
  think_followup: {
    id: 'think_followup',
    bg: '3B.png',
    text: 'You argue with the guardians and stir drama. You deliver the blunt truth if it leads to the right outcome—even if it ruffles fur.',
    dichotomy: 2,
    choices: makeLikertChoices('fourthDichotomy', LIKERT_SCORES_DESC),
  },

  /* <-------------------------------- 4th Dichotomy (J vs P) --------------------------------> */
  fourthDichotomy: {
    id: 'fourthDichotomy',
    bg: '4Start.png',
    text: 'Final Trial — The Garden of Shifting Paths: The maze breathes, gates bloom and wither, and stars keep time. You prefer clear plans, structure, and checking tasks off a list over keeping things open-ended.',
    dichotomy: 3,
    choices: makeLikertChoices('judge_followup', LIKERT_SCORES_DESC),
  },
  judge_followup: {
    id: 'judge_followup',
    bg: '4B.png',
    text: 'A clockwork sundial ticks at the garden’s heart. Faced with branching paths, you would rather decide quickly and follow the plan than wander on impulse.',
    dichotomy: 3,
    choices: makeLikertChoices('end', LIKERT_SCORES_DESC),
  },

  // End screen
  end: {
    id: 'end',
    bg: 'evoKitty.png',
    text: 'You have finished the trials. The new world admins unroll a scroll, ink still drying, and proclaim you to be...',
    choices: [{ label: 'continue', next: '', score: 0, id: 'end' }],
  },
}
