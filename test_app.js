import fs from "fs";
import { AVATAR_OPTIONS } from "./src/services/avatarService.js";
import { ALL_MOVIES, PROFILES_CONFIG, getMoviesForProfile, getCategoriesForProfile, getTop10ForProfile, searchMovies } from "./src/services/movieService.js";
import { SUBSCRIPTION_PLANS } from "./src/services/storageService.js";

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

console.log("=== RUNNING NETFLIX CLONE COMPREHENSIVE VERIFICATION SUITE ===\n");

// 1. Vector Avatars & Branding
console.log("1. Avatar & Branding Integrity:");
assert(AVATAR_OPTIONS.length >= 6, `Avatar gallery has ${AVATAR_OPTIONS.length} options (>= 6)`);
assert(AVATAR_OPTIONS.every(a => a.svg && a.svg.startsWith("data:image/svg+xml;utf8,")), "All avatars are 100% reliable SVG data URIs");
const alexAvatar = AVATAR_OPTIONS.find(a => a.id === "avatar-alex");
const sarahAvatar = AVATAR_OPTIONS.find(a => a.id === "avatar-sarah");
const kidsAvatar = AVATAR_OPTIONS.find(a => a.id === "avatar-kids");
assert(Boolean(alexAvatar && sarahAvatar && kidsAvatar), "Alex, Sarah, and Kids avatars are defined");

// 2. Movie Catalog & Complete Removal of Alchemy of Souls
console.log("\n2. Catalog & Alchemy of Souls Removal:");
const aos = ALL_MOVIES.find(m => m.id === "alchemy-of-souls" || m.title.toLowerCase().includes("alchemy"));
assert(!aos, "Alchemy of Souls is COMPLETELY removed from ALL_MOVIES catalog");
const aosSearch = searchMovies("alchemy", PROFILES_CONFIG[0]);
assert(aosSearch.length === 0, "Search for 'alchemy' returns 0 results");

assert(ALL_MOVIES.length >= 18, `Movie catalog has expanded to ${ALL_MOVIES.length} titles (>= 18)`);
const qot = ALL_MOVIES.find(m => m.id === "queen-of-tears");
const cloy = ALL_MOVIES.find(m => m.id === "crash-landing-on-you");
const rrr = ALL_MOVIES.find(m => m.id === "rrr");
const jawan = ALL_MOVIES.find(m => m.id === "jawan");
const moneyHeist = ALL_MOVIES.find(m => m.id === "money-heist");
assert(Boolean(qot && cloy && rrr && jawan && moneyHeist), "New major hits (Queen of Tears, CLOY, RRR, Jawan, Money Heist) are all present");
assert(ALL_MOVIES.every(m => m.id && m.title && m.backdrop && m.poster && m.match && m.rating), "All movies have mandatory title, backdrop, poster, match, rating fields");

// 3. Series Episodes & Seasons
console.log("\n3. TV Series Episodes & Seasons Integrity:");
const seriesWithEpisodes = ALL_MOVIES.filter(m => m.type === "series" && m.seasons && m.seasons.length > 0);
assert(seriesWithEpisodes.length >= 7, `Found ${seriesWithEpisodes.length} TV series with full seasons and episodes`);
const squidGame = ALL_MOVIES.find(m => m.id === "squid-game");
assert(squidGame.seasons.length >= 2, `Squid Game has ${squidGame.seasons.length} seasons`);
assert(squidGame.seasons[0].episodes.length >= 6, `Squid Game Season 1 has ${squidGame.seasons[0].episodes.length} episodes`);
assert(squidGame.seasons[0].episodes[0].title === "Red Light, Green Light", "Squid Game S1E1 title is 'Red Light, Green Light'");

// 4. Top 10 System
console.log("\n4. Top 10 in Streaming Today Integrity:");
const alexTop10 = getTop10ForProfile(PROFILES_CONFIG[0]);
assert(alexTop10.length === 10, `Found exactly 10 ranked titles for Top 10 in Streaming Today (got ${alexTop10.length})`);
assert(alexTop10[0].rank === 1 && alexTop10[9].rank === 10, "Top 10 correctly ranks from 1 to 10");

// 5. Subscription Plans
console.log("\n5. Subscription Plans Verification:");
assert(SUBSCRIPTION_PLANS.length === 4, `Found ${SUBSCRIPTION_PLANS.length} subscription plans (Mobile, Basic, Standard, Premium)`);
const mobilePlan = SUBSCRIPTION_PLANS.find(p => p.id === "mobile");
const premiumPlan = SUBSCRIPTION_PLANS.find(p => p.id === "premium");
assert(mobilePlan && mobilePlan.price === "₹149" && mobilePlan.screens === 1, "Mobile plan is ₹149 for 1 screen");
assert(premiumPlan && premiumPlan.price === "₹649" && premiumPlan.screens === 4 && premiumPlan.resolution.includes("4K"), "Premium plan is ₹649 for 4K 4 screens");

// 6. Profile Isolation & Kids Safety Filtering
console.log("\n6. Profile Isolation & Kids Safety:");
const alexProfile = PROFILES_CONFIG.find(p => p.id === "profile-alex");
const kidsProfile = PROFILES_CONFIG.find(p => p.id === "profile-kids");
const adultMovies = getMoviesForProfile(alexProfile);
const kidsMovies = getMoviesForProfile(kidsProfile);
assert(adultMovies.length === ALL_MOVIES.length, "Alex profile can view full catalog");
assert(kidsMovies.every(m => m.isKidFriendly), "Kids profile ONLY receives kid-friendly titles");
assert(!kidsMovies.some(m => m.id === "squid-game" || m.id === "the-witcher" || m.id === "all-of-us-are-dead"), "Adult titles are strictly filtered out of Kids profile");
assert(kidsMovies.some(m => m.id === "super-mario-bros" || m.id === "kung-fu-panda-4"), "Kids profile includes Super Mario & Kung Fu Panda 4");

// 7. Search Functionality
console.log("\n7. Search Functionality:");
const searchMario = searchMovies("mario", kidsProfile);
assert(searchMario.length >= 1 && searchMario[0].id === "super-mario-bros", "Search for 'mario' in kids profile returns Super Mario");
const searchAdultInKids = searchMovies("squid", kidsProfile);
assert(searchAdultInKids.length === 0, "Searching for adult title 'squid' in Kids profile returns 0 results (safe)");
const searchWitcherInAlex = searchMovies("witcher", alexProfile);
assert(searchWitcherInAlex.length >= 1 && searchWitcherInAlex[0].id === "the-witcher", "Searching for 'witcher' in Alex profile finds The Witcher");

// 8. Bundle Build Verification
console.log("\n8. Consolidated Bundle Verification:");
assert(fs.existsSync("dist/bundle.js"), "dist/bundle.js exists");
const bundleContent = fs.readFileSync("dist/bundle.js", "utf8");
assert(bundleContent.length > 100000, `dist/bundle.js is compiled (${bundleContent.length} bytes)`);
assert(!bundleContent.includes("alchemy-of-souls"), "Bundle has ZERO occurrences of 'alchemy-of-souls'");
assert(bundleContent.includes("PlanSelectionPage"), "Bundle includes PlanSelectionPage component");
assert(bundleContent.includes("Top10Row"), "Bundle includes Top10Row component");
assert(bundleContent.includes("video-top-right-close-btn"), "Bundle includes top-right close button");

console.log(`\n=== SUMMARY: ${passed} PASSED, ${failed} FAILED ===`);
if (failed > 0) process.exit(1);
