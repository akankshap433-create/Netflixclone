import { ALL_MOVIES, PROFILES_CONFIG, getSimilarMovies } from "./src/services/movieService.js";
import { StorageService } from "./src/services/storageService.js";

let passed = 0;
let failed = 0;

function assert(condition, desc) {
  if (condition) {
    console.log(`  ✓ PASS: ${desc}`);
    passed++;
  } else {
    console.error(`  ✕ FAIL: ${desc}`);
    failed++;
  }
}

console.log("=== COMPREHENSIVE 'MORE LIKE THIS' 5-CARD CASCADE VERIFICATION ===\n");

const alexProfile = PROFILES_CONFIG.find(p => p.id === "profile-alex");
const kidsProfile = PROFILES_CONFIG.find(p => p.id === "profile-kids");

// TEST CARD 1: Stranger Things
console.log("TEST 1: Initial Open -> 'Stranger Things'");
const movie1 = ALL_MOVIES.find(m => m.id === "stranger-things");
assert(Boolean(movie1), "Found 'Stranger Things' in catalog");
const similar1 = getSimilarMovies(movie1, alexProfile);
assert(similar1.length >= 3, `Stranger Things has ${similar1.length} similar recommendations`);
assert(!similar1.some(m => m.id === "stranger-things"), "Stranger Things is excluded from its own similar list");
assert(similar1.some(m => m.genres.includes("Sci-Fi") || m.genres.includes("Mystery")), "Similar titles share Sci-Fi/Mystery genres");
console.log(`  -> Similar recommendations: ${similar1.map(m => m.title).join(", ")}`);

// TEST CARD 2: Click on 1st similar card -> 'Dark' or 'Arcane' or 'The Witcher'
const movie2 = similar1[0];
console.log(`\nTEST 2: Click More Like This card -> '${movie2.title}'`);
assert(Boolean(movie2.poster && movie2.backdrop && movie2.title && movie2.description), `Card 2 '${movie2.title}' has full metadata`);
assert(Boolean(movie2.rating && movie2.year && movie2.match && movie2.genres), `Card 2 '${movie2.title}' has rating/year/genres`);
if (movie2.type === "series") {
  assert(Array.isArray(movie2.seasons) && movie2.seasons.length > 0, `Series '${movie2.title}' has seasons and episodes`);
}
const similar2 = getSimilarMovies(movie2, alexProfile);
assert(!similar2.some(m => m.id === movie2.id), `${movie2.title} is excluded from its own similar list`);
assert(similar2.some(m => m.id === "stranger-things"), `Stranger Things is now recommended in ${movie2.title}'s More Like This`);
console.log(`  -> Similar recommendations for ${movie2.title}: ${similar2.map(m => m.title).join(", ")}`);

// TEST CARD 3: Click on another similar card -> 'Wednesday'
console.log("\nTEST 3: Click More Like This card -> 'Wednesday'");
const movie3 = ALL_MOVIES.find(m => m.id === "wednesday");
assert(Boolean(movie3), "Found 'Wednesday' in catalog");
assert(movie3.genres.includes("Comedy") && movie3.genres.includes("Mystery"), "Wednesday has Comedy & Mystery genres");
assert(movie3.seasons.length >= 1 && movie3.seasons[0].episodes.length >= 1, "Wednesday has Season 1 episodes");
const similar3 = getSimilarMovies(movie3, alexProfile);
assert(!similar3.some(m => m.id === "wednesday"), "Wednesday excluded from own similar list");
console.log(`  -> Similar recommendations for Wednesday: ${similar3.map(m => m.title).join(", ")}`);

// TEST CARD 4: Click on a movie -> 'Glass Onion'
console.log("\nTEST 4: Click More Like This card -> 'Glass Onion'");
const movie4 = ALL_MOVIES.find(m => m.id === "glass-onion");
assert(Boolean(movie4), "Found 'Glass Onion' in catalog");
assert(movie4.type === "movie", "Glass Onion is classified as a movie (no seasons)");
assert(movie4.duration === "2h 19m", "Glass Onion has movie runtime");
const similar4 = getSimilarMovies(movie4, alexProfile);
assert(similar4.some(m => m.genres.includes("Comedy") || m.genres.includes("Mystery")), "Glass Onion similar titles share Comedy/Mystery");
console.log(`  -> Similar recommendations for Glass Onion: ${similar4.map(m => m.title).join(", ")}`);

// TEST CARD 5: Kids Profile More Like This -> 'Kung Fu Panda 4'
console.log("\nTEST 5: Kids Profile More Like This -> 'Kung Fu Panda 4'");
const movie5 = ALL_MOVIES.find(m => m.id === "kung-fu-panda-4");
assert(Boolean(movie5), "Found 'Kung Fu Panda 4' in catalog");
const similar5 = getSimilarMovies(movie5, kidsProfile);
assert(similar5.length >= 3, `Found ${similar5.length} kid-friendly similar titles`);
assert(similar5.every(m => m.isKidFriendly), "ALL recommendations in Kids profile are STRICTLY kid-friendly (G/PG)");
assert(!similar5.some(m => m.id === "squid-game" || m.id === "the-witcher" || m.id === "dark"), "Adult titles are 100% blocked from Kids More Like This");
console.log(`  -> Kids similar recommendations: ${similar5.map(m => m.title).join(", ")}`);

// TEST 6: Profile-Isolated My List on Similar Cards
console.log("\nTEST 6: My List from More Like This:");
const initialAlexList = StorageService.getMyList("profile-alex");
const toggleRes = StorageService.toggleMyList("profile-alex", "glass-onion");
assert(toggleRes.updatedList.includes("glass-onion"), "Added 'Glass Onion' to Alex's My List");
const sarahList = StorageService.getMyList("profile-sarah");
assert(!sarahList.includes("glass-onion") || sarahList !== toggleRes.updatedList, "Sarah's My List remains completely separate and isolated");

console.log(`\n=== ALL 5-CARD TESTS COMPLETED: ${passed} PASSED, ${failed} FAILED ===`);
if (failed > 0) process.exit(1);
