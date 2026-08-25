// ==========================================
// NETFLIX MOVIE & SHOW DATA SERVICE
// ==========================================

export const ALL_MOVIES = [
// --- Existing Project Movies (Preserved & Enhanced) ---
{
  id: "the-vampire-diaries",
  title: "The Vampire Diaries",
  poster: "assets/movie1.jpg",
  backdrop: "assets/hero.jpg",
  rating: "8.0",
  year: "2009",
  match: "97% Match",
  maturity: "TV-14",
  duration: "8 Seasons",
  quality: "HD",
  genres: ["Drama", "Fantasy", "Romance", "Horror"],
  isKidFriendly: false,
  description: "The story follows Elena Gilbert and the mysterious Salvatore brothers as supernatural events unfold in Mystic Falls.",
  cast: ["Nina Dobrev", "Paul Wesley", "Ian Somerhalder", "Kat Graham"],
  creator: "Julie Plec, Kevin Williamson",
  trailerUrl: "https://www.youtube-nocookie.com/embed/BmVmhjjkN4E",
  tags: ["Supernatural", "Vampires", "Binge-Worthy", "Teen Romance"],
  category: ["Trending Now", "Popular on Netflix", "Top Rated", "Horror Movies"]
}, {
  id: "the-witcher",
  title: "The Witcher",
  poster: "assets/movie2.jpg",
  backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
  rating: "8.0",
  year: "2019",
  match: "95% Match",
  maturity: "TV-MA",
  duration: "3 Seasons",
  quality: "4K Ultra HD",
  genres: ["Fantasy", "Action", "Drama", "Adventure"],
  isKidFriendly: false,
  description: "Geralt of Rivia, a mutated monster hunter, struggles to find his place in a dangerous world filled with monsters and magic.",
  cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan", "Joey Batey"],
  creator: "Lauren Schmidt Hissrich",
  trailerUrl: "https://www.youtube-nocookie.com/embed/ndl1W4ltcmg",
  tags: ["Epic Fantasy", "Sword & Sorcery", "Gritty", "Dark"],
  category: ["Trending Now", "Action Movies", "Netflix Originals", "Sci-Fi Movies"]
}, {
  id: "stranger-things",
  title: "Stranger Things",
  poster: "assets/movie3.jpg",
  backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80",
  rating: "8.7",
  year: "2016",
  match: "99% Match",
  maturity: "TV-14",
  duration: "4 Seasons",
  quality: "4K Ultra HD",
  genres: ["Sci-Fi", "Mystery", "Drama", "Horror"],
  isKidFriendly: false,
  description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
  cast: ["Millie Bobby Brown", "Finn Wolfhard", "David Harbour", "Winona Ryder"],
  creator: "The Duffer Brothers",
  trailerUrl: "https://www.youtube-nocookie.com/embed/b9EkMc79ZSU",
  tags: ["80s Nostalgia", "Upside Down", "Supernatural", "Sci-Fi Thriller"],
  category: ["Popular on Netflix", "Top Rated", "Sci-Fi Movies", "Netflix Originals", "Trending Now"]
}, {
  id: "squid-game",
  title: "Squid Game",
  poster: "assets/movie4.jpg",
  backdrop: "https://images.unsplash.com/photo-1511875762315-c773eb98eec0?w=1600&auto=format&fit=crop&q=80",
  rating: "8.0",
  year: "2021",
  match: "98% Match",
  maturity: "TV-MA",
  duration: "2 Seasons",
  quality: "4K Ultra HD",
  genres: ["Thriller", "Drama", "Mystery", "Action"],
  isKidFriendly: false,
  description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
  cast: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-joon", "Jung Ho-yeon"],
  creator: "Hwang Dong-hyuk",
  trailerUrl: "https://www.youtube-nocookie.com/embed/oqxAJKy0ii4",
  tags: ["Dystopian", "Psychological", "Intense", "Suspenseful"],
  category: ["Trending Now", "Popular on Netflix", "Netflix Originals", "Action Movies"]
}, {
  id: "alchemy-of-souls",
  title: "Alchemy of Souls",
  poster: "assets/movie5.jpg",
  backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600&auto=format&fit=crop&q=80",
  rating: "8.7",
  year: "2022",
  match: "96% Match",
  maturity: "TV-14",
  duration: "2 Seasons",
  quality: "HD",
  genres: ["Fantasy", "Romance", "Drama", "Action"],
  isKidFriendly: false,
  description: "A powerful sorceress in a blind woman's body encounters a man from a prestigious family, who wants her help to change his destiny.",
  cast: ["Lee Jae-wook", "Jung So-min", "Minhyun", "Go Youn-jung"],
  creator: "Hong Sisters",
  trailerUrl: "https://www.youtube-nocookie.com/embed/n3V-hHl71uA",
  tags: ["K-Drama", "Magic", "Romantic Fantasy", "Swordplay"],
  category: ["Popular on Netflix", "Top Rated", "Action Movies"]
},
// --- Additional High-Caliber Netflix Titles ---
{
  id: "wednesday",
  title: "Wednesday",
  poster: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&auto=format&fit=crop&q=80",
  backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
  rating: "8.1",
  year: "2022",
  match: "98% Match",
  maturity: "TV-14",
  duration: "1 Season",
  quality: "4K Ultra HD",
  genres: ["Comedy", "Fantasy", "Mystery", "Horror"],
  isKidFriendly: false,
  description: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
  cast: ["Jenna Ortega", "Gwendoline Christie", "Riki Lindhome", "Christina Ricci"],
  creator: "Alfred Gough, Miles Millar, Tim Burton",
  trailerUrl: "https://www.youtube-nocookie.com/embed/Di310BC8064",
  tags: ["Dark Comedy", "Gothic", "Mystery", "School Life"],
  category: ["Trending Now", "Netflix Originals", "Comedy Movies", "Popular on Netflix"]
}, {
  id: "cyberpunk-edgerunners",
  title: "Cyberpunk: Edgerunners",
  poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
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
}, {
  id: "glass-onion",
  title: "Glass Onion: A Knives Out Mystery",
  poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80",
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
  category: ["Comedy Movies", "Popular on Netflix", "Netflix Originals"]
}, {
  id: "interstellar",
  title: "Interstellar",
  poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
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
  category: ["Sci-Fi Movies", "Top Rated", "Trending Now"]
}, {
  id: "extraction-2",
  title: "Extraction 2",
  poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80",
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
  category: ["Action Movies", "Trending Now", "Netflix Originals"]
}, {
  id: "peaky-blinders",
  title: "Peaky Blinders",
  poster: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop&q=80",
  backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
  rating: "8.8",
  year: "2013",
  match: "98% Match",
  maturity: "TV-MA",
  duration: "6 Seasons",
  quality: "4K Ultra HD",
  genres: ["Crime", "Drama", "History"],
  isKidFriendly: false,
  description: "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
  cast: ["Cillian Murphy", "Paul Anderson", "Helen McCrory", "Tom Hardy"],
  creator: "Steven Knight",
  trailerUrl: "https://www.youtube-nocookie.com/embed/oVzVdvGIC7U",
  tags: ["Period Piece", "Mastermind", "Gritty Crime", "Iconic"],
  category: ["Top Rated", "Popular on Netflix"]
}, {
  id: "bridgerton",
  title: "Bridgerton",
  poster: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
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
  category: ["Popular on Netflix", "Netflix Originals"]
}, {
  id: "arcane",
  title: "Arcane: League of Legends",
  poster: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80",
  backdrop: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=1600&auto=format&fit=crop&q=80",
  rating: "9.0",
  year: "2021",
  match: "99% Match",
  maturity: "TV-14",
  duration: "2 Seasons",
  quality: "4K Ultra HD",
  genres: ["Action", "Sci-Fi", "Animation", "Drama"],
  isKidFriendly: false,
  description: "Set in the utopian region of Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions-and the power that will tear them apart.",
  cast: ["Hailee Steinfeld", "Ella Purnell", "Kevin Alejandro", "Katie Leung"],
  creator: "Christian Linke, Alex Yee",
  trailerUrl: "https://www.youtube-nocookie.com/embed/fXmAurh012s",
  tags: ["Masterpiece", "Steampunk", "Visual Spectacle", "Sisters"],
  category: ["Top Rated", "Trending Now", "Netflix Originals", "Action Movies", "Sci-Fi Movies"]
}, {
  id: "dark",
  title: "Dark",
  poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
  backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80",
  rating: "8.7",
  year: "2017",
  match: "98% Match",
  maturity: "TV-MA",
  duration: "3 Seasons",
  quality: "4K Ultra HD",
  genres: ["Sci-Fi", "Mystery", "Thriller", "Drama"],
  isKidFriendly: false,
  description: "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
  cast: ["Louis Hofmann", "Oliver Masucci", "Jördis Triebel", "Maja Schöne"],
  creator: "Baran bo Odar, Jantje Friese",
  trailerUrl: "https://www.youtube-nocookie.com/embed/rrwycJ08PSA",
  tags: ["Time Travel", "Ominous", "Complex", "German"],
  category: ["Sci-Fi Movies", "Top Rated", "Netflix Originals", "Horror Movies"]
},
// --- KIDS & FAMILY FRIENDLY TITLES ---
{
  id: "super-mario-bros",
  title: "The Super Mario Bros. Movie",
  poster: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&auto=format&fit=crop&q=80",
  backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600&auto=format&fit=crop&q=80",
  rating: "7.1",
  year: "2023",
  match: "98% Match",
  maturity: "PG",
  duration: "1h 32m",
  quality: "4K Ultra HD",
  genres: ["Animation", "Adventure", "Comedy", "Family"],
  isKidFriendly: true,
  description: "A Brooklyn plumber named Mario travels through the Mushroom Kingdom with a princess named Peach and an anthropomorphic mushroom named Toad to find Mario's brother, Luigi.",
  cast: ["Chris Pratt", "Anya Taylor-Joy", "Charlie Day", "Jack Black"],
  creator: "Aaron Horvath, Michael Jelenic",
  trailerUrl: "https://www.youtube-nocookie.com/embed/TnGl01FkMMo",
  tags: ["Video Game", "Colorful", "Fun", "Mushroom Kingdom"],
  category: ["Popular Kids Shows", "Animated Adventures", "Family Movie Night", "Cartoons & Fun", "Action Heroes for Kids"]
}, {
  id: "kung-fu-panda-4",
  title: "Kung Fu Panda 4",
  poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
  backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
  rating: "7.0",
  year: "2024",
  match: "96% Match",
  maturity: "PG",
  duration: "1h 34m",
  quality: "4K Ultra HD",
  genres: ["Animation", "Action", "Comedy", "Family"],
  isKidFriendly: true,
  description: "Po must train a new warrior when he's chosen to become the spiritual leader of the Valley of Peace. However, a powerful shape-shifting sorceress sets her eyes on his Staff of Wisdom.",
  cast: ["Jack Black", "Awkwafina", "Viola Davis", "Dustin Hoffman"],
  creator: "Mike Mitchell",
  trailerUrl: "https://www.youtube-nocookie.com/embed/_inKs4eeHiI",
  tags: ["Martial Arts", "Dragon Warrior", "Hilarious", "Animal Heroes"],
  category: ["Popular Kids Shows", "Animated Adventures", "Action Heroes for Kids", "Cartoons & Fun"]
}, {
  id: "spider-man-across-spiderverse",
  title: "Spider-Man: Across the Spider-Verse",
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
  description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
  cast: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac", "Daniel Kaluuya"],
  creator: "Joaquim Dos Santos, Kemp Powers",
  trailerUrl: "https://www.youtube-nocookie.com/embed/cqGjhVJWtEg",
  tags: ["Multiverse", "Spider-Man", "Stunning Animation", "Superheroes"],
  category: ["Popular Kids Shows", "Animated Adventures", "Action Heroes for Kids", "Family Movie Night", "Top Rated"]
}, {
  id: "frozen-2",
  title: "Frozen 2",
  poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
  backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600&auto=format&fit=crop&q=80",
  rating: "7.0",
  year: "2019",
  match: "95% Match",
  maturity: "PG",
  duration: "1h 43m",
  quality: "4K Ultra HD",
  genres: ["Animation", "Adventure", "Comedy", "Family"],
  isKidFriendly: true,
  description: "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land to find the origin of Elsa's magical powers.",
  cast: ["Kristen Bell", "Idina Menzel", "Josh Gad", "Jonathan Groff"],
  creator: "Chris Buck, Jennifer Lee",
  trailerUrl: "https://www.youtube-nocookie.com/embed/Zi4LMpSD3nk",
  tags: ["Magic Ice", "Songs", "Sisters", "Enchanted"],
  category: ["Animated Adventures", "Family Movie Night", "Popular Kids Shows"]
}, {
  id: "pokemon-concierge",
  title: "Pokémon Concierge",
  poster: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=600&auto=format&fit=crop&q=80",
  backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&auto=format&fit=crop&q=80",
  rating: "7.6",
  year: "2023",
  match: "97% Match",
  maturity: "TV-Y",
  duration: "1 Season",
  quality: "4K Ultra HD",
  genres: ["Animation", "Comedy", "Family"],
  isKidFriendly: true,
  description: "Welcome to Pokémon Resort, a peaceful getaway for Pokémon to relax and have fun. Which adorable guest will newly arrived concierge Haru attend to next?",
  cast: ["Non", "Fairouz Ai", "Eita Okuno", "Yoshiko Takemura"],
  creator: "Iku Ogawa",
  trailerUrl: "https://www.youtube-nocookie.com/embed/69L2jR9YtY8",
  tags: ["Stop Motion", "Cute Pokémon", "Feel Good", "Psyduck"],
  category: ["Cartoons & Fun", "Popular Kids Shows", "Animated Adventures"]
}, {
  id: "minions-rise-of-gru",
  title: "Minions: The Rise of Gru",
  poster: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&auto=format&fit=crop&q=80",
  backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&auto=format&fit=crop&q=80",
  rating: "6.6",
  year: "2022",
  match: "93% Match",
  maturity: "PG",
  duration: "1h 27m",
  quality: "4K Ultra HD",
  genres: ["Animation", "Comedy", "Adventure", "Family"],
  isKidFriendly: true,
  description: "The untold story of one twelve-year-old's dream to become the world's greatest supervillain, aided by his yellow minion mischief-makers.",
  cast: ["Steve Carell", "Pierre Coffin", "Taraji P. Henson", "Michelle Yeoh"],
  creator: "Kyle Balda",
  trailerUrl: "https://www.youtube-nocookie.com/embed/6DxjJzmYsXo",
  tags: ["Minions", "Banana", "Supervillain", "Family Laughs"],
  category: ["Cartoons & Fun", "Family Movie Night", "Popular Kids Shows"]
}, {
  id: "avatar-the-last-airbender-animated",
  title: "Avatar: The Last Airbender",
  poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
  backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1600&auto=format&fit=crop&q=80",
  rating: "9.3",
  year: "2005",
  match: "99% Match",
  maturity: "TV-Y7",
  duration: "3 Seasons",
  quality: "HD",
  genres: ["Animation", "Action", "Adventure", "Family", "Fantasy"],
  isKidFriendly: true,
  description: "In a war-torn world of elemental magic, a young boy named Aang reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar.",
  cast: ["Zach Tyler Eisen", "Mae Whitman", "Jack De Sena", "Dante Basco"],
  creator: "Michael Dante DiMartino, Bryan Konietzko",
  trailerUrl: "https://www.youtube-nocookie.com/embed/d1EnW4kn1kg",
  tags: ["Bending Elements", "Appa & Momo", "Epic Adventure", "Masterpiece"],
  category: ["Action Heroes for Kids", "Animated Adventures", "Top Rated", "Popular Kids Shows"]
}];

