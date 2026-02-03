export interface QuizQuestion {
  id: number
  type: "multiple-choice" | "fill-blank" | "matching"
  question: string
  englishText?: string
  kannada?: string
  hindi?: string
  options?: string[]
  correctAnswer: string | number
  explanation: string
}

export interface Lesson {
  id: number
  title: string
  language: "kannada" | "hindi"
  difficulty: string
  xpReward: number
  content: string
  keyPoints: string[]
  questions: QuizQuestion[]
}

export const kannadaLessons: Record<number, Lesson> = {
  1: {
    id: 1,
    title: "Alphabet Basics",
    language: "kannada",
    difficulty: "Beginner",
    xpReward: 100,
    content: `The Kannada alphabet (ಕನ್ನಡ ವರ್ಣಮಾಲೆ) is known as Aksharas. There are 16 vowels (ಸ್ವರ) and 34 consonants (ವ್ಯಂಜನ). 
    
    Vowels (Swara):
    ಅ (A), ಆ (Aa), ಇ (I), ಈ (Ii), ಉ (U), ಊ (Uu), ಋ (Ri), ೠ (Rii), ಎ (E), ಏ (Ee), ಐ (Ai), ಒ (O), ಓ (Oo), ಔ (Ou), ಅಂ (Am), ಅಃ (Ah)
    
    Consonants start with:
    ಕ (Ka), ಖ (Kha), ಗ (Ga), ಘ (Gha) - the Ka series
    
    Each consonant has an inherent 'A' sound. When you add vowel marks (ವರ್ಗ), the sound changes. For example:
    ಕ + ಿ = ಕಿ (Ki)
    ಕ + ೆ = ಕೆ (Ke)`,
    keyPoints: [
      "Kannada has 16 vowels and 34 consonants",
      "Each consonant carries an inherent 'A' sound",
      "Vowel marks (diacritics) modify the consonant sound",
      "ಕ (Ka) is the first consonant in the alphabet",
      "Master the basic vowels before learning consonants",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'Which of these is the Kannada letter for "Ka"?',
        options: ["ಕ", "ಖ", "ಗ", "ಘ"],
        correctAnswer: 0,
        explanation: "ಕ (Ka) is the first consonant in the Kannada alphabet.",
      },
      {
        id: 2,
        type: "multiple-choice",
        question: 'Translate to Kannada: "Hello"',
        englishText: "Hello",
        kannada: "ನಮಸ್ಕಾರ",
        options: ["ನಮಸ್ಕಾರ", "ಧನ್ಯವಾದ", "ವಾಯು", "ನೀವು"],
        correctAnswer: 0,
        explanation: 'ನಮಸ್ಕಾರ (Namaskar) means "Hello" in Kannada.',
      },
      {
        id: 3,
        type: "fill-blank",
        question: 'Complete: "How are you?" in Kannada is "ನೀವು ___?"',
        correctAnswer: "ಹೇಗಿದ್ದೀರಾ",
        explanation: 'ಹೇಗಿದ್ದೀರಾ (Hegiddira) means "How are you?" in Kannada.',
      },
    ],
  },
  2: {
    id: 2,
    title: "Common Greetings",
    language: "kannada",
    difficulty: "Beginner",
    xpReward: 100,
    content: `Greetings in Kannada are essential for basic communication. Here are the most common ones:

    ನಮಸ್ಕಾರ (Namaskar) - Hello/Greetings (formal and respectful)
    ಶುಭೋದಯ (Shubhodyaya) - Good morning
    ಶುಭರಾತ್ರಿ (Shubharatri) - Good night/Good evening
    ಸುಸ್ವಾಗತ (Suswagat) - Welcome
    ಪುನರಾಗಮನ (Punaragamana) - Welcome back

    Tip: In Kannada culture, greeting elders with "ನಮಸ್ಕಾರ" (Namaskar) is a sign of respect. You can add "ತಾಯಿ" (Mother) or "ತಂದೆ" (Father) after the greeting.
    Example: "ನಮಸ್ಕಾರ ತಾಯಿ" (Namaskar Tayi) - Hello mother`,
    keyPoints: [
      "ನಮಸ್ಕಾರ (Namaskar) is the most common greeting",
      "Use ಶುಭೋದಯ for morning greetings",
      "ಶುಭರಾತ್ರಿ means both good evening and good night",
      "Greetings show respect and politeness in Kannada culture",
      "Different greetings for different times of day",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'How do you say "Good morning" in Kannada?',
        options: ["ಹಾಯಿ", "ಶುಭೋದಯ", "ಸುಸ್ವಾಗತ", "ಪುನರಾಗಮನ"],
        correctAnswer: 1,
        explanation: 'ಶುಭೋದಯ (Subhodyaya) means "Good morning" in Kannada.',
      },
      {
        id: 2,
        type: "multiple-choice",
        question: 'How do you say "Good night" in Kannada?',
        options: ["ಶುಭರಾತ್ರಿ", "ಸುಸ್ವಾಗತ", "ತಿರುಗಿ", "ನಾನು"],
        correctAnswer: 0,
        explanation: 'ಶುಭರಾತ್ರಿ (Shubharatri) means "Good night" in Kannada.',
      },
    ],
  },
  3: {
    id: 3,
    title: "Family Words",
    language: "kannada",
    difficulty: "Beginner",
    xpReward: 150,
    content: `Family vocabulary is fundamental in Kannada. Here are the key family members:

    Immediate Family:
    ತಂದೆ (Tande) - Father
    ತಾಯಿ (Tayi) - Mother
    ಮಗ (Maga) - Son
    ಮಗಳು (Magalu) - Daughter
    ಅಣ್ಣ (Anna) - Elder brother
    ತಮ್ಮ (Tamma) - Younger brother
    ಅಕ್ಕ (Akka) - Elder sister
    ತಿಮ್ಮ (Timma) - Younger sister

    Extended Family:
    ಅಜ್ಜ (Ajja) - Grandfather
    ಅಜ್ಜಿ (Ajji) - Grandmother
    ಚಿಕ್ಕಪ್ಪ (Chikkappa) - Uncle
    ಚಿಕ್ಕಾಪ್ಪ (Chikkaappa) - Aunt

    Note: In Kannada, age and gender matter. Elder siblings are addressed differently than younger ones, showing respect for age hierarchy.`,
    keyPoints: [
      "Learn basic family member names",
      "Kannada differentiates between elder and younger siblings",
      "Age hierarchy is important in Kannada culture",
      "Family relationships are core to Kannada society",
      "Use appropriate titles when addressing family members",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'What does "ತಾಯಿ" (Tayi) mean?',
        options: ["Father", "Mother", "Sister", "Brother"],
        correctAnswer: 1,
        explanation: 'ತಾಯಿ (Tayi) means "Mother" in Kannada.',
      },
      {
        id: 2,
        type: "fill-blank",
        question: 'Complete: "Father" in Kannada is "___"',
        correctAnswer: "ತಂದೆ",
        explanation: 'ತಂದೆ (Tande) means "Father" in Kannada.',
      },
    ],
  },
  4: {
    id: 4,
    title: "Numbers 1-10",
    language: "kannada",
    difficulty: "Beginner",
    xpReward: 100,
    content: `Numbers are essential for daily communication. Here are the numbers 1-10 in Kannada:

    1 - ಒಂದು (Ondu)
    2 - ಎರಡು (Eradu)
    3 - ಮೂರು (Muru)
    4 - ನಾಲ್ಕು (Nalku)
    5 - ಐದು (Aidu)
    6 - ಆರು (Aaru)
    7 - ಏಳು (Eelu)
    8 - ಎಂಟು (Entu)
    9 - ಒಂಬತ್ತು (Ombattu)
    10 - ಹತ್ತು (Hattu)

    Counting Practice: Try counting backwards from 10 to 1. This helps for retention.
    Numbers are used in daily transactions, telling time, and age. Mastering basic numbers is crucial!`,
    keyPoints: [
      "Numbers 1-10 form the foundation for all counting",
      "ಐದು (Aidu) means 5 and is very common",
      "ಹತ್ತು (Hattu) means 10 and is the base for bigger numbers",
      "Practice counting forwards and backwards",
      "Numbers are used in prices, ages, and quantities",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'What is the Kannada word for number "5"?',
        options: ["ಇದು", "ಐದು", "ಆರು", "ಏಳು"],
        correctAnswer: 1,
        explanation: 'ಐದು (Aidu) means "5" in Kannada.',
      },
      {
        id: 2,
        type: "fill-blank",
        question: 'Complete: Number "10" in Kannada is "___"',
        correctAnswer: "ಹತ್ತು",
        explanation: 'ಹತ್ತು (Hattu) means "10" in Kannada.',
      },
    ],
  },
  5: {
    id: 5,
    title: "Daily Phrases",
    language: "kannada",
    difficulty: "Intermediate",
    xpReward: 150,
    content: `Common daily phrases help you interact naturally with Kannada speakers:

    ತಿನ್ನಬೇಕು (Tinnabeku) - Need to eat / To eat
    ಕುಡಿಯಬೇಕು (Kudiyabeku) - Need to drink / To drink
    ನಲ್ಲಿ ಹೋಗಬೇಕು (Nalli hogabeku) - Need to go somewhere
    ನಿದ್ರೆ ತೀಳಬೇಕು (Nidre tilbeku) - Need to sleep
    ಕೆಲಸ ಮಾಡಬೇಕು (Kelsa madbeku) - Need to work

    Expressions of liking and preference:
    ನನಗೆ ... ಇಷ್ಟ (Nanage ... Ishta) - I like ...
    ನನಗೆ ಇಷ್ಟವಾಗುತ್ತೆ (Nanage ishtavagutthe) - I like / I'm fond of

    Example: ನನಗೆ ಕನ್ನಡ ಇಷ್ಟ (Nanage Kannada Ishta) - I like Kannada`,
    keyPoints: [
      "Learn action verbs ending in -ಬೇಕು (-beku) for needs and wants",
      "ಇಷ್ಟ (Ishta) expresses preference and liking",
      "Daily phrases help with natural conversations",
      "Practice with personal preferences to make it relevant",
      "Combine subject, verb, and object to form complete sentences",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'What does "ತಿನ್ನಬೇಕು" (Tinnabeku) mean?',
        options: ["To drink", "To eat", "To walk", "To sleep"],
        correctAnswer: 1,
        explanation: 'ತಿನ್ನಬೇಕು means "To eat" in Kannada.',
      },
      {
        id: 2,
        type: "fill-blank",
        question: 'Translate: "I like Kannada" → "ನನಗೆ ಕನ್ನಡ ___"',
        correctAnswer: "ಇಷ್ಟ",
        explanation: 'ಇಷ್ಟ (Ishta) means "like" in Kannada.',
      },
    ],
  },
  6: {
    id: 6,
    title: "Body Parts",
    language: "kannada",
    difficulty: "Beginner",
    xpReward: 100,
    content: `Knowing body parts is useful for health, sports, and general descriptions:

    Head & Face:
    ತಲೆ (Tale) - Head
    ಮುಖ (Mukha) - Face
    ಕಣ್ಣು (Kannu) - Eye
    ಮೂಗು (Mugu) - Nose
    ಕಿವಿ (Kivi) - Ear
    ಬಾಯಿ (Bayi) - Mouth
    ಹಲ್ಲು (Hallu) - Tooth

    Upper Body:
    ಕೂದಲು (Kudalu) - Hair
    ಹೃದಯ (Hrudaya) - Heart
    ಕೈ (Kai) - Hand/Arm
    ಚೆಂಡು (Chendu) - Finger

    Lower Body:
    ಕಾಲು (Kalu) - Leg/Foot
    ಮೊಣಕೆ (Monake) - Elbow
    ಗೋಡೆ (Gode) - Knee

    Note: These words are also used in describing people and expressing physical sensations.`,
    keyPoints: [
      "Body part vocabulary is essential for health discussions",
      "ತಲೆ (Tale) for head and ಕೈ (Kai) for hands are most common",
      "Learn both formal and colloquial versions if applicable",
      "Body parts help describe people and symptoms",
      "Many body part words are used in idioms and expressions",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'What does "ತಲೆ" (Tale) mean?',
        options: ["Hand", "Head", "Foot", "Eye"],
        correctAnswer: 1,
        explanation: 'ತಲೆ (Tale) means "Head" in Kannada.',
      },
      {
        id: 2,
        type: "fill-blank",
        question: 'Complete: "Eye" in Kannada is "___"',
        correctAnswer: "ಕಣ್ಣು",
        explanation: 'ಕಣ್ಣು (Kannu) means "Eye" in Kannada.',
      },
    ],
  },
  7: {
    id: 7,
    title: "Colors",
    language: "kannada",
    difficulty: "Beginner",
    xpReward: 100,
    content: `Colors are used to describe objects, clothes, and nature:

    Primary Colors:
    ಕೆಂಪು (Kempu) - Red
    ನೀಲಿ (Nili) - Blue
    ಹಳದಿ (Haladi) - Yellow
    ಹಿರಿಯ (Hiriya) - Green

    Other Colors:
    ಮೇಣೆ (Mene) - White/Light
    ಕಪ್ಪು (Kappu) - Black
    ಗಾಢ (Gadh) - Dark
    ಆರೆಂಜು (Arenzu) - Orange
    ಹೋಳೆ (Hole) - Purple

    Usage Examples:
    ಕೆಂಪು ಹೂವು (Kempu huvu) - Red flower
    ನೀಲಿ ಆಕಾಶ (Nili akash) - Blue sky
    ಹಳದಿ ಆಲೋ (Haladi alo) - Yellow mango`,
    keyPoints: [
      "Primary colors are the foundation for color vocabulary",
      "Colors are adjectives that come before nouns in Kannada",
      "Learn to mix colors (ಗಾಢ ಕೆಂಪು = dark red)",
      "Colors are used in cultural contexts and clothing",
      "Flowers, nature, and objects often described by color",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'What is the Kannada word for "Red"?',
        options: ["ನೀಲಿ", "ಕೆಂಪು", "ಹಳದಿ", "ಹೋಳೆ"],
        correctAnswer: 1,
        explanation: 'ಕೆಂಪು (Kempu) means "Red" in Kannada.',
      },
      {
        id: 2,
        type: "fill-blank",
        question: 'Complete: "Blue" in Kannada is "___"',
        correctAnswer: "ನೀಲಿ",
        explanation: 'ನೀಲಿ (Nili) means "Blue" in Kannada.',
      },
    ],
  },
  8: {
    id: 8,
    title: "Food Items",
    language: "kannada",
    difficulty: "Intermediate",
    xpReward: 150,
    content: `Food vocabulary is essential when traveling or shopping in Karnataka:

    Staples:
    ಅನ್ನ (Anna) - Rice (the main staple)
    ರೋಟಿ (Roti) - Bread/Flatbread
    ಚಪಾತಿ (Chapati) - Wheat bread
    ಮೈದೆ (Mayde) - Flour

    Proteins:
    ಭಾಜಿ (Bhaji) - Vegetables
    ಡಾಲ್ (Dal) - Lentils
    ಬೇಳೆ (Bele) - Beans
    ಮಾಂಸ (Mansa) - Meat

    Beverages:
    ನೀರು (Niru) - Water
    ಚಾಯ (Chay) - Tea
    ಕೋಫಿ (Kofi) - Coffee
    ಹಾಲು (Halu) - Milk

    Kannada Cuisine:
    ಮಿಡ್ಸೋ (Midso) - Idiom for rice preparation
    ಸಿಮುಹಲಲೂರಿ (Simuhallluri) - Traditional dish
    ಭತ್ತ ಹಚ್ಚ (Bhatta hachch) - Rice curry

    Dining phrase: "ಆಹಾರ ಸಾಕಿದೆ" (Ahar sakide) - I'm full / The food was enough.`,
    keyPoints: [
      "ಅನ್ನ (Anna) is rice and is central to Kannada meals",
      "Learn staples, proteins, and vegetables for ordering food",
      "Beverage words are essential for restaurant interactions",
      "Kannada cuisine has unique dishes worth learning",
      "Food is important in Kannada culture and social gatherings",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'What does "ಅನ್ನ" (Anna) mean?',
        options: ["Water", "Rice", "Bread", "Fruit"],
        correctAnswer: 1,
        explanation: 'ಅನ್ನ (Anna) means "Rice" in Kannada.',
      },
      {
        id: 2,
        type: "fill-blank",
        question: 'Complete: "Water" in Kannada is "___"',
        correctAnswer: "ನೀರು",
        explanation: 'ನೀರು (Niru) means "Water" in Kannada.',
      },
    ],
  },
  9: {
    id: 9,
    title: "Emotions",
    language: "kannada",
    difficulty: "Intermediate",
    xpReward: 150,
    content: `Expressing emotions helps communicate feelings and create connections:

    Positive Emotions:
    ಸಂತೋಷ (Samtosha) - Happiness/Joy
    ಆನಂದ (Ananda) - Bliss
    ಪ್ರೀತಿ (Preeti) - Love/Affection
    ಭರತ (Bharat) - Confidence/Trust
    ಸಾಹಸ (Sahas) - Courage

    Negative Emotions:
    ದುಃಖ (Dukha) - Sadness/Sorrow
    ಕೋಪ (Kopa) - Anger/Wrath
    ಭಯ (Bhaya) - Fear
    ಅಸ್ವಸ್ಥ (Aswastha) - Discomfort
    ಸಿಟ್ಟು (Sittu) - Irritation

    Neutral/Other:
    ಸಂಶಯ (Samshaya) - Doubt
    ಆಶ್ಚರ್ಯ (Ashcharya) - Surprise/Wonder
    ನಿರಾಸೆ (Nirase) - Disappointment

    Example Sentences:
    ಸಿನಿಮಾ ನೋಡಿ ಸಂತೋಷಗೊಂಡೆ (Cinema nodi santoshagonde) - I felt happy watching the movie.`,
    keyPoints: [
      "Emotions are expressed as nouns or with auxiliary verbs",
      "ಸಂತೋಷ (Samtosha) for happiness and ದುಃಖ (Dukha) for sadness are common",
      "Add ಗೊಂಡು (gonde) to express 'felt' an emotion",
      "Understanding emotions helps in deeper conversations",
      "Emotional vocabulary shows cultural sensitivity",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'What does "ಸಂತೋಷ" (Samtosha) mean?',
        options: ["Sad", "Happy", "Angry", "Tired"],
        correctAnswer: 1,
        explanation: 'ಸಂತೋಷ (Samtosha) means "Happy" in Kannada.',
      },
      {
        id: 2,
        type: "fill-blank",
        question: 'Complete: "Sad" in Kannada is "___"',
        correctAnswer: "ದುಃಖ",
        explanation: 'ದುಃಖ (Dukha) means "Sad" in Kannada.',
      },
    ],
  },
  10: {
    id: 10,
    title: "Weather",
    language: "kannada",
    difficulty: "Intermediate",
    xpReward: 150,
    content: `Weather vocabulary is useful for daily conversations and planning:

    Weather Phenomena:
    ಮಳೆ (Male) - Rain
    ಮೇಘ (Megha) - Cloud
    ಬೆಳಕು (Belaku) - Light/Sunshine
    ಸೂರ್ಯ (Surya) - Sun
    ತಾರೆ (Tare) - Star
    ಚಂದ್ರ (Chandra) - Moon

    Temperature & Conditions:
    ಬಿಸಿ (Bisi) - Hot
    ತಾಪ (Tap) - Heat
    ತುಂಬುವಿನ (Tumbuvina) - Humid
    ತುಂಬುವಿನ (Tumbuvina) - Humid
    ಶೀತಲ (Sheetal) - Cold
    ತುಂಬುವಿನ (Tumbuvina) - Humid

    Seasons:
    ಬೇಸಿಗೆ (Besige) - Summer
    ಕೊಳ್ಳ (Kolla) - Winter
    ವರ್ಷಾ (Varsha) - Monsoon/Rainy season
    ವಸಂತ (Vasant) - Spring

    Example Conversations:
    "ಇಂದು ಮಳೆ ಆಗಿದೆ?" (Indu male agide?) - Is it raining today?
    "ಇಂದು ಬಿಸಿಯಾಗಿದೆ" (Indu bisiyagide) - Today is hot.`,
    keyPoints: [
      "ಮಳೆ (Male) for rain is commonly used",
      "Learn seasonal words for planning activities",
      "Weather affects daily life and social planning",
      "Temperature descriptors help describe comfort levels",
      "Weather conversations are small talk basics",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'What does "ಮಳೆ" (Male) mean?',
        options: ["Sun", "Rain", "Wind", "Cloud"],
        correctAnswer: 1,
        explanation: 'ಮಳೆ (Male) means "Rain" in Kannada.',
      },
      {
        id: 2,
        type: "fill-blank",
        question: 'Complete: "Sun" in Kannada is "___"',
        correctAnswer: "ಸೂರ್ಯ",
        explanation: 'ಸೂರ್ಯ (Surya) means "Sun" in Kannada.',
      },
    ],
  },
  11: {
    id: 11,
    title: "Days of the Week",
    language: "kannada",
    difficulty: "Intermediate",
    xpReward: 150,
    content: `Days of the week are fundamental for scheduling and time management:

    Days of the Week:
    ಸೋಮವಾರ (Somavara) - Monday
    ಮಾರ್ಗಶೀರ್ಷ (Margasheersha) - Tuesday
    ಬುಧವಾರ (Budhvara) - Wednesday
    ಗುರುವಾರ (Guruvara) - Thursday
    ಶುಕ್ರವಾರ (Shukravara) - Friday
    ಶನಿವಾರ (Shanavara) - Saturday
    ಭಾನುವಾರ (Bhanavara) - Sunday

    Time Expressions:
    ಇಂದು (Indu) - Today
    ನಾಳೆ (Nale) - Tomorrow
    ನೆನಪು (Nenapu) - Yesterday
    ಈ ವಾರ (I var) - This week
    ಮುಂದಿನ ವಾರ (Mundina var) - Next week
    ಕೊನೆಯ ವಾರ (Koneya var) - Last week

    Usage Example:
    "ಸೋಮವಾರ ನೆನಪು ತಪ್ಪಬೇಡಿ" (Somavara nenapu tappabedi) - Don't forget Monday.
    "ಭಾನುವಾರ ನೀವೆಲ್ಲ ಹೋಗುತ್ತೀರಾ?" (Bhanavara niveella hoguttira?) - Will you all go on Sunday?`,
    keyPoints: [
      "Days of the week are essential for scheduling",
      "ಸೋಮವಾರ (Somavara) for Monday is the first day in Kannada",
      "ಭಾನುವಾರ (Bhanavara) for Sunday is the day of the sun god",
      "Learn relative time expressions like ಇಂದು, ನಾಳೆ, ನೆನಪು",
      "Days are used in making plans and appointments",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'What is the Kannada word for "Monday"?',
        options: ["ಮೋಹನ", "ಸೋಮವಾರ", "ಮಾರ್ಗಶೀರ್ಷ", "ಭಾನುವಾರ"],
        correctAnswer: 1,
        explanation: 'ಸೋಮವಾರ (Somavara) means "Monday" in Kannada.',
      },
      {
        id: 2,
        type: "fill-blank",
        question: 'Complete: "Sunday" in Kannada is "___"',
        correctAnswer: "ಭಾನುವಾರ",
        explanation: 'ಭಾನುವಾರ (Bhanavara) means "Sunday" in Kannada.',
      },
    ],
  },
  12: {
    id: 12,
    title: "Conversation Basics",
    language: "kannada",
    difficulty: "Advanced",
    xpReward: 200,
    content: `Building conversational skills is the ultimate goal of language learning:

    Introducing Yourself:
    "ನನ್ನ ಹೆಸರು ... " (Nanna hesaru...) - My name is...
    "ನಾನು ... ನಿಂದ" (Nanu ... ninda) - I am from...
    "ನಾನು ... ಕೆಲಸ ಮಾಡುತ್ತೇನೆ" (Nanu ... kelsa madutene) - I work as...

    Asking Questions:
    "ನಿಮ್ಮ ಹೆಸರು ಯಾವುದು?" (Nimma hesaru yavudu?) - What is your name?
    "ನೀವು ಎಲ್ಲಿ ಇದ್ದೀರಾ?" (Neevu ellide iddira?) - Where are you from?
    "ನೀವು ಏನು ಕೆಲಸ ಮಾಡುತ್ತೀರಾ?" (Neevu enu kelsa maduttira?) - What do you do?
    "ನಿಮಗೆ ಕನ್ನಡ ಹೇಗಿದೆ?" (Nimge Kannada hegide?) - How is your Kannada?

    Keeping Conversation Going:
    "ನೀವು ಹೇಳಿ" (Neevu heli) - You tell me
    "ಆಮೆ?" (Ame?) - Really? (expressing surprise)
    "ಚೆನ್ನಾಗಿದೆ" (Chenagide) - That's good/nice
    "ಸರಿ" (Sari) - OK/Understood

    Polite Responses:
    "ಧನ್ಯವಾದ" (Dhanyavaad) - Thank you
    "ನಮಸ್ಕಾರ" (Namaskar) - Hello/Goodbye
    "ಆ ಸರಿ" (A sari) - Sure/OK
    "ಕ್ಷಮಿಸಿ" (Kshami) - Excuse me/Sorry

    Full Conversation Example:
    A: "ನಮಸ್ಕಾರ, ನಾನು ರಾಜ. ನೀವು?"
    B: "ನಮಸ್ಕಾರ, ನಾನು ಶೀಲಾ. ನೀವು ಎಲ್ಲಿ ಇದ್ದೀರಾ?"
    A: "ನಾನು ಬೆಂಗಳೂರಿನಿಂದ. ನೀವು?"
    B: "ನಾನೂ ಬೆಂಗಳೂರಿನಿಂದಲೇ. ನೀವು ಏನು ಕೆಲಸ ಮಾಡುತ್ತೀರಾ?"
    A: "ನಾನು ಇಂಜಿನಿಯರ್. ನೀವು?"
    B: "ನಾನು ಶಿಕ್ಷಕ. ಬೆಸೆ ಅಸೊ."`,
    keyPoints: [
      "Self-introduction is the foundation of any conversation",
      "Question formation is crucial for engaging conversations",
      "Learn polite responses and courtesy phrases",
      "Practice full conversations to build confidence",
      "Understanding question words helps comprehension",
      "Conversational patterns are similar across many contexts",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'How do you say "My name is..." in Kannada?',
        options: ["ನನ್ನ ಹೆಸರು...", "ನಿಮ್ಮ ಹೆಸರು...", "ಅವನ ಹೆಸರು...", "ಆಕೆಯ ಹೆಸರು..."],
        correctAnswer: 0,
        explanation: 'ನನ್ನ ಹೆಸರು... (Nanna hesaru...) means "My name is..." in Kannada.',
      },
      {
        id: 2,
        type: "fill-blank",
        question: 'Complete: "Where are you from?" in Kannada is "ನೀವು ___ ಎಲ್ಲಿಂದ?"',
        correctAnswer: "ಎಲ್ಲಿ",
        explanation: "This phrase asks about origin in Kannada.",
      },
    ],
  },
}

