// ==========================================
// NETFLIX MOVIE & SHOW DATA SERVICE
// Comprehensive TMDB-quality catalog with rich metadata
// ==========================================

import { AVATAR_OPTIONS } from "./avatarService.js";
import { SERIES_EPISODES } from "./episodesData.js";

export const ALL_MOVIES = [
  // --- TV SERIES ---
  {
    id: "stranger-things",
    title: "Stranger Things",
    type: "series",
    poster: "assets/strangerthings.jpeg",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80",
    rating: "8.7",
    year: "2016",
    match: "99% Match",
    maturity: "TV-14",
    duration: "4 Seasons",
    quality: "4K Ultra HD",
    genres: ["Sci-Fi", "Mystery", "Drama", "Horror"],
    isKidFriendly: false,
    rank: 1,
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "David Harbour", "Winona Ryder"],
    creator: "The Duffer Brothers",
    trailerUrl: "https://www.youtube-nocookie.com/embed/b9EkMc79ZSU",
    tags: ["80s Nostalgia", "Upside Down", "Supernatural", "Sci-Fi Thriller"],
    category: ["Top 10 in Streaming Today", "Trending Now", "Popular on Netflix", "Top Rated", "Sci-Fi Movies", "Netflix Originals", "Top 10 Shows"],
    seasons: SERIES_EPISODES["stranger-things"] || []
  },
  {
    id: "squid-game",
    title: "Squid Game",
    type: "series",
    poster: "assets/squid games.jpeg",
    backdrop: "https://images.unsplash.com/photo-1511875762315-c773eb98eec0?w=1600&auto=format&fit=crop&q=80",
    rating: "8.0",
    year: "2021",
    match: "98% Match",
    maturity: "TV-MA",
    duration: "2 Seasons",
    quality: "4K Ultra HD",
    genres: ["Thriller", "Drama", "Mystery", "Action"],
    isKidFriendly: false,
    rank: 2,
    description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
    cast: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-joon", "Jung Ho-yeon"],
    creator: "Hwang Dong-hyuk",
    trailerUrl: "https://www.youtube-nocookie.com/embed/oqxAJKy0ii4",
    tags: ["Dystopian", "Psychological", "Intense", "Suspenseful"],
    category: ["Top 10 in Streaming Today", "Trending Now", "Popular on Netflix", "Netflix Originals", "Action Movies", "Top 10 Shows", "Korean Shows", "Thriller Movies"],
    seasons: SERIES_EPISODES["squid-game"] || []
  },
  {
    id: "wednesday",
    title: "Wednesday",
    type: "series",
    poster: "assets/wednesday.jpeg",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
    rating: "8.1",
    year: "2022",
    match: "98% Match",
    maturity: "TV-14",
    duration: "1 Season",
    quality: "4K Ultra HD",
    genres: ["Comedy", "Fantasy", "Mystery", "Horror"],
    isKidFriendly: false,
    rank: 3,
    description: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
    cast: ["Jenna Ortega", "Gwendoline Christie", "Riki Lindhome", "Christina Ricci"],
    creator: "Alfred Gough, Miles Millar, Tim Burton",
    trailerUrl: "https://www.youtube-nocookie.com/embed/Di310BC8064",
    tags: ["Dark Comedy", "Gothic", "Mystery", "School Life"],
    category: ["Top 10 in Streaming Today", "Trending Now", "Netflix Originals", "Comedy Movies", "Popular on Netflix", "Top 10 Shows"],
    seasons: SERIES_EPISODES["wednesday"] || []
  },
  {
    id: "queen-of-tears",
    title: "Queen of Tears",
    type: "series",
    poster: "assets/queenoftears.jpeg",
    backdrop: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&auto=format&fit=crop&q=80",
    rating: "8.4",
    year: "2024",
    match: "99% Match",
    maturity: "TV-14",
    duration: "1 Season",
    quality: "4K Ultra HD",
    genres: ["Romance", "Drama", "Comedy"],
    isKidFriendly: false,
    rank: 4,
    description: "The queen of department stores and her small-town husband weather a marital crisis until love miraculously begins to bloom again.",
    cast: ["Kim Soo-hyun", "Kim Ji-won", "Park Sung-hoon", "Kwak Dong-yeon"],
    creator: "Park Ji-eun, Jang Young-woo",
    trailerUrl: "https://www.youtube-nocookie.com/embed/3u38uK9rT_8",
    tags: ["K-Drama", "Emotional", "Romantic", "Billionaire Heir"],
    category: ["Top 10 in Streaming Today", "Popular on Netflix", "Korean Shows", "Romantic Favorites", "Trending Now", "Top 10 Shows"],
    seasons: SERIES_EPISODES["queen-of-tears"] || []
  },
  {
    id: "the-witcher",
    title: "The Witcher",
    type: "series",
    poster: "assets/thewicher.jpeg",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
    rating: "8.0",
    year: "2019",
    match: "95% Match",
    maturity: "TV-MA",
    duration: "3 Seasons",
    quality: "4K Ultra HD",
    genres: ["Fantasy", "Action", "Drama", "Adventure"],
    isKidFriendly: false,
    rank: 5,
    description: "Geralt of Rivia, a mutated monster hunter, struggles to find his place in a dangerous world filled with monsters and magic.",
    cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan", "Joey Batey"],
    creator: "Lauren Schmidt Hissrich",
    trailerUrl: "https://www.youtube-nocookie.com/embed/ndl1W4ltcmg",
    tags: ["Epic Fantasy", "Sword & Sorcery", "Gritty", "Dark"],
    category: ["Top 10 in Streaming Today", "Trending Now", "Action Movies", "Netflix Originals", "Sci-Fi Movies", "Top 10 Shows"],
    seasons: SERIES_EPISODES["the-witcher"] || []
  },
  {
    id: "the-vampire-diaries",
    title: "The Vampire Diaries",
    type: "series",
    poster: "assets/tvd.jpeg",
    backdrop: "assets/hero.jpeg",
    rating: "8.0",
    year: "2009",
    match: "97% Match",
    maturity: "TV-14",
    duration: "8 Seasons",
    quality: "HD",
    genres: ["Drama", "Fantasy", "Romance", "Horror"],
    isKidFriendly: false,
    rank: 6,
    description: "The story follows Elena Gilbert and the mysterious Salvatore brothers as supernatural events unfold in Mystic Falls.",
    cast: ["Nina Dobrev", "Paul Wesley", "Ian Somerhalder", "Kat Graham"],
    creator: "Julie Plec, Kevin Williamson",
    trailerUrl: "https://www.youtube-nocookie.com/embed/BmVmhjjkN4E",
    tags: ["Supernatural", "Vampires", "Binge-Worthy", "Teen Romance"],
    category: ["Top 10 in Streaming Today", "Trending Now", "Popular on Netflix", "Top Rated", "Horror Movies", "Romantic Favorites"],
    seasons: SERIES_EPISODES["the-vampire-diaries"] || []
  },
  {
    id: "money-heist",
    title: "Money Heist (La Casa de Papel)",
    type: "series",
    poster: "assets/moneyheist.jpeg",
    backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&auto=format&fit=crop&q=80",
    rating: "8.2",
    year: "2017",
    match: "99% Match",
    maturity: "TV-MA",
    duration: "5 Parts",
    quality: "4K Ultra HD",
    genres: ["Crime", "Thriller", "Drama", "Action"],
    isKidFriendly: false,
    rank: 7,
    description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
    cast: ["Álvaro Morte", "Úrsula Corberó", "Pedro Alonso", "Itziar Ituño"],
    creator: "Álex Pina",
    trailerUrl: "https://www.youtube-nocookie.com/embed/_InqQJRqGW4",
    tags: ["Mastermind Heist", "Red Jumpsuits", "Suspense", "Spanish"],
    category: ["Top 10 in Streaming Today", "Popular on Netflix", "Action Movies", "Thriller Movies", "Netflix Originals"],
    seasons: SERIES_EPISODES["money-heist"] || []
  },
  {
    id: "crash-landing-on-you",
    title: "Crash Landing on You",
    type: "series",
    poster: "assets/crashlanding.jpeg",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
    rating: "8.7",
    year: "2019",
    match: "98% Match",
    maturity: "TV-14",
    duration: "1 Season",
    quality: "HD",
    genres: ["Romance", "Comedy", "Drama"],
    isKidFriendly: false,
    rank: 8,
    description: "A paragliding mishap drops a South Korean heiress into North Korea and into the life of an army officer, who decides he will help her hide.",
    cast: ["Hyun Bin", "Son Ye-jin", "Seo Ji-hye", "Kim Jung-hyun"],
    creator: "Park Ji-eun",
    trailerUrl: "https://www.youtube-nocookie.com/embed/eXMjTXL2Vks",
    tags: ["K-Drama", "Epic Romance", "Cross Border", "Charming"],
    category: ["Top 10 in Streaming Today", "Korean Shows", "Romantic Favorites", "Popular on Netflix", "Top Rated"],
    seasons: SERIES_EPISODES["crash-landing-on-you"] || []
  },
  {
    id: "peaky-blinders",
    title: "Peaky Blinders",
    type: "series",
    poster: "assets/peakyblinds.jpeg",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
    rating: "8.8",
    year: "2013",
    match: "98% Match",
    maturity: "TV-MA",
    duration: "6 Seasons",
    quality: "4K Ultra HD",
    genres: ["Crime", "Drama", "History"],
    isKidFriendly: false,
    rank: 9,
    description: "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
    cast: ["Cillian Murphy", "Paul Anderson", "Helen McCrory", "Tom Hardy"],
    creator: "Steven Knight",
    trailerUrl: "https://www.youtube-nocookie.com/embed/oVzVdvGIC7U",
    tags: ["Period Piece", "Mastermind", "Gritty Crime", "Iconic"],
    category: ["Top 10 in Streaming Today", "Top Rated", "Popular on Netflix", "Drama Movies"],
    seasons: SERIES_EPISODES["peaky-blinders"] || []
  },
  {
    id: "all-of-us-are-dead",
    title: "All of Us Are Dead",
    type: "series",
    poster: "assets/allofuaredead.jpeg",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
    rating: "7.5",
    year: "2022",
    match: "96% Match",
    maturity: "TV-MA",
    duration: "1 Season",
    quality: "4K Ultra HD",
    genres: ["Horror", "Action", "Drama", "Sci-Fi"],
    isKidFriendly: false,
    rank: 10,
    description: "A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out or turn into one of the rabid infected.",
    cast: ["Park Ji-hu", "Yoon Chan-young", "Cho Yi-hyun", "Lomon"],
    creator: "Chun Sung-il, Lee JQ",
    trailerUrl: "https://www.youtube-nocookie.com/embed/IN5TD4VRcZU",
    tags: ["Zombies", "High School Survival", "Gory", "Korean Thriller"],
    category: ["Top 10 in Streaming Today", "Korean Shows", "Horror Movies", "Action Movies", "Netflix Originals"],
    seasons: SERIES_EPISODES["all-of-us-are-dead"] || []
  },
  {
    id: "bridgerton",
    title: "Bridgerton",
    type: "series",
    poster: "assets/bridgerton.jpeg",
    backdrop: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1600&auto=format&fit=crop&q=80",
    rating: "7.4",
    year: "2020",
    match: "95% Match",
    maturity: "TV-MA",
    duration: "3 Seasons",
    quality: "4K Ultra HD",
    genres: ["Romance", "Drama", "Period"],
    isKidFriendly: false,
    description: "The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society. Inspired by Julia Quinn's bestselling novels.",
    cast: ["Nicola Coughlan", "Luke Newton", "Jonathan Bailey", "Simone Ashley"],
    creator: "Chris Van Dusen",
    trailerUrl: "https://www.youtube-nocookie.com/embed/gpv7ayf_tyE",
    tags: ["Romantic", "Lavish", "Society Gossip", "Charming"],
    category: ["Popular on Netflix", "Netflix Originals", "Romantic Favorites", "Drama Movies"],
    seasons: SERIES_EPISODES["bridgerton"] || []
  },

  // --- MOVIES & INDIAN BLOCKBUSTERS ---
  {
    id: "rrr",
    title: "RRR",
    type: "movie",
    poster: "assets/rrr.jpeg",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
    rating: "7.8",
    year: "2022",
    match: "99% Match",
    maturity: "TV-MA",
    duration: "3h 7m",
    quality: "4K Ultra HD",
    genres: ["Action", "Drama", "History"],
    isKidFriendly: false,
    description: "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
    cast: ["N.T. Rama Rao Jr.", "Ram Charan", "Ajay Devgn", "Alia Bhatt"],
    creator: "S.S. Rajamouli",
    trailerUrl: "https://www.youtube-nocookie.com/embed/GY4BgdUSpbE",
    tags: ["Epic Action", "Indian Cinema", "Bromance", "Oscar Winner"],
    category: ["Top 10 Movies", "Indian Movies", "Action Movies", "Top Rated", "Trending Now"]
  },
  {
    id: "jawan",
    title: "Jawan",
    type: "movie",
    poster: "assets/jawan.jpeg",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80",
    rating: "7.0",
    year: "2023",
    match: "97% Match",
    maturity: "TV-MA",
    duration: "2h 49m",
    quality: "4K Ultra HD",
    genres: ["Action", "Thriller"],
    isKidFriendly: false,
    description: "A high-stakes action thriller about a man who is set out to correct the wrongs in society with a team of skilled women, while confronting a monstrous arms dealer.",
    cast: ["Shah Rukh Khan", "Nayanthara", "Vijay Sethupathi", "Deepika Padukone"],
    creator: "Atlee",
    trailerUrl: "https://www.youtube-nocookie.com/embed/COv52Qyctws",
    tags: ["Bollywood", "Shah Rukh Khan", "High Voltage", "Mass Action"],
    category: ["Top 10 Movies", "Indian Movies", "Action Movies", "Trending Now"]
  },
  {
    id: "interstellar",
    title: "Interstellar",
    type: "movie",
    poster: "assets/interstellar.jpeg",
    backdrop: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1600&auto=format&fit=crop&q=80",
    rating: "8.7",
    year: "2014",
    match: "99% Match",
    maturity: "PG-13",
    duration: "2h 49m",
    quality: "4K Ultra HD",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    isKidFriendly: false,
    description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft along with a team of researchers to find a new planet for humans.",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    creator: "Christopher Nolan",
    trailerUrl: "https://www.youtube-nocookie.com/embed/zSWdZVtXT7E",
    tags: ["Mind-Bending", "Space Exploration", "Emotional", "Cinematic Masterpiece"],
    category: ["Top 10 Movies", "Sci-Fi Movies", "Top Rated", "Trending Now"]
  },
  {
    id: "glass-onion",
    title: "Glass Onion: A Knives Out Mystery",
    type: "movie",
    poster: "assets/glassonions.jpeg",
    backdrop: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1600&auto=format&fit=crop&q=80",
    rating: "7.2",
    year: "2022",
    match: "94% Match",
    maturity: "PG-13",
    duration: "2h 19m",
    quality: "4K Ultra HD",
    genres: ["Comedy", "Mystery", "Drama", "Crime"],
    isKidFriendly: false,
    description: "Famed Southern detective Benoit Blanc travels to Greece for his latest case, peeling back the layers of a mystery involving an eccentric tech billionaire.",
    cast: ["Daniel Craig", "Edward Norton", "Janelle Monáe", "Kathryn Hahn"],
    creator: "Rian Johnson",
    trailerUrl: "https://www.youtube-nocookie.com/embed/gj5ibYSz8C0",
    tags: ["Whodunit", "Witty", "Ensemble Cast", "Clever"],
    category: ["Comedy Movies", "Popular on Netflix", "Netflix Originals", "Top 10 Movies"]
  },
  {
    id: "extraction-2",
    title: "Extraction 2",
    type: "movie",
    poster: "assets/extraction.jpeg",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80",
    rating: "7.0",
    year: "2023",
    match: "93% Match",
    maturity: "R",
    duration: "2h 3m",
    quality: "4K Ultra HD",
    genres: ["Action", "Thriller"],
    isKidFriendly: false,
    description: "Back from the brink of death, highly skilled commando Tyler Rake takes on another dangerous mission: saving the imprisoned family of a ruthless gangster.",
    cast: ["Chris Hemsworth", "Golshifteh Farahani", "Tornike Gogrichiani", "Idris Elba"],
    creator: "Sam Hargrave, Joe Russo",
    trailerUrl: "https://www.youtube-nocookie.com/embed/Y274jZs5s7s",
    tags: ["Adrenaline Rush", "Martial Arts", "Gritty Action", "Explosive"],
    category: ["Action Movies", "Trending Now", "Netflix Originals", "Top 10 Movies"]
  },
  {
    id: "cyberpunk-edgerunners",
    title: "Cyberpunk: Edgerunners",
    type: "series",
    poster: "assets/cyberpunk.jpeg",
    backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&auto=format&fit=crop&q=80",
    rating: "8.3",
    year: "2022",
    match: "99% Match",
    maturity: "TV-MA",
    duration: "1 Season",
    quality: "4K Ultra HD",
    genres: ["Sci-Fi", "Action", "Anime"],
    isKidFriendly: false,
    description: "In a dystopian city riddled with corruption and cybernetic implants, a talented street kid strives to become an outlaw mercenary.",
    cast: ["KENN", "Aoi Yuuki", "Hiroki Touchi", "Zach Aguilar"],
    creator: "Rafal Jaki, Studio Trigger",
    trailerUrl: "https://www.youtube-nocookie.com/embed/JtqIas3bYhg",
    tags: ["High Octane", "Cyberpunk", "Anime", "Visually Striking"],
    category: ["Action Movies", "Sci-Fi Movies", "Top Rated", "Netflix Originals"]
  },

  // --- KIDS & FAMILY FRIENDLY TITLES (100% G/PG KID-SAFE) ---
  {
    id: "super-mario-bros",
    title: "The Super Mario Bros. Movie",
    type: "movie",
    poster: "assets/supermario.jpeg",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600&auto=format&fit=crop&q=80",
    rating: "7.1",
    year: "2023",
    match: "98% Match",
    maturity: "PG",
    duration: "1h 32m",
    quality: "4K Ultra HD",
    genres: ["Animation", "Adventure", "Comedy", "Family"],
    isKidFriendly: true,
    rank: 1,
    description: "A Brooklyn plumber named Mario travels through the Mushroom Kingdom with a princess named Peach and an anthropomorphic mushroom named Toad to find Mario's brother, Luigi.",
    cast: ["Chris Pratt", "Anya Taylor-Joy", "Charlie Day", "Jack Black"],
    creator: "Aaron Horvath, Michael Jelenic",
    trailerUrl: "https://www.youtube-nocookie.com/embed/TnGl01FkMMo",
    tags: ["Video Game", "Colorful", "Fun", "Mushroom Kingdom"],
    category: ["Popular Kids Shows", "Animated Adventures", "Family Movie Night", "Cartoons & Fun", "Action Heroes for Kids"]
  },
  {
    id: "kung-fu-panda-4",
    title: "Kung Fu Panda 4",
    type: "movie",
    poster: "assets/kungfupanda.jpeg",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
    rating: "7.0",
    year: "2024",
    match: "96% Match",
    maturity: "PG",
    duration: "1h 34m",
    quality: "4K Ultra HD",
    genres: ["Animation", "Action", "Comedy", "Family"],
    isKidFriendly: true,
    rank: 2,
    description: "Po must train a new warrior when he's chosen to become the spiritual leader of the Valley of Peace. However, a powerful shape-shifting sorceress sets her eyes on his Staff of Wisdom.",
    cast: ["Jack Black", "Awkwafina", "Viola Davis", "Dustin Hoffman"],
    creator: "Mike Mitchell",
    trailerUrl: "https://www.youtube-nocookie.com/embed/_inKs4eeHiI",
    tags: ["Martial Arts", "Dragon Warrior", "Hilarious", "Animal Heroes"],
    category: ["Popular Kids Shows", "Animated Adventures", "Action Heroes for Kids", "Cartoons & Fun"]
  },
  {
    id: "spider-man-across-spiderverse",
    title: "Spider-Man: Across the Spider-Verse",
    type: "movie",
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=1600&auto=format&fit=crop&q=80",
    rating: "8.7",
    year: "2023",
    match: "99% Match",
    maturity: "PG",
    duration: "2h 20m",
    quality: "4K Ultra HD",
    genres: ["Animation", "Action", "Adventure", "Family"],
    isKidFriendly: true,
    rank: 3,
    description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    cast: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac", "Daniel Kaluuya"],
    creator: "Joaquim Dos Santos, Kemp Powers",
    trailerUrl: "https://www.youtube-nocookie.com/embed/cqGjhVJWtEg",
    tags: ["Multiverse", "Spider-Man", "Stunning Animation", "Superheroes"],
    category: ["Popular Kids Shows", "Animated Adventures", "Action Heroes for Kids", "Family Movie Night", "Top Rated"]
  },
  {
    id: "frozen-2",
    title: "Frozen 2",
    type: "movie",
    poster: "assets/frozen.jpeg",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600&auto=format&fit=crop&q=80",
    rating: "7.0",
    year: "2019",
    match: "95% Match",
    maturity: "PG",
    duration: "1h 43m",
    quality: "4K Ultra HD",
    genres: ["Animation", "Adventure", "Comedy", "Family"],
    isKidFriendly: true,
    rank: 4,
    description: "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land to find the origin of Elsa's magical powers.",
    cast: ["Kristen Bell", "Idina Menzel", "Josh Gad", "Jonathan Groff"],
    creator: "Chris Buck, Jennifer Lee",
    trailerUrl: "https://www.youtube-nocookie.com/embed/Zi4LMpSD3nk",
    tags: ["Magic Ice", "Songs", "Sisters", "Enchanted"],
    category: ["Animated Adventures", "Family Movie Night", "Popular Kids Shows"]
  },
  {
    id: "pokemon-concierge",
    title: "Pokémon Concierge",
    type: "series",
    poster: "assets/pokemon.jpeg",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80",
    rating: "7.6",
    year: "2023",
    match: "97% Match",
    maturity: "TV-Y",
    duration: "1 Season",
    quality: "4K Ultra HD",
    genres: ["Animation", "Comedy", "Family"],
    isKidFriendly: true,
    rank: 5,
    description: "Welcome to Pokémon Resort, a peaceful getaway for Pokémon to relax and have fun. Which adorable guest will newly arrived concierge Haru attend to next?",
    cast: ["Non", "Fairouz Ai", "Eita Okuno", "Yoshiko Takemura"],
    creator: "Iku Ogawa",
    trailerUrl: "https://www.youtube-nocookie.com/embed/69L2jR9YtY8",
    tags: ["Stop Motion", "Cute Pokémon", "Feel Good", "Psyduck"],
    category: ["Cartoons & Fun", "Popular Kids Shows", "Animated Adventures"],
    seasons: SERIES_EPISODES["pokemon-concierge"] || []
  }
];

