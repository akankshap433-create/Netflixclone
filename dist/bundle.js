(function () {
  const React = window.React;
  const ReactDOM = window.ReactDOM;
  const {
    useState,
    useEffect,
    useRef,
    useCallback,
    useContext,
    createContext
  } = React;

  // --- src/services/avatarService.js ---
  // ==========================================
  // BULLETPROOF NETFLIX AVATAR SERVICE
  // Provides 100% reliable, zero-fail SVG avatars
  // ==========================================

  const AVATAR_OPTIONS = [{
    id: "avatar-alex",
    name: "Classic Red Smiley",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="10" fill="%23E50914"/><circle cx="34" cy="38" r="8" fill="%23FFFFFF"/><circle cx="66" cy="38" r="8" fill="%23FFFFFF"/><path d="M 28 62 Q 50 82 72 62" fill="none" stroke="%23FFFFFF" stroke-width="7" stroke-linecap="round"/></svg>`
  }, {
    id: "avatar-sarah",
    name: "Chic Violet Star",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="10" fill="%238338EC"/><circle cx="35" cy="40" r="7" fill="%23FFBE0B"/><circle cx="65" cy="40" r="7" fill="%23FFBE0B"/><path d="M 30 65 Q 50 80 70 65" fill="none" stroke="%23FFBE0B" stroke-width="6" stroke-linecap="round"/><polygon points="50,12 53,22 64,22 55,28 58,38 50,32 42,38 45,28 36,22 47,22" fill="%23FFBE0B"/></svg>`
  }, {
    id: "avatar-kids",
    name: "Kids Sunny Monster",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="10" fill="%233A86FF"/><circle cx="35" cy="36" r="10" fill="%23FFFFFF"/><circle cx="35" cy="36" r="5" fill="%23000000"/><circle cx="65" cy="36" r="10" fill="%23FFFFFF"/><circle cx="65" cy="36" r="5" fill="%23000000"/><path d="M 25 58 Q 50 85 75 58 Z" fill="%23FF006E"/><rect x="38" y="58" width="8" height="6" fill="%23FFFFFF" rx="1"/><rect x="54" y="58" width="8" height="6" fill="%23FFFFFF" rx="1"/></svg>`
  }, {
    id: "avatar-gamer",
    name: "Neon Gamer Green",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="10" fill="%2306D6A0"/><rect x="25" y="32" width="50" height="24" rx="6" fill="%23118AB2"/><circle cx="38" cy="44" r="5" fill="%23FFD166"/><circle cx="62" cy="44" r="5" fill="%23FFD166"/><path d="M 32 68 Q 50 78 68 68" fill="none" stroke="%23073B4C" stroke-width="5" stroke-linecap="round"/></svg>`
  }, {
    id: "avatar-hero",
    name: "Midnight Ninja",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="10" fill="%23111111"/><rect x="15" y="32" width="70" height="20" rx="4" fill="%23E50914"/><circle cx="36" cy="42" r="6" fill="%23FFFFFF"/><circle cx="64" cy="42" r="6" fill="%23FFFFFF"/><circle cx="36" cy="42" r="3" fill="%23111111"/><circle cx="64" cy="42" r="3" fill="%23111111"/><path d="M 35 72 L 65 72" stroke="%23E50914" stroke-width="4" stroke-linecap="round"/></svg>`
  }, {
    id: "avatar-pink",
    name: "Pink Anime Panda",
    svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="10" fill="%23FF70A6"/><circle cx="32" cy="38" r="9" fill="%23FFFFFF"/><circle cx="32" cy="38" r="4.5" fill="%23FF006E"/><circle cx="68" cy="38" r="9" fill="%23FFFFFF"/><circle cx="68" cy="38" r="4.5" fill="%23FF006E"/><circle cx="20" cy="52" r="6" fill="%23FF9770" opacity="0.8"/><circle cx="80" cy="52" r="6" fill="%23FF9770" opacity="0.8"/><path d="M 38 62 Q 50 72 62 62" fill="none" stroke="%23FFFFFF" stroke-width="5" stroke-linecap="round"/></svg>`
  }];
  function getAvatarById(id) {
    const found = AVATAR_OPTIONS.find(a => a.id === id);
    return found ? found.svg : AVATAR_OPTIONS[0].svg;
  }

  // --- src/services/episodesData.js ---
  // ==========================================
  // TV SERIES SEASONS & EPISODES DATA
  // Realistic episode guides with thumbnails, durations, synopses
  // ==========================================

  const SERIES_EPISODES = {
    "squid-game": [{
      seasonNumber: 1,
      seasonTitle: "Season 1",
      episodes: [{
        episodeNumber: 1,
        title: "Red Light, Green Light",
        duration: "60m",
        thumbnail: "https://images.unsplash.com/photo-1511875762315-c773eb98eec0?w=600&auto=format&fit=crop&q=80",
        description: "Hoping to win easy money, broke and desperate Gi-hun agrees to take part in an enigmatic game. Not long into the first round, unforeseen horrors unfold."
      }, {
        episodeNumber: 2,
        title: "Hell",
        duration: "63m",
        thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
        description: "Split on whether to continue or quit, the group holds a vote. But their realities outside prove to be just as unforgiving as the game."
      }, {
        episodeNumber: 3,
        title: "The Man with the Umbrella",
        duration: "54m",
        thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
        description: "A few players enter the honeycomb round with hidden advantages. Meanwhile, Jun-ho sneaks his way inside the facility."
      }, {
        episodeNumber: 4,
        title: "Stick to the Team",
        duration: "52m",
        thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
        description: "As alliances form among the players, no one is safe in the dorm after lights out. The tug-of-war challenges the team to think strategically."
      }, {
        episodeNumber: 5,
        title: "A Fair World",
        duration: "51m",
        thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80",
        description: "Gi-hun and his team take turns keeping watch through the night. The masked men face trouble with their co-conspirators."
      }, {
        episodeNumber: 6,
        title: "Gganbu",
        duration: "62m",
        thumbnail: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80",
        description: "Players pair off for the fourth game of marbles. Gi-hun grapples with a moral dilemma as tragic sacrifices are made."
      }]
    }, {
      seasonNumber: 2,
      seasonTitle: "Season 2",
      episodes: [{
        episodeNumber: 1,
        title: "Bread and Lottery",
        duration: "58m",
        thumbnail: "https://images.unsplash.com/photo-1511875762315-c773eb98eec0?w=600&auto=format&fit=crop&q=80",
        description: "Gi-hun abandons his plans to go to America after an ominous encounter, determined to stop the deadly organization once and for all."
      }, {
        episodeNumber: 2,
        title: "The Circle",
        duration: "55m",
        thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
        description: "Re-entering the arena as Player 456, Gi-hun attempts to warn new contestants of the gruesome realities of the games."
      }]
    }],
    "stranger-things": [{
      seasonNumber: 1,
      seasonTitle: "Season 1",
      episodes: [{
        episodeNumber: 1,
        title: "Chapter One: The Vanishing of Will Byers",
        duration: "49m",
        thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
        description: "On his way home, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab."
      }, {
        episodeNumber: 2,
        title: "Chapter Two: The Weirdo on Maple Street",
        duration: "56m",
        thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
        description: "Mike, Dustin and Lucas try to talk to the girl they found in the woods. Hopper questions Joyce about an unsettling phone call."
      }, {
        episodeNumber: 3,
        title: "Chapter Three: Holly, Jolly",
        duration: "52m",
        thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
        description: "Nancy looks for Barb and finds out what Jonathan has been doing. Joyce is convinced Will is speaking through the Christmas lights."
      }]
    }, {
      seasonNumber: 2,
      seasonTitle: "Season 2",
      episodes: [{
        episodeNumber: 1,
        title: "Chapter One: MADMAX",
        duration: "48m",
        thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
        description: "As the town preps for Halloween, a high-scoring rival shakes things up at the arcade, and Hopper inspects a field of rotting pumpkins."
      }]
    }],
    "the-witcher": [{
      seasonNumber: 1,
      seasonTitle: "Season 1",
      episodes: [{
        episodeNumber: 1,
        title: "The End's Beginning",
        duration: "61m",
        thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
        description: "Hostile townsfolk greet Geralt in Blaviken. Princess Ciri finds her royal world upended when Nilfgaard attacks Cintra."
      }, {
        episodeNumber: 2,
        title: "Four Marks",
        duration: "61m",
        thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
        description: "Bullied and neglected, Yennefer finds an unexpected means of escape. Geralt's hunt for a so-called devil goes wrong."
      }]
    }],
    "wednesday": [{
      seasonNumber: 1,
      seasonTitle: "Season 1",
      episodes: [{
        episodeNumber: 1,
        title: "Wednesday's Child is Full of Woe",
        duration: "59m",
        thumbnail: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&auto=format&fit=crop&q=80",
        description: "When a delightfully wicked prank gets Wednesday expelled, her parents send her to Nevermore Academy boarding school."
      }, {
        episodeNumber: 2,
        title: "Woe is the Loneliest Number",
        duration: "48m",
        thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
        description: "The sheriff questions Wednesday about the forest attack. Wednesday competes in the cutthroat Poe Cup race."
      }]
    }],
    "the-vampire-diaries": [{
      seasonNumber: 1,
      seasonTitle: "Season 1",
      episodes: [{
        episodeNumber: 1,
        title: "Pilot",
        duration: "44m",
        thumbnail: "assets/movie1.jpg",
        description: "High school student Elena is immediately drawn to Stefan Salvatore, unaware that he is a centuries-old vampire."
      }, {
        episodeNumber: 2,
        title: "Night of the Comet",
        duration: "42m",
        thumbnail: "assets/hero.jpg",
        description: "Mystic Falls prepares for a festival while Damon continues to torment Stefan and attempts to charm Elena."
      }]
    }],
    "queen-of-tears": [{
      seasonNumber: 1,
      seasonTitle: "Season 1",
      episodes: [{
        episodeNumber: 1,
        title: "Episode 1",
        duration: "75m",
        thumbnail: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&auto=format&fit=crop&q=80",
        description: "Baek Hyun-woo and Hong Hae-in struggle through marital crisis three years after their wedding of the century."
      }, {
        episodeNumber: 2,
        title: "Episode 2",
        duration: "78m",
        thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
        description: "Hyun-woo begins to see Hae-in in a new light following an unexpected medical revelation."
      }]
    }],
    "crash-landing-on-you": [{
      seasonNumber: 1,
      seasonTitle: "Season 1",
      episodes: [{
        episodeNumber: 1,
        title: "Episode 1",
        duration: "70m",
        thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
        description: "A paragliding mishap drops a South Korean heiress into North Korea and into the life of an army officer who decides to hide her."
      }, {
        episodeNumber: 2,
        title: "Episode 2",
        duration: "74m",
        thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
        description: "Jeong Hyeok and his loyal soldiers scramble to find a safe way to sneak Se-ri back across the border without raising suspicion."
      }]
    }],
    "money-heist": [{
      seasonNumber: 1,
      seasonTitle: "Part 1",
      episodes: [{
        episodeNumber: 1,
        title: "Do as Planned",
        duration: "47m",
        thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
        description: "The Professor recruits a young female robber and seven other criminals for a grand heist targeting the Royal Mint of Spain."
      }, {
        episodeNumber: 2,
        title: "Lethal Negligence",
        duration: "42m",
        thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80",
        description: "Hostage negotiator Raquel Murillo makes initial contact with The Professor as Tokyo and Denver face emergency protocol."
      }]
    }],
    "peaky-blinders": [{
      seasonNumber: 1,
      seasonTitle: "Series 1",
      episodes: [{
        episodeNumber: 1,
        title: "Episode 1",
        duration: "57m",
        thumbnail: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop&q=80",
        description: "In 1919 Birmingham, Thomas Shelby leads the Peaky Blinders gang and intercepts a consignment of stolen military guns."
      }]
    }],
    "all-of-us-are-dead": [{
      seasonNumber: 1,
      seasonTitle: "Season 1",
      episodes: [{
        episodeNumber: 1,
        title: "Episode 1",
        duration: "66m",
        thumbnail: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&auto=format&fit=crop&q=80",
        description: "Inside the science lab at Hyosan High, a student suffers a mysterious bite, unleashing a fast-spreading contagion across the school."
      }]
    }],
    "bridgerton": [{
      seasonNumber: 1,
      seasonTitle: "Season 1",
      episodes: [{
        episodeNumber: 1,
        title: "Diamond of the First Water",
        duration: "58m",
        thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80",
        description: "Daphne makes her debut on London's marriage mart while Lady Whistledown's scandalous newsletter stirs Mayfair."
      }]
    }],
    "pokemon-concierge": [{
      seasonNumber: 1,
      seasonTitle: "Season 1",
      episodes: [{
        episodeNumber: 1,
        title: "I'm Haru, the New Concierge!",
        duration: "15m",
        thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=600&auto=format&fit=crop&q=80",
        description: "Haru arrives at Pokémon Resort seeking peace and begins her training to care for delightful Pokémon guests."
      }, {
        episodeNumber: 2,
        title: "What's on Your Mind, Psyduck?",
        duration: "17m",
        thumbnail: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=600&auto=format&fit=crop&q=80",
        description: "Haru tries to comfort a distressed Psyduck suffering from recurring psychic headaches."
      }]
    }]
  };

  // --- src/services/movieService.js ---
  // ==========================================
  // NETFLIX MOVIE & SHOW DATA SERVICE
  // Comprehensive TMDB-quality catalog with rich metadata
  // ==========================================

  const ALL_MOVIES = [
  // --- TV SERIES ---
  {
    id: "stranger-things",
    title: "Stranger Things",
    type: "series",
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
    rank: 1,
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "David Harbour", "Winona Ryder"],
    creator: "The Duffer Brothers",
    trailerUrl: "https://www.youtube-nocookie.com/embed/b9EkMc79ZSU",
    tags: ["80s Nostalgia", "Upside Down", "Supernatural", "Sci-Fi Thriller"],
    category: ["Top 10 in Streaming Today", "Trending Now", "Popular on Netflix", "Top Rated", "Sci-Fi Movies", "Netflix Originals", "Top 10 Shows"],
    seasons: SERIES_EPISODES["stranger-things"] || []
  }, {
    id: "squid-game",
    title: "Squid Game",
    type: "series",
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
    rank: 2,
    description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
    cast: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-joon", "Jung Ho-yeon"],
    creator: "Hwang Dong-hyuk",
    trailerUrl: "https://www.youtube-nocookie.com/embed/oqxAJKy0ii4",
    tags: ["Dystopian", "Psychological", "Intense", "Suspenseful"],
    category: ["Top 10 in Streaming Today", "Trending Now", "Popular on Netflix", "Netflix Originals", "Action Movies", "Top 10 Shows", "Korean Shows", "Thriller Movies"],
    seasons: SERIES_EPISODES["squid-game"] || []
  }, {
    id: "wednesday",
    title: "Wednesday",
    type: "series",
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
    rank: 3,
    description: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
    cast: ["Jenna Ortega", "Gwendoline Christie", "Riki Lindhome", "Christina Ricci"],
    creator: "Alfred Gough, Miles Millar, Tim Burton",
    trailerUrl: "https://www.youtube-nocookie.com/embed/Di310BC8064",
    tags: ["Dark Comedy", "Gothic", "Mystery", "School Life"],
    category: ["Top 10 in Streaming Today", "Trending Now", "Netflix Originals", "Comedy Movies", "Popular on Netflix", "Top 10 Shows"],
    seasons: SERIES_EPISODES["wednesday"] || []
  }, {
    id: "queen-of-tears",
    title: "Queen of Tears",
    type: "series",
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&auto=format&fit=crop&q=80",
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
  }, {
    id: "the-witcher",
    title: "The Witcher",
    type: "series",
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
    rank: 5,
    description: "Geralt of Rivia, a mutated monster hunter, struggles to find his place in a dangerous world filled with monsters and magic.",
    cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan", "Joey Batey"],
    creator: "Lauren Schmidt Hissrich",
    trailerUrl: "https://www.youtube-nocookie.com/embed/ndl1W4ltcmg",
    tags: ["Epic Fantasy", "Sword & Sorcery", "Gritty", "Dark"],
    category: ["Top 10 in Streaming Today", "Trending Now", "Action Movies", "Netflix Originals", "Sci-Fi Movies", "Top 10 Shows"],
    seasons: SERIES_EPISODES["the-witcher"] || []
  }, {
    id: "the-vampire-diaries",
    title: "The Vampire Diaries",
    type: "series",
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
    rank: 6,
    description: "The story follows Elena Gilbert and the mysterious Salvatore brothers as supernatural events unfold in Mystic Falls.",
    cast: ["Nina Dobrev", "Paul Wesley", "Ian Somerhalder", "Kat Graham"],
    creator: "Julie Plec, Kevin Williamson",
    trailerUrl: "https://www.youtube-nocookie.com/embed/BmVmhjjkN4E",
    tags: ["Supernatural", "Vampires", "Binge-Worthy", "Teen Romance"],
    category: ["Top 10 in Streaming Today", "Trending Now", "Popular on Netflix", "Top Rated", "Horror Movies", "Romantic Favorites"],
    seasons: SERIES_EPISODES["the-vampire-diaries"] || []
  }, {
    id: "money-heist",
    title: "Money Heist (La Casa de Papel)",
    type: "series",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
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
  }, {
    id: "crash-landing-on-you",
    title: "Crash Landing on You",
    type: "series",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
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
  }, {
    id: "peaky-blinders",
    title: "Peaky Blinders",
    type: "series",
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
    rank: 9,
    description: "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
    cast: ["Cillian Murphy", "Paul Anderson", "Helen McCrory", "Tom Hardy"],
    creator: "Steven Knight",
    trailerUrl: "https://www.youtube-nocookie.com/embed/oVzVdvGIC7U",
    tags: ["Period Piece", "Mastermind", "Gritty Crime", "Iconic"],
    category: ["Top 10 in Streaming Today", "Top Rated", "Popular on Netflix", "Drama Movies"],
    seasons: SERIES_EPISODES["peaky-blinders"] || []
  }, {
    id: "all-of-us-are-dead",
    title: "All of Us Are Dead",
    type: "series",
    poster: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600&auto=format&fit=crop&q=80",
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
  }, {
    id: "bridgerton",
    title: "Bridgerton",
    type: "series",
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
    category: ["Popular on Netflix", "Netflix Originals", "Romantic Favorites", "Drama Movies"],
    seasons: SERIES_EPISODES["bridgerton"] || []
  },
  // --- MOVIES & INDIAN BLOCKBUSTERS ---
  {
    id: "rrr",
    title: "RRR",
    type: "movie",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80",
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
  }, {
    id: "jawan",
    title: "Jawan",
    type: "movie",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
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
  }, {
    id: "interstellar",
    title: "Interstellar",
    type: "movie",
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
    category: ["Top 10 Movies", "Sci-Fi Movies", "Top Rated", "Trending Now"]
  }, {
    id: "glass-onion",
    title: "Glass Onion: A Knives Out Mystery",
    type: "movie",
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
    category: ["Comedy Movies", "Popular on Netflix", "Netflix Originals", "Top 10 Movies"]
  }, {
    id: "extraction-2",
    title: "Extraction 2",
    type: "movie",
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
    category: ["Action Movies", "Trending Now", "Netflix Originals", "Top 10 Movies"]
  }, {
    id: "cyberpunk-edgerunners",
    title: "Cyberpunk: Edgerunners",
    type: "series",
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
  },
  // --- KIDS & FAMILY FRIENDLY TITLES (100% G/PG KID-SAFE) ---
  {
    id: "super-mario-bros",
    title: "The Super Mario Bros. Movie",
    type: "movie",
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
    rank: 1,
    description: "A Brooklyn plumber named Mario travels through the Mushroom Kingdom with a princess named Peach and an anthropomorphic mushroom named Toad to find Mario's brother, Luigi.",
    cast: ["Chris Pratt", "Anya Taylor-Joy", "Charlie Day", "Jack Black"],
    creator: "Aaron Horvath, Michael Jelenic",
    trailerUrl: "https://www.youtube-nocookie.com/embed/TnGl01FkMMo",
    tags: ["Video Game", "Colorful", "Fun", "Mushroom Kingdom"],
    category: ["Popular Kids Shows", "Animated Adventures", "Family Movie Night", "Cartoons & Fun", "Action Heroes for Kids"]
  }, {
    id: "kung-fu-panda-4",
    title: "Kung Fu Panda 4",
    type: "movie",
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
    rank: 2,
    description: "Po must train a new warrior when he's chosen to become the spiritual leader of the Valley of Peace. However, a powerful shape-shifting sorceress sets her eyes on his Staff of Wisdom.",
    cast: ["Jack Black", "Awkwafina", "Viola Davis", "Dustin Hoffman"],
    creator: "Mike Mitchell",
    trailerUrl: "https://www.youtube-nocookie.com/embed/_inKs4eeHiI",
    tags: ["Martial Arts", "Dragon Warrior", "Hilarious", "Animal Heroes"],
    category: ["Popular Kids Shows", "Animated Adventures", "Action Heroes for Kids", "Cartoons & Fun"]
  }, {
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
  }, {
    id: "frozen-2",
    title: "Frozen 2",
    type: "movie",
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
    rank: 4,
    description: "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land to find the origin of Elsa's magical powers.",
    cast: ["Kristen Bell", "Idina Menzel", "Josh Gad", "Jonathan Groff"],
    creator: "Chris Buck, Jennifer Lee",
    trailerUrl: "https://www.youtube-nocookie.com/embed/Zi4LMpSD3nk",
    tags: ["Magic Ice", "Songs", "Sisters", "Enchanted"],
    category: ["Animated Adventures", "Family Movie Night", "Popular Kids Shows"]
  }, {
    id: "pokemon-concierge",
    title: "Pokémon Concierge",
    type: "series",
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
    rank: 5,
    description: "Welcome to Pokémon Resort, a peaceful getaway for Pokémon to relax and have fun. Which adorable guest will newly arrived concierge Haru attend to next?",
    cast: ["Non", "Fairouz Ai", "Eita Okuno", "Yoshiko Takemura"],
    creator: "Iku Ogawa",
    trailerUrl: "https://www.youtube-nocookie.com/embed/69L2jR9YtY8",
    tags: ["Stop Motion", "Cute Pokémon", "Feel Good", "Psyduck"],
    category: ["Cartoons & Fun", "Popular Kids Shows", "Animated Adventures"],
    seasons: SERIES_EPISODES["pokemon-concierge"] || []
  }];

  // Profile configuration with 100% reliable SVG avatars
  const PROFILES_CONFIG = [{
    id: "profile-alex",
    name: "Alex",
    avatar: AVATAR_OPTIONS[0].svg,
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
    initialMyList: ["the-vampire-diaries", "squid-game", "cyberpunk-edgerunners", "interstellar", "rrr"]
  }, {
    id: "profile-sarah",
    name: "Sarah",
    avatar: AVATAR_OPTIONS[1].svg,
    color: "#8338EC",
    isKids: false,
    preferredGenres: ["Romance", "Comedy", "Drama", "Mystery"],
    bio: "Second Profile - Enjoys Drama, Romantic Comedies, Whodunits & K-Dramas",
    initialContinueWatching: [{
      movieId: "queen-of-tears",
      progressPercent: 50,
      durationMinutes: 75,
      watchedMinutes: 38
    }, {
      movieId: "bridgerton",
      progressPercent: 42,
      durationMinutes: 58,
      watchedMinutes: 24
    }],
    initialMyList: ["queen-of-tears", "crash-landing-on-you", "wednesday", "bridgerton"]
  }, {
    id: "profile-kids",
    name: "Kids",
    avatar: AVATAR_OPTIONS[2].svg,
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
    initialMyList: ["super-mario-bros", "pokemon-concierge", "spider-man-across-spiderverse"]
  }];

  // Helper to get movies filtered for active profile
  function getMoviesForProfile(profile) {
    if (!profile) return ALL_MOVIES;
    if (profile.isKids) {
      return ALL_MOVIES.filter(m => m.isKidFriendly);
    }
    return ALL_MOVIES;
  }

  // Generate dynamically ranked "More Like This" recommendations
  function getSimilarMovies(movie, profile) {
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
      return {
        movie: candidate,
        score
      };
    });
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 6).map(s => s.movie);
  }

  // Get Top 10 items for row
  function getTop10ForProfile(profile) {
    const movies = getMoviesForProfile(profile);
    return movies.filter(m => m.category && m.category.includes("Top 10 in Streaming Today")).slice(0, 10);
  }

  // Generate rows dynamically based on the active profile
  function getCategoriesForProfile(profile) {
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
    const preferredGenres = profile && profile.preferredGenres || ["Action", "Sci-Fi"];
    return [{
      id: "recommended-for-you",
      title: "Recommended for " + (profile ? profile.name : "You"),
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
      id: "netflix-originals",
      title: "Netflix Originals",
      filter: m => m.category.includes("Netflix Originals")
    }, {
      id: "korean-shows",
      title: "Korean Dramas & Series",
      filter: m => m.category.includes("Korean Shows")
    }, {
      id: "indian-movies",
      title: "Indian Blockbusters",
      filter: m => m.category.includes("Indian Movies")
    }, {
      id: "action-movies",
      title: "Action & Adventure",
      filter: m => m.genres.includes("Action") && !m.isKidFriendly
    }, {
      id: "comedy-movies",
      title: "Comedy Hits",
      filter: m => m.genres.includes("Comedy")
    }, {
      id: "romantic-favorites",
      title: "Romantic Favorites",
      filter: m => m.genres.includes("Romance") && !m.isKidFriendly
    }, {
      id: "scifi-movies",
      title: "Sci-Fi & Fantasy",
      filter: m => (m.genres.includes("Sci-Fi") || m.genres.includes("Fantasy")) && !m.isKidFriendly
    }, {
      id: "horror-movies",
      title: "Horror & Suspense",
      filter: m => m.genres.includes("Horror") || m.genres.includes("Thriller")
    }, {
      id: "top-rated",
      title: "Top Rated",
      filter: m => m.category.includes("Top Rated")
    }];
  }

  // Search across titles, genres, actors, tags
  function searchMovies(query, profile) {
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

  // --- src/services/audioService.js ---
  // ==========================================
  // TUDUM CINEMATIC AUDIO SYNTHESIZER
  // Uses Web Audio API for zero-latency, 100% reliable Netflix sound
  // ==========================================

  class TudumAudioService {
    constructor() {
      this.ctx = null;
    }
    getAudioContext() {
      if (!this.ctx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          this.ctx = new AudioContextClass();
        }
      }
      if (this.ctx && this.ctx.state === "suspended") {
        this.ctx.resume().catch(() => {});
      }
      return this.ctx;
    }
    playTudum() {
      try {
        const ctx = this.getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime + 0.05;

        // Master gain for warmth and headroom
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.85, now);
        masterGain.connect(ctx.destination);

        // Lowpass filter for cinematic warmth
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(450, now);
        filter.frequency.exponentialRampToValueAtTime(120, now + 2.2);
        filter.connect(masterGain);

        // --- 1. First "TU" Punch (Deep Sub Thud) ---
        const oscTu = ctx.createOscillator();
        const gainTu = ctx.createGain();
        oscTu.type = "sine";
        oscTu.frequency.setValueAtTime(80, now);
        oscTu.frequency.exponentialRampToValueAtTime(38, now + 0.18);
        gainTu.gain.setValueAtTime(0.9, now);
        gainTu.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        oscTu.connect(gainTu);
        gainTu.connect(filter);
        oscTu.start(now);
        oscTu.stop(now + 0.25);

        // --- 2. Heavy Cinematic "DUMMM..." Impact (Second Hit at +0.18s) ---
        const dumTime = now + 0.16;

        // Deep Sub Bass
        const oscDumSub = ctx.createOscillator();
        const gainDumSub = ctx.createGain();
        oscDumSub.type = "triangle";
        oscDumSub.frequency.setValueAtTime(65, dumTime);
        oscDumSub.frequency.exponentialRampToValueAtTime(32, dumTime + 1.8);
        gainDumSub.gain.setValueAtTime(0.95, dumTime);
        gainDumSub.gain.exponentialRampToValueAtTime(0.001, dumTime + 2.0);
        oscDumSub.connect(gainDumSub);
        gainDumSub.connect(filter);
        oscDumSub.start(dumTime);
        oscDumSub.stop(dumTime + 2.1);

        // Resonant Synth Body (D Minor chord tones: D2, A2, D3, F3)
        const frequencies = [73.42, 110.00, 146.83, 174.61];
        frequencies.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = idx % 2 === 0 ? "sawtooth" : "triangle";
          osc.frequency.setValueAtTime(freq, dumTime);
          osc.frequency.exponentialRampToValueAtTime(freq * 0.98, dumTime + 2.0);
          const initialVol = 0.28 / (idx + 1);
          gain.gain.setValueAtTime(initialVol, dumTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, dumTime + 2.2);
          osc.connect(gain);
          gain.connect(filter);
          osc.start(dumTime);
          osc.stop(dumTime + 2.3);
        });

        // Metallic Sheen / Ribbon Texture
        const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.4, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < noiseBuffer.length; i++) {
          output[i] = (Math.random() * 2 - 1) * 0.05;
        }
        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        const noiseFilter = ctx.createBiquadFilter();
        noiseFilter.type = "bandpass";
        noiseFilter.frequency.setValueAtTime(1200, dumTime);
        noiseFilter.Q.setValueAtTime(3, dumTime);
        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.2, dumTime);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, dumTime + 0.35);
        whiteNoise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(masterGain);
        whiteNoise.start(dumTime);
        whiteNoise.stop(dumTime + 0.4);
      } catch (e) {
        console.warn("Audio autoplay blocked or unsupported:", e);
      }
    }
  }
  const tudumAudio = new TudumAudioService();

  // --- src/services/storageService.js ---
  // ==========================================
  // MULTI-PROFILE NAMESPACED STORAGE SERVICE
  // Provides genuine data isolation & plan persistence
  // ==========================================

  const PREFIX = "netflix_clone_v2";
  const SUBSCRIPTION_PLANS = [{
    id: "mobile",
    name: "Mobile",
    price: "₹149",
    pricePeriod: "/month",
    resolution: "480p (SD)",
    videoQuality: "Fair",
    devices: ["Phone", "Tablet"],
    screens: 1,
    downloads: "1 device",
    badge: ""
  }, {
    id: "basic",
    name: "Basic",
    price: "₹199",
    pricePeriod: "/month",
    resolution: "720p (HD)",
    videoQuality: "Good",
    devices: ["Phone", "Tablet", "Computer", "TV"],
    screens: 1,
    downloads: "1 device",
    badge: ""
  }, {
    id: "standard",
    name: "Standard",
    price: "₹499",
    pricePeriod: "/month",
    resolution: "1080p (Full HD)",
    videoQuality: "Great",
    devices: ["Phone", "Tablet", "Computer", "TV"],
    screens: 2,
    downloads: "2 devices",
    badge: "Popular"
  }, {
    id: "premium",
    name: "Premium",
    price: "₹649",
    pricePeriod: "/month",
    resolution: "4K (Ultra HD) + HDR",
    videoQuality: "Best",
    devices: ["Phone", "Tablet", "Computer", "TV"],
    screens: 4,
    downloads: "6 devices",
    badge: "Ultra HD + Spatial Audio"
  }];
  const StorageService = {
    // --- Profiles Management ---
    getProfiles() {
      try {
        const stored = localStorage.getItem(`${PREFIX}_profiles`);
        if (stored) {
          return JSON.parse(stored);
        }
      } catch (e) {
        console.error("Failed to read profiles from localStorage:", e);
      }
      this.saveProfiles(PROFILES_CONFIG);
      return PROFILES_CONFIG;
    },
    saveProfiles(profiles) {
      try {
        localStorage.setItem(`${PREFIX}_profiles`, JSON.stringify(profiles));
      } catch (e) {
        console.error("Failed to save profiles:", e);
      }
    },
    updateProfile(profileId, updates) {
      const profiles = this.getProfiles();
      const index = profiles.findIndex(p => p.id === profileId);
      if (index >= 0) {
        profiles[index] = {
          ...profiles[index],
          ...updates
        };
        this.saveProfiles(profiles);
      }
      return profiles;
    },
    deleteProfile(profileId) {
      const profiles = this.getProfiles();
      const filtered = profiles.filter(p => p.id !== profileId);
      this.saveProfiles(filtered);
      return filtered;
    },
    getActiveProfileId() {
      try {
        return localStorage.getItem(`${PREFIX}_active_profile`) || "profile-alex";
      } catch (e) {
        return "profile-alex";
      }
    },
    setActiveProfileId(profileId) {
      try {
        localStorage.setItem(`${PREFIX}_active_profile`, profileId);
      } catch (e) {
        console.error("Failed to set active profile:", e);
      }
    },
    // --- Subscription Plan Persistence ---
    getSelectedPlan() {
      try {
        return localStorage.getItem(`${PREFIX}_selected_plan`) || null;
      } catch (e) {
        return null;
      }
    },
    setSelectedPlan(planId) {
      try {
        localStorage.setItem(`${PREFIX}_selected_plan`, planId);
      } catch (e) {
        console.error("Failed to save plan:", e);
      }
    },
    clearSelectedPlan() {
      try {
        localStorage.removeItem(`${PREFIX}_selected_plan`);
      } catch (e) {}
    },
    // --- Profile-Isolated My List ---
    getMyList(profileId) {
      if (!profileId) return [];
      try {
        const key = `${PREFIX}_${profileId}_mylist`;
        const stored = localStorage.getItem(key);
        if (stored !== null) {
          return JSON.parse(stored);
        }
        const profile = this.getProfiles().find(p => p.id === profileId);
        const initial = profile && profile.initialMyList || [];
        this.saveMyList(profileId, initial);
        return initial;
      } catch (e) {
        return [];
      }
    },
    saveMyList(profileId, list) {
      if (!profileId) return;
      try {
        localStorage.setItem(`${PREFIX}_${profileId}_mylist`, JSON.stringify(list));
      } catch (e) {}
    },
    toggleMyList(profileId, movieId) {
      const list = this.getMyList(profileId);
      const index = list.indexOf(movieId);
      let updated;
      let isAdded = false;
      if (index >= 0) {
        updated = list.filter(id => id !== movieId);
        isAdded = false;
      } else {
        updated = [movieId, ...list];
        isAdded = true;
      }
      this.saveMyList(profileId, updated);
      return {
        updatedList: updated,
        isAdded
      };
    },
    isInMyList(profileId, movieId) {
      const list = this.getMyList(profileId);
      return list.includes(movieId);
    },
    // --- Profile-Isolated Continue Watching ---
    getContinueWatching(profileId) {
      if (!profileId) return [];
      try {
        const key = `${PREFIX}_${profileId}_continue_watching`;
        const stored = localStorage.getItem(key);
        if (stored !== null) {
          return JSON.parse(stored);
        }
        const profile = this.getProfiles().find(p => p.id === profileId);
        const initial = profile && profile.initialContinueWatching || [];
        this.saveContinueWatching(profileId, initial);
        return initial;
      } catch (e) {
        return [];
      }
    },
    saveContinueWatching(profileId, items) {
      if (!profileId) return;
      try {
        localStorage.setItem(`${PREFIX}_${profileId}_continue_watching`, JSON.stringify(items));
      } catch (e) {}
    },
    updateWatchProgress(profileId, movieId, progressPercent, durationMinutes = 60, watchedMinutes = null, episodeTitle = null) {
      if (!profileId || !movieId) return [];
      const items = this.getContinueWatching(profileId);
      const existingIndex = items.findIndex(item => item.movieId === movieId);
      const calculatedWatched = watchedMinutes !== null ? watchedMinutes : Math.round(progressPercent / 100 * durationMinutes);
      const newItem = {
        movieId,
        progressPercent: Math.min(100, Math.max(1, Math.round(progressPercent))),
        durationMinutes,
        watchedMinutes: calculatedWatched,
        episodeTitle: episodeTitle || null,
        lastWatched: Date.now()
      };
      let updated;
      if (existingIndex >= 0) {
        updated = [...items];
        updated[existingIndex] = newItem;
      } else {
        updated = [newItem, ...items];
      }
      this.saveContinueWatching(profileId, updated);
      return updated;
    },
    removeFromContinueWatching(profileId, movieId) {
      if (!profileId || !movieId) return [];
      const items = this.getContinueWatching(profileId);
      const updated = items.filter(item => item.movieId !== movieId);
      this.saveContinueWatching(profileId, updated);
      return updated;
    },
    // --- Auth Storage ---
    getAuthUser() {
      try {
        const user = localStorage.getItem(`${PREFIX}_auth_user`);
        return user ? JSON.parse(user) : null;
      } catch (e) {
        return null;
      }
    },
    setAuthUser(user) {
      try {
        localStorage.setItem(`${PREFIX}_auth_user`, JSON.stringify(user));
      } catch (e) {}
    },
    clearAuthUser() {
      try {
        localStorage.removeItem(`${PREFIX}_auth_user`);
      } catch (e) {}
    }
  };

  // --- src/components/Common/BrandLogo.jsx ---

  // Official-style scalable Netflix Wordmark SVG
  function NetflixWordmark({
    height = 32,
    className = ""
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      className: `netflix-wordmark-svg ${className}`,
      height: height,
      viewBox: "0 0 111 30",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M105.06 14.16L110.87 29.56H104.99L101.44 20.35L97.89 29.56H92.01L97.82 14.16L92.24 0H98.12L101.44 9.07L104.76 0H110.64L105.06 14.16ZM84.77 0V29.56H79.62V0H84.77ZM70.4 29.56H65.25V5.15H56.55V0H79.1V5.15H70.4V29.56ZM47.88 5.15H42.73V12.18H47.16V17.33H42.73V29.56H37.58V0H47.88V5.15ZM29.28 29.56H18.98V0H29.28V5.15H24.13V12.18H28.56V17.33H24.13V24.41H29.28V29.56ZM10.3 14.78L13.73 29.56H8.58L5.15 14.78V29.56H0V0H5.15L8.58 14.78L5.15 0H10.3V14.78Z",
      fill: "#E50914"
    }));
  }

  // Official-style scalable Netflix "N" Ribbon Logo
  function NetflixNLogo({
    width = 45,
    height = 75,
    className = ""
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      className: `netflix-n-ribbon-svg ${className}`,
      width: width,
      height: height,
      viewBox: "0 0 38 60",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M0 0H12V60H0V0Z",
      fill: "#B1060F"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M26 0H38V60H26V0Z",
      fill: "#B1060F"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M0 0H12L38 60H26L0 0Z",
      fill: "#E50914",
      filter: "drop-shadow(-3px 0px 4px rgba(0,0,0,0.7))"
    }));
  }

  // --- src/context/AuthContext.jsx ---

  const AuthContext = createContext(null);
  function AuthProvider({
    children
  }) {
    const [user, setUser] = useState(() => StorageService.getAuthUser());
    const [isAuthenticated, setIsAuthenticated] = useState(() => Boolean(StorageService.getAuthUser()));
    const [selectedPlan, setSelectedPlanState] = useState(() => StorageService.getSelectedPlan());
    const login = (email, password) => {
      const newUser = {
        email,
        name: email.split("@")[0] || "User",
        loggedInAt: Date.now()
      };
      StorageService.setAuthUser(newUser);
      setUser(newUser);
      setIsAuthenticated(true);
      return true;
    };
    const selectPlan = planId => {
      StorageService.setSelectedPlan(planId);
      setSelectedPlanState(planId);
    };
    const logout = () => {
      StorageService.clearAuthUser();
      StorageService.clearSelectedPlan();
      setUser(null);
      setIsAuthenticated(false);
      setSelectedPlanState(null);
    };
    return /*#__PURE__*/React.createElement(AuthContext.Provider, {
      value: {
        user,
        isAuthenticated,
        selectedPlan,
        selectPlan,
        login,
        logout
      }
    }, children);
  }
  function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  }

  // --- src/context/ProfileContext.jsx ---

  const ProfileContext = createContext(null);
  function ProfileProvider({
    children
  }) {
    const [profiles, setProfiles] = useState(() => StorageService.getProfiles());
    const [currentProfileId, setCurrentProfileId] = useState(() => StorageService.getActiveProfileId());
    const [isProfileGateOpen, setIsProfileGateOpen] = useState(false);
    const [isProfileSelected, setIsProfileSelected] = useState(false);

    // Profile-specific reactive state
    const [myList, setMyList] = useState([]);
    const [continueWatching, setContinueWatching] = useState([]);

    // Find active profile object
    const currentProfile = profiles.find(p => p.id === currentProfileId) || profiles[0] || PROFILES_CONFIG[0];

    // Refresh profile-specific data whenever currentProfileId changes
    useEffect(() => {
      if (currentProfile) {
        const storedMyList = StorageService.getMyList(currentProfile.id);
        const storedCW = StorageService.getContinueWatching(currentProfile.id);
        setMyList(storedMyList);
        setContinueWatching(storedCW);
      }
    }, [currentProfileId, currentProfile]);
    const switchProfile = useCallback(profileId => {
      StorageService.setActiveProfileId(profileId);
      setCurrentProfileId(profileId);
      setIsProfileGateOpen(false);
      setIsProfileSelected(true);
      const targetMyList = StorageService.getMyList(profileId);
      const targetCW = StorageService.getContinueWatching(profileId);
      setMyList(targetMyList);
      setContinueWatching(targetCW);
    }, []);
    const updateProfile = useCallback((profileId, updates) => {
      const updated = StorageService.updateProfile(profileId, updates);
      setProfiles(updated);
    }, []);
    const deleteProfile = useCallback(profileId => {
      const updated = StorageService.deleteProfile(profileId);
      setProfiles(updated);
      if (currentProfileId === profileId) {
        switchProfile(updated[0]?.id || "profile-alex");
      }
    }, [currentProfileId, switchProfile]);
    const toggleMyList = useCallback(movieId => {
      if (!currentProfile) return {
        isAdded: false,
        updatedList: []
      };
      const result = StorageService.toggleMyList(currentProfile.id, movieId);
      setMyList(result.updatedList);
      return result;
    }, [currentProfile]);
    const isInMyList = useCallback(movieId => {
      return myList.includes(movieId);
    }, [myList]);
    const updateProgress = useCallback((movieId, progressPercent, durationMinutes, watchedMinutes, episodeTitle) => {
      if (!currentProfile) return;
      const updatedCW = StorageService.updateWatchProgress(currentProfile.id, movieId, progressPercent, durationMinutes, watchedMinutes, episodeTitle);
      setContinueWatching(updatedCW);
    }, [currentProfile]);
    const removeFromContinueWatching = useCallback(movieId => {
      if (!currentProfile) return;
      const updatedCW = StorageService.removeFromContinueWatching(currentProfile.id, movieId);
      setContinueWatching(updatedCW);
    }, [currentProfile]);
    const addProfile = useCallback((name, isKids = false, avatarSvg = null) => {
      const chosenAvatar = avatarSvg || (isKids ? AVATAR_OPTIONS[2].svg : AVATAR_OPTIONS[Math.floor(Math.random() * AVATAR_OPTIONS.length)].svg);
      const newProfile = {
        id: `profile-${Date.now()}`,
        name: name.trim(),
        avatar: chosenAvatar,
        color: isKids ? "#3A86FF" : "#E50914",
        isKids: Boolean(isKids),
        preferredGenres: isKids ? ["Animation", "Family"] : ["Action", "Drama", "Comedy"],
        bio: `${name}'s Profile`,
        initialContinueWatching: [],
        initialMyList: []
      };
      const updated = [...profiles, newProfile];
      StorageService.saveProfiles(updated);
      setProfiles(updated);
      switchProfile(newProfile.id);
    }, [profiles, switchProfile]);
    return /*#__PURE__*/React.createElement(ProfileContext.Provider, {
      value: {
        profiles,
        currentProfile,
        currentProfileId,
        isKids: currentProfile ? currentProfile.isKids : false,
        myList,
        continueWatching,
        switchProfile,
        updateProfile,
        deleteProfile,
        toggleMyList,
        isInMyList,
        updateProgress,
        removeFromContinueWatching,
        addProfile,
        isProfileGateOpen,
        setIsProfileGateOpen,
        isProfileSelected,
        setIsProfileSelected
      }
    }, children);
  }
  function useProfile() {
    const context = useContext(ProfileContext);
    if (!context) {
      throw new Error("useProfile must be used within a ProfileProvider");
    }
    return context;
  }

  // --- src/context/MovieContext.jsx ---

  const MovieContext = createContext(null);
  function MovieProvider({
    children
  }) {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [playingMovie, setPlayingMovie] = useState(null);
    const [playingEpisode, setPlayingEpisode] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("home");
    const [toast, setToast] = useState({
      visible: false,
      message: "",
      type: "info"
    });
    const showToast = useCallback((message, type = "info") => {
      setToast({
        visible: true,
        message,
        type
      });
      setTimeout(() => {
        setToast(prev => ({
          ...prev,
          visible: false
        }));
      }, 3000);
    }, []);
    const openModal = useCallback(movieOrId => {
      if (typeof movieOrId === "string") {
        const found = ALL_MOVIES.find(m => m.id === movieOrId || m.title.toLowerCase() === movieOrId.toLowerCase());
        setSelectedMovie(found || null);
      } else {
        setSelectedMovie(movieOrId);
      }
    }, []);
    const closeModal = useCallback(() => {
      setSelectedMovie(null);
    }, []);
    const openPlayer = useCallback((movieOrId, episode = null) => {
      if (typeof movieOrId === "string") {
        const found = ALL_MOVIES.find(m => m.id === movieOrId || m.title.toLowerCase() === movieOrId.toLowerCase());
        setPlayingMovie(found || null);
      } else {
        setPlayingMovie(movieOrId);
      }
      setPlayingEpisode(episode);
    }, []);
    const closePlayer = useCallback(() => {
      setPlayingMovie(null);
      setPlayingEpisode(null);
    }, []);
    return /*#__PURE__*/React.createElement(MovieContext.Provider, {
      value: {
        selectedMovie,
        openModal,
        closeModal,
        playingMovie,
        playingEpisode,
        openPlayer,
        closePlayer,
        searchQuery,
        setSearchQuery,
        activeTab,
        setActiveTab,
        toast,
        showToast
      }
    }, children);
  }
  function useMovie() {
    const context = useContext(MovieContext);
    if (!context) {
      throw new Error("useMovie must be used within a MovieProvider");
    }
    return context;
  }

  // --- src/components/Intro/TudumIntro.jsx ---

  function TudumIntro({
    onComplete
  }) {
    const [fading, setFading] = useState(false);
    useEffect(() => {
      // Attempt to play Tudum sound
      const timerAudio = setTimeout(() => {
        tudumAudio.playTudum();
      }, 100);

      // Trigger fade transition
      const timerFade = setTimeout(() => {
        setFading(true);
      }, 2100);

      // Complete intro
      const timerComplete = setTimeout(() => {
        sessionStorage.setItem("netflix_has_seen_intro", "true");
        if (onComplete) onComplete();
      }, 2600);
      return () => {
        clearTimeout(timerAudio);
        clearTimeout(timerFade);
        clearTimeout(timerComplete);
      };
    }, [onComplete]);
    const handleSkip = () => {
      sessionStorage.setItem("netflix_has_seen_intro", "true");
      if (onComplete) onComplete();
    };
    return /*#__PURE__*/React.createElement("div", {
      className: `tudum-container ${fading ? "tudum-fade-out" : ""}`,
      onClick: handleSkip
    }, /*#__PURE__*/React.createElement("div", {
      className: "tudum-animation-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tudum-n-container"
    }, /*#__PURE__*/React.createElement(NetflixNLogo, {
      width: 70,
      height: 110
    }), /*#__PURE__*/React.createElement("div", {
      className: "n-glow-pulse"
    })), /*#__PURE__*/React.createElement("div", {
      className: "tudum-wordmark-wrapper"
    }, /*#__PURE__*/React.createElement(NetflixWordmark, {
      height: 36
    }))), /*#__PURE__*/React.createElement("button", {
      className: "tudum-skip-btn",
      onClick: handleSkip
    }, "Skip Intro \u2715"));
  }

  // --- src/components/Navbar/SearchBar.jsx ---

  function SearchBar() {
    const {
      searchQuery,
      setSearchQuery
    } = useMovie();
    const [isExpanded, setIsExpanded] = useState(false);
    const inputRef = useRef(null);
    const handleToggle = () => {
      if (!isExpanded) {
        setIsExpanded(true);
        setTimeout(() => inputRef.current?.focus(), 150);
      } else if (!searchQuery) {
        setIsExpanded(false);
      }
    };
    const handleClear = () => {
      setSearchQuery("");
      inputRef.current?.focus();
    };

    // Close search on Escape key
    useEffect(() => {
      const handleKeyDown = e => {
        if (e.key === "Escape") {
          setSearchQuery("");
          setIsExpanded(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [setSearchQuery]);
    return /*#__PURE__*/React.createElement("div", {
      className: `search-box-wrapper ${isExpanded || searchQuery ? "expanded" : ""}`
    }, /*#__PURE__*/React.createElement("button", {
      className: "search-icon-btn",
      onClick: handleToggle,
      "aria-label": "Search",
      title: "Search titles, genres, people"
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "20",
      height: "20",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "21",
      x2: "16",
      y2: "16"
    }))), /*#__PURE__*/React.createElement("input", {
      ref: inputRef,
      type: "text",
      className: "search-input-field",
      placeholder: "Titles, people, genres...",
      value: searchQuery,
      onChange: e => setSearchQuery(e.target.value),
      onBlur: () => {
        if (!searchQuery) setIsExpanded(false);
      }
    }), searchQuery && /*#__PURE__*/React.createElement("button", {
      className: "search-clear-btn",
      onClick: handleClear,
      "aria-label": "Clear search"
    }, "\u2715"));
  }

  // --- src/components/Navbar/ProfileDropdown.jsx ---

  function ProfileDropdown() {
    const {
      profiles,
      currentProfile,
      switchProfile,
      setIsProfileGateOpen
    } = useProfile();
    const {
      logout
    } = useAuth();
    const {
      showToast
    } = useMovie();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
      const handleClickOutside = e => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const handleSwitch = (profileId, name) => {
      switchProfile(profileId);
      setIsOpen(false);
      showToast(`Switched to profile: ${name}`, "success");
    };
    const handleManage = () => {
      setIsOpen(false);
      setIsProfileGateOpen(true);
    };
    const handleSignOut = () => {
      setIsOpen(false);
      logout();
      showToast("Signed out successfully", "info");
    };
    const otherProfiles = profiles.filter(p => p.id !== currentProfile?.id);
    return /*#__PURE__*/React.createElement("div", {
      className: "profile-dropdown-wrapper",
      ref: dropdownRef
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "profile-btn",
      onClick: () => setIsOpen(!isOpen),
      "aria-label": "Profile menu",
      "aria-expanded": isOpen
    }, /*#__PURE__*/React.createElement("img", {
      src: currentProfile?.avatar,
      alt: currentProfile?.name || "Profile",
      className: "profile-avatar-img"
    }), /*#__PURE__*/React.createElement("span", {
      className: "profile-name-text"
    }, currentProfile?.name || "User"), /*#__PURE__*/React.createElement("span", {
      className: `profile-caret ${isOpen ? "open" : ""}`
    }, "\u25BC")), isOpen && /*#__PURE__*/React.createElement("div", {
      className: "profile-menu-dropdown animate-fade-in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "profile-menu-header"
    }, /*#__PURE__*/React.createElement("span", {
      className: "profile-menu-title"
    }, "Switch Profile")), /*#__PURE__*/React.createElement("div", {
      className: "profile-list-section"
    }, otherProfiles.map(p => /*#__PURE__*/React.createElement("button", {
      key: p.id,
      type: "button",
      className: "profile-switch-item",
      onClick: () => handleSwitch(p.id, p.name)
    }, /*#__PURE__*/React.createElement("img", {
      src: p.avatar,
      alt: p.name,
      className: "profile-switch-avatar"
    }), /*#__PURE__*/React.createElement("span", {
      className: "profile-switch-name"
    }, p.name), p.isKids && /*#__PURE__*/React.createElement("span", {
      className: "profile-kids-badge"
    }, "KIDS")))), /*#__PURE__*/React.createElement("div", {
      className: "profile-menu-divider"
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "profile-menu-action",
      onClick: handleManage
    }, /*#__PURE__*/React.createElement("svg", {
      className: "action-svg-icon",
      viewBox: "0 0 24 24",
      width: "18",
      height: "18",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 20h9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
    })), /*#__PURE__*/React.createElement("span", null, "Manage Profiles")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "profile-menu-action",
      onClick: () => handleSwitch("profile-kids", "Kids")
    }, /*#__PURE__*/React.createElement("svg", {
      className: "action-svg-icon",
      viewBox: "0 0 24 24",
      width: "18",
      height: "18",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 14s1.5 2 4 2 4-2 4-2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9",
      y1: "9",
      x2: "9.01",
      y2: "9"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "15",
      y1: "9",
      x2: "15.01",
      y2: "9"
    })), /*#__PURE__*/React.createElement("span", null, "Switch to Kids Mode")), /*#__PURE__*/React.createElement("div", {
      className: "profile-menu-divider"
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "profile-menu-action sign-out-action",
      onClick: handleSignOut
    }, /*#__PURE__*/React.createElement("svg", {
      className: "action-svg-icon",
      viewBox: "0 0 24 24",
      width: "18",
      height: "18",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "16 17 21 12 16 7"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "12",
      x2: "9",
      y2: "12"
    })), /*#__PURE__*/React.createElement("span", null, "Sign out of Netflix"))));
  }

  // --- src/components/Navbar/Navbar.jsx ---

  function Navbar() {
    const {
      activeTab,
      setActiveTab,
      setSearchQuery,
      showToast
    } = useMovie();
    const {
      isKids,
      switchProfile
    } = useProfile();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const notifRef = useRef(null);
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 40);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
      const handleClickOutside = e => {
        if (notifRef.current && !notifRef.current.contains(e.target)) {
          setNotificationsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const handleNavClick = tab => {
      setActiveTab(tab);
      setSearchQuery("");
      setMobileMenuOpen(false);
      if (tab === "kids") {
        switchProfile("profile-kids");
      } else if (isKids && tab !== "kids") {
        switchProfile("profile-alex");
      }
    };
    const handleExitKids = () => {
      switchProfile("profile-alex");
      setActiveTab("home");
    };
    return /*#__PURE__*/React.createElement("header", {
      className: `netflix-navbar-header ${isScrolled ? "scrolled" : ""} ${isKids ? "kids-mode" : ""}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "navbar-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "navbar-left"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "mobile-hamburger-btn",
      onClick: () => setMobileMenuOpen(!mobileMenuOpen),
      "aria-label": "Toggle menu"
    }, /*#__PURE__*/React.createElement("span", {
      className: "bar"
    }), /*#__PURE__*/React.createElement("span", {
      className: "bar"
    }), /*#__PURE__*/React.createElement("span", {
      className: "bar"
    })), /*#__PURE__*/React.createElement("div", {
      className: "brand-logo",
      onClick: () => handleNavClick("home"),
      title: "Netflix Home"
    }, /*#__PURE__*/React.createElement(NetflixWordmark, {
      height: 26
    }), isKids && /*#__PURE__*/React.createElement("span", {
      className: "kids-logo-tag"
    }, "KIDS")), /*#__PURE__*/React.createElement("nav", {
      className: "desktop-nav-links"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `nav-link-btn ${activeTab === "home" ? "active" : ""}`,
      onClick: () => handleNavClick("home")
    }, "Home"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `nav-link-btn ${activeTab === "tv" ? "active" : ""}`,
      onClick: () => handleNavClick("tv")
    }, "TV Shows"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `nav-link-btn ${activeTab === "movies" ? "active" : ""}`,
      onClick: () => handleNavClick("movies")
    }, "Movies"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `nav-link-btn ${activeTab === "new_popular" ? "active" : ""}`,
      onClick: () => handleNavClick("new_popular")
    }, "New & Popular"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `nav-link-btn ${activeTab === "mylist" ? "active" : ""}`,
      onClick: () => handleNavClick("mylist")
    }, "My List"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `nav-link-btn kids-nav-btn ${activeTab === "kids" || isKids ? "active" : ""}`,
      onClick: () => handleNavClick("kids")
    }, "Kids"))), /*#__PURE__*/React.createElement("div", {
      className: "navbar-right"
    }, /*#__PURE__*/React.createElement(SearchBar, null), /*#__PURE__*/React.createElement("div", {
      className: "notifications-wrapper",
      ref: notifRef
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "navbar-icon-btn notif-bell-btn",
      onClick: () => setNotificationsOpen(!notificationsOpen),
      title: "Notifications"
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "20",
      height: "20",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.73 21a2 2 0 0 1-3.46 0"
    })), /*#__PURE__*/React.createElement("span", {
      className: "notif-badge-dot"
    }, "3")), notificationsOpen && /*#__PURE__*/React.createElement("div", {
      className: "notifications-dropdown-menu animate-fade-in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "notif-header"
    }, /*#__PURE__*/React.createElement("span", null, "Recent Notifications")), /*#__PURE__*/React.createElement("div", {
      className: "notif-item",
      onClick: () => {
        setNotificationsOpen(false);
        showToast("New Season of Squid Game is now streaming!", "info");
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/movie4.jpg",
      alt: "Squid Game",
      className: "notif-thumb"
    }), /*#__PURE__*/React.createElement("div", {
      className: "notif-text"
    }, /*#__PURE__*/React.createElement("strong", null, "Squid Game Season 2"), /*#__PURE__*/React.createElement("p", null, "New episodes now available"), /*#__PURE__*/React.createElement("span", {
      className: "notif-time"
    }, "2 days ago"))), /*#__PURE__*/React.createElement("div", {
      className: "notif-item",
      onClick: () => {
        setNotificationsOpen(false);
        showToast("Stranger Things season finale ready", "info");
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets/movie3.jpg",
      alt: "Stranger Things",
      className: "notif-thumb"
    }), /*#__PURE__*/React.createElement("div", {
      className: "notif-text"
    }, /*#__PURE__*/React.createElement("strong", null, "Stranger Things"), /*#__PURE__*/React.createElement("p", null, "Top 10 in Streaming Today"), /*#__PURE__*/React.createElement("span", {
      className: "notif-time"
    }, "1 week ago"))))), isKids && /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "exit-kids-btn",
      onClick: handleExitKids
    }, "Exit Kids"), /*#__PURE__*/React.createElement(ProfileDropdown, null))), mobileMenuOpen && /*#__PURE__*/React.createElement("div", {
      className: "mobile-nav-drawer animate-slide-down"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `mobile-nav-item ${activeTab === "home" ? "active" : ""}`,
      onClick: () => handleNavClick("home")
    }, "Home"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `mobile-nav-item ${activeTab === "tv" ? "active" : ""}`,
      onClick: () => handleNavClick("tv")
    }, "TV Shows"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `mobile-nav-item ${activeTab === "movies" ? "active" : ""}`,
      onClick: () => handleNavClick("movies")
    }, "Movies"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `mobile-nav-item ${activeTab === "new_popular" ? "active" : ""}`,
      onClick: () => handleNavClick("new_popular")
    }, "New & Popular"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `mobile-nav-item ${activeTab === "mylist" ? "active" : ""}`,
      onClick: () => handleNavClick("mylist")
    }, "My List"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `mobile-nav-item ${activeTab === "kids" || isKids ? "active" : ""}`,
      onClick: () => handleNavClick("kids")
    }, "Kids Zone")));
  }

  // --- src/components/Hero/HeroBanner.jsx ---

  function HeroBanner() {
    const {
      openModal,
      openPlayer
    } = useMovie();
    const {
      isKids,
      currentProfile
    } = useProfile();
    const [featuredMovie, setFeaturedMovie] = useState(null);
    useEffect(() => {
      let candidates = [];
      if (isKids) {
        candidates = ALL_MOVIES.filter(m => m.id === "super-mario-bros" || m.id === "kung-fu-panda-4" || m.id === "spider-man-across-spiderverse");
      } else if (currentProfile?.id === "profile-sarah") {
        candidates = ALL_MOVIES.filter(m => m.id === "queen-of-tears" || m.id === "bridgerton" || m.id === "crash-landing-on-you");
      } else {
        // Alex / Default
        candidates = ALL_MOVIES.filter(m => m.id === "stranger-things" || m.id === "squid-game" || m.id === "the-witcher" || m.id === "money-heist");
      }
      const selected = candidates[0] || ALL_MOVIES[0];
      setFeaturedMovie(selected);
    }, [isKids, currentProfile]);
    if (!featuredMovie) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: "hero-banner-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero-backdrop-image",
      style: {
        backgroundImage: `linear-gradient(to top, #141414 0%, rgba(20,20,20,0.6) 40%, rgba(20,20,20,0.2) 70%, rgba(20,20,20,0.7) 100%), linear-gradient(to right, #141414 0%, rgba(20,20,20,0.8) 35%, transparent 70%), url("${featuredMovie.backdrop || featuredMovie.poster}")`
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero-gradient-overlay"
    })), /*#__PURE__*/React.createElement("div", {
      className: "hero-content-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero-badge-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "hero-original-badge"
    }, /*#__PURE__*/React.createElement("span", {
      className: "n-badge-red"
    }, "N"), " ", featuredMovie.type === "series" ? "SERIES" : "FILM"), /*#__PURE__*/React.createElement("span", {
      className: "hero-top10-badge"
    }, "\uD83C\uDFC6 TOP 10 IN STREAMING TODAY")), /*#__PURE__*/React.createElement("h1", {
      className: "hero-movie-title"
    }, featuredMovie.title), /*#__PURE__*/React.createElement("div", {
      className: "hero-meta-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "hero-match-score"
    }, featuredMovie.match), /*#__PURE__*/React.createElement("span", {
      className: "hero-maturity-badge"
    }, featuredMovie.maturity), /*#__PURE__*/React.createElement("span", {
      className: "hero-duration"
    }, featuredMovie.duration), /*#__PURE__*/React.createElement("span", {
      className: "hero-quality-badge"
    }, featuredMovie.quality), /*#__PURE__*/React.createElement("span", {
      className: "hero-rating-score"
    }, "\u2605 ", featuredMovie.rating)), /*#__PURE__*/React.createElement("p", {
      className: "hero-description-text"
    }, featuredMovie.description), /*#__PURE__*/React.createElement("div", {
      className: "hero-genres-row"
    }, featuredMovie.genres?.map((g, idx) => /*#__PURE__*/React.createElement("span", {
      key: g,
      className: "hero-genre-tag"
    }, idx > 0 && /*#__PURE__*/React.createElement("span", {
      className: "genre-dot"
    }, "\u2022"), g))), /*#__PURE__*/React.createElement("div", {
      className: "hero-actions-row"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "hero-play-btn",
      onClick: () => openPlayer(featuredMovie),
      title: "Play Now"
    }, /*#__PURE__*/React.createElement("span", {
      className: "btn-icon"
    }, "\u25B6"), /*#__PURE__*/React.createElement("span", {
      className: "btn-text"
    }, "Play")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "hero-info-btn",
      onClick: () => openModal(featuredMovie),
      title: "More Information"
    }, /*#__PURE__*/React.createElement("span", {
      className: "btn-icon"
    }, "\u2139"), /*#__PURE__*/React.createElement("span", {
      className: "btn-text"
    }, "More Info")))));
  }

  // --- src/components/Rows/MovieCard.jsx ---

  function MovieCard({
    movie,
    isLarge = false
  }) {
    const {
      openModal,
      openPlayer,
      showToast
    } = useMovie();
    const {
      toggleMyList,
      isInMyList
    } = useProfile();
    const [isHovered, setIsHovered] = useState(false);
    const [liked, setLiked] = useState(false);
    const inList = isInMyList(movie.id);
    const handleListToggle = e => {
      e.stopPropagation();
      const {
        isAdded
      } = toggleMyList(movie.id);
      showToast(isAdded ? `Added "${movie.title}" to My List` : `Removed "${movie.title}" from My List`, isAdded ? "success" : "info");
    };
    const handleLike = e => {
      e.stopPropagation();
      setLiked(!liked);
      showToast(liked ? "Rating removed" : `Liked "${movie.title}"`, "info");
    };
    const handlePlay = e => {
      e.stopPropagation();
      openPlayer(movie);
    };
    const handleOpenInfo = e => {
      e.stopPropagation();
      openModal(movie);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: `netflix-movie-card ${isLarge ? "large-card" : ""}`,
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      onClick: handleOpenInfo,
      title: movie.title
    }, /*#__PURE__*/React.createElement("div", {
      className: "card-image-container"
    }, /*#__PURE__*/React.createElement("img", {
      src: movie.poster,
      alt: movie.title,
      className: "card-poster-img",
      loading: "lazy",
      onError: e => {
        e.target.src = "assets/movie1.jpg";
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "card-top-badges"
    }, movie.quality && /*#__PURE__*/React.createElement("span", {
      className: "quality-pill"
    }, movie.quality))), /*#__PURE__*/React.createElement("div", {
      className: `card-hover-overlay ${isHovered ? "active" : ""}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "hover-backdrop"
    }, /*#__PURE__*/React.createElement("img", {
      src: movie.backdrop || movie.poster,
      alt: movie.title,
      className: "hover-backdrop-img"
    }), /*#__PURE__*/React.createElement("div", {
      className: "hover-gradient"
    })), /*#__PURE__*/React.createElement("div", {
      className: "hover-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hover-actions-bar"
    }, /*#__PURE__*/React.createElement("button", {
      className: "hover-action-btn play-circle-btn",
      onClick: handlePlay,
      title: "Play"
    }, "\u25B6"), /*#__PURE__*/React.createElement("button", {
      className: `hover-action-btn ${inList ? "in-list" : ""}`,
      onClick: handleListToggle,
      title: inList ? "Remove from My List" : "Add to My List"
    }, inList ? "✓" : "+"), /*#__PURE__*/React.createElement("button", {
      className: `hover-action-btn ${liked ? "liked" : ""}`,
      onClick: handleLike,
      title: "I like this"
    }, "\uD83D\uDC4D"), /*#__PURE__*/React.createElement("button", {
      className: "hover-action-btn info-btn",
      onClick: handleOpenInfo,
      title: "Episode details & more"
    }, "\u2304")), /*#__PURE__*/React.createElement("h4", {
      className: "hover-title"
    }, movie.title), /*#__PURE__*/React.createElement("div", {
      className: "hover-meta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "hover-match"
    }, movie.match), /*#__PURE__*/React.createElement("span", {
      className: "hover-maturity"
    }, movie.maturity), /*#__PURE__*/React.createElement("span", {
      className: "hover-duration"
    }, movie.duration), /*#__PURE__*/React.createElement("span", {
      className: "hover-rating"
    }, "\u2605 ", movie.rating)), /*#__PURE__*/React.createElement("div", {
      className: "hover-genres"
    }, movie.genres?.slice(0, 3).map((g, i) => /*#__PURE__*/React.createElement("span", {
      key: g,
      className: "hover-genre-pill"
    }, i > 0 && " • ", g))))));
  }

  // --- src/components/Rows/MovieRow.jsx ---

  function MovieRow({
    title,
    movies = [],
    isLarge = false
  }) {
    const rowRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const checkArrows = () => {
      if (!rowRef.current) return;
      const {
        scrollLeft,
        scrollWidth,
        clientWidth
      } = rowRef.current;
      setShowLeftArrow(scrollLeft > 20);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
    };
    useEffect(() => {
      checkArrows();
      const current = rowRef.current;
      if (current) {
        current.addEventListener("scroll", checkArrows);
        window.addEventListener("resize", checkArrows);
      }
      return () => {
        if (current) current.removeEventListener("scroll", checkArrows);
        window.removeEventListener("resize", checkArrows);
      };
    }, [movies]);
    const handleScroll = direction => {
      if (!rowRef.current) return;
      const {
        clientWidth
      } = rowRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.75 : clientWidth * 0.75;
      rowRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    };
    if (!movies || movies.length === 0) return null;
    return /*#__PURE__*/React.createElement("section", {
      className: "netflix-movie-row-section"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "row-section-title"
    }, title), /*#__PURE__*/React.createElement("div", {
      className: "row-slider-wrapper"
    }, showLeftArrow && /*#__PURE__*/React.createElement("button", {
      className: "row-nav-arrow left-arrow",
      onClick: () => handleScroll("left"),
      "aria-label": "Scroll left"
    }, "\u2039"), /*#__PURE__*/React.createElement("div", {
      className: "row-cards-container",
      ref: rowRef
    }, movies.map(movie => /*#__PURE__*/React.createElement(MovieCard, {
      key: movie.id,
      movie: movie,
      isLarge: isLarge
    }))), showRightArrow && /*#__PURE__*/React.createElement("button", {
      className: "row-nav-arrow right-arrow",
      onClick: () => handleScroll("right"),
      "aria-label": "Scroll right"
    }, "\u203A")));
  }

  // --- src/components/Rows/Top10Row.jsx ---

  function Top10Row({
    title = "Top 10 in Streaming Today",
    movies = []
  }) {
    const {
      openModal,
      openPlayer,
      showToast
    } = useMovie();
    const {
      toggleMyList,
      isInMyList
    } = useProfile();
    const [scrollPosition, setScrollPosition] = useState(0);
    const rowRef = useRef(null);
    if (!movies || movies.length === 0) return null;
    const handleScroll = direction => {
      if (rowRef.current) {
        const {
          scrollLeft,
          clientWidth
        } = rowRef.current;
        const scrollAmount = clientWidth * 0.75;
        const newPos = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
        rowRef.current.scrollTo({
          left: newPos,
          behavior: "smooth"
        });
        setScrollPosition(newPos);
      }
    };
    const handleListToggle = (e, movie) => {
      e.stopPropagation();
      const {
        isAdded
      } = toggleMyList(movie.id);
      showToast(isAdded ? `Added "${movie.title}" to My List` : `Removed "${movie.title}" from My List`, isAdded ? "success" : "info");
    };
    return /*#__PURE__*/React.createElement("section", {
      className: "netflix-movie-row-section top10-row-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row-header-wrapper"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "row-section-title"
    }, title)), /*#__PURE__*/React.createElement("div", {
      className: "row-slider-wrapper"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "slider-arrow-btn left-arrow",
      onClick: () => handleScroll("left"),
      "aria-label": "Scroll left"
    }, "\u2039"), /*#__PURE__*/React.createElement("div", {
      className: "row-cards-container top10-cards-container",
      ref: rowRef
    }, movies.slice(0, 10).map((movie, index) => {
      const rank = movie.rank || index + 1;
      const inList = isInMyList(movie.id);
      return /*#__PURE__*/React.createElement("div", {
        key: movie.id,
        className: "top10-card-item",
        onClick: () => openModal(movie),
        title: `#${rank} in Streaming - ${movie.title}`
      }, /*#__PURE__*/React.createElement("div", {
        className: "top10-rank-number"
      }, /*#__PURE__*/React.createElement("span", {
        className: "rank-text"
      }, rank)), /*#__PURE__*/React.createElement("div", {
        className: "top10-poster-wrap"
      }, /*#__PURE__*/React.createElement("img", {
        src: movie.poster,
        alt: movie.title,
        className: "top10-poster-img",
        loading: "lazy",
        onError: e => {
          e.target.src = "assets/movie1.jpg";
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "top10-hover-overlay"
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "top10-play-btn",
        onClick: e => {
          e.stopPropagation();
          openPlayer(movie);
        },
        title: "Play"
      }, "\u25B6"), /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: `top10-list-btn ${inList ? "in-list" : ""}`,
        onClick: e => handleListToggle(e, movie),
        title: inList ? "Remove from My List" : "Add to My List"
      }, inList ? "✓" : "+"), /*#__PURE__*/React.createElement("span", {
        className: "top10-card-title"
      }, movie.title), /*#__PURE__*/React.createElement("span", {
        className: "top10-card-match"
      }, movie.match))));
    })), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "slider-arrow-btn right-arrow",
      onClick: () => handleScroll("right"),
      "aria-label": "Scroll right"
    }, "\u203A")));
  }

  // --- src/components/Rows/ContinueWatchingRow.jsx ---

  function ContinueWatchingRow() {
    const {
      continueWatching,
      removeFromContinueWatching,
      currentProfile
    } = useProfile();
    const {
      openPlayer,
      openModal,
      showToast
    } = useMovie();
    const rowRef = useRef(null);
    if (!continueWatching || continueWatching.length === 0) {
      return null;
    }

    // Hydrate continue watching with full movie metadata
    const items = continueWatching.map(item => {
      const movie = ALL_MOVIES.find(m => m.id === item.movieId);
      if (!movie) return null;
      return {
        ...item,
        movie
      };
    }).filter(Boolean);
    if (items.length === 0) return null;
    const handleRemove = (e, movieId, title) => {
      e.stopPropagation();
      removeFromContinueWatching(movieId);
      showToast(`Removed "${title}" from Continue Watching`, "info");
    };
    const handlePlay = (movie, watchedMinutes, episodeTitle) => {
      openPlayer(movie, episodeTitle ? {
        title: episodeTitle
      } : null);
    };
    return /*#__PURE__*/React.createElement("section", {
      className: "netflix-movie-row-section continue-watching-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "continue-watching-header"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "row-section-title"
    }, "Continue Watching for ", currentProfile?.name || "You"), /*#__PURE__*/React.createElement("span", {
      className: "profile-indicator-tag"
    }, currentProfile?.name)), /*#__PURE__*/React.createElement("div", {
      className: "row-slider-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row-cards-container cw-cards-container",
      ref: rowRef
    }, items.map(({
      movie,
      progressPercent,
      durationMinutes,
      watchedMinutes,
      episodeTitle
    }) => {
      const remainingMins = Math.max(1, (durationMinutes || 60) - (watchedMinutes || 0));
      return /*#__PURE__*/React.createElement("div", {
        key: movie.id,
        className: "cw-card",
        onClick: () => openModal(movie)
      }, /*#__PURE__*/React.createElement("div", {
        className: "cw-image-wrapper"
      }, /*#__PURE__*/React.createElement("img", {
        src: movie.backdrop || movie.poster,
        alt: movie.title,
        className: "cw-poster-img"
      }), /*#__PURE__*/React.createElement("div", {
        className: "cw-play-overlay",
        onClick: e => {
          e.stopPropagation();
          handlePlay(movie, watchedMinutes, episodeTitle);
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "cw-play-btn-circle"
      }, "\u25B6")), /*#__PURE__*/React.createElement("button", {
        className: "cw-remove-btn",
        onClick: e => handleRemove(e, movie.id, movie.title),
        title: "Remove from Continue Watching"
      }, "\u2715")), /*#__PURE__*/React.createElement("div", {
        className: "cw-progress-container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "cw-progress-bar-fill",
        style: {
          width: `${Math.min(100, Math.max(5, progressPercent))}%`
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "cw-info-row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "cw-title-wrap"
      }, /*#__PURE__*/React.createElement("span", {
        className: "cw-movie-title"
      }, movie.title), episodeTitle && /*#__PURE__*/React.createElement("span", {
        className: "cw-episode-subtitle"
      }, episodeTitle)), /*#__PURE__*/React.createElement("span", {
        className: "cw-time-remaining"
      }, remainingMins, "m left (", progressPercent, "%)")));
    }))));
  }

  // --- src/components/Modals/MovieDetailModal.jsx ---

  function MovieDetailModal() {
    const {
      selectedMovie,
      openModal,
      closeModal,
      openPlayer,
      showToast
    } = useMovie();
    const {
      toggleMyList,
      isInMyList,
      currentProfile
    } = useProfile();
    const [selectedSeasonNum, setSelectedSeasonNum] = useState(1);
    const modalContainerRef = useRef(null);
    useEffect(() => {
      const handleKeyDown = e => {
        if (e.key === "Escape") closeModal();
      };
      if (selectedMovie) {
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);
        setSelectedSeasonNum(1);
        if (modalContainerRef.current) {
          modalContainerRef.current.scrollTop = 0;
        }
      }
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [selectedMovie, closeModal]);
    if (!selectedMovie) return null;
    const inList = isInMyList(selectedMovie.id);
    const handleListToggle = (movieId, title) => {
      const {
        isAdded
      } = toggleMyList(movieId);
      showToast(isAdded ? `Added "${title}" to My List` : `Removed "${title}" from My List`, isAdded ? "success" : "info");
    };
    const handlePlay = (movie = selectedMovie) => {
      openPlayer(movie);
    };
    const handlePlayEpisode = ep => {
      openPlayer(selectedMovie, ep);
    };
    const handleSelectSimilar = movie => {
      openModal(movie);
      setSelectedSeasonNum(1);
      const backdrop = document.querySelector(".modal-backdrop-overlay");
      if (backdrop) backdrop.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      if (modalContainerRef.current) modalContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    // Dynamically ranked similar movies
    const similarMovies = getSimilarMovies(selectedMovie, currentProfile);
    const seasonsList = selectedMovie.seasons || [];
    const currentSeason = seasonsList.find(s => s.seasonNumber === selectedSeasonNum) || seasonsList[0];
    return /*#__PURE__*/React.createElement("div", {
      className: "modal-backdrop-overlay animate-fade-in",
      onClick: closeModal
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-dialog-container animate-scale-up",
      ref: modalContainerRef,
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "modal-close-btn",
      onClick: closeModal,
      "aria-label": "Close modal",
      title: "Close (Esc)"
    }, "\u2715"), /*#__PURE__*/React.createElement("div", {
      className: "modal-hero-banner",
      style: {
        backgroundImage: `linear-gradient(to top, #181818 0%, rgba(24,24,24,0.6) 50%, rgba(0,0,0,0.3) 100%), url("${selectedMovie.backdrop || selectedMovie.poster}")`
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-hero-content"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "modal-title"
    }, selectedMovie.title), /*#__PURE__*/React.createElement("div", {
      className: "modal-action-buttons"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "modal-play-btn",
      onClick: () => handlePlay(selectedMovie)
    }, /*#__PURE__*/React.createElement("span", {
      className: "btn-icon"
    }, "\u25B6"), /*#__PURE__*/React.createElement("span", {
      className: "btn-text"
    }, "Play")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `modal-mylist-btn ${inList ? "active" : ""}`,
      onClick: () => handleListToggle(selectedMovie.id, selectedMovie.title)
    }, /*#__PURE__*/React.createElement("span", {
      className: "btn-icon"
    }, inList ? "✓" : "+"), /*#__PURE__*/React.createElement("span", {
      className: "btn-text"
    }, inList ? "In My List" : "Add to My List"))))), /*#__PURE__*/React.createElement("div", {
      className: "modal-body-content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-grid-layout"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-left-col"
    }, /*#__PURE__*/React.createElement("div", {
      className: "modal-meta-pills"
    }, /*#__PURE__*/React.createElement("span", {
      className: "meta-match"
    }, selectedMovie.match), /*#__PURE__*/React.createElement("span", {
      className: "meta-year"
    }, selectedMovie.year), /*#__PURE__*/React.createElement("span", {
      className: "meta-maturity"
    }, selectedMovie.maturity), /*#__PURE__*/React.createElement("span", {
      className: "meta-duration"
    }, selectedMovie.duration), /*#__PURE__*/React.createElement("span", {
      className: "meta-quality"
    }, selectedMovie.quality || "HD"), /*#__PURE__*/React.createElement("span", {
      className: "meta-rating"
    }, "\u2605 ", selectedMovie.rating)), /*#__PURE__*/React.createElement("p", {
      className: "modal-synopsis"
    }, selectedMovie.description)), /*#__PURE__*/React.createElement("div", {
      className: "modal-right-col"
    }, selectedMovie.cast && /*#__PURE__*/React.createElement("div", {
      className: "modal-info-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "info-label"
    }, "Cast: "), /*#__PURE__*/React.createElement("span", {
      className: "info-value"
    }, selectedMovie.cast.join(", "))), selectedMovie.creator && /*#__PURE__*/React.createElement("div", {
      className: "modal-info-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "info-label"
    }, "Creator / Director: "), /*#__PURE__*/React.createElement("span", {
      className: "info-value"
    }, selectedMovie.creator)), selectedMovie.genres && /*#__PURE__*/React.createElement("div", {
      className: "modal-info-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "info-label"
    }, "Genres: "), /*#__PURE__*/React.createElement("span", {
      className: "info-value"
    }, selectedMovie.genres.join(", "))), selectedMovie.tags && /*#__PURE__*/React.createElement("div", {
      className: "modal-info-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "info-label"
    }, "Tags: "), /*#__PURE__*/React.createElement("span", {
      className: "info-value"
    }, selectedMovie.tags.join(", "))))), seasonsList.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "modal-episodes-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "episodes-header-row"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "episodes-heading"
    }, "Episodes"), seasonsList.length > 1 && /*#__PURE__*/React.createElement("div", {
      className: "season-select-wrapper"
    }, /*#__PURE__*/React.createElement("select", {
      value: selectedSeasonNum,
      onChange: e => setSelectedSeasonNum(Number(e.target.value)),
      className: "season-dropdown-select"
    }, seasonsList.map(s => /*#__PURE__*/React.createElement("option", {
      key: s.seasonNumber,
      value: s.seasonNumber
    }, s.seasonTitle, " (", s.episodes.length, " Episodes)"))))), /*#__PURE__*/React.createElement("div", {
      className: "episodes-list"
    }, currentSeason?.episodes.map(ep => /*#__PURE__*/React.createElement("div", {
      key: ep.episodeNumber,
      className: "episode-item-card",
      onClick: () => handlePlayEpisode(ep)
    }, /*#__PURE__*/React.createElement("span", {
      className: "episode-num-badge"
    }, ep.episodeNumber), /*#__PURE__*/React.createElement("div", {
      className: "episode-thumb-wrap"
    }, /*#__PURE__*/React.createElement("img", {
      src: ep.thumbnail || selectedMovie.backdrop,
      alt: ep.title,
      className: "episode-thumb-img"
    }), /*#__PURE__*/React.createElement("div", {
      className: "episode-play-icon"
    }, "\u25B6")), /*#__PURE__*/React.createElement("div", {
      className: "episode-details"
    }, /*#__PURE__*/React.createElement("div", {
      className: "episode-title-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "episode-title"
    }, ep.title), /*#__PURE__*/React.createElement("span", {
      className: "episode-duration"
    }, ep.duration)), /*#__PURE__*/React.createElement("p", {
      className: "episode-synopsis"
    }, ep.description)))))), similarMovies.length > 0 && /*#__PURE__*/React.createElement("div", {
      className: "modal-similar-section"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "similar-section-title"
    }, "More Like This"), /*#__PURE__*/React.createElement("div", {
      className: "similar-cards-grid"
    }, similarMovies.map(sim => {
      const isSimInList = isInMyList(sim.id);
      return /*#__PURE__*/React.createElement("div", {
        key: sim.id,
        className: "similar-movie-card",
        onClick: () => handleSelectSimilar(sim),
        title: `View details for ${sim.title}`
      }, /*#__PURE__*/React.createElement("div", {
        className: "similar-card-media"
      }, /*#__PURE__*/React.createElement("img", {
        src: sim.backdrop || sim.poster,
        alt: sim.title,
        className: "similar-poster-img",
        loading: "lazy"
      }), /*#__PURE__*/React.createElement("div", {
        className: "similar-play-badge"
      }, "\u25B6")), /*#__PURE__*/React.createElement("div", {
        className: "similar-card-info"
      }, /*#__PURE__*/React.createElement("div", {
        className: "similar-meta-top"
      }, /*#__PURE__*/React.createElement("span", {
        className: "sim-match"
      }, sim.match), /*#__PURE__*/React.createElement("span", {
        className: "sim-maturity"
      }, sim.maturity), /*#__PURE__*/React.createElement("span", {
        className: "sim-duration"
      }, sim.duration), /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: `similar-add-btn ${isSimInList ? "in-list" : ""}`,
        onClick: e => {
          e.stopPropagation();
          handleListToggle(sim.id, sim.title);
        },
        title: isSimInList ? "Remove from My List" : "Add to My List"
      }, isSimInList ? "✓" : "+")), /*#__PURE__*/React.createElement("h4", {
        className: "sim-title"
      }, sim.title), /*#__PURE__*/React.createElement("p", {
        className: "sim-desc"
      }, sim.description)));
    }))))));
  }

  // --- src/components/Modals/VideoPlayerModal.jsx ---

  function VideoPlayerModal() {
    const {
      playingMovie,
      playingEpisode,
      closePlayer,
      showToast
    } = useMovie();
    const {
      updateProgress,
      continueWatching,
      currentProfile
    } = useProfile();
    const existingItem = continueWatching.find(cw => cw.movieId === playingMovie?.id);
    const initialPercent = existingItem ? existingItem.progressPercent : 25;
    const [isPlaying, setIsPlaying] = useState(true);
    const [progressPercent, setProgressPercent] = useState(initialPercent);
    const [currentTimeSec, setCurrentTimeSec] = useState(Math.round(initialPercent / 100 * 3600));
    const totalDurationSec = 3600;
    const [volume, setVolume] = useState(0.8);
    const [isMuted, setIsMuted] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [hasIframeError, setHasIframeError] = useState(false);
    const controlsTimeoutRef = useRef(null);

    // Close on Escape key
    useEffect(() => {
      const handleKeyDown = e => {
        if (e.key === "Escape") {
          handleClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [playingMovie, progressPercent, currentTimeSec]);

    // Simulated progress timer
    useEffect(() => {
      let interval = null;
      if (isPlaying && playingMovie) {
        interval = setInterval(() => {
          setCurrentTimeSec(prev => {
            const next = prev + 1;
            if (next >= totalDurationSec) {
              setIsPlaying(false);
              return totalDurationSec;
            }
            const percent = Math.round(next / totalDurationSec * 100);
            setProgressPercent(percent);
            return next;
          });
        }, 1000);
      }
      return () => {
        if (interval) clearInterval(interval);
      };
    }, [isPlaying, playingMovie, totalDurationSec]);

    // Save watch progress to current profile
    useEffect(() => {
      if (playingMovie) {
        updateProgress(playingMovie.id, progressPercent, Math.round(totalDurationSec / 60), Math.round(currentTimeSec / 60), playingEpisode ? playingEpisode.title : null);
      }
    }, [progressPercent, currentTimeSec, playingMovie, playingEpisode, updateProgress]);
    const handleMouseMove = () => {
      setShowControls(true);
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
      controlsTimeoutRef.current = setTimeout(() => {
        if (isPlaying) setShowControls(false);
      }, 3500);
    };
    if (!playingMovie) return null;
    const handleClose = () => {
      updateProgress(playingMovie.id, progressPercent, Math.round(totalDurationSec / 60), Math.round(currentTimeSec / 60), playingEpisode ? playingEpisode.title : null);
      showToast(`Saved progress for ${playingMovie.title}`, "info");
      closePlayer();
    };
    const handleSeek = e => {
      const newPercent = parseFloat(e.target.value);
      setProgressPercent(newPercent);
      setCurrentTimeSec(Math.round(newPercent / 100 * totalDurationSec));
    };
    const handleSkip = seconds => {
      setCurrentTimeSec(prev => {
        const next = Math.min(totalDurationSec, Math.max(0, prev + seconds));
        setProgressPercent(Math.round(next / totalDurationSec * 100));
        return next;
      });
    };
    const toggleFullscreen = () => {
      const elem = document.querySelector(".video-player-container");
      if (!document.fullscreenElement) {
        elem?.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    };
    const formatTime = secs => {
      const m = Math.floor(secs / 60);
      const s = Math.floor(secs % 60);
      return `${m}:${s < 10 ? "0" : ""}${s}`;
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "video-player-fullscreen-backdrop animate-fade-in",
      onMouseMove: handleMouseMove
    }, /*#__PURE__*/React.createElement("div", {
      className: "video-player-container"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "video-top-right-close-btn",
      onClick: handleClose,
      "aria-label": "Close Video",
      title: "Close Video (Esc)"
    }, "\u2715"), /*#__PURE__*/React.createElement("div", {
      className: `video-player-top-bar ${showControls ? "visible" : "hidden"}`
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "video-back-btn",
      onClick: handleClose
    }, "\u2190 Back"), /*#__PURE__*/React.createElement("div", {
      className: "video-title-header"
    }, /*#__PURE__*/React.createElement("h3", null, playingMovie.title, playingEpisode && /*#__PURE__*/React.createElement("span", {
      className: "video-ep-subtitle"
    }, " \u2014 ", playingEpisode.title)), /*#__PURE__*/React.createElement("span", {
      className: "video-user-pill"
    }, "Watching as ", currentProfile?.name))), /*#__PURE__*/React.createElement("div", {
      className: "video-canvas-viewport"
    }, playingMovie.trailerUrl && !hasIframeError ? /*#__PURE__*/React.createElement("iframe", {
      src: `${playingMovie.trailerUrl}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&modestbranding=1&rel=0`,
      title: playingMovie.title,
      className: "video-iframe",
      allow: "autoplay; encrypted-media; fullscreen",
      onError: () => setHasIframeError(true)
    }) : /*#__PURE__*/React.createElement("div", {
      className: "video-fallback-backdrop",
      style: {
        backgroundImage: `linear-gradient(to top, #000 0%, rgba(0,0,0,0.5) 100%), url("${playingMovie.backdrop || playingMovie.poster}")`
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "video-buffering-overlay"
    }, /*#__PURE__*/React.createElement("div", {
      className: "video-spinner"
    }), /*#__PURE__*/React.createElement("h3", null, playingMovie.title), /*#__PURE__*/React.createElement("p", null, "Streaming 4K Ultra HD \u2022 Spatial Audio"), /*#__PURE__*/React.createElement("span", {
      className: "fallback-note"
    }, "Interactive video simulation active")))), /*#__PURE__*/React.createElement("div", {
      className: `video-controls-overlay ${showControls ? "visible" : "hidden"}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "video-timeline-bar"
    }, /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "0",
      max: "100",
      step: "0.1",
      value: progressPercent,
      onChange: handleSeek,
      className: "video-timeline-slider"
    }), /*#__PURE__*/React.createElement("div", {
      className: "video-timeline-fill",
      style: {
        width: `${progressPercent}%`
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "video-controls-bottom-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "video-controls-left"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "video-ctrl-btn play-pause-btn",
      onClick: () => setIsPlaying(!isPlaying),
      title: isPlaying ? "Pause" : "Play"
    }, isPlaying ? "❚❚" : "▶"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "video-ctrl-btn",
      onClick: () => handleSkip(-10),
      title: "Rewind 10 seconds"
    }, "\u21BA 10"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "video-ctrl-btn",
      onClick: () => handleSkip(10),
      title: "Fast forward 10 seconds"
    }, "10 \u21BB"), /*#__PURE__*/React.createElement("div", {
      className: "video-volume-group"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "video-ctrl-btn volume-btn",
      onClick: () => setIsMuted(!isMuted),
      title: isMuted ? "Unmute" : "Mute"
    }, isMuted ? "🔇" : "🔊"), /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: "0",
      max: "1",
      step: "0.05",
      value: isMuted ? 0 : volume,
      onChange: e => {
        setVolume(parseFloat(e.target.value));
        setIsMuted(false);
      },
      className: "video-volume-slider"
    })), /*#__PURE__*/React.createElement("div", {
      className: "video-time-display"
    }, /*#__PURE__*/React.createElement("span", null, formatTime(currentTimeSec)), /*#__PURE__*/React.createElement("span", {
      className: "time-sep"
    }, "/"), /*#__PURE__*/React.createElement("span", null, formatTime(totalDurationSec)))), /*#__PURE__*/React.createElement("div", {
      className: "video-controls-right"
    }, /*#__PURE__*/React.createElement("span", {
      className: "video-quality-pill"
    }, "4K UHD"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "video-ctrl-btn fullscreen-btn",
      onClick: toggleFullscreen,
      title: "Toggle Fullscreen"
    }, "\u26F6"))))));
  }

  // --- src/components/Profiles/ManageProfilesModal.jsx ---

  function ManageProfilesModal({
    profileToEdit = null,
    onClose
  }) {
    const {
      addProfile,
      updateProfile,
      deleteProfile,
      profiles
    } = useProfile();
    const {
      showToast
    } = useMovie();
    const isEditing = Boolean(profileToEdit);
    const [name, setName] = useState(profileToEdit ? profileToEdit.name : "");
    const [isKids, setIsKids] = useState(profileToEdit ? profileToEdit.isKids : false);
    const [selectedAvatar, setSelectedAvatar] = useState(profileToEdit ? profileToEdit.avatar : AVATAR_OPTIONS[0].svg);
    const handleSubmit = e => {
      e.preventDefault();
      if (!name.trim()) return;
      if (isEditing) {
        updateProfile(profileToEdit.id, {
          name: name.trim(),
          isKids: Boolean(isKids),
          avatar: selectedAvatar,
          color: isKids ? "#3A86FF" : "#E50914"
        });
        showToast(`Updated profile "${name.trim()}"`, "success");
      } else {
        addProfile(name.trim(), isKids, selectedAvatar);
        showToast(`Created profile "${name.trim()}"`, "success");
      }
      onClose();
    };
    const handleDelete = () => {
      if (profileToEdit) {
        if (profiles.length <= 1) {
          showToast("You must keep at least one profile", "error");
          return;
        }
        deleteProfile(profileToEdit.id);
        showToast(`Deleted profile "${profileToEdit.name}"`, "info");
        onClose();
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "modal-backdrop-overlay animate-fade-in",
      onClick: onClose
    }, /*#__PURE__*/React.createElement("div", {
      className: "add-profile-dialog animate-scale-up",
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("h2", null, isEditing ? "Edit Profile" : "Add Profile"), /*#__PURE__*/React.createElement("p", {
      className: "add-profile-subtitle"
    }, isEditing ? "Change name, avatar, and maturity settings for this profile." : "Add a profile for another person watching Netflix."), /*#__PURE__*/React.createElement("form", {
      onSubmit: handleSubmit
    }, /*#__PURE__*/React.createElement("div", {
      className: "add-profile-form-body"
    }, /*#__PURE__*/React.createElement("div", {
      className: "add-profile-avatar-preview"
    }, /*#__PURE__*/React.createElement("img", {
      src: selectedAvatar,
      alt: "Selected Avatar Preview",
      className: "add-avatar-img"
    })), /*#__PURE__*/React.createElement("div", {
      className: "add-profile-inputs"
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      placeholder: "Profile Name",
      value: name,
      onChange: e => setName(e.target.value),
      className: "add-name-input",
      autoFocus: true,
      required: true
    }), /*#__PURE__*/React.createElement("label", {
      className: "kids-checkbox-label"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: isKids,
      onChange: e => {
        const checked = e.target.checked;
        setIsKids(checked);
        if (checked) {
          setSelectedAvatar(AVATAR_OPTIONS[2].svg);
        }
      }
    }), /*#__PURE__*/React.createElement("span", null, "Kid? (Show kid-safe titles only)")))), /*#__PURE__*/React.createElement("div", {
      className: "avatar-selection-section"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "avatar-gallery-title"
    }, "Choose an Avatar Logo:"), /*#__PURE__*/React.createElement("div", {
      className: "avatar-options-grid"
    }, AVATAR_OPTIONS.map(opt => {
      const isCurrent = selectedAvatar === opt.svg;
      return /*#__PURE__*/React.createElement("div", {
        key: opt.id,
        className: `avatar-option-card ${isCurrent ? "selected" : ""}`,
        onClick: () => setSelectedAvatar(opt.svg),
        title: opt.name
      }, /*#__PURE__*/React.createElement("img", {
        src: opt.svg,
        alt: opt.name,
        className: "avatar-thumbnail-img"
      }), isCurrent && /*#__PURE__*/React.createElement("div", {
        className: "avatar-check-badge"
      }, "\u2713"));
    }))), /*#__PURE__*/React.createElement("div", {
      className: "add-profile-buttons"
    }, /*#__PURE__*/React.createElement("button", {
      type: "submit",
      className: "add-save-btn",
      disabled: !name.trim()
    }, "Save"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "add-cancel-btn",
      onClick: onClose
    }, "Cancel"), isEditing && /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "add-delete-btn",
      onClick: handleDelete
    }, "Delete Profile")))));
  }

  // --- src/components/Profiles/ProfileGate.jsx ---

  function ProfileGate() {
    const {
      profiles,
      switchProfile,
      setIsProfileGateOpen,
      setIsProfileSelected
    } = useProfile();
    const {
      showToast
    } = useMovie();
    const [isManaging, setIsManaging] = useState(false);
    const [modalTarget, setModalTarget] = useState(null); // null, 'add', or profile object

    const handleCardClick = profile => {
      if (isManaging) {
        setModalTarget(profile);
      } else {
        switchProfile(profile.id);
        setIsProfileGateOpen(false);
        setIsProfileSelected(true);
        showToast(`Welcome back, ${profile.name}!`, "success");
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "profile-gate-overlay animate-fade-in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "profile-gate-header"
    }, /*#__PURE__*/React.createElement(NetflixWordmark, {
      height: 36
    })), /*#__PURE__*/React.createElement("div", {
      className: "profile-gate-container"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "profile-gate-heading"
    }, isManaging ? "Manage Profiles" : "Who's watching?"), /*#__PURE__*/React.createElement("div", {
      className: "profile-cards-grid"
    }, profiles.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.id,
      className: "profile-gate-card",
      onClick: () => handleCardClick(p)
    }, /*#__PURE__*/React.createElement("div", {
      className: "profile-avatar-frame",
      style: {
        borderColor: p.color || "#E50914"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: p.avatar,
      alt: p.name,
      className: "profile-gate-avatar-img"
    }), isManaging && /*#__PURE__*/React.createElement("div", {
      className: "profile-edit-badge",
      title: "Click to edit name & avatar"
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "28",
      height: "28",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 20h9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
    }))), p.isKids && /*#__PURE__*/React.createElement("span", {
      className: "profile-gate-kids-tag"
    }, "KIDS")), /*#__PURE__*/React.createElement("span", {
      className: "profile-gate-name"
    }, p.name))), /*#__PURE__*/React.createElement("div", {
      className: "profile-gate-card add-profile-card",
      onClick: () => setModalTarget("add")
    }, /*#__PURE__*/React.createElement("div", {
      className: "profile-avatar-frame add-avatar-frame"
    }, /*#__PURE__*/React.createElement("span", {
      className: "add-plus-icon"
    }, "+")), /*#__PURE__*/React.createElement("span", {
      className: "profile-gate-name"
    }, "Add Profile"))), /*#__PURE__*/React.createElement("div", {
      className: "profile-gate-actions"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `profile-manage-btn ${isManaging ? "done-btn" : ""}`,
      onClick: () => setIsManaging(!isManaging)
    }, isManaging ? "Done" : "Manage Profiles"))), modalTarget && /*#__PURE__*/React.createElement(ManageProfilesModal, {
      profileToEdit: typeof modalTarget === "object" ? modalTarget : null,
      onClose: () => setModalTarget(null)
    }));
  }

  // --- src/components/Auth/LoginPage.jsx ---

  function LoginPage() {
    const {
      login
    } = useAuth();
    const {
      switchProfile
    } = useProfile();
    const {
      showToast
    } = useMovie();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(true);
    const [error, setError] = useState("");
    const handleSubmit = e => {
      e.preventDefault();
      if (!email.includes("@")) {
        setError("Please enter a valid email address.");
        return;
      }
      if (password.length < 4) {
        setError("Your password must contain between 4 and 60 characters.");
        return;
      }
      login(email, password);
      showToast(`Signed in as ${email}`, "success");
    };
    const handleQuickLogin = (profileId, demoEmail, name) => {
      login(demoEmail, "password123");
      switchProfile(profileId);
      showToast(`Welcome back, ${name}!`, "success");
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "login-screen-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "login-bg-overlay"
    }), /*#__PURE__*/React.createElement("header", {
      className: "login-header-bar"
    }, /*#__PURE__*/React.createElement(NetflixWordmark, {
      height: 40
    })), /*#__PURE__*/React.createElement("main", {
      className: "login-card-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "login-form-card animate-scale-up"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "login-heading"
    }, "Sign In"), error && /*#__PURE__*/React.createElement("div", {
      className: "login-error-alert"
    }, error), /*#__PURE__*/React.createElement("form", {
      onSubmit: handleSubmit,
      className: "login-main-form"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("input", {
      type: "email",
      placeholder: "Email address",
      value: email,
      onChange: e => {
        setEmail(e.target.value);
        setError("");
      },
      className: "login-input-field",
      required: true
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("input", {
      type: "password",
      placeholder: "Password",
      value: password,
      onChange: e => {
        setPassword(e.target.value);
        setError("");
      },
      className: "login-input-field",
      required: true
    })), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      className: "login-submit-btn"
    }, "Sign In"), /*#__PURE__*/React.createElement("div", {
      className: "login-helpers-row"
    }, /*#__PURE__*/React.createElement("label", {
      className: "remember-checkbox-label"
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: rememberMe,
      onChange: e => setRememberMe(e.target.checked)
    }), /*#__PURE__*/React.createElement("span", null, "Remember me")), /*#__PURE__*/React.createElement("a", {
      href: "#help",
      className: "help-link",
      onClick: e => {
        e.preventDefault();
        showToast("Password reset assistance sent to email", "info");
      }
    }, "Need help?"))), /*#__PURE__*/React.createElement("div", {
      className: "demo-quick-login-box"
    }, /*#__PURE__*/React.createElement("p", {
      className: "demo-login-label"
    }, "Instant Test Logins:"), /*#__PURE__*/React.createElement("div", {
      className: "demo-btn-group"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "demo-profile-chip alex-chip",
      onClick: () => handleQuickLogin("profile-alex", "alex@netflix.com", "Alex")
    }, "Sign In as Alex (Main)"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "demo-profile-chip sarah-chip",
      onClick: () => handleQuickLogin("profile-sarah", "sarah@netflix.com", "Sarah")
    }, "Sign In as Sarah (Second Profile)"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "demo-profile-chip kids-chip",
      onClick: () => handleQuickLogin("profile-kids", "kids@netflix.com", "Kids")
    }, "Sign In as Kids (Kids Profile)"))), /*#__PURE__*/React.createElement("div", {
      className: "login-signup-prompt"
    }, /*#__PURE__*/React.createElement("span", null, "New to Netflix? "), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "signup-link-btn",
      onClick: () => handleQuickLogin("profile-alex", "member@netflix.com", "Member")
    }, "Sign up now.")), /*#__PURE__*/React.createElement("p", {
      className: "login-recaptcha-text"
    }, "This page is protected by Google reCAPTCHA to ensure you're not a bot."))));
  }

  // --- src/components/Auth/PlanSelectionPage.jsx ---

  function PlanSelectionPage() {
    const {
      selectPlan,
      logout,
      user
    } = useAuth();
    const {
      setIsProfileGateOpen,
      setIsProfileSelected
    } = useProfile();
    const {
      showToast
    } = useMovie();
    const [activePlanId, setActivePlanId] = useState("premium");
    const handleContinue = () => {
      selectPlan(activePlanId);
      const chosenPlan = SUBSCRIPTION_PLANS.find(p => p.id === activePlanId);
      showToast(`Subscribed to ${chosenPlan?.name} Plan`, "success");
      setIsProfileGateOpen(true);
      setIsProfileSelected(false);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "plan-selection-screen animate-fade-in"
    }, /*#__PURE__*/React.createElement("header", {
      className: "plan-selection-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "plan-header-inner"
    }, /*#__PURE__*/React.createElement(NetflixWordmark, {
      height: 32
    }), /*#__PURE__*/React.createElement("button", {
      className: "plan-signout-btn",
      onClick: logout
    }, "Sign Out"))), /*#__PURE__*/React.createElement("main", {
      className: "plan-selection-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "plan-selection-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "plan-step-indicator"
    }, "STEP ", /*#__PURE__*/React.createElement("strong", null, "2"), " OF ", /*#__PURE__*/React.createElement("strong", null, "3")), /*#__PURE__*/React.createElement("h1", {
      className: "plan-title"
    }, "Choose the plan that's right for you"), /*#__PURE__*/React.createElement("div", {
      className: "plan-benefits-list"
    }, /*#__PURE__*/React.createElement("div", {
      className: "benefit-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "benefit-check"
    }, "\u2713"), /*#__PURE__*/React.createElement("span", null, "Watch all you want. Ad-free.")), /*#__PURE__*/React.createElement("div", {
      className: "benefit-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "benefit-check"
    }, "\u2713"), /*#__PURE__*/React.createElement("span", null, "Recommendations just for you.")), /*#__PURE__*/React.createElement("div", {
      className: "benefit-item"
    }, /*#__PURE__*/React.createElement("span", {
      className: "benefit-check"
    }, "\u2713"), /*#__PURE__*/React.createElement("span", null, "Change or cancel your plan anytime."))), /*#__PURE__*/React.createElement("div", {
      className: "plans-grid"
    }, SUBSCRIPTION_PLANS.map(plan => {
      const isSelected = activePlanId === plan.id;
      return /*#__PURE__*/React.createElement("div", {
        key: plan.id,
        className: `plan-card ${isSelected ? "selected" : ""}`,
        onClick: () => setActivePlanId(plan.id)
      }, /*#__PURE__*/React.createElement("div", {
        className: "plan-card-header"
      }, /*#__PURE__*/React.createElement("div", {
        className: "plan-name-badge"
      }, plan.name), /*#__PURE__*/React.createElement("div", {
        className: "plan-price-row"
      }, /*#__PURE__*/React.createElement("span", {
        className: "plan-price"
      }, plan.price), /*#__PURE__*/React.createElement("span", {
        className: "plan-period"
      }, plan.pricePeriod)), plan.badge && /*#__PURE__*/React.createElement("span", {
        className: "plan-highlight-pill"
      }, plan.badge)), /*#__PURE__*/React.createElement("div", {
        className: "plan-card-specs"
      }, /*#__PURE__*/React.createElement("div", {
        className: "spec-row"
      }, /*#__PURE__*/React.createElement("span", {
        className: "spec-label"
      }, "Resolution:"), /*#__PURE__*/React.createElement("span", {
        className: "spec-val"
      }, plan.resolution)), /*#__PURE__*/React.createElement("div", {
        className: "spec-row"
      }, /*#__PURE__*/React.createElement("span", {
        className: "spec-label"
      }, "Video Quality:"), /*#__PURE__*/React.createElement("span", {
        className: "spec-val"
      }, plan.videoQuality)), /*#__PURE__*/React.createElement("div", {
        className: "spec-row"
      }, /*#__PURE__*/React.createElement("span", {
        className: "spec-label"
      }, "Screens at once:"), /*#__PURE__*/React.createElement("span", {
        className: "spec-val"
      }, plan.screens)), /*#__PURE__*/React.createElement("div", {
        className: "spec-row"
      }, /*#__PURE__*/React.createElement("span", {
        className: "spec-label"
      }, "Supported Devices:"), /*#__PURE__*/React.createElement("span", {
        className: "spec-val"
      }, plan.devices.join(", "))), /*#__PURE__*/React.createElement("div", {
        className: "spec-row"
      }, /*#__PURE__*/React.createElement("span", {
        className: "spec-label"
      }, "Downloads:"), /*#__PURE__*/React.createElement("span", {
        className: "spec-val"
      }, plan.downloads))), /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: `select-plan-btn ${isSelected ? "active" : ""}`,
        onClick: e => {
          e.stopPropagation();
          setActivePlanId(plan.id);
        }
      }, isSelected ? "✓ Selected" : "Select Plan"));
    })), /*#__PURE__*/React.createElement("div", {
      className: "plan-actions-footer"
    }, /*#__PURE__*/React.createElement("button", {
      className: "plan-continue-btn",
      onClick: handleContinue
    }, "Continue to Profiles \u2192"), /*#__PURE__*/React.createElement("p", {
      className: "plan-disclaimer"
    }, "HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities.")))));
  }

  // --- src/components/Common/Toast.jsx ---

  function Toast() {
    const {
      toast
    } = useMovie();
    if (!toast.visible) return null;
    return /*#__PURE__*/React.createElement("div", {
      className: `netflix-toast-notification ${toast.type} animate-slide-up`
    }, /*#__PURE__*/React.createElement("span", {
      className: "toast-icon"
    }, toast.type === "success" ? "✓" : toast.type === "error" ? "⚠" : "ℹ"), /*#__PURE__*/React.createElement("span", {
      className: "toast-message"
    }, toast.message));
  }

  // --- src/components/Common/Footer.jsx ---

  function Footer() {
    const [language, setLanguage] = useState("English");
    return /*#__PURE__*/React.createElement("footer", {
      className: "netflix-main-footer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "footer-content-container"
    }, /*#__PURE__*/React.createElement("p", {
      className: "footer-contact-text"
    }, "Questions? Call ", /*#__PURE__*/React.createElement("a", {
      href: "tel:000-800-919-1694",
      className: "footer-phone"
    }, "000-800-919-1694")), /*#__PURE__*/React.createElement("div", {
      className: "footer-links-grid"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "footer-column"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#faq",
      onClick: e => e.preventDefault()
    }, "FAQ")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#investor-relations",
      onClick: e => e.preventDefault()
    }, "Investor Relations")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#privacy",
      onClick: e => e.preventDefault()
    }, "Privacy")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#speed-test",
      onClick: e => e.preventDefault()
    }, "Speed Test"))), /*#__PURE__*/React.createElement("ul", {
      className: "footer-column"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#help-centre",
      onClick: e => e.preventDefault()
    }, "Help Centre")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#jobs",
      onClick: e => e.preventDefault()
    }, "Jobs")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#cookie-preferences",
      onClick: e => e.preventDefault()
    }, "Cookie Preferences")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#legal-notices",
      onClick: e => e.preventDefault()
    }, "Legal Notices"))), /*#__PURE__*/React.createElement("ul", {
      className: "footer-column"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#account",
      onClick: e => e.preventDefault()
    }, "Account")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#ways-to-watch",
      onClick: e => e.preventDefault()
    }, "Ways to Watch")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#corporate-information",
      onClick: e => e.preventDefault()
    }, "Corporate Information")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#only-on-netflix",
      onClick: e => e.preventDefault()
    }, "Only on Netflix"))), /*#__PURE__*/React.createElement("ul", {
      className: "footer-column"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#media-centre",
      onClick: e => e.preventDefault()
    }, "Media Centre")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#terms-of-use",
      onClick: e => e.preventDefault()
    }, "Terms of Use")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#contact-us",
      onClick: e => e.preventDefault()
    }, "Contact Us")))), /*#__PURE__*/React.createElement("div", {
      className: "footer-language-wrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "footer-lang-select-box"
    }, /*#__PURE__*/React.createElement("svg", {
      className: "footer-globe-icon",
      viewBox: "0 0 24 24",
      width: "14",
      height: "14",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "2",
      y1: "12",
      x2: "22",
      y2: "12"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
    })), /*#__PURE__*/React.createElement("select", {
      value: language,
      onChange: e => setLanguage(e.target.value),
      className: "footer-lang-select",
      "aria-label": "Select Language"
    }, /*#__PURE__*/React.createElement("option", {
      value: "English"
    }, "English"), /*#__PURE__*/React.createElement("option", {
      value: "Hindi"
    }, "\u0939\u093F\u0928\u094D\u0926\u0940")), /*#__PURE__*/React.createElement("span", {
      className: "footer-caret"
    }, "\u25BC"))), /*#__PURE__*/React.createElement("p", {
      className: "footer-copyright"
    }, "Netflix Clone")));
  }

  // --- src/App.jsx ---

  function MainApp() {
    const {
      isAuthenticated,
      selectedPlan
    } = useAuth();
    const {
      currentProfile,
      isKids,
      myList,
      isProfileGateOpen,
      isProfileSelected
    } = useProfile();
    const {
      activeTab,
      setActiveTab,
      searchQuery,
      setSearchQuery
    } = useMovie();
    const [showIntro, setShowIntro] = useState(() => {
      return !sessionStorage.getItem("netflix_has_seen_intro");
    });
    const availableMovies = getMoviesForProfile(currentProfile);
    const categories = getCategoriesForProfile(currentProfile);
    const top10List = getTop10ForProfile(currentProfile);
    const searchResults = searchQuery ? searchMovies(searchQuery, currentProfile) : [];
    const myListMovies = myList.map(id => ALL_MOVIES.find(m => m.id === id)).filter(Boolean).filter(m => isKids ? m.isKidFriendly : true);

    // 1. TUDUM OPENING ANIMATION
    if (showIntro) {
      return /*#__PURE__*/React.createElement(TudumIntro, {
        onComplete: () => setShowIntro(false)
      });
    }

    // 2. LOGIN MUST COME FIRST FOR NEW USER
    if (!isAuthenticated) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LoginPage, null), /*#__PURE__*/React.createElement(Toast, null));
    }

    // 3. SUBSCRIPTION PLAN SELECTION AFTER LOGIN
    if (!selectedPlan) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PlanSelectionPage, null), /*#__PURE__*/React.createElement(Toast, null));
    }

    // 4. PROFILE SELECTION ("Who's watching?")
    if (isProfileGateOpen || !isProfileSelected) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ProfileGate, null), /*#__PURE__*/React.createElement(Toast, null));
    }

    // 5. MAIN STREAMING PLATFORM (Home, TV, Movies, New & Popular, My List, Kids)
    return /*#__PURE__*/React.createElement("div", {
      className: `netflix-app-root ${isKids ? "kids-theme" : ""}`
    }, /*#__PURE__*/React.createElement(Navbar, null), /*#__PURE__*/React.createElement("main", {
      className: "netflix-main-content"
    }, searchQuery ? /*#__PURE__*/React.createElement("section", {
      className: "search-results-section animate-fade-in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "search-results-header"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "search-results-title"
    }, "Explore titles related to: ", /*#__PURE__*/React.createElement("span", {
      className: "query-highlight"
    }, "\"", searchQuery, "\"")), /*#__PURE__*/React.createElement("span", {
      className: "results-count-badge"
    }, searchResults.length, " ", searchResults.length === 1 ? "title" : "titles", " found")), searchResults.length > 0 ? /*#__PURE__*/React.createElement("div", {
      className: "search-grid-container"
    }, searchResults.map(movie => /*#__PURE__*/React.createElement(MovieCard, {
      key: movie.id,
      movie: movie
    }))) : /*#__PURE__*/React.createElement("div", {
      className: "search-no-results-box"
    }, /*#__PURE__*/React.createElement("div", {
      className: "no-results-icon"
    }, "\uD83D\uDD0D"), /*#__PURE__*/React.createElement("h3", null, "Your search for \"", searchQuery, "\" did not have any matches."), /*#__PURE__*/React.createElement("p", null, "Suggestions:"), /*#__PURE__*/React.createElement("ul", {
      className: "search-suggestions-list"
    }, /*#__PURE__*/React.createElement("li", null, "Try different keywords or check spelling"), /*#__PURE__*/React.createElement("li", null, "Looking for a movie or TV show? Try searching by actor or creator"), /*#__PURE__*/React.createElement("li", null, "Try searching for genres like \"Action\", \"Sci-Fi\", \"Comedy\", or \"Romance\"")), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "clear-search-btn",
      onClick: () => setSearchQuery("")
    }, "Back to Browse"))) : activeTab === "mylist" ?
    /*#__PURE__*/
    /* My List View */
    React.createElement("section", {
      className: "mylist-page-section animate-fade-in"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mylist-header-bar"
    }, /*#__PURE__*/React.createElement("h1", {
      className: "mylist-page-title"
    }, "My List"), /*#__PURE__*/React.createElement("span", {
      className: "mylist-profile-badge"
    }, currentProfile?.name, "'s Saved Titles (", myListMovies.length, ")")), myListMovies.length > 0 ? /*#__PURE__*/React.createElement("div", {
      className: "mylist-grid-container"
    }, myListMovies.map(movie => /*#__PURE__*/React.createElement(MovieCard, {
      key: movie.id,
      movie: movie
    }))) : /*#__PURE__*/React.createElement("div", {
      className: "mylist-empty-state"
    }, /*#__PURE__*/React.createElement("div", {
      className: "empty-bookmark-icon"
    }, "\uD83D\uDCD1"), /*#__PURE__*/React.createElement("h2", null, "You haven't added any titles to your list yet."), /*#__PURE__*/React.createElement("p", null, "Explore movies and TV shows and click the ", /*#__PURE__*/React.createElement("strong", null, "+"), " button to add them to ", currentProfile?.name, "'s list."), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "browse-now-btn",
      onClick: () => setActiveTab("home")
    }, "Browse Now"))) : activeTab === "movies" ?
    /*#__PURE__*/
    /* Movies View */
    React.createElement("div", {
      className: "movies-tab-view animate-fade-in"
    }, /*#__PURE__*/React.createElement(HeroBanner, null), /*#__PURE__*/React.createElement(ContinueWatchingRow, null), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Action & Blockbusters",
      movies: availableMovies.filter(m => m.genres.includes("Action") && m.type === "movie")
    }), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Indian Blockbusters",
      movies: availableMovies.filter(m => m.category.includes("Indian Movies") && m.type === "movie")
    }), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Comedy Hits",
      movies: availableMovies.filter(m => m.genres.includes("Comedy") && m.type === "movie")
    }), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Sci-Fi & Adventures",
      movies: availableMovies.filter(m => m.genres.includes("Sci-Fi") && m.type === "movie")
    }), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Top Rated Movies",
      movies: availableMovies.filter(m => m.category.includes("Top Rated") && m.type === "movie")
    })) : activeTab === "tv" ?
    /*#__PURE__*/
    /* TV Shows View */
    React.createElement("div", {
      className: "tv-tab-view animate-fade-in"
    }, /*#__PURE__*/React.createElement(HeroBanner, null), /*#__PURE__*/React.createElement(ContinueWatchingRow, null), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Trending TV Series",
      movies: availableMovies.filter(m => m.type === "series")
    }), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Korean Dramas & Hits",
      movies: availableMovies.filter(m => m.category.includes("Korean Shows") && m.type === "series")
    }), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Sci-Fi & Fantasy Series",
      movies: availableMovies.filter(m => (m.genres.includes("Sci-Fi") || m.genres.includes("Fantasy")) && m.type === "series")
    }), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Netflix Originals",
      movies: availableMovies.filter(m => m.category.includes("Netflix Originals") && m.type === "series")
    })) : activeTab === "new_popular" ?
    /*#__PURE__*/
    /* New & Popular View */
    React.createElement("div", {
      className: "new-popular-tab-view animate-fade-in"
    }, /*#__PURE__*/React.createElement(HeroBanner, null), /*#__PURE__*/React.createElement(Top10Row, {
      title: "Top 10 in Streaming Today",
      movies: top10List
    }), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Trending This Week",
      movies: availableMovies.filter(m => m.category.includes("Trending Now"))
    }), /*#__PURE__*/React.createElement(MovieRow, {
      title: "Popular on Netflix",
      movies: availableMovies.filter(m => m.category.includes("Popular on Netflix"))
    }), /*#__PURE__*/React.createElement(MovieRow, {
      title: "New Releases",
      movies: availableMovies.filter(m => parseInt(m.year) >= 2022)
    })) :
    /*#__PURE__*/
    /* Home View (Hero, Continue Watching, Top 10, Dynamic Rows) */
    React.createElement("div", {
      className: "home-tab-view animate-fade-in"
    }, /*#__PURE__*/React.createElement(HeroBanner, null), /*#__PURE__*/React.createElement(ContinueWatchingRow, null), !isKids && top10List.length > 0 && /*#__PURE__*/React.createElement(Top10Row, {
      title: "Top 10 in Streaming Today",
      movies: top10List
    }), categories.map(cat => {
      const rowMovies = availableMovies.filter(cat.filter);
      if (rowMovies.length === 0) return null;
      return /*#__PURE__*/React.createElement(MovieRow, {
        key: cat.id,
        title: cat.title,
        movies: rowMovies,
        isLarge: cat.id === "netflix-originals" || cat.id === "popular-kids"
      });
    }))), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(MovieDetailModal, null), /*#__PURE__*/React.createElement(VideoPlayerModal, null), /*#__PURE__*/React.createElement(Toast, null));
  }
  function App() {
    return /*#__PURE__*/React.createElement(AuthProvider, null, /*#__PURE__*/React.createElement(ProfileProvider, null, /*#__PURE__*/React.createElement(MovieProvider, null, /*#__PURE__*/React.createElement(MainApp, null))));
  }

  // --- src/index.js ---

  const rootElement = document.getElementById("root");
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, null)));
  }
})();