export const hindiLessons: Record<number, Lesson> = {
  1: {
    id: 1,
    title: "Devanagari Script",
    language: "hindi",
    difficulty: "Beginner",
    xpReward: 100,
    content: `Devanagari (देवनागरी) is the script used to write Hindi and several other Indian languages. It's one of the oldest scripts still in regular use.

    Script Characteristics:
    - Devanagari is an abugida script - each consonant has an inherent vowel sound (a)
    - Vowels (स्वर) are independent sounds when they begin a word
    - Consonants (व्यंजन) are modified by vowel marks (मात्रा)
    - The script reads left to right, top to bottom
    - A horizontal line (शिरोरेखा) connects most characters

    Basic Consonants (Ka series):
    क (Ka), ख (Kha), ग (Ga), घ (Gha)

    Basic Vowels:
    अ (A), आ (Aa), इ (I), ई (Ii), उ (U), ऊ (Uu), ऋ (Ri), ए (E), ऐ (Ai), ओ (O), औ (Au)

    Example: क + ि = कि (Ki), where ि is the vowel mark for 'I'`,
    keyPoints: [
      "Devanagari script has 16 vowels and 34 consonants",
      "Each consonant has an inherent 'A' sound",
      "Vowel marks (diacritics) modify consonant sounds",
      "The horizontal line connects most characters",
      "Mastering script is essential for reading Hindi",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'Which of these is the Hindi letter for "Ka"?',
        options: ["क", "ख", "ग", "घ"],
        correctAnswer: 0,
        explanation: "क (Ka) is the first consonant in the Devanagari alphabet.",
      },
      {
        id: 2,
        type: "multiple-choice",
        question: 'Translate to Hindi: "Goodbye"',
        options: ["नमस्ते", "अलविदा", "धन्यवाद", "कृपया"],
        correctAnswer: 1,
        explanation: 'अलविदा (Alvida) means "Goodbye" in Hindi.',
      },
    ],
  },
  2: {
    id: 2,
    title: "Hello & Goodbye",
    language: "hindi",
    difficulty: "Beginner",
    xpReward: 100,
    content: `Basic greetings and farewells are essential for starting conversations in Hindi:

    Common Greetings:
    नमस्ते (Namaste) - Hello (respectful, used during day and evening)
    नमस्कार (Namaskaar) - Hello (formal)
    सुप्रभात (Suprabhat) - Good morning
    शुभ संध्या (Shubh Sandhya) - Good evening
    शुभ रात्रि (Shubh Ratri) - Good night

    Farewells:
    अलविदा (Alvida) - Goodbye
    फिर मिलेंगे (Phir Milenge) - See you again
    जल्दी मिलेंगे (Jaldi Milenge) - See you soon
    अभी जाते हैं (Abhi Jate Hain) - I'm leaving now

    Response Greetings:
    आप कैसे हैं? (Aap Kaise Hain?) - How are you? (formal)
    आप ठीक हैं? (Aap Thik Hain?) - Are you okay? (formal)
    धन्यवाद (Dhanyavaad) - Thank you
    कृपया (Kripya) - Please

    Cultural Note: नमस्ते is the most common greeting and can be used throughout the day. You place your palms together and bow slightly while saying it.`,
    keyPoints: [
      "नमस्ते is the most versatile greeting in Hindi",
      "Different greetings are used for different times of day",
      "अलविदा is the standard way to say goodbye",
      "Respectful greetings use formal address",
      "Greetings are accompanied by hand gestures in Hindi culture",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'How do you say "Hello" in Hindi?',
        options: ["नमस्ते", "सुस्वागतम्", "आपका स्वागत है", "जय हिन्द"],
        correctAnswer: 0,
        explanation: 'नमस्ते (Namaste) means "Hello" in Hindi.',
      },
      {
        id: 2,
        type: "fill-blank",
        question: 'Complete: "Thank you" in Hindi is "___"',
        correctAnswer: "धन्यवाद",
        explanation: 'धन्यवाद (Dhanyavaad) means "Thank you" in Hindi.',
      },
    ],
  },
  3: {
    id: 3,
    title: "Numbers 1-20",
    language: "hindi",
    difficulty: "Beginner",
    xpReward: 150,
    content: `Numbers are fundamental for daily interactions. Master these to count, tell time, and understand prices:

    Numbers 1-10:
    १ - एक (Ek) - 1
    २ - दो (Do) - 2
    ३ - तीन (Teen) - 3
    ४ - चार (Char) - 4
    ५ - पांच (Paanch) - 5
    ६ - छः (Chah) - 6
    ७ - सात (Saat) - 7
    ८ - आठ (Aath) - 8
    ९ - नौ (Nau) - 9
    १० - दस (Das) - 10

    Numbers 11-20:
    ११ - ग्यारह (Gyarah) - 11
    १२ - बारह (Barah) - 12
    १३ - तेरह (Terah) - 13
    १४ - चौदह (Chaudah) - 14
    १५ - पंद्रह (Pandrah) - 15
    १६ - सोलह (Solah) - 16
    १७ - सत्रह (Satrah) - 17
    १८ - अठारह (Athara) - 18
    १९ - उन्नीस (Unnis) - 19
    २० - बीस (Bees) - 20

    Practice: Try counting forwards and backwards for retention. Numbers are used in prices, ages, phone numbers, and addresses.`,
    keyPoints: [
      "पांच (Paanch) for 5 and दस (Das) for 10 are foundation numbers",
      "11-20 have unique names, not compound words",
      "Numbers are essential for shopping and transactions",
      "Practice counting to master number pronunciation",
      "Numbers form basis for higher counting (20-100+)",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'What is the Hindi word for number "7"?',
        options: ["पांच", "सात", "नौ", "दस"],
        correctAnswer: 1,
        explanation: 'सात (Saat) means "7" in Hindi.',
      },
      {
        id: 2,
        type: "fill-blank",
        question: 'Complete: Number "15" in Hindi is "___"',
        correctAnswer: "पंद्रह",
        explanation: 'पंद्रह (Pandrah) means "15" in Hindi.',
      },
    ],
  },
  4: {
    id: 4,
    title: "Food Vocabulary",
    language: "hindi",
    difficulty: "Beginner",
    xpReward: 150,
    content: `Food vocabulary is essential when traveling in India and dining at restaurants:

    Staple Foods:
    चावल (Chaaval) - Rice
    रोटी (Roti) - Bread
    चपाती (Chapati) - Flatbread
    दाल (Daal) - Lentils
    सब्जी (Sabzi) - Vegetables
    मांस (Maans) - Meat
    मछली (Machli) - Fish
    अंडा (Anda) - Egg

    Beverages:
    पानी (Pani) - Water
    दूध (Doodh) - Milk
    चाय (Chai) - Tea
    कॉफी (Coffee) - Coffee
    रस (Ras) - Juice
    बीयर (Beer) - Beer

    Indian Dishes:
    कारी (Kari) - Curry
    बिरयानी (Biryani) - Biryani (rice dish)
    समोसा (Samosa) - Samosa
    छोले भटूरे (Chole Bhature) - Chickpea bread
    पूरी (Puri) - Deep-fried bread

    Dining Phrases:
    "मुझे ... दीजिए" (Mujhe ... dijiye) - Give me...
    "बिल दीजिए" (Bil dijiye) - Give me the bill
    "यह बहुत अच्छा है" (Yah bahut accha hai) - This is very good`,
    keyPoints: [
      "चावल (Chaaval) for rice is central to Indian meals",
      "Learn basic vegetables and proteins for ordering",
      "Indian cuisine has unique dishes with specific names",
      "Dining phrases are essential for restaurant interactions",
      "Understanding food vocabulary helps appreciate culture",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'What is the Hindi word for "Water"?',
        options: ["चाय", "पानी", "दूध", "रस"],
        correctAnswer: 1,
        explanation: 'पानी (Pani) means "Water" in Hindi.',
      },
      {
        id: 2,
        type: "fill-blank",
        question: 'Complete: "Rice" in Hindi is "___"',
        correctAnswer: "चावल",
        explanation: 'चावल (Chaaval) means "Rice" in Hindi.',
      },
    ],
  },
  5: {
    id: 5,
    title: "Family Members",
    language: "hindi",
    difficulty: "Beginner",
    xpReward: 100,
    content: `Family vocabulary is central to Hindi conversations. Here are the key family relationships:

    Immediate Family:
    पिता (Pita) - Father
    माता (Mata) - Mother
    बेटा (Beta) - Son
    बेटी (Beti) - Daughter
    भाई (Bhai) - Brother
    बहन (Bahan) - Sister
    पत्नी (Patni) - Wife
    पति (Pati) - Husband

    Extended Family:
    दादा (Dada) - Grandfather (paternal)
    दादी (Dadi) - Grandmother (paternal)
    नाना (Nana) - Grandfather (maternal)
    नानी (Nani) - Grandmother (maternal)
    चाचा (Chacha) - Uncle (father's brother)
    चाची (Chachi) - Aunt (father's sister-in-law)
    मामा (Mama) - Uncle (mother's brother)
    मामी (Mami) - Aunt (mother's brother's wife)
    ताऊ (Tau) - Uncle (father's older brother)
    फुफा (Phufa) - Uncle (mother's sister's husband)

    Cultural Note: Hindi families have specific terms for each family relationship. Age, gender, and side of family (paternal vs maternal) all matter.`,
    keyPoints: [
      "Hindi has distinct terms for different family relationships",
      "Age hierarchy is reflected in family terminology",
      "Paternal and maternal relatives have different names",
      "Family is central to Hindi culture",
      "Learn both formal and colloquial versions",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'What does "माता" (Mata) mean?',
        options: ["Father", "Mother", "Sister", "Brother"],
        correctAnswer: 1,
        explanation: 'माता (Mata) means "Mother" in Hindi.',
      },
      {
        id: 2,
        type: "fill-blank",
        question: 'Complete: "Father" in Hindi is "___"',
        correctAnswer: "पिता",
        explanation: 'पिता (Pita) means "Father" in Hindi.',
      },
    ],
  },
  6: {
    id: 6,
    title: "Colors in Hindi",
    language: "hindi",
    difficulty: "Beginner",
    xpReward: 100,
    content: `Colors are used to describe objects, clothing, and nature. Here are the essential color words:

    Primary Colors:
    लाल (Laal) - Red
    नीला (Nila) - Blue
    पीला (Pila) - Yellow
    हरा (Hara) - Green

    Other Colors:
    सफेद (Safed) - White
    काला (Kala) - Black
    गुलाबी (Gulabi) - Pink
    नारंगी (Naraingi) - Orange
    बैंगनी (Baingani) - Purple
    भूरा (Bhura) - Brown
    सुनहरा (Sunahara) - Golden
    चांदी (Chandi) - Silver

    Color Adjectives:
    When describing something, colors come before nouns:
    लाल फूल (Lal Phool) - Red flower
    नीला आकाश (Nila Aakash) - Blue sky
    हरी घास (Hari Ghass) - Green grass

    Shades and Variations:
    गहरा (Gehra) - Dark
    हल्का (Halka) - Light
    चमकदार (Chamakdar) - Shiny

    Example: गहरा लाल (Gehra Laal) - Dark red`,
    keyPoints: [
      "Primary colors form the foundation for color vocabulary",
      "Color adjectives agree with noun gender in some cases",
      "Learn to combine colors for variations and shades",
      "Colors are used in fashion, nature, and everyday objects",
      "Shades (dark/light) modify primary colors",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'What is the Hindi word for "Red"?',
        options: ["नीला", "लाल", "पीला", "काला"],
        correctAnswer: 1,
        explanation: 'लाल (Laal) means "Red" in Hindi.',
      },
      {
        id: 2,
        type: "fill-blank",
        question: 'Complete: "Green" in Hindi is "___"',
        correctAnswer: "हरा",
        explanation: 'हरा (Hara) means "Green" in Hindi.',
      },
    ],
  },
  7: {
    id: 7,
    title: "Body Parts",
    language: "hindi",
    difficulty: "Beginner",
    xpReward: 100,
    content: `Body part vocabulary is useful for health discussions, physical descriptions, and sports:

    Head & Face:
    सिर (Sir) - Head
    चेहरा (Chehra) - Face
    आँख (Ankh) - Eye
    नाक (Nak) - Nose
    कान (Kaan) - Ear
    मुँह (Munh) - Mouth
    दाँत (Dant) - Tooth
    जीभ (Jibh) - Tongue
    होंठ (Honth) - Lip

    Hair & Neck:
    बाल (Baal) - Hair
    ठोड़ी (Thodi) - Chin
    गर्दन (Gardan) - Neck

    Upper Body:
    हाथ (Hath) - Hand
    बाजू (Baju) - Arm
    कोहनी (Kohni) - Elbow
    कलाई (Kalai) - Wrist
    उंगली (Ungli) - Finger
    अंगूठा (Angootha) - Thumb
    नाखून (Nakhun) - Nail
    सीना (Seena) - Chest
    दिल (Dil) - Heart (also used metaphorically)

    Lower Body:
    पेट (Pet) - Belly/Stomach
    कमर (Kamar) - Back/Waist
    पैर (Pair) - Leg/Foot
    घुटना (Ghutna) - Knee
    एड़ी (Adi) - Heel
    पंजा (Panja) - Sole of foot

    Usage: "मेरे सिर में दर्द है" (Mere sir mein dard hai) - I have a headache.`,
    keyPoints: [
      "Body part vocabulary is essential for health and descriptions",
      "सिर (Sir) for head and हाथ (Hath) for hands are most frequently used",
      "Learn both formal and casual versions",
      "Body parts are used in pain descriptions and symptoms",
      "Many body part words are used in idiomatic expressions",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'What does "सिर" (Sir) mean?',
        options: ["Hand", "Head", "Foot", "Eye"],
        correctAnswer: 1,
        explanation: 'सिर (Sir) means "Head" in Hindi.',
      },
      {
        id: 2,
        type: "fill-blank",
        question: 'Complete: "Hand" in Hindi is "___"',
        correctAnswer: "हाथ",
        explanation: 'हाथ (Hath) means "Hand" in Hindi.',
      },
    ],
  },
  8: {
    id: 8,
    title: "Weather & Seasons",
    language: "hindi",
    difficulty: "Intermediate",
    xpReward: 150,
    content: `Weather vocabulary helps with daily conversations and planning outdoor activities:

    Weather Conditions:
    बारिश (Barish) - Rain
    बादल (Badal) - Cloud
    धूप (Dhoop) - Sunshine
    धुआँ (Dhua) - Smoke/Haze
    हवा (Hava) - Wind/Air
    तूफान (Toofan) - Storm
    बिजली (Bijli) - Lightning
    गड़गड़ाहट (Gadgadahat) - Thunder

    Temperature:
    गर्म (Garam) - Hot
    ठंडा (Thanda) - Cold
    नम (Nam) - Humid/Damp
    सूखा (Sukha) - Dry
    गर्मी (Garmi) - Heat

    Celestial Bodies:
    सूरज (Suraj) - Sun
    चाँद (Chaand) - Moon
    तारे (Tare) - Stars

    Seasons:
    गर्मी (Garmi) - Summer
    सर्दी (Sardi) - Winter
    वर्षा (Varsha) - Monsoon/Rainy season
    बसंत (Basant) - Spring
    पतझड़ (Patjhad) - Fall/Autumn

    Common Weather Phrases:
    "आज बहुत गर्म है" (Aaj bahut garam hai) - It's very hot today
    "बारिश आ रही है" (Barish aa rahi hai) - It's raining
    "कल सूरज निकलेगा" (Kal suraj niklegla) - The sun will come out tomorrow`,
    keyPoints: [
      "बारिश (Barish) for rain is the most common weather word",
      "Learn seasonal terms for planning activities",
      "Temperature descriptors (गर्म/ठंडा) are essential",
      "Weather affects daily life and social planning",
      "Weather conversations are small talk basics",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'What does "बारिश" (Barish) mean?',
        options: ["Sun", "Rain", "Wind", "Cloud"],
        correctAnswer: 1,
        explanation: 'बारिश (Barish) means "Rain" in Hindi.',
      },
      {
        id: 2,
        type: "fill-blank",
        question: 'Complete: "Cold" in Hindi is "___"',
        correctAnswer: "ठंडा",
        explanation: 'ठंडा (Thanda) means "Cold" in Hindi.',
      },
    ],
  },
  9: {
    id: 9,
    title: "Emotions & Feelings",
    language: "hindi",
    difficulty: "Intermediate",
    xpReward: 150,
    content: `Expressing emotions helps you connect with Hindi speakers on an emotional level:

    Positive Emotions:
    खुश (Khush) - Happy
    आनंद (Anand) - Joy/Bliss
    प्रसन्न (Prasann) - Content/Pleased
    प्यार (Pyar) - Love
    विश्वास (Vishwas) - Confidence/Trust
    साहस (Sahas) - Courage

    Negative Emotions:
    उदास (Udas) - Sad
    दुःख (Dukh) - Sorrow/Grief
    क्रोध (Krodh) - Anger
    भय (Bhay) - Fear
    चिंता (Chinta) - Worry
    निराशा (Nirasha) - Disappointment

    Neutral/Other:
    आश्चर्य (Aashcharya) - Surprise/Wonder
    संदेह (Sandeh) - Doubt
    शर्मिंदा (Sharminda) - Ashamed/Embarrassed
    विरक्त (Virakta) - Bored/Disinterested

    Expressing Emotions:
    "मैं खुश हूँ" (Main khush hoon) - I am happy
    "मुझे खेद है" (Mujhe khed hai) - I am sorry / I regret
    "मुझे डर है" (Mujhe dar hai) - I am afraid
    "मुझे गुस्सा आ गया" (Mujhe gussa aa gaya) - I got angry
    "मेरा दिल टूट गया" (Mera dil toot gaya) - My heart broke (I'm heartbroken)`,
    keyPoints: [
      "खुश (Khush) for happiness and उदास (Udas) for sadness are common",
      "Emotions can be expressed as adjectives or nouns",
      "प्यार (Pyar) is a powerful word used in many contexts",
      "Understanding emotions shows cultural sensitivity",
      "Emotional vocabulary is key to deeper conversations",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'What does "खुश" (Khush) mean?',
        options: ["Sad", "Happy", "Angry", "Tired"],
        correctAnswer: 1,
        explanation: 'खुश (Khush) means "Happy" in Hindi.',
      },
      {
        id: 2,
        type: "fill-blank",
        question: 'Complete: "Love" in Hindi is "___"',
        correctAnswer: "प्यार",
        explanation: 'प्यार (Pyar) means "Love" in Hindi.',
      },
    ],
  },
  10: {
    id: 10,
    title: "Days & Time",
    language: "hindi",
    difficulty: "Intermediate",
    xpReward: 150,
    content: `Days of the week and time expressions are essential for scheduling and planning:

    Days of the Week:
    सोमवार (Somvaar) - Monday
    मंगलवार (Mangalvaar) - Tuesday
    बुधवार (Budhvaar) - Wednesday
    गुरुवार (Guruvaar) - Thursday
    शुक्रवार (Shukravaar) - Friday
    शनिवार (Shanavaar) - Saturday
    रविवार (Ravivaar) - Sunday

    Time Expressions:
    आज (Aaj) - Today
    कल (Kal) - Tomorrow / Yesterday (context dependent)
    कल सुबह (Kal Subah) - Tomorrow morning
    कल रात (Kal Raat) - Tomorrow night
    परसों (Parson) - Day after tomorrow
    अगली बार (Agli Baar) - Next time
    इस हफ्ते (Is Hafte) - This week
    अगले हफ्ते (Agle Hafte) - Next week
    पिछले हफ्ते (Pichle Hafte) - Last week

    Times of Day:
    सुबह (Subah) - Morning
    दोपहर (Dopahar) - Afternoon
    शाम (Shaam) - Evening
    रात (Raat) - Night
    आधी रात (Adhi Raat) - Midnight

    Usage Examples:
    "सोमवार को मीटिंग है" (Somvaar ko meeting hai) - There's a meeting on Monday
    "आज शाम को मिलते हैं" (Aaj shaam ko milte hain) - Let's meet this evening`,
    keyPoints: [
      "Days of the week are essential for scheduling",
      "सोमवार (Somvaar) for Monday is day 1 in Hindu calendar",
      "रविवार (Ravivaar) for Sunday means 'sun day'",
      "Learn relative time expressions for making plans",
      "Days are used with 'को' postposition in Hindi",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'What is the Hindi word for "Monday"?',
        options: ["सोमवार", "मंगलवार", "बुधवार", "बृहस्पतिवार"],
        correctAnswer: 0,
        explanation: 'सोमवार (Somvaar) means "Monday" in Hindi.',
      },
      {
        id: 2,
        type: "fill-blank",
        question: 'Complete: "Today" in Hindi is "___"',
        correctAnswer: "आज",
        explanation: 'आज (Aaj) means "Today" in Hindi.',
      },
    ],
  },
  11: {
    id: 11,
    title: "Common Questions",
    language: "hindi",
    difficulty: "Intermediate",
    xpReward: 150,
    content: `Asking questions is crucial for gathering information and engaging in conversations:

    Personal Information Questions:
    "आपका नाम क्या है?" (Aapka naam kya hai?) - What is your name?
    "आप कहाँ रहते हैं?" (Aap kahan rahte hain?) - Where do you live?
    "आप कहाँ से हैं?" (Aap kahan se hain?) - Where are you from?
    "आप क्या करते हैं?" (Aap kya karte hain?) - What do you do?
    "आपकी उम्र कितनी है?" (Aapki umar kitni hai?) - How old are you?

    Health & Well-being:
    "आप कैसे हैं?" (Aap kaise hain?) - How are you? (formal)
    "तुम कैसे हो?" (Tum kaise ho?) - How are you? (informal)
    "आप ठीक हैं?" (Aap thik hain?) - Are you okay?
    "क्या आपको कोई दर्द है?" (Kya aapko koi dard hai?) - Do you have any pain?

    Time & Schedule:
    "आज क्या दिन है?" (Aaj kya din hai?) - What day is today?
    "क्या समय हुआ है?" (Kya samay hua hai?) - What time is it?
    "आप कब आएँगे?" (Aap kab aaenge?) - When will you come?
    "यह काम कब खत्म होगा?" (Yah kaam kab khatm hoga?) - When will this work finish?

    Preference & Likes:
    "आपको क्या पसंद है?" (Aapko kya pasand hai?) - What do you like?
    "आप क्या खाना पसंद करते हैं?" (Aap kya khana pasand karte hain?) - What food do you like?
    "आप कहाँ जाना चाहते हैं?" (Aap kahan jana chahte hain?) - Where do you want to go?

    Directions:
    "रेलवे स्टेशन कहाँ है?" (Railway station kahan hai?) - Where is the railway station?
    "यह रास्ता कहाँ जाता है?" (Yah rasta kahan jata hai?) - Where does this road go?`,
    keyPoints: [
      "Question formation varies based on formal/informal register",
      "Key questions help gather personal information",
      "Learn question words: क्या (kya), कहाँ (kahan), कब (kab), क्यों (kyon)",
      "Intonation rises at the end of questions in Hindi",
      "Understanding questions is important for conversations",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'How do you ask "How are you?" in Hindi?',
        options: ["आप कहाँ हैं?", "आप कैसे हैं?", "आपका नाम क्या है?", "आप क्या करते हैं?"],
        correctAnswer: 1,
        explanation: 'आप कैसे हैं? (Aap kaise hain?) means "How are you?" in Hindi.',
      },
      {
        id: 2,
        type: "fill-blank",
        question: 'Complete: "What is your name?" in Hindi is "आपका नाम ___ है?"',
        correctAnswer: "क्या",
        explanation: "This is how you ask about someone's name in Hindi.",
      },
    ],
  },
  12: {
    id: 12,
    title: "Advanced Conversations",
    language: "hindi",
    difficulty: "Advanced",
    xpReward: 200,
    content: `Building confidence in longer conversations is the next step in language mastery:

    Self-Expression:
    "मुझे हिंदी पसंद है" (Mujhe Hindi pasand hai) - I like Hindi
    "मुझे हिंदी सीखना है" (Mujhe Hindi seekhna hai) - I want to learn Hindi
    "मैं हिंदी बोलना चाहता हूँ" (Main Hindi bolna chahta hoon) - I want to speak Hindi
    "हिंदी बहुत मुश्किल है" (Hindi bahut mushkil hai) - Hindi is very difficult
    "मुझे भारत बहुत पसंद है" (Mujhe Bharat bahut pasand hai) - I like India a lot

    Engaging in Discussion:
    "आपका विचार क्या है?" (Aapka vichar kya hai?) - What do you think?
    "मेरा मत है कि..." (Mera mat hai ki...) - I think that...
    "मुझे लगता है..." (Mujhe lagta hai...) - I think...
    "आप सही कह रहे हैं" (Aap sahi kah rahe hain) - You're right
    "मैं सहमत नहीं हूँ" (Main sahmati nahin hoon) - I disagree

    Storytelling:
    "कल मुझे एक दिलचस्प घटना सुनने को मिली" (Kal mujhe ek dilchasp ghatna sunne ko mili) - Yesterday I heard an interesting story
    "ऐसा हुआ कि..." (Aisa hua ki...) - What happened was...
    "फिर उसने कहा कि..." (Phir usne kaha ki...) - Then he/she said that...
    "अंत में सब ठीक हो गया" (Ant mein sab thik ho gya) - In the end everything was fine

    Making Plans:
    "क्या हम साथ चल सकते हैं?" (Kya ham sath chal sakte hain?) - Can we go together?
    "मुझे अगले सप्ताह मिलते हैं?" (Mujhe agle saptah milte hain?) - Can we meet next week?
    "शाम को कॉफी पीने चलें?" (Shaam ko coffee pine chalen?) - Want to have coffee in the evening?

    Deeper Conversation Example:
    A: "नमस्ते! आप कैसे हैं?"
    B: "नमस्ते! मैं ठीक हूँ, धन्यवाद। आप?"
    A: "मैं भी ठीक हूँ। आपको हिंदी कैसी लग रही है?"
    B: "हिंदी बहुत अच्छी भाषा है। मुझे सीखना बहुत पसंद है।"
    A: "वाह! आप बहुत अच्छी हिंदी बोल रहे हैं। आप कितने समय से सीख रहे हैं?"
    B: "मैं पिछले तीन महीने से सीख रहा हूँ।"
    A: "शानदार! क्या हम अगले हफ्ते मिल सकते हैं? हम हिंदी में अधिक बातचीत कर सकते हैं।"
    B: "बिल्कुल! मुझे बहुत खुशी होगी। धन्यवाद!"`,
    keyPoints: [
      "Self-expression requires connecting sentences and ideas",
      "Discussion phrases help share opinions",
      "Storytelling uses past tense forms",
      "Planning requires conditional and future forms",
      "Conversational Hindi flows naturally when practiced regularly",
    ],
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: 'How do you say "I love Hindi" in Hindi?',
        options: ["मुझे हिंदी पसंद है", "मुझे हिंदी बहुत पसंद है", "हिंदी अच्छी है", "मैं हिंदी प्यार करता हूँ"],
        correctAnswer: 0,
        explanation: "मुझे हिंदी पसंद है (Mujhe Hindi pasand hai) is a common way to express liking for Hindi.",
      },
      {
        id: 2,
        type: "fill-blank",
        question: 'Complete: "Where are you from?" is "आप ___ से हैं?"',
        correctAnswer: "कहाँ",
        explanation: "This phrase asks about origin in Hindi.",
      },
    ],
  },
}

export function getLesson(language: "kannada" | "hindi", lessonId: number): Lesson | null {
  const lessons = language === "kannada" ? kannadaLessons : hindiLessons
  return lessons[lessonId] || null
}
