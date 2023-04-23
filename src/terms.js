const BANDS = ["ironmaiden", "metallica", "coldplay"];
const GENRE = ["rock", "metal", "alternativerock"];
const SONGS = [
  "fun",
  "up_and_up",
  "hymn_for_the_weekend",
  "rain_maker",
  "gates_of_tomorrow",
  "dance_of_death_song",
  "aceshigh",
  "twominutes_to_midnight",
  "power_slave_song",
  "ancient_mariner",
  "battery",
  "orion",
  "master_of_puppets_song",
  "invaders",
  "the_prisoner",
  "hallowed_be_thy_name",
  "run_to_the_hills",
  "the_number_of_the_beast_song",
  "violet_hill",
  "strawberry_swing",
  "lost",
];

const ALBUMS = [
  "dance_of_death",
  "the_number_of_the_beast",
  "power_slave",
  "master_of_puppets",
  "a_head_full_of_dreams",
  "coldplay_Viva_la_Vida_or_Death_and_All_His_Friends",
];

const INSTRUMENTS = ["drums", "guitar", "vocals", "bass"];
const MUSICIANS = [
  "james_hetfield",
  "lars_ulrich",
  "kirk_hammett",
  "robert_trujillo",
  "nickocc_brain",
  "adrian_smith",
  "janic_kgers",
  "steve_harris",
  "bruce_dickinson",
  "dave_murray",
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

const QUESTIONS_ALBUM = (album) => [
  {
    key: `songof(X,${album})`,
    label: `What are songs of album ${album}?`,
  },
  { key: `albumof(${album},X)`, label: `Who is the band for album ${album}?` },
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
    key: "bandmate(janic_kgers, ironmaiden)",
    label: "Is bandmate of janic kgers ironmaiden ?",
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
  ...ALBUMS.flatMap(QUESTIONS_ALBUM),
];

// to remove duplicates
export const TERMS = [
  ...new Map(TERMS_.map((item) => [item.key, item])).values(),
];
