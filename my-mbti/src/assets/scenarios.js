// scenarios.js
export const scenarios = {
  // 1) Friends night out → Extraversion vs Introversion (two Likert items)
  start: {
    id: 'start',
    bg: '/firstDichotomy/intro_blob.png',
    text: 'Prologue — The Last Night on Earth: Neon lights fade as you and your friends spill into the night air. In big social settings, you naturally step into the spotlight—starting the karaoke, rallying the group, keeping the energy up.',
    dichotomy: 0,
    choices: [
      { label: '1 - Not at all likely', next: 'start_followup', score: 1 },
      { label: '2', next: 'start_followup', score: 1 },
      { label: '3 - Neutral', next: 'start_followup', score: 2 },
      { label: '4', next: 'start_followup', score: 2 },
      { label: '5 - Very likely', next: 'start_followup', score: 3 },
    ],
  },
  start_followup: {
    id: 'start_followup',
    bg: '/firstDichotomy/karaoke_blob.png',
    text: 'The city hums. Your friends tug you from circle to circle, introducing new faces with every step. You feel more energized by fresh conversations and group chaos than by slipping out early.',
    dichotomy: 0,
    choices: [
      { label: '1 - Not at all likely', next: 'isekai', score: 1 },
      { label: '2', next: 'isekai', score: 1 },
      { label: '3 - Neutral', next: 'isekai', score: 2 },
      { label: '4', next: 'isekai', score: 2 },
      { label: '5 - Very likely', next: 'isekai', score: 3 },
    ],
  },

  // Transition to isekai
  isekai: {
    id: 'isekai',
    bg: '/firstDichotomy/truckun.png',
    text: 'A comically timed honk cuts through your laughter. Truck-kun appears, as if summoned by narrative convenience. Darkness—then softness. You awaken somewhere else with whiskers, tiny paws, and nine chances to reroll your fate.',
    choices: [{ label: 'continue', next: 'secondDichotomy', score: 0 }],
  },

  /* <-------------------------------- 2nd Dichotomy (S vs N) --------------------------------> */
  secondDichotomy: {
    id: 'secondDichotomy',
    bg: '/secondDichotomy/kitty_stats.png',
    text: 'Chapter I — The Crystal Stacks: You awake a jobless kitten in a library of prismatic glass and floating tomes. To find your way, you rely on concrete clues—book spines, etched runes, pawprints—more than on hunches or patterns.',
    dichotomy: 1,
    choices: [
      { label: '1 - Not at all likely', next: 'sense_followup', score: 3 },
      { label: '2', next: 'sense_followup', score: 3 },
      { label: '3 - Neutral', next: 'sense_followup', score: 2 },
      { label: '4', next: 'sense_followup', score: 1 },
      { label: '5 - Very likely', next: 'sense_followup', score: 1 },
    ],
  },
  sense_followup: {
    id: 'sense_followup',
    bg: '/secondDichotomy/library.png',
    text: 'Pages whisper riddles, shelves re-arrange themselves. Step-by-step instructions comfort you more than leaps of symbolism or prophetic vibes.',
    dichotomy: 1,
    choices: [
      { label: '1 - Not at all likely', next: 'thirdDichotomy', score: 3 },
      { label: '2', next: 'thirdDichotomy', score: 3 },
      { label: '3 - Neutral', next: 'thirdDichotomy', score: 2 },
      { label: '4', next: 'thirdDichotomy', score: 1 },
      { label: '5 - Very likely', next: 'thirdDichotomy', score: 1 },
    ],
  },

  /* <-------------------------------- 3rd Dichotomy (T vs F) --------------------------------> */
  thirdDichotomy: {
    id: 'thirdDichotomy',
    bg: '/thirdDichotomy/3Start.png',
    text: 'Chapter II — The Chamber of Heart and Claw: Guardians prowl around a ruby heart, and decisions carry weight. You tend to weigh pros and cons with cool logic rather than prioritize harmony and feelings.',
    dichotomy: 2,
    choices: [
      { label: '1 - Not at all likely', next: 'think_followup', score: 3 },
      { label: '2', next: 'think_followup', score: 3 },
      { label: '3 - Neutral', next: 'think_followup', score: 2 },
      { label: '4', next: 'think_followup', score: 1 },
      { label: '5 - Very likely', next: 'think_followup', score: 1 },
    ],
  },
  think_followup: {
    id: 'think_followup',
    bg: '/thirdDichotomy/3B.png',
    text: 'A lantern spirit and a lost gardener argue about the path home. You would deliver the blunt truth if it leads to the right outcome—even if it ruffles fur.',
    dichotomy: 2,
    choices: [
      { label: '1 - Not at all likely', next: 'fourthDichotomy', score: 3 },
      { label: '2', next: 'fourthDichotomy', score: 3 },
      { label: '3 - Neutral', next: 'fourthDichotomy', score: 2 },
      { label: '4', next: 'fourthDichotomy', score: 1 },
      { label: '5 - Very likely', next: 'fourthDichotomy', score: 1 },
    ],
  },

  /* <-------------------------------- 4th Dichotomy (J vs P) --------------------------------> */
  fourthDichotomy: {
    id: 'fourthDichotomy',
    bg: '/fourthDichotomy/4Start.png',
    text: 'Finale — The Garden of Shifting Paths: The maze breathes, gates bloom and wither, and stars keep time. You prefer clear plans, structure, and checking tasks off a list over keeping things open-ended.',
    dichotomy: 3,
    choices: [
      { label: '1 - Not at all likely', next: 'judge_followup', score: 3 },
      { label: '2', next: 'judge_followup', score: 3 },
      { label: '3 - Neutral', next: 'judge_followup', score: 2 },
      { label: '4', next: 'judge_followup', score: 1 },
      { label: '5 - Very likely', next: 'judge_followup', score: 1 },
    ],
  },
  judge_followup: {
    id: 'judge_followup',
    bg: '/fourthDichotomy/4B.png',
    text: 'A clockwork sundial ticks at the garden’s heart. Faced with branching paths, you would rather decide quickly and follow the plan than wander on impulse.',
    dichotomy: 3,
    choices: [
      { label: '1 - Not at all likely', next: 'end', score: 3 },
      { label: '2', next: 'end', score: 3 },
      { label: '3 - Neutral', next: 'end', score: 2 },
      { label: '4', next: 'end', score: 1 },
      { label: '5 - Very likely', next: 'end', score: 1 },
    ],
  },

  // End screen
  end: {
    id: 'end',
    bg: '/fourthDichotomy/evoKitty.png',
    text: 'Epilogue — You have finished the trials. The new world admins unroll a scroll, ink still drying, and proclaim you to be...',
    choices: [{ label: 'continue', next: '', score: 0, id: 'end' }],
  },
}