// Profile configuration with 100% reliable SVG avatars
export const PROFILES_CONFIG = [
  {
    id: "profile-alex",
    name: "Alex",
    avatar: AVATAR_OPTIONS[0].svg,
    color: "#E50914",
    isKids: false,
    preferredGenres: ["Sci-Fi", "Action", "Horror", "Crime", "Mystery"],
    bio: "Main Profile - Enjoys Sci-Fi, Dark Thrillers, Action & Originals",
    initialContinueWatching: [
      { movieId: "stranger-things", progressPercent: 65, durationMinutes: 52, watchedMinutes: 34 },
      { movieId: "the-witcher", progressPercent: 30, durationMinutes: 60, watchedMinutes: 18 }
    ],
    initialMyList: ["the-vampire-diaries", "squid-game", "cyberpunk-edgerunners", "interstellar", "rrr"]
  },
  {
    id: "profile-sarah",
    name: "Sarah",
    avatar: AVATAR_OPTIONS[1].svg,
    color: "#8338EC",
    isKids: false,
    preferredGenres: ["Romance", "Comedy", "Drama", "Mystery"],
    bio: "Second Profile - Enjoys Drama, Romantic Comedies, Whodunits & K-Dramas",
    initialContinueWatching: [
      { movieId: "queen-of-tears", progressPercent: 50, durationMinutes: 75, watchedMinutes: 38 },
      { movieId: "bridgerton", progressPercent: 42, durationMinutes: 58, watchedMinutes: 24 }
    ],
    initialMyList: ["queen-of-tears", "crash-landing-on-you", "wednesday", "bridgerton"]
  },
  {
    id: "profile-kids",
    name: "Kids",
    avatar: AVATAR_OPTIONS[2].svg,
    color: "#3A86FF",
    isKids: true,
    preferredGenres: ["Animation", "Family", "Adventure", "Comedy"],
    bio: "Kids Profile - Strictly G/PG animated adventures, cartoons and family movies",
    initialContinueWatching: [
      { movieId: "kung-fu-panda-4", progressPercent: 55, durationMinutes: 94, watchedMinutes: 52 },
      { movieId: "frozen-2", progressPercent: 75, durationMinutes: 103, watchedMinutes: 77 }
    ],
    initialMyList: ["super-mario-bros", "pokemon-concierge", "spider-man-across-spiderverse"]
  }
];

