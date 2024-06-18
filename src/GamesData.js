let GamesData = [
    {
        "id": 1,
        "title": "The Witcher 3: Wild Hunt",
        "genre": "RPG",
        "platform": "PC",
        "release_date": "2015-05-19",
        "developer": "CD Projekt Red",
        "publisher": "CD Projekt",
        "rating": "9.5",
        "price": 39.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
        "buy_link": "https://www.example.com/buy/the-witcher-3"
    },
    {
        "id": 2,
        "title": "The Legend of Zelda: Breath of the Wild",
        "genre": "Adventure",
        "platform": "Nintendo Switch",
        "release_date": "2017-03-03",
        "developer": "Nintendo",
        "publisher": "Nintendo",
        "rating": "10",
        "price": 59.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
        "buy_link": "https://www.example.com/buy/zelda-breath-of-the-wild"
    },
    {
        "id": 3,
        "title": "Red Dead Redemption 2",
        "genre": "Action",
        "platform": "PS4",
        "release_date": "2018-10-26",
        "developer": "Rockstar Games",
        "publisher": "Rockstar Games",
        "rating": "9.8",
        "price": 59.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
        "buy_link": "https://www.example.com/buy/red-dead-redemption-2"
    },
    {
        "id": 4,
        "title": "Minecraft",
        "genre": "Sandbox",
        "platform": "Multi-platform",
        "release_date": "2011-11-18",
        "developer": "Mojang",
        "publisher": "Mojang",
        "rating": "9.0",
        "price": 26.95,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
        "buy_link": "https://www.example.com/buy/minecraft"
    },
    {
        "id": 5,
        "title": "Fortnite",
        "genre": "Battle Royale",
        "platform": "Multi-platform",
        "release_date": "2017-07-21",
        "developer": "Epic Games",
        "publisher": "Epic Games",
        "rating": "8.5",
        "price": 0.00,
        "image_url": "https://www.bctv.org/wp-content/uploads/2019/11/fortnite-season-4-characters.jpg",
        "buy_link": "https://www.example.com/buy/fortnite"
    },
    {
        "id": 6,
        "title": "Grand Theft Auto V",
        "genre": "Action",
        "platform": "Multi-platform",
        "release_date": "2013-09-17",
        "developer": "Rockstar North",
        "publisher": "Rockstar Games",
        "rating": "9.7",
        "price": 29.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Grand_Theft_Auto_V.png/220px-Grand_Theft_Auto_V.png",
        "buy_link": "https://www.example.com/buy/gta-v"
    },
    {
        "id": 7,
        "title": "Cyberpunk 2077",
        "genre": "Action RPG",
        "platform": "Multi-platform",
        "release_date": "2020-12-10",
        "developer": "CD Projekt Red",
        "publisher": "CD Projekt",
        "rating": "8.7",
        "price": 49.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
        "buy_link": "https://www.example.com/buy/cyberpunk-2077"
    },
    {
        "id": 8,
        "title": "Super Mario Odyssey",
        "genre": "Platformer",
        "platform": "Nintendo Switch",
        "release_date": "2017-10-27",
        "developer": "Nintendo EPD",
        "publisher": "Nintendo",
        "rating": "9.8",
        "price": 49.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/9/98/Super_Mario_Odyssey.jpg",
        "buy_link": "https://www.example.com/buy/super-mario-odyssey"
    },
    {
        "id": 9,
        "title": "Among Us",
        "genre": "Social deduction",
        "platform": "Multi-platform",
        "release_date": "2018-06-15",
        "developer": "InnerSloth",
        "publisher": "InnerSloth",
        "rating": "8.5",
        "price": 4.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/6/68/Among_Us_cover_art.jpg",
        "buy_link": "https://www.example.com/buy/among-us"
    },
{
        "id": 10,
        "title": "The Elder Scrolls V: Skyrim",
        "genre": "Action RPG",
        "platform": "Multi-platform",
        "release_date": "2011-11-11",
        "developer": "Bethesda Game Studios",
        "publisher": "Bethesda Softworks",
        "rating": "9.3",
        "price": 39.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png",
        "buy_link": "https://www.example.com/buy/skyrim"
    },
    {
        "id": 11,
        "title": "Rocket League",
        "genre": "Sports",
        "platform": "Multi-platform",
        "release_date": "2015-07-07",
        "developer": "Psyonix",
        "publisher": "Psyonix",
        "rating": "8.7",
        "price": 19.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/b/bb/Rocket_League_cover_art.jpg",
        "buy_link": "https://www.example.com/buy/rocket-league"
    },
    {
        "id": 12,
        "title": "Overwatch",
        "genre": "Hero shooter",
        "platform": "Multi-platform",
        "release_date": "2016-05-24",
        "developer": "Blizzard Entertainment",
        "publisher": "Blizzard Entertainment",
        "rating": "9.0",
        "price": 39.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg",
        "buy_link": "https://www.example.com/buy/overwatch"
    },
    {
        "id": 13,
        "title": "Mortal Kombat 11",
        "genre": "Fighting",
        "platform": "Multi-platform",
        "release_date": "2019-04-23",
        "developer": "NetherRealm Studios",
        "publisher": "Warner Bros. Interactive Entertainment",
        "rating": "9.2",
        "price": 49.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/4/47/Mortal_Kombat_11_cover_art.jpg",
        "buy_link": "https://www.example.com/buy/mortal-kombat-11"
    },
    {
        "id": 14,
        "title": "FIFA 21",
        "genre": "Sports",
        "platform": "Multi-platform",
        "release_date": "2020-10-09",
        "developer": "EA Vancouver",
        "publisher": "Electronic Arts",
        "rating": "8.8",
        "price": 59.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/9/95/FIFA_21_Standard_Edition_cover_art.jpg",
        "buy_link": "https://www.example.com/buy/fifa-21"
    },
    {
        "id": 15,
        "title": "Call of Duty: Modern Warfare",
        "genre": "First-person shooter",
        "platform": "Multi-platform",
        "release_date": "2019-10-25",
        "developer": "Infinity Ward",
        "publisher": "Activision",
        "rating": "9.5",
        "price": 59.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/1/1e/CallofDutyModernWarfare%282019%29.jpg",
        "buy_link": "https://www.example.com/buy/call-of-duty"
    },
    {
        "id": 16,
        "title": "Animal Crossing: New Horizons",
        "genre": "Social simulation",
        "platform": "Nintendo Switch",
        "release_date": "2020-03-20",
        "developer": "Nintendo EPD",
        "publisher": "Nintendo",
        "rating": "9.6",
        "price": 59.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/4/4e/Animal_Crossing_New_Horizons.jpg",
        "buy_link": "https://www.example.com/buy/animal-crossing-new-horizons"
    },
    {
        "id": 17,
        "title": "League of Legends",
        "genre": "MOBA",
        "platform": "PC",
        "release_date": "2009-10-27",
        "developer": "Riot Games",
        "publisher": "Riot Games",
        "rating": "9.0",
        "price": 0.00,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/7/77/League_of_Legends_game_art.png",
        "buy_link": "https://www.example.com/buy/league-of-legends"
    },
    {
        "id": 18,
        "title": "God of War",
        "genre": "Action-adventure",
        "platform": "PS4",
        "release_date": "2018-04-20",
        "developer": "Santa Monica Studio",
        "publisher": "Sony Interactive Entertainment",
        "rating": "9.7",
        "price": 19.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/0/0a/God_of_War_2018_cover.jpg",
        "buy_link": "https://www.example.com/buy/god-of-war"
    },
    {
        "id": 19,
        "title": "Dark Souls III",
        "genre": "Action RPG",
        "platform": "Multi-platform",
        "release_date": "2016-04-12",
        "developer": "FromSoftware",
        "publisher": "Bandai Namco Entertainment",
        "rating": "9.4",
        "price": 29.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_III.jpg",
        "buy_link": "https://www.example.com/buy/dark-souls-3"
    },
    {
        "id": 20,
        "title": "World of Warcraft",
        "genre": "MMORPG",
        "platform": "PC",
        "release_date": "2004-11-23",
        "developer": "Blizzard Entertainment",
        "publisher": "Blizzard Entertainment",
        "rating": "9.2",
        "price": 14.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/9/91/WoW_Box_Art1.jpg",
        "buy_link": "https://www.example.com/buy/world-of-warcraft"
    },
    {
        "id": 21,
        "title": "Assassin's Creed Valhalla",
        "genre": "Action RPG",
        "platform": "Multi-platform",
        "release_date": "2020-11-10",
        "developer": "Ubisoft Montreal",
        "publisher": "Ubisoft",
        "rating": "9.0",
        "price": 49.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/1/12/Assassin%27s_Creed_Valhalla.jpg",
        "buy_link": "https://www.example.com/buy/assassins-creed-valhalla"
    },
    {
        "id": 22,
        "title": "Hades",
        "genre": "Action Roguelike",
        "platform": "Multi-platform",
        "release_date": "2020-09-17",
        "developer": "Supergiant Games",
        "publisher": "Supergiant Games",
        "rating": "9.8",
        "price": 24.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/3/37/Hades_video_game.jpg",
        "buy_link": "https://www.example.com/buy/hades"
    },
    {
        "id": 23,
        "title": "Persona 5",
        "genre": "Role-playing",
        "platform": "PS4",
        "release_date": "2016-09-15",
        "developer": "Atlus",
        "publisher": "Atlus",
        "rating": "9.6",
        "price": 19.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/c/c6/Persona_5.jpg",
        "buy_link": "https://www.example.com/buy/persona-5"
    },
    {
        "id": 24,
        "title": "Monster Hunter: World",
        "genre": "Action RPG",
        "platform": "Multi-platform",
        "release_date": "2018-01-26",
        "developer": "Capcom",
        "publisher": "Capcom",
        "rating": "9.3",
        "price": 39.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/1/15/Monster_Hunter_World.jpg",
        "buy_link": "https://www.example.com/buy/monster-hunter-world"
    },
    {
        "id": 25,
        "title": "The Last of Us Part II",
        "genre": "Action-adventure",
        "platform": "PS4",
        "release_date": "2020-06-19",
        "developer": "Naughty Dog",
        "publisher": "Sony Interactive Entertainment",
        "rating": "9.5",
        "price": 29.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/4/4d/TLOU_Part_II.jpg",
        "buy_link": "https://www.example.com/buy/the-last-of-us-part-ii"
    },
    {
        "id": 26,
        "title": "Death Stranding",
        "genre": "Action",
        "platform": "Multi-platform",
        "release_date": "2019-11-08",
        "developer": "Kojima Productions",
        "publisher": "Sony Interactive Entertainment",
        "rating": "8.9",
        "price": 49.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/e/ed/Death_Stranding_cover_art.jpg",
        "buy_link": "https://www.example.com/buy/death-stranding"
    },
    {
        "id": 27,
        "title": "Ghost of Tsushima",
        "genre": "Action-adventure",
        "platform": "PS4",
        "release_date": "2020-07-17",
        "developer": "Sucker Punch Productions",
        "publisher": "Sony Interactive Entertainment",
        "rating": "9.0",
        "price": 49.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/e/e8/Ghost_of_Tsushima_cover_art.jpg",
        "buy_link": "https://www.example.com/buy/ghost-of-tsushima"
    },
    {
        "id": 28,
        "title": "Resident Evil Village",
        "genre": "Survival horror",
        "platform": "Multi-platform",
        "release_date": "2021-05-07",
        "developer": "Capcom",
        "publisher": "Capcom",
        "rating": "9.2",
        "price": 59.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/d/d3/Resident_Evil_Village_cover_art.jpg",
        "buy_link": "https://www.example.com/buy/resident-evil-village"
    },
    {
        "id": 29,
        "title": "Final Fantasy VII Remake",
        "genre": "Action RPG",
        "platform": "PS4",
        "release_date": "2020-04-10",
        "developer": "Square Enix",
        "publisher": "Square Enix",
        "rating": "9.4",
        "price": 49.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/c/cf/FFVIIRemake.png",
        "buy_link": "https://www.example.com/buy/final-fantasy-vii-remake"
    },
    {
        "id": 30,
        "title": "Marvel's Spider-Man: Miles Morales",
        "genre": "Action-adventure",
        "platform": "PS4",
        "release_date": "2020-11-12",
        "developer": "Insomniac Games",
        "publisher": "Sony Interactive Entertainment",
        "rating": "9.3",
        "price": 39.99,
        "image_url": "https://upload.wikimedia.org/wikipedia/en/1/1a/Marvel%27s_Spider-Man_Miles_Morales_cover_art.jpg",
        "buy_link": "https://www.example.com/buy/spider-man-miles-morales"
    }
]

export default GamesData;