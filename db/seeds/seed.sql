-- \c explore_app

INSERT INTO users (name, password) VALUES
('Aileen', 'password'),
('Sarah', 'password');

INSERT INTO parks (park_name, address, city, state, coordinates, lat, lng, image, website, description, weather, directions, hours, user_id) VALUES
(
  'Death Valley National Park',
  'PO Box 579',
  'Death Valley Junction',
  'CA',
  'lat:37.6152564, long:-119.0873903',
  37.6152564,
  -119.0873903,
  'https://www.nps.gov/common/uploads/structured_data/3C7D873E-1DD8-B71B-0BF8E731254A9D7E.jpg',
  'https://www.nps.gov/deva/index.htm',
  'In this below-sea-level basin, steady drought and record summer heat make Death Valley a land of extremes. Yet, each extreme has a striking contrast. Towering peaks are frosted with winter snow. Rare rainstorms bring vast fields of wildflowers. Lush oases harbor tiny fish and refuge for wildlife and humans. Despite its morbid name, a great diversity of life survives in Death Valley.',
  'Autumn arrives in late October, with warm but pleasant temperatures and generally clear skies. WINTER has cool days, chilly nights and rarely, rainstorms. With snow capping the high peaks and low angled winter light, this season is especially beautiful for exploring the valley. SPRINGTIME is the most popular time to visit Death Valley. Besides warm and sunny days, the possibility of spring wildflowers is a big attraction. SUMMER starts early in Death Valley. By May the valley is too hot for most visitors.',
  'The main road transecting Death Valley National Park from east to west is California Highway 190.\nOn the east in Nevada, U.S. Route 95 parallels the park from north to south with connecting highways at Scotty''s Junction (State Route 267), Beatty (State Route 374), and Lathrop Wells (State Route 373)',
  'The park is open daily all year.',
  1
),
(
  'Point Reyes Lighthouse',
  '1 Bear Valley Road',
  'Point Reyes Station',
  'CA',
  'lat:38.05511241, long:-122.8797804',
  38.05511241,
  -122.8797804,
  'https://www.nps.gov/common/uploads/structured_data/3C7DC23A-1DD8-B71B-0B9711608EA94400.jpg',
  'https://www.nps.gov/pore/index.htm',
  'From its thunderous ocean breakers crashing against rocky headlands and expansive sand beaches to its open grasslands, brushy hillsides, and forested ridges, Point Reyes offers visitors over 1500 species of plants and animals to discover. Home to several cultures over thousands of years, the Seashore preserves a tapestry of stories and interactions of people. Point Reyes awaits your exploration.',
  'The moderating influence of the Pacific Ocean creates a climate with no great extremes of heat or cold. Any season can bring interesting weather during your visit to Point Reyes National Seashore. Come prepared!',
  'Point Reyes is located along the west coast of California approximately 30 miles (50 km) north of San Francisco. Travelers may approach the park from the winding scenic Highway 1, either from the north or the south. Visitors can also reach the park via Sir Francis Drake Boulevard or the Point Reyes/Petaluma Road.',
  'The park is open to visitors every day of the year. All areas in the park are closed to visitor vehicle parking between midnight and 6 am, with the exception that visitors holding backcountry camping permits may park at established trailheads and authorized visitors staying overnight at the Clem Miller Environmental Education Center, the Point Reyes Hostel, and the Lifeboat Station may park at those locations. Any other overnight parking and use must be approved by the Chief Ranger’s office.',
  1
),
(
  'Yellowstone National Park',
  '2 Officers Row',
  'Yellowstone National Park',
  'WY',
  'lat:44.59824417, long:-110.5471695',
  44.59824417,
  -110.5471695,
  'https://www.nature.nps.gov/geology/geologic_wonders/images/Yellowstone_NP_Midway_Geyser_Basin_NPS_Photo(Neal_Herbert).jpg',
  'https://www.nps.gov/yell/index.htm',
  'Visit Yellowstone and experience the world''s first national park. Marvel at a volcano’s hidden power rising up in colorful hot springs, mudpots, and geysers. Explore mountains, forests, and lakes to watch wildlife and witness the drama of the natural world unfold. Discover the history that led to the conservation of our national treasures “for the benefit and enjoyment of the people.',
  'Yellowstone''s weather can vary quite a bit, even in a single day. In the summer, daytime highs can exceed 70F (25C), only to drop 20 or more degrees when a thunderstorm rolls through. It can snow during any month of the year, and winter lows frequently drop below zero, especially at night. Bring a range of clothing options, including a warm jacket and rain gear, even in the summer.',
  'Yellowstone National Park covers nearly 3,500 square miles in the northwest corner of Wyoming (3% of the park is in Montana and 1% is in Idaho). Yellowstone has five entrance stations, and several are closed to regular vehicles during winter. It takes many hours to drive between these entrances, so be sure to check the status of roads at the entrance you intend to use while planning your trip and before you arrive.',
  'Yellowstone is open daily, year-round, although activities and services are limited at night and certain times of year. The park has five entrance stations, but not all entrance stations are open year-round. Make sure to carefully read about access at each station at different times of year. And remember, all dates are weather dependent! Please note that camping is possible only in designated campgrounds.',
  2
),
(
  'Zion National Park',
  '1 Zion Park Blvd',
  'Springdale',
  'UT',
  'lat:37.29839254, long:-113.0265138',
  37.29839254,
  -113.0265138,
  'https://www.nationalparks.org/sites/default/files/styles/large_list_image_2x/public/Cedar_Breaks_National_Monument.JPG?itok=VTLF7T1J&timestamp=1468264861',
  'https://www.nps.gov/zion/index.htm',
  'Follow the paths where ancient native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon. Zion’s unique array of plants and animals will enchant you as you absorb the rich history of the past and enjoy the excitement of present day adventures.',
  'Zion is known for a wide range of weather conditions. Temperatures vary with changes in elevation and day/night temperatures may differ by over 30°F. In summer, temperatures in Zion National Park often exceed 100°F/38°C. Zion experiences monsoons from mid-July into September that results in an increased risk of flash floods. Always be aware of the threat of storms and lightning and be prepared for a wide range of weather conditions. Winters are generally mild.',
  'Zion National Park is located on State Route 9 in Springdale, Utah.',
  'Zion National Park is open every day of the year.',
  1
),
(
  'Yosemite National Park',
  'Northside Drive',
  'Yosemite National Park',
  'CA',
  'lat:37.84883288, long:-119.5571873',
  37.84883288,
  -119.5571873,
  'https://www.nps.gov/common/uploads/structured_data/3C84C6CF-1DD8-B71B-0B1C7CB883AA8FB1.jpg',
  'https://www.nps.gov/yose/index.htm',
  'Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra. First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.',
  'Yosemite National Park covers nearly 1,200 square miles (3,100 square km) in the Sierra Nevada, with elevations ranging from about 2,000 feet (600 m) to 13,000 ft (4,000 m). Yosemite receives 95% of its precipitation between October and May (and over 75% between November and March). Most of Yosemite is blanketed in snow from about November through May. (Yosemite Valley can be rainy or snowy in any given winter storm.)',
  'You can drive to Yosemite all year and enter via Highways 41, 140, and 120 from the west. Tioga Pass Entrance (via Highway 120 from the east) is closed from around November through late May or June. Hetch Hetchy is open all year but may close intermittently due to snow. Please note that GPS units do not always provide accurate directions to or within Yosemite.',
  'Yosemite National Park is always open. Reservations are not available or required to enter the park. However, during summer, it''s best to arrive by mid-morning to avoid traffic',
  '2'
),
(
  'Acadia National Park',
  '20 McFarland Hill Drive',
  'Bar Harbor',
  'ME',
  'lat:44.30777545, long:-68.30063316',
  44.30777545,
  -68.30063316,
  'https://www.nps.gov/common/uploads/structured_data/3C7B45AE-1DD8-B71B-0B7EE131C7DFC2F5.jpg',
  'https://www.nps.gov/acad/index.htm',
  'During high visitation, you may experience delays entering the park, and increased travel times and congestion on scenic drives. Our best advice is to have back-up plans for your day. Between 10 am and 4 pm, and particularly on Cadillac Mountain for sunrise or sunset, destinations throughout Acadia can exceed capacity, and rangers may restrict access temporarily in the interest of public safety.',
  'Located on Mount Desert Island in Maine, Acadia experiences all four seasons. Summer temperatures range from 45-90F (7-30C). Fall temperatures range from 30-70F (-1-21C). Typically the first frost is in mid-October and first snowfall begins in November and can continue through April with an average accumulation of 73 inches (185 cm). Winter temperatures range from 14-35F (-10 - 2C). Spring temperatures range from 30-70F (-1-21C).',
  'From Boston take I-95 north to Augusta, Maine, then Route 3 east to Ellsworth, and on to Mount Desert Island. For an alternate route, continue on I-95 north to Bangor, Maine, then take Route 1A east to Ellsworth. In Ellsworth, take Route 3 to Mount Desert Island.',
  'The park is open 24 hours a day, every day of the year. A number of park roads close during the winter including Park Loop Road, Cadillac Mountain Road, and all of the unpaved roads. Most facilities close in the winter as well, but Park Headquarters is open for information and park passes.',
  2
),
(
  'Alcatraz Island',
  'Alcatraz Island',
  'San Francisco',
  'CA',
  'lat:37.82676234, long:-122.4230206',
  37.82676234,
  -122.4230206,
  'https://www.nps.gov/common/uploads/structured_data/A61F4F58-1DD8-B71B-0B981C552798242B.jpg',
  'https://www.nps.gov/alca/index.htm',
  'Alcatraz Island offers a close-up look at the site of the first lighthouse and US built fort on the West Coast, the infamous federal penitentiary long off-limits to the public, and the history making 18 month occupation by Indians of All Tribes. Rich in history, there is also a natural side to the Rock—gardens, tide pools, bird colonies, and bay views beyond compare.',
  'The climate on Alcatraz is unpredictable and can change suddenly. Cold, foggy mornings may give way to sunny afternoons, which in turn can shift quickly back to more fog and blustery winds. The most pleasant weather usually occurs in spring and fall. Summers tend to be cool and foggy, winter is our rainy season. Temperatures on Alcatraz seldom rise above 75°F (24°C) or fall below 38',
  'The Alcatraz Ferry Terminal is located on The Embarcadero near the intersection of Bay Street at Pier 33.',
  'Access to Alcatraz Island is by commercial ferry service - see www.alcatrazcruises.com for more information. Tickets are sold by date and time. Once on the island you can stay as long as you wish up to the last ferry, which changes seasonally. Alcatraz is closed on Thanksgiving, Christmas and New Years Day. Be aware that  Alcatraz often sells out in advance. In summer and around holidays tickets can sell out a month or more in advance. Tickets go on sale 90 days in advance.',
  1
),
(
  'Sunset Crater Volcano',
  '6082 Sunset Crater Road',
  'Flagstaff',
  'AZ',
  'lat:35.37114323, long:-111.510376',
  35.37114323,
  -111.510376,
  'https://www.nps.gov/common/uploads/structured_data/3C7E2952-1DD8-B71B-0B586C9F9029F687.jpg',
  'https://www.nps.gov/sucr/index.htm',
  'The colors at the volcano''s rim are the dusky red, yellow, and orange of sunset, but the crater is only part of the story. Around 1085 CE the ground here began to shake, and a fiery crack spewed the earth''s insides high into the air. When the eruption finished, it had changed both the landscape and the people who lived here. Today, it teaches how nature and humans are linked to each other.',
  'Be prepared for variable and extreme weather conditions. You may expect high winds any time of year, summer temperatures above 95ºF (35ºC), afternoon storms July–September, and snow from fall to spring. Dress in layers, as weather at Sunset Crater Volcano can change quickly at any time of year.',
  'Sunset Crater Volcano and Wupatki National Monuments are connected by loop road FR-545. Visitors can enter the loop road near mile markers 430 (Sunset Crater Volcano) and 444 (Wupatki) on U.S. Highway 89.',
  'All trails are open daily from sunrise to sunset.',
  2
),
(
  'Mount Rushmore',
  '13000 Highway 244',
  'Keystone',
  'SD',
  'lat:43.88037021, long:-103.4525186',
  43.88037021,
  -103.4525186,
  'https://www.nps.gov/common/uploads/structured_data/3C7C8154-1DD8-B71B-0B4E439C3CE14388.jpg',
  'https://www.nps.gov/moru/index.htm',
  'Majestic figures of George Washington, Thomas Jefferson, Theodore Roosevelt and Abraham Lincoln, surrounded by the beauty of the Black Hills of South Dakota, tell the story of the birth, growth, development and preservation of this country. From the history of the first inhabitants to the diversity of America today, Mount Rushmore brings visitors face to face with the rich heritage we all share.',
  'Weather at Mount Rushmore can be highly variable in any season.  Summer high temperatures range from 70 100 degrees Fahrenheit.  Fall high temperatures range from 45 to 80 degrees Fahrenheit.  Winter high temperatures range from 20 to 40 degrees Fahrenheit.  Spring high temperatures range from 30 to 70 degrees Fahrenheit.  July and August are the warmest months, December and January the coldest.  March and April receive the most snow, while May and June receive the most rain.',
  'Great Smoky Mountains National Park straddles the borders of the states of Tennessee and North Carolina. The three main entrances to the park are in the Gatlinburg, TN; Townsend, TN; and Cherokee, NC.',
  'Weather permitting, the grounds at Mount Rushmore are open every day of the year.  The Information Center, Visitor Center, Gift Shop and Carver''s Marketplace are open every day except December 25th.',
  2
),
(
  'Great Smoky Mountains',
  '107 Park Headquarters Road',
  'Gatlinburg',
  'TN',
  'lat:35.60116374, long:-83.50818326',
  35.60116374,
  -83.50818326,
  'https://www.nps.gov/common/uploads/structured_data/3C80E3F4-1DD8-B71B-0BFF4F2280EF1B52.jpg',
  'https://www.nps.gov/grsm/index.htm',
  'Ridge upon ridge of forest straddles the border between North Carolina and Tennessee in Great Smoky Mountains National Park. World renowned for its diversity of plant and animal life, the beauty of its ancient mountains, and the quality of its remnants of Southern Appalachian mountain culture, this is America''s most visited national park.',
  'Elevations in the park range from approximately 875 feet to 6,643 feet and the topography can drastically affect local weather. Temperatures can vary 10-20 degrees Fahrenheit from mountain base to top, and clear skies lower down do not guarantee equally pleasant weather at higher elevations. Visit http://www.nps.gov/grsm/planyourvisit/weather.htm for seasonal weather information and links to local forecasts.',
  'Great Smoky Mountains National Park straddles the borders of the states of Tennessee and North Carolina. The three main entrances to the park are in the Gatlinburg, TN; Townsend, TN; and Cherokee, NC.',
  'Primary roads are open 24 hours a day, seven days a week, year-round, weather permitting. This includes Newfound Gap Road (US-441), Little River Road, and Laurel Creek Road. Secondary roads are closed seasonally.',
  1
);
