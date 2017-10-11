\c explore_app

INSERT INTO users (name, password) VALUES
('Aileen', 'password'),
('Sarah', 'password');

INSERT INTO parks (park_name, address, city, state, coordinates, image, website, description, user_id) VALUES
(
  'Death Valley National Park',
  'PO Box 579',
  'Death Valley Junction',
  'CA',
  'lat:37.6152564, long:-119.0873903',
  'https://www.nps.gov/common/uploads/structured_data/3C7D873E-1DD8-B71B-0BF8E731254A9D7E.jpg',
  'https://www.nps.gov/deva/index.htm',
  'In this below-sea-level basin, steady drought and record summer heat make Death Valley a land of extremes. Yet, each extreme has a striking contrast. Towering peaks are frosted with winter snow. Rare rainstorms bring vast fields of wildflowers. Lush oases harbor tiny fish and refuge for wildlife and humans. Despite its morbid name, a great diversity of life survives in Death Valley.',
  '1'
),
(
  'Point Reyes Lighthouse',
  '1 Bear Valley Road',
  'Point Reyes Station',
  'CA',
  'lat:38.05511241, long:-122.8797804',
  'https://www.nps.gov/common/uploads/structured_data/3C7DC23A-1DD8-B71B-0B9711608EA94400.jpg',
  'https://www.nps.gov/pore/index.htm',
  'From its thunderous ocean breakers crashing against rocky headlands and expansive sand beaches to its open grasslands, brushy hillsides, and forested ridges, Point Reyes offers visitors over 1500 species of plants and animals to discover. Home to several cultures over thousands of years, the Seashore preserves a tapestry of stories and interactions of people. Point Reyes awaits your exploration.',
  '1'
),
(
  'Yellowstone National Park',
  '2 Officers Row',
  'Yellowstone National Park',
  'WY',
  'lat:44.59824417, long:-110.5471695',
  'https://www.nps.gov/common/uploads/structured_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg',
  'https://www.nps.gov/yell/index.htm',
  'Visit Yellowstone and experience the world''s first national park. Marvel at a volcano’s hidden power rising up in colorful hot springs, mudpots, and geysers. Explore mountains, forests, and lakes to watch wildlife and witness the drama of the natural world unfold. Discover the history that led to the conservation of our national treasures “for the benefit and enjoyment of the people.',
  '2'
),
(
  'Zion National Park',
  '1 Zion Park Blvd',
  'Springdale',
  'UT',
  'lat:37.29839254, long:-113.0265138',
  'https://www.nps.gov/common/uploads/structured_data/3C7F0203-1DD8-B71B-0B2DCAE32B684884.jpg',
  'https://www.nps.gov/zion/index.htm',
  'Follow the paths where ancient native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon. Zion’s unique array of plants and animals will enchant you as you absorb the rich history of the past and enjoy the excitement of present day adventures.',
  '1'
),
(
  'Yosemite National Park',
  'Northside Drive',
  'Yosemite National Park',
  'CA',
  'lat:37.84883288, long:-119.5571873',
  'https://www.nps.gov/common/uploads/structured_data/3C84C6CF-1DD8-B71B-0B1C7CB883AA8FB1.jpg',
  'https://www.nps.gov/yose/index.htm',
  'Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra. First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.',
  '2'
),
(
  'Acadia National Park',
  '20 McFarland Hill Drive',
  'Bar Harbor',
  'ME',
  'lat:44.30777545, long:-68.30063316',
  'https://www.nps.gov/common/uploads/structured_data/3C7B45AE-1DD8-B71B-0B7EE131C7DFC2F5.jpg',
  'https://www.nps.gov/acad/index.htm',
  'During high visitation, you may experience delays entering the park, and increased travel times and congestion on scenic drives. Our best advice is to have back-up plans for your day. Between 10 am and 4 pm, and particularly on Cadillac Mountain for sunrise or sunset, destinations throughout Acadia can exceed capacity, and rangers may restrict access temporarily in the interest of public safety.',
  '2'
);
