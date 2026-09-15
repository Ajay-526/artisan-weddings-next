export const serviceableCities = [
  "tirupati",
  "chittoor",
  "nellore",
  "kadapa",
  "kurnool",
  "vijayawada",
  "guntur",
  "visakhapatnam",
  "amaravati",
  "hyderabad",
  "bengaluru",
  "bangalore",
  "mysuru",
  "mysore",
  "chennai",
  "coimbatore",
];

export function normalizeCity(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function isServiceable(city: string) {
  const n = normalizeCity(city);
  return serviceableCities.some((c) => n === c || n.includes(c));
}

export const ceremonies = [
  {
    slug: "engagement",
    title: "Engagement",
    kicker: "The first public yes",
    summary: "Rings, silk, and the hush before two families become one room.",
    cover: "https://images.unsplash.com/photo-1522673607200-164e1b6ca4ea?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1520856616249-4b80930468a6?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1529634900341-50b11541538e?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    slug: "haldi",
    title: "Haldi",
    kicker: "Sunlight and turmeric",
    summary: "Gold paste, wet laughter, cousins who forget the camera.",
    cover: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1591604466107-ec97de576aa3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    slug: "mehendi",
    title: "Mehendi",
    kicker: "Stories drawn on skin",
    summary: "Hours of quiet pattern-work, songs that rise and fall.",
    cover: "https://images.unsplash.com/photo-1611601322175-ef8ec8c45b28?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    slug: "sangeet",
    title: "Sangeet",
    kicker: "Feet that forget the clock",
    summary: "Choreography that collapses into joy.",
    cover: "https://images.unsplash.com/photo-1511285560929-80b456fe3cdb?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522673607200-164e1b6ca4ea?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    slug: "muhurtham",
    title: "Muhurtham",
    kicker: "Fire, vows, and the hour that matters",
    summary: "The mandap is a small universe. We wait for the look across the flame.",
    cover: "https://images.unsplash.com/photo-1591604466107-ec97de576aa3?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    slug: "reception",
    title: "Reception",
    kicker: "Gold light, last dance",
    summary: "After the vows, the room changes temperature.",
    cover: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511285560929-80b456fe3cdb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1520856616249-4b80930468a6?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=900&q=80",
    ],
  },
];

export const loveStories = [
  {
    slug: "meera-arjun",
    couple: "Meera & Arjun",
    place: "Tirumala foothills",
    blurb: "Temple bells at dawn, a quiet car ride, and a city that already knew their names.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "ananya-rohan",
    couple: "Ananya & Rohan",
    place: "Hyderabad",
    blurb: "Charminar light on silk, a sangeet that ran past midnight.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "nisha-sid",
    couple: "Nisha & Sid",
    place: "Bengaluru",
    blurb: "Garden pheras, friends as choir, a film that still stops the room.",
    img: "https://images.unsplash.com/photo-1511285560929-80b456fe3cdb?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "janna-vishwas",
    couple: "Janna & Vishwas",
    place: "Coastal Karnataka",
    blurb: "Two homes, one tide. An intimate South Indian day with salt in the air.",
    img: "https://images.unsplash.com/photo-1591604466107-ec97de576aa3?auto=format&fit=crop&w=1400&q=80",
  },
];

export const films = [
  { title: "Meera × Arjun — a dawn film", youtube: "q0hyYWKXF0c", note: "Temple town, short cut, no voiceover." },
  { title: "Ananya × Rohan — Hyderabad nights", youtube: "K4TOrB7at0Y", note: "Reception light and the walk between rituals." },
  { title: "Nisha × Sid — garden muhurtham", youtube: "jNQXAC9IVRw", note: "A quieter edit for a loud day." },
];

export const photos = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1591604466107-ec97de576aa3?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fe3cdb?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1522673607200-164e1b6ca4ea?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1520856616249-4b80930468a6?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1529634900341-50b11541538e?auto=format&fit=crop&w=1000&q=80",
];
