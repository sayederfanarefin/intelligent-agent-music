const BANDS = ["ironmaiden", "lambofgod", "thebeatles", "coldplay"];
const GENRE = ["rock", "metal", "alternativerock"];
const SONGS = [
  "aceshigh",
  "twominutestomidnight",
  "powerslavesong",
  "ancientmariner",
];

const INSTRUMENTS = ["drums", "guitar", "vocals", "bass"];
const MUSICIANS = [
  "nickoccbrain",
  "adriansmith",
  "janickgers",
  "steveharris",
  "brucedickinson",
  "davemurray",
  "chrisadler",
  "chris_martin",
  "jonny_buckland",
  "guy_berryman",
  "will_champion",
];

const QUESTIONS_BAND = (band) => [
  { key: `albumof(X,${band})`, label: `Albums of ${band}?` },
  { key: `bandgenre(X,${band})`, label: `Whats the genre of ${band}?` },
  { key: `bandmate(X, ${band})`, label: `who is bandmate of ${band}?` },
  { key: `songsofBand(X, ${band})`, label: `Songs of ${band}?` },
];

const QUESTIONS_GENRE = (genre) => [
  {
    key: `instrumentPlayedInGenre(${genre},Y)`,
    label: `Whats are the Instruments in ${genre}?`,
  },
  { key: `bandgenre(${genre},X)`, label: `What are the bands of ${genre}?` },
];

const QUESTIONS_SONG = (song) => [
  {
    key: `instrumentPlayedInSong(${song},Y)`,
    label: `Whats are the Instruments in ${song}?`,
  },
  { key: `songofArtist(${song},X)`, label: `Who is the artist of ${song}?` },
];

const QUESTIONS_INSTRUMENT = (instrument, band) => [
  { key: `musician(X,${instrument})`, label: `Who plays ${instrument}?` },
  {
    key: `instrumentPlayerInBand(${band},${instrument},Y)`,
    label: `Who plays ${instrument} in ${band}?`,
  },
];

const QUESTIONS_MUSICIAN = (musician) => [
  { key: `musician(${musician},X)`, label: `What does ${musician} play?` },
  { key: `bandmate(${musician}, X)`, label: `Who does ${musician} play for?` },
  { key: `songofArtist(X,${musician})`, label: `Songs of ${musician}?` },
];

const TERMS_ = [
  {
    key: "bandmate(nickoccbrain, ironmaiden)",
    label: "Is bandmate of nickoccbrain, ironmaiden ?",
  },
  {
    key: "bandmate(adriansmith, ironmaiden)",
    label: "Is bandmate of adriansmit ironmaiden ?",
  },
  {
    key: "bandmate(janickgers, ironmaiden)",
    label: "Is bandmate of janickgers ironmaiden ?",
  },
  {
    key: "bandmate(steveharris, ironmaiden)",
    label: "Is bandmate of steveharris ironmaiden ?",
  },
  {
    key: "bandmate(brucedickinson, ironmaiden)",
    label: "Is bandmate of brucedickinson ironmaiden ?",
  },
  {
    key: "bandmate(davemurray, ironmaiden)",
    label: "Is bandmate of davemurray ironmaiden ?",
  },
  {
    key: "bandmate(chris_martin, coldplay)",
    label: "Is bandmate of chris_martin coldplay ?",
  },
  {
    key: "bandmate(jonny_buckland, coldplay)",
    label: "Is bandmate of jonny_buckland coldplay ?",
  },
  {
    key: "bandmate(guy_berryman, coldplay)",
    label: "Is bandmate of guy_berryman coldplay ?",
  },
  {
    key: "bandmate(will_champion, coldplay)",
    label: "Is bandmate of will_champion coldplay ?",
  },
  ...BANDS.flatMap(QUESTIONS_BAND),
  ...GENRE.flatMap(QUESTIONS_GENRE),
  ...SONGS.flatMap(QUESTIONS_SONG),
  ...BANDS.flatMap((b, _) =>
    INSTRUMENTS.flatMap((i) => QUESTIONS_INSTRUMENT(i, b))
  ),
  ...MUSICIANS.flatMap(QUESTIONS_MUSICIAN),
];

// to remove duplicates
export const TERMS = [
  ...new Map(TERMS_.map((item) => [item.key, item])).values(),
];
console.log(TERMS);