// Profile configuration and initial data
export const PROFILES_CONFIG = [{
  id: "profile-alex",
  name: "Alex",
  avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
  color: "#E50914",
  isKids: false,
  preferredGenres: ["Sci-Fi", "Action", "Horror", "Crime", "Mystery"],
  bio: "Main Profile - Enjoys Sci-Fi, Dark Thrillers, Action & Originals",
  initialContinueWatching: [{
    movieId: "stranger-things",
    progressPercent: 65,
    durationMinutes: 52,
    watchedMinutes: 34
  }, {
    movieId: "the-witcher",
    progressPercent: 30,
    durationMinutes: 60,
    watchedMinutes: 18
  }],
  initialMyList: ["the-vampire-diaries", "squid-game", "cyberpunk-edgerunners", "interstellar"]
}, {
  id: "profile-sarah",
  name: "Sarah",
  avatar: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABfn36qZ30e1r_bM9d98r8qN96e00.png?r=88c",
  color: "#8338EC",
  isKids: false,
  preferredGenres: ["Romance", "Comedy", "Drama", "Mystery"],
  bio: "Second Profile - Enjoys Drama, Romantic Comedies, Whodunits & K-Dramas",
  initialContinueWatching: [{
    movieId: "bridgerton",
    progressPercent: 42,
    durationMinutes: 58,
    watchedMinutes: 24
  }, {
    movieId: "glass-onion",
    progressPercent: 80,
    durationMinutes: 139,
    watchedMinutes: 111
  }],
  initialMyList: ["alchemy-of-souls", "wednesday", "bridgerton"]
}, {
  id: "profile-kids",
  name: "Kids",
  avatar: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABe0o_vE2b8sEw8x2w17g20800.png?r=fcd",
  color: "#3A86FF",
  isKids: true,
  preferredGenres: ["Animation", "Family", "Adventure", "Comedy"],
  bio: "Kids Profile - Strictly G/PG animated adventures, cartoons and family movies",
  initialContinueWatching: [{
    movieId: "kung-fu-panda-4",
    progressPercent: 55,
    durationMinutes: 94,
    watchedMinutes: 52
  }, {
    movieId: "frozen-2",
    progressPercent: 75,
    durationMinutes: 103,
    watchedMinutes: 77
  }],
  initialMyList: ["super-mario-bros", "pokemon-concierge", "spider-man-across-spiderverse", "avatar-the-last-airbender-animated"]
}];