// Helper to get movies filtered for active profile
export function getMoviesForProfile(profile) {
  if (!profile) return ALL_MOVIES;
  if (profile.isKids) {
    return ALL_MOVIES.filter(m => m.isKidFriendly);
  }
  return ALL_MOVIES;
}

// Generate dynamically ranked "More Like This" recommendations
export function getSimilarMovies(movie, profile) {
  if (!movie) return [];
  const availableMovies = getMoviesForProfile(profile);
  const candidates = availableMovies.filter(m => m.id !== movie.id);

  const scored = candidates.map(candidate => {
    let score = 0;
    // Genre match
    if (movie.genres && candidate.genres) {
      const commonGenres = candidate.genres.filter(g => movie.genres.includes(g));
      score += commonGenres.length * 4;
    }
    // Tag match
    if (movie.tags && candidate.tags) {
      const commonTags = candidate.tags.filter(t => movie.tags.includes(t));
      score += commonTags.length * 3;
    }
    // Same type (series vs movie)
    if (movie.type === candidate.type) {
      score += 2;
    }
    // Same category
    if (movie.category && candidate.category) {
      const commonCategories = candidate.category.filter(c => movie.category.includes(c));
      score += commonCategories.length * 2;
    }
    // Rating boost
    score += (parseFloat(candidate.rating) || 7.0) * 0.5;

    return { movie: candidate, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 6).map(s => s.movie);
}

// Get Top 10 items for row
export function getTop10ForProfile(profile) {
  const movies = getMoviesForProfile(profile);
  return movies.filter(m => m.category && m.category.includes("Top 10 in Streaming Today")).slice(0, 10);
}

// Generate rows dynamically based on the active profile
export function getCategoriesForProfile(profile) {
  const isKids = profile && profile.isKids;

  if (isKids) {
    return [
      { id: "popular-kids", title: "Popular Kids Shows", filter: m => m.isKidFriendly && m.category.includes("Popular Kids Shows") },
      { id: "animated-adventures", title: "Animated Adventures", filter: m => m.isKidFriendly && m.genres.includes("Animation") },
      { id: "family-movie-night", title: "Family Movie Night", filter: m => m.isKidFriendly && m.genres.includes("Family") },
      { id: "action-heroes-kids", title: "Action Heroes for Kids", filter: m => m.isKidFriendly && m.genres.includes("Action") },
      { id: "cartoons-fun", title: "Cartoons & Fun", filter: m => m.isKidFriendly && m.genres.includes("Comedy") }
    ];
  }

  const preferredGenres = (profile && profile.preferredGenres) || ["Action", "Sci-Fi"];

  return [
    { 
      id: "recommended-for-you", 
      title: "Recommended for " + (profile ? profile.name : "You"),
      filter: m => !m.isKidFriendly && m.genres.some(g => preferredGenres.includes(g))
    },
    { id: "trending-now", title: "Trending Now", filter: m => m.category.includes("Trending Now") },
    { id: "popular-netflix", title: "Popular on Netflix", filter: m => m.category.includes("Popular on Netflix") },
    { id: "netflix-originals", title: "Netflix Originals", filter: m => m.category.includes("Netflix Originals") },
    { id: "korean-shows", title: "Korean Dramas & Series", filter: m => m.category.includes("Korean Shows") },
    { id: "indian-movies", title: "Indian Blockbusters", filter: m => m.category.includes("Indian Movies") },
    { id: "action-movies", title: "Action & Adventure", filter: m => m.genres.includes("Action") && !m.isKidFriendly },
    { id: "comedy-movies", title: "Comedy Hits", filter: m => m.genres.includes("Comedy") },
    { id: "romantic-favorites", title: "Romantic Favorites", filter: m => m.genres.includes("Romance") && !m.isKidFriendly },
    { id: "scifi-movies", title: "Sci-Fi & Fantasy", filter: m => (m.genres.includes("Sci-Fi") || m.genres.includes("Fantasy")) && !m.isKidFriendly },
    { id: "horror-movies", title: "Horror & Suspense", filter: m => m.genres.includes("Horror") || m.genres.includes("Thriller") },
    { id: "top-rated", title: "Top Rated", filter: m => m.category.includes("Top Rated") }
  ];
}

// Search across titles, genres, actors, tags
export function searchMovies(query, profile) {
  if (!query || !query.trim()) return [];
  const q = query.toLowerCase().trim();
  const availableMovies = getMoviesForProfile(profile);

  return availableMovies.filter(m => {
    const inTitle = m.title.toLowerCase().includes(q);
    const inGenres = m.genres.some(g => g.toLowerCase().includes(q));
    const inCast = m.cast ? m.cast.some(c => c.toLowerCase().includes(q)) : false;
    const inTags = m.tags ? m.tags.some(t => t.toLowerCase().includes(q)) : false;
    const inDesc = m.description.toLowerCase().includes(q);
    return inTitle || inGenres || inCast || inTags || inDesc;
  });
}
