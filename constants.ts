import { Question } from './types';

export const QUESTIONS: Question[] = [
  // ===== Present Simple: 1-30 =====
  {
    type: "mcq",
    text: "The swamp spirits ___ warnings when travelers step on the noisy roots.\n (Choose the best form.)",
    options: ["give", "gives", "are giving"],
    correctIndex: 0,
    explanation: "Subject 'spirits' is plural → use base form 'give'. It describes a habit/fact."
  },
  {
    type: "mcq",
    text: "The Time Tree usually ___ bright blue light at midnight.\n (Choose the best form.)",
    options: ["shines", "shine", "is shining"],
    correctIndex: 0,
    explanation: "'The Time Tree' is singular + 'usually' indicates habit → shines."
  },
  {
    type: "mcq",
    text: "In the Swamp Forest, the fog ___ new paths every morning.\n (Choose the best form.)",
    options: ["creates", "create", "is creating"],
    correctIndex: 0,
    explanation: "'every morning' indicates routine; 'fog' is uncountable/singular → creates."
  },
  {
    type: "input",
    text: "Every guardian ___ (check) the Time fruit before sunrise.",
    answer: "checks",
    explanation: "'Every guardian' is singular → checks."
  },
  {
    type: "input",
    text: "The swamp fog often ___ (hide) the safe bridges.",
    answer: "hides",
    explanation: "Subject 'fog' is singular + frequency adverb 'often' → hides."
  },
  {
    type: "input",
    text: "The wooden paths ___ (change) direction whenever the moon is full.",
    answer: "change",
    explanation: "'paths' is plural + 'whenever' implies habit → change."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The spirits gives clues to players who are lost.\"\nWhat is the correct form of \"gives\"?",
    answer: "give",
    explanation: "Subject 'spirits' is plural, should be 'give'."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The Swamp Forest change shape every night.\"\nWhat is the correct form of \"change\"?",
    answer: "changes",
    explanation: "'The Swamp Forest' is singular → changes."
  },
  {
    type: "mcq",
    text: "The swamp fog ___ thicker right now.\n (Choose the best form.)",
    options: ["is becoming", "becomes", "become"],
    correctIndex: 0,
    explanation: "'right now' → Present Continuous (is becoming)."
  },
  {
    type: "mcq",
    text: "The glowing tiles ___ to guide the travelers at the moment.\n (Choose the best form.)",
    options: ["light", "are lighting", "lights"],
    correctIndex: 1,
    explanation: "'at the moment' → Present Continuous 'are lighting'."
  },
  {
    type: "mcq",
    text: "Listen! The spirits ___ from the deep swamp.\n (Choose the best form.)",
    options: ["sings", "are singing", "sing"],
    correctIndex: 1,
    explanation: "'Listen!' implies something happening now → are singing."
  },
  {
    type: "input",
    text: "The Time Tree ___ (lose) its light right now.",
    answer: "is losing",
    explanation: "'right now' → Present Continuous, singular subject → is losing."
  },
  {
    type: "input",
    text: "The wooden bridges ___ (shake) because a thief is approaching.",
    answer: "are shaking",
    explanation: "Action happening now → Present Continuous, plural subject → are shaking."
  },
  {
    type: "input",
    text: "Look! The swamp water ___ (move) backward.",
    answer: "is moving",
    explanation: "'Look!' introduces immediate action → is moving."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The fog is rise around the Time fruit.\"\nWhat is the correct form to replace \"is rise\"?",
    answer: "is rising",
    explanation: "Present Continuous requires be + V-ing → is rising."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The spirits are whispers to each other.\"\nWhat is the correct form to replace \"are whispers\"?",
    answer: "are whispering",
    explanation: "be + V-ing structure → are whispering."
  },
  {
    type: "mcq",
    text: "The swamp spirits ___ many travelers this week.\n (Choose the best form.)",
    options: ["have guided", "guided", "are guiding"],
    correctIndex: 0,
    explanation: "'this week' (unfinished time) → Present Perfect: have guided."
  },
  {
    type: "mcq",
    text: "The fog ___ the bridges three times today.\n (Choose the best form.)",
    options: ["has covered", "covered", "is covering"],
    correctIndex: 0,
    explanation: "'today' + frequency count → Present Perfect has covered."
  },
  {
    type: "input",
    text: "The Time Fruit ___ (lose) some of its power recently.",
    answer: "has lost",
    explanation: "'recently' → Present Perfect, singular → has lost."
  },
  {
    type: "input",
    text: "Several wooden paths ___ (appear) since sunset.",
    answer: "have appeared",
    explanation: "'since sunset' → Present Perfect, plural → have appeared."
  },
  {
    type: "input",
    text: "The swamp guardians ___ (not / finish) their patrol yet.",
    answer: "have not finished",
    explanation: "'yet' in negative sentence → Present Perfect, plural → have not finished."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The bridge has fall into the swamp.\"\nWhat is the correct form of \"fall\"?",
    answer: "fallen",
    explanation: "Present Perfect uses Past Participle (has + PP) → fallen."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The spirits have appear near the Time Tree.\"\nWhat is the correct form of \"appear\"?",
    answer: "appeared",
    explanation: "have + Past Participle → have appeared."
  },
  {
    type: "mcq",
    text: "The glowing swamp fog ___ for hours.\n (Choose the best form.)",
    options: ["has been moving", "moved", "is move"],
    correctIndex: 0,
    explanation: "'for hours' → duration from past to now → Present Perfect Continuous."
  },
  {
    type: "mcq",
    text: "The wooden paths ___ for days, making it hard to cross the swamp.\n (Choose the best form.)",
    options: ["have been shifting", "shift", "are shifted"],
    correctIndex: 0,
    explanation: "'for days' → duration → have been shifting."
  },
  {
    type: "input",
    text: "The swamp water ___ (rise) for a long time, so the lower bridges are gone.",
    answer: "has been rising",
    explanation: "'for a long time' → Perfect Continuous, singular → has been rising."
  },
  {
    type: "input",
    text: "The guardians ___ (search) for the thief since dawn.",
    answer: "have been searching",
    explanation: "'since dawn' → Perfect Continuous, plural → have been searching."
  },
  {
    type: "input",
    text: "The Time Tree ___ (glow) less and less because it is losing power.",
    answer: "has been glowing",
    explanation: "Describes a trend over recent time → has been glowing."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The fog has been rise all morning.\"\nWhat is the correct form to replace \"rise\"?",
    answer: "rising",
    explanation: "has been + V-ing → rising."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The spirits have been whisper to the Time fruit.\"\nWhat is the correct form to replace \"whisper\"?",
    answer: "whispering",
    explanation: "have been + V-ing → whispering."
  },
  // ===== Past Simple: 31-38 =====
  {
    type: "mcq",
    text: "Yesterday, the swamp spirits ___ a warning to the travelers.\n (Choose the best form.)",
    options: ["gave", "give", "giving"],
    correctIndex: 0,
    explanation: "'Yesterday' → Past Simple. gave."
  },
  {
    type: "mcq",
    text: "The Time Tree suddenly ___ all its lights last night.\n (Choose the best form.)",
    options: ["lose", "lost", "loses"],
    correctIndex: 1,
    explanation: "'last night' → Past Simple. lost."
  },
  {
    type: "mcq",
    text: "During the storm, the wooden bridge ___ into the deep swamp.\n (Choose the best form.)",
    options: ["falls", "fell", "falling"],
    correctIndex: 1,
    explanation: "Completed event in the past. fell."
  },
  {
    type: "input",
    text: "The fog suddenly ___ (cover) the path, and we couldn't see anything.",
    answer: "covered",
    explanation: "Single past event → covered."
  },
  {
    type: "input",
    text: "The guardians ___ (find) strange footprints near the Time fruit yesterday.",
    answer: "found",
    explanation: "'yesterday' → found."
  },
  {
    type: "input",
    text: "The glowing tiles ___ (turn) red when the thief stepped on them.",
    answer: "turned",
    explanation: "Single past event. turned."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The swamp fog appear suddenly during the night.\"\nWhat is the correct form of \"appear\"?",
    answer: "appeared",
    explanation: "Past event → appeared."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The spirits guide us through the dark forest last evening.\"\nWhat is the correct form of \"guide\"?",
    answer: "guided",
    explanation: "'last evening' → guided."
  },
  // ===== Past Continuous: 39-46 =====
  {
    type: "mcq",
    text: "The swamp fog ___ slowly when the moon appeared.\n (Choose the best form.)",
    options: ["was moving", "moved", "is moving"],
    correctIndex: 0,
    explanation: "Action in progress when another event happened. was moving."
  },
  {
    type: "mcq",
    text: "The spirits ___ along the river when we reached the Time Tree.\n (Choose the best form.)",
    options: ["are walking", "were walking", "walked"],
    correctIndex: 1,
    explanation: "Action in progress in the past. were walking."
  },
  {
    type: "mcq",
    text: "The bridges ___ violently while the storm was forming.\n (Choose the best form.)",
    options: ["were shaking", "shook", "are shaking"],
    correctIndex: 0,
    explanation: "'while' indicates simultaneous continuous action. were shaking."
  },
  {
    type: "input",
    text: "While we were crossing the swamp, the fog ___ (grow) thicker.",
    answer: "was growing",
    explanation: "'While' + continuous action. was growing."
  },
  {
    type: "input",
    text: "The guardians ___ (watch) the Time fruit when the lights suddenly went out.",
    answer: "were watching",
    explanation: "Background action in progress. were watching."
  },
  {
    type: "input",
    text: "The river ___ (flow) backward when the moon rose.",
    answer: "was flowing",
    explanation: "Action in progress at a specific past time. was flowing."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The fog was rise when we entered the forest.\"\nWhat is the correct form to replace \"was rise\"?",
    answer: "was rising",
    explanation: "was + V-ing → was rising."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The spirits were sings softly near the glowing stones.\"\nWhat is the correct form to replace \"were sings\"?",
    answer: "were singing",
    explanation: "were + V-ing → were singing."
  },
  // ===== Past Perfect: 47-53 =====
  {
    type: "mcq",
    text: "By the time we reached the swamp, the fog ___ away.\n (Choose the best form.)",
    options: ["had already cleared", "already cleared", "clears"],
    correctIndex: 0,
    explanation: "'By the time' + past → Past Perfect (earlier action). had cleared."
  },
  {
    type: "mcq",
    text: "The spirits ___ warnings before the thief entered the forest.\n (Choose the best form.)",
    options: ["had sent", "sent", "were sending"],
    correctIndex: 0,
    explanation: "Action happened before another past action. had sent."
  },
  {
    type: "input",
    text: "The wooden bridges ___ (break) before we arrived.",
    answer: "had broken",
    explanation: "Happened before 'we arrived'. had broken."
  },
  {
    type: "input",
    text: "The guardians ___ (not / finish) their patrol when the storm started.",
    answer: "had not finished",
    explanation: "Incomplete status at a past moment. had not finished."
  },
  {
    type: "input",
    text: "The swamp fog ___ (disappear) by the time the sun rose.",
    answer: "had disappeared",
    explanation: "'by the time' indicates completion before a past point. had disappeared."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The Time Tree had lose all its power before we reached it.\"\nWhat is the correct form of \"lose\"?",
    answer: "lost",
    explanation: "had + PP. PP of lose is lost."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The fog had slowly rise before the guardians noticed it.\"\nWhat is the correct form of \"rise\"?",
    answer: "risen",
    explanation: "had + PP. PP of rise is risen."
  },
  // ===== Past Perfect Continuous: 54-60 =====
  {
    type: "mcq",
    text: "The fog ___ for hours before the bridges collapsed.\n (Choose the best form.)",
    options: ["had been growing", "grew", "was grow"],
    correctIndex: 0,
    explanation: "Duration before a past event. had been growing."
  },
  {
    type: "mcq",
    text: "The guardians ___ for the thief long before they found his footprints.\n (Choose the best form.)",
    options: ["had been searching", "searched", "were search"],
    correctIndex: 0,
    explanation: "Duration before past event. had been searching."
  },
  {
    type: "input",
    text: "The swamp water ___ (rise) for days before the forest flooded.",
    answer: "had been rising",
    explanation: "Duration + past. had been rising."
  },
  {
    type: "input",
    text: "The spirits ___ (watch) the Time fruit for hours before it finally glowed.",
    answer: "had been watching",
    explanation: "Duration + past. had been watching."
  },
  {
    type: "input",
    text: "The fog ___ (move) slowly toward the bridges before we saw it.",
    answer: "had been moving",
    explanation: "Duration + past. had been moving."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The fog had been rise all morning.\"\nWhat is the correct form to replace \"rise\"?",
    answer: "rising",
    explanation: "had been + V-ing → rising."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The guardians had been watch the forest for hours.\"\nWhat is the correct form to replace \"watch\"?",
    answer: "watching",
    explanation: "had been + V-ing → watching."
  },
  // ===== Extra Past Simple: 61-68 =====
  {
    type: "mcq",
    text: "The swamp guardians ___ the thief two days ago.\n (Choose the best form.)",
    options: ["caught", "catch", "catches"],
    correctIndex: 0,
    explanation: "'two days ago' → Past Simple. caught."
  },
  {
    type: "mcq",
    text: "The Time fruit ___ from the tree last week.\n (Choose the best form.)",
    options: ["falls", "fell", "fallen"],
    correctIndex: 1,
    explanation: "'last week' → Past Simple. fell."
  },
  {
    type: "input",
    text: "The wooden paths ___ (change) direction suddenly yesterday.",
    answer: "changed",
    explanation: "'yesterday' → changed."
  },
  {
    type: "input",
    text: "The spirits ___ (sing) a warning song when danger approached.",
    answer: "sang",
    explanation: "Past event. sang."
  },
  {
    type: "input",
    text: "The swamp water ___ (rise) quickly during the storm.",
    answer: "rose",
    explanation: "Past event. rose."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The fog hide the path last night.\"\nWhat is the correct form of \"hide\"?",
    answer: "hid",
    explanation: "'last night' → hid."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The guardians see the thief near the Time Tree yesterday.\"\nWhat is the correct form of \"see\"?",
    answer: "saw",
    explanation: "'yesterday' → saw."
  },
  {
    type: "input",
    text: "The Time Tree ___ (shine) brightly before it lost power.",
    answer: "shone",
    explanation: "Past event. shone."
  },
  // ===== Extra Past Continuous: 69-76 =====
  {
    type: "mcq",
    text: "The swamp creatures ___ strange noises all night.\n (Choose the best form.)",
    options: ["were making", "made", "makes"],
    correctIndex: 0,
    explanation: "'all night' emphasizes duration in past. were making."
  },
  {
    type: "mcq",
    text: "The fog ___ when the travelers entered the forest.\n (Choose the best form.)",
    options: ["was thickening", "thickened", "thickens"],
    correctIndex: 0,
    explanation: "Background action 'when' event happened. was thickening."
  },
  {
    type: "input",
    text: "The wooden bridge ___ (creak) loudly while we crossed it.",
    answer: "was creaking",
    explanation: "'while' → was creaking."
  },
  {
    type: "input",
    text: "The Time Tree ___ (glow) softly when the moon appeared.",
    answer: "was glowing",
    explanation: "Background state. was glowing."
  },
  {
    type: "input",
    text: "The spirits ___ (whisper) secrets while the guardians slept.",
    answer: "were whispering",
    explanation: "Simultaneous action. were whispering."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The swamp water was rise rapidly.\"\nWhat is the correct form to replace \"was rise\"?",
    answer: "was rising",
    explanation: "was + rising."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The bridges were shake during the earthquake.\"\nWhat is the correct form to replace \"were shake\"?",
    answer: "were shaking",
    explanation: "were + shaking."
  },
  {
    type: "input",
    text: "The guardians ___ (patrol) the forest when they heard a scream.",
    answer: "were patrolling",
    explanation: "Action interrupted by event. were patrolling."
  },
  // ===== Extra Past Perfect: 77-83 =====
  {
    type: "mcq",
    text: "The thief ___ before the guardians arrived.\n (Choose the best form.)",
    options: ["had escaped", "escaped", "was escaping"],
    correctIndex: 0,
    explanation: "Action completed before another past action. had escaped."
  },
  {
    type: "mcq",
    text: "The fog ___ the entire forest by the time we woke up.\n (Choose the best form.)",
    options: ["had covered", "covered", "was covering"],
    correctIndex: 0,
    explanation: "Action completed by a time in past. had covered."
  },
  {
    type: "input",
    text: "The Time fruit ___ (fall) before the guardians could catch it.",
    answer: "had fallen",
    explanation: "Earlier past action. had fallen."
  },
  {
    type: "input",
    text: "The spirits ___ (already / warn) us before the danger appeared.",
    answer: "had already warned",
    explanation: "Earlier past action. had already warned."
  },
  {
    type: "input",
    text: "The swamp ___ (change) completely before we returned.",
    answer: "had changed",
    explanation: "Earlier past action. had changed."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The bridge had collapse before we arrived.\"\nWhat is the correct form of \"collapse\"?",
    answer: "collapsed",
    explanation: "had + PP. collapsed."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The guardians had went to search for the thief.\"\nWhat is the correct form of \"went\"?",
    answer: "gone",
    explanation: "had + PP. PP of go is gone."
  },
  // ===== Extra Past Perfect Continuous: 84-90 =====
  {
    type: "mcq",
    text: "The swamp ___ darker for weeks before the guardians noticed.\n (Choose the best form.)",
    options: ["had been getting", "got", "was getting"],
    correctIndex: 0,
    explanation: "Duration before past event. had been getting."
  },
  {
    type: "mcq",
    text: "The fog ___ for days before it finally cleared.\n (Choose the best form.)",
    options: ["had been spreading", "spread", "was spreading"],
    correctIndex: 0,
    explanation: "Duration before past event. had been spreading."
  },
  {
    type: "input",
    text: "The Time Tree ___ (lose) power for months before it died.",
    answer: "had been losing",
    explanation: "Duration before past. had been losing."
  },
  {
    type: "input",
    text: "The guardians ___ (track) the thief for hours before they caught him.",
    answer: "had been tracking",
    explanation: "Duration before past. had been tracking."
  },
  {
    type: "input",
    text: "The swamp creatures ___ (hide) for a long time before they appeared.",
    answer: "had been hiding",
    explanation: "Duration before past. had been hiding."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The fog had been cover the path for hours.\"\nWhat is the correct form to replace \"cover\"?",
    answer: "covering",
    explanation: "had been + V-ing. covering."
  },
  {
    type: "input",
    text: "Error spotting:\n\"The spirits had been wait near the Time Tree.\"\nWhat is the correct form to replace \"wait\"?",
    answer: "waiting",
    explanation: "had been + V-ing. waiting."
  }
];