// Helper to get movies filtered for active profile
export function getMoviesForProfile(profile) {
  if (!profile) return ALL_MOVIES;
  if (profile.isKids) {
    return ALL_MOVIES.filter(m => m.isKidFriendly);
  }
  return ALL_MOVIES;
}

// Generate rows dynamically based on the active profile
export function getCategoriesForProfile(profile) {
  const isKids = profile && profile.isKids;
  if (isKids) {
    return [{
      id: "popular-kids",
      title: "Popular Kids Shows",
      filter: m => m.isKidFriendly && m.category.includes("Popular Kids Shows")
    }, {
      id: "animated-adventures",
      title: "Animated Adventures",
      filter: m => m.isKidFriendly && m.genres.includes("Animation")
    }, {
      id: "family-movie-night",
      title: "Family Movie Night",
      filter: m => m.isKidFriendly && m.genres.includes("Family")
    }, {
      id: "action-heroes-kids",
      title: "Action Heroes for Kids",
      filter: m => m.isKidFriendly && m.genres.includes("Action")
    }, {
      id: "cartoons-fun",
      title: "Cartoons & Fun",
      filter: m => m.isKidFriendly && m.genres.includes("Comedy")
    }];
  }

  // Adult profiles get customized "Recommended for You" row based on preferences!
  const preferredGenres = profile && profile.preferredGenres || ["Action", "Sci-Fi"];
  return [{
    id: "recommended-for-you",
    title: `Recommended for ${profile ? profile.name : "You"}`,
    filter: m => !m.isKidFriendly && m.genres.some(g => preferredGenres.includes(g))
  }, {
    id: "trending-now",
    title: "Trending Now",
    filter: m => m.category.includes("Trending Now")
  }, {
    id: "popular-netflix",
    title: "Popular on Netflix",
    filter: m => m.category.includes("Popular on Netflix")
  }, {
    id: "top-rated",
    title: "Top Rated",
    filter: m => m.category.includes("Top Rated")
  }, {
    id: "action-movies",
    title: "Action & Adventure",
    filter: m => m.genres.includes("Action") && !m.isKidFriendly
  }, {
    id: "comedy-movies",
    title: "Comedy Hits",
    filter: m => m.genres.includes("Comedy")
  }, {
    id: "scifi-movies",
    title: "Sci-Fi & Fantasy",
    filter: m => (m.genres.includes("Sci-Fi") || m.genres.includes("Fantasy")) && !m.isKidFriendly
  }, {
    id: "horror-movies",
    title: "Horror & Suspense",
    filter: m => m.genres.includes("Horror") || m.genres.includes("Thriller")
  }, {
    id: "netflix-originals",
    title: "Netflix Originals",
    filter: m => m.category.includes("Netflix Originals")
  }];
}

// Search across titles, genres, actors, tags
export function searchMovies(query, profile) {
  if (!query || !query.trim()) return [];
  const q = query.toLowerCase().trim();
  const availableMovies = getMoviesForProfile(profile);
  return availableMovies.filter(m => {
    const inTitle = m.title.toLowerCase().includes(q);
    const inGenres = m.genres.some(g => g.toLowerCase().includes(q));
    const inCast = m.cast.some(c => c.toLowerCase().includes(q));
    const inTags = m.tags.some(t => t.toLowerCase().includes(q));
    const inDesc = m.description.toLowerCase().includes(q);
    return inTitle || inGenres || inCast || inTags || inDesc;
  });
}