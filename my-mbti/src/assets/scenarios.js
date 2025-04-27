// scenarios.js
export const scenarios = {
    start: {
      id: 'start',
      bg: '/images/react.svg',
      text: "You arrive at a moonlit clearing. Do you…",
      choices: [
        { label: "Explore the ruined altar", next: 'altar', trait: 'I' },
        { label: "Head back to camp",       next: 'camp',  trait: 'E' },
      ]
    },
    altar: {
      id: 'altar',
      bg: '/images/react.svg',
      text: "You brush away moss and discover runes. You…",
      choices: [
        { label: "Trace the runes with your finger", next: 'trace', trait: 'N' },
        { label: "Photograph them for later",           next: 'photo', trait: 'S' },
      ]
    },
    // …more nodes…
    end: {
      id: 'end',
      text: "You’ve answered all questions! Here’s your type…",
      choices: []  // empty signals “game over”
    }
  }
  