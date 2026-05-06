const HOF_DATA = {
  hitters: [
    { name: "Hank Aaron",        hits: 3771, hr: 755, rbi: 2297, avg: 0.305, obp: 0.374, slg: 0.555, g: 3298, sb: 240,  as: 25 },
    { name: "Willie Mays",       hits: 3283, hr: 660, rbi: 1903, avg: 0.302, obp: 0.384, slg: 0.557, g: 2992, sb: 338,  as: 24 },
    { name: "Babe Ruth",         hits: 2873, hr: 714, rbi: 2214, avg: 0.342, obp: 0.474, slg: 0.690, g: 2503, sb: 123,  as: 2  },
    { name: "Ted Williams",      hits: 2654, hr: 521, rbi: 1839, avg: 0.344, obp: 0.482, slg: 0.634, g: 2292, sb: 24,   as: 19 },
    { name: "Stan Musial",       hits: 3630, hr: 475, rbi: 1951, avg: 0.331, obp: 0.417, slg: 0.559, g: 3026, sb: 78,   as: 24 },
    { name: "Ty Cobb",           hits: 4189, hr: 117, rbi: 1944, avg: 0.366, obp: 0.433, slg: 0.512, g: 3034, sb: 897,  as: 0  },
    { name: "Pete Rose",         hits: 4256, hr: 160, rbi: 1314, avg: 0.303, obp: 0.375, slg: 0.409, g: 3562, sb: 198,  as: 17 },
    { name: "Derek Jeter",       hits: 3465, hr: 260, rbi: 1311, avg: 0.310, obp: 0.377, slg: 0.440, g: 2747, sb: 358,  as: 14 },
    { name: "Cal Ripken Jr",     hits: 3184, hr: 431, rbi: 1695, avg: 0.276, obp: 0.340, slg: 0.447, g: 3001, sb: 36,   as: 19 },
    { name: "Lou Gehrig",        hits: 2721, hr: 493, rbi: 1995, avg: 0.340, obp: 0.447, slg: 0.632, g: 2164, sb: 102,  as: 7  },
    { name: "Albert Pujols",     hits: 3384, hr: 700, rbi: 2218, avg: 0.296, obp: 0.376, slg: 0.548, g: 3026, sb: 117,  as: 11 },
    { name: "Alex Rodriguez",    hits: 3115, hr: 696, rbi: 2086, avg: 0.295, obp: 0.380, slg: 0.550, g: 2784, sb: 329,  as: 14 },
    { name: "Ken Griffey Jr",    hits: 2781, hr: 630, rbi: 1836, avg: 0.284, obp: 0.370, slg: 0.538, g: 2671, sb: 184,  as: 13 },
    { name: "Mike Schmidt",      hits: 2234, hr: 548, rbi: 1595, avg: 0.267, obp: 0.380, slg: 0.527, g: 2404, sb: 174,  as: 12 },
    { name: "Reggie Jackson",    hits: 2584, hr: 563, rbi: 1702, avg: 0.262, obp: 0.356, slg: 0.490, g: 2820, sb: 228,  as: 14 },
    { name: "Mickey Mantle",     hits: 2415, hr: 536, rbi: 1509, avg: 0.298, obp: 0.421, slg: 0.557, g: 2401, sb: 153,  as: 20 },
    { name: "Mike Piazza",       hits: 2127, hr: 427, rbi: 1335, avg: 0.308, obp: 0.377, slg: 0.545, g: 1912, sb: 17,   as: 12 },
    { name: "Ivan Rodriguez",    hits: 2844, hr: 311, rbi: 1332, avg: 0.296, obp: 0.334, slg: 0.464, g: 2543, sb: 127,  as: 14 },
    { name: "Roberto Clemente",  hits: 3000, hr: 240, rbi: 1305, avg: 0.317, obp: 0.359, slg: 0.475, g: 2433, sb: 83,   as: 15 },
    { name: "Tony Gwynn",        hits: 3141, hr: 135, rbi: 1138, avg: 0.338, obp: 0.388, slg: 0.459, g: 2440, sb: 319,  as: 15 },
    { name: "Wade Boggs",        hits: 3010, hr: 118, rbi: 1014, avg: 0.328, obp: 0.415, slg: 0.443, g: 2440, sb: 24,   as: 12 },
    { name: "George Brett",      hits: 3154, hr: 317, rbi: 1596, avg: 0.305, obp: 0.369, slg: 0.487, g: 2707, sb: 201,  as: 13 },
    { name: "Robin Yount",       hits: 3142, hr: 251, rbi: 1406, avg: 0.285, obp: 0.342, slg: 0.430, g: 2856, sb: 271,  as: 3  },
    { name: "Dave Winfield",     hits: 3110, hr: 465, rbi: 1833, avg: 0.283, obp: 0.353, slg: 0.475, g: 2973, sb: 223,  as: 12 },
    { name: "Carl Yastrzemski",  hits: 3419, hr: 452, rbi: 1844, avg: 0.285, obp: 0.379, slg: 0.462, g: 3308, sb: 168,  as: 18 },
    { name: "Paul Molitor",      hits: 3319, hr: 234, rbi: 1307, avg: 0.306, obp: 0.369, slg: 0.448, g: 2683, sb: 504,  as: 7  },
    { name: "Eddie Murray",      hits: 3255, hr: 504, rbi: 1917, avg: 0.287, obp: 0.359, slg: 0.476, g: 3026, sb: 110,  as: 8  },
    { name: "Rickey Henderson",  hits: 3055, hr: 297, rbi: 1115, avg: 0.279, obp: 0.401, slg: 0.419, g: 3081, sb: 1406, as: 10 },
    { name: "Barry Bonds",       hits: 2935, hr: 762, rbi: 1996, avg: 0.298, obp: 0.444, slg: 0.607, g: 2986, sb: 514,  as: 14 },
    { name: "Frank Robinson",    hits: 2943, hr: 586, rbi: 1812, avg: 0.294, obp: 0.389, slg: 0.537, g: 2808, sb: 204,  as: 14 },
    { name: "Harmon Killebrew",  hits: 2086, hr: 573, rbi: 1584, avg: 0.256, obp: 0.376, slg: 0.509, g: 2435, sb: 19,   as: 13 },
    { name: "Jim Thome",         hits: 2328, hr: 612, rbi: 1699, avg: 0.276, obp: 0.402, slg: 0.554, g: 2543, sb: 19,   as: 5  },
    { name: "Chipper Jones",     hits: 2726, hr: 468, rbi: 1623, avg: 0.303, obp: 0.401, slg: 0.529, g: 2499, sb: 150,  as: 8  },
    { name: "Vladimir Guerrero", hits: 2590, hr: 449, rbi: 1496, avg: 0.318, obp: 0.379, slg: 0.553, g: 2147, sb: 181,  as: 9  },
    { name: "Manny Ramirez",     hits: 2574, hr: 555, rbi: 1831, avg: 0.312, obp: 0.411, slg: 0.585, g: 2302, sb: 38,   as: 12 },
    { name: "Edgar Martinez",    hits: 2247, hr: 309, rbi: 1261, avg: 0.312, obp: 0.418, slg: 0.515, g: 2055, sb: 49,   as: 7  },
    { name: "Larry Walker",      hits: 2160, hr: 383, rbi: 1311, avg: 0.313, obp: 0.400, slg: 0.565, g: 1988, sb: 230,  as: 5  },
    { name: "Todd Helton",       hits: 2519, hr: 369, rbi: 1406, avg: 0.316, obp: 0.414, slg: 0.539, g: 2247, sb: 37,   as: 5  },
    { name: "Scott Rolen",       hits: 2077, hr: 316, rbi: 1287, avg: 0.281, obp: 0.364, slg: 0.490, g: 2038, sb: 118,  as: 8  },
    { name: "Jeff Bagwell",      hits: 2314, hr: 449, rbi: 1529, avg: 0.297, obp: 0.408, slg: 0.540, g: 2150, sb: 202,  as: 4  },
    { name: "Craig Biggio",      hits: 3060, hr: 291, rbi: 1175, avg: 0.281, obp: 0.363, slg: 0.433, g: 2850, sb: 414,  as: 7  },
    { name: "Andruw Jones",      hits: 1933, hr: 434, rbi: 1289, avg: 0.254, obp: 0.337, slg: 0.486, g: 2196, sb: 152,  as: 5  },
    { name: "Gary Sheffield",    hits: 2689, hr: 509, rbi: 1676, avg: 0.292, obp: 0.393, slg: 0.514, g: 2576, sb: 253,  as: 9  },
    { name: "Miguel Cabrera",    hits: 2994, hr: 511, rbi: 1881, avg: 0.307, obp: 0.389, slg: 0.524, g: 2856, sb: 42,   as: 12 },
    { name: "David Ortiz",       hits: 2472, hr: 541, rbi: 1768, avg: 0.286, obp: 0.380, slg: 0.552, g: 2408, sb: 17,   as: 10 },
    { name: "Johnny Bench",      hits: 2048, hr: 389, rbi: 1376, avg: 0.267, obp: 0.342, slg: 0.476, g: 2158, sb: 68,   as: 14 },
    { name: "Joe Morgan",        hits: 2517, hr: 268, rbi: 1133, avg: 0.271, obp: 0.392, slg: 0.427, g: 2649, sb: 689,  as: 10 },
    { name: "Ozzie Smith",       hits: 2460, hr: 28,  rbi: 793,  avg: 0.262, obp: 0.337, slg: 0.328, g: 2573, sb: 580,  as: 15 },
    { name: "Brooks Robinson",   hits: 2848, hr: 268, rbi: 1357, avg: 0.267, obp: 0.322, slg: 0.401, g: 2896, sb: 28,   as: 18 },
    { name: "Ernie Banks",       hits: 2583, hr: 512, rbi: 1636, avg: 0.274, obp: 0.330, slg: 0.500, g: 2528, sb: 50,   as: 14 },
  ],
  pitchers: [
    { name: "Nolan Ryan",        w: 324, era: 3.19, so: 5714, whip: 1.247, ip: 5386, sv: 3,   as: 8  },
    { name: "Roger Clemens",     w: 354, era: 3.12, so: 4672, whip: 1.173, ip: 4916, sv: 0,   as: 11 },
    { name: "Randy Johnson",     w: 303, era: 3.29, so: 4875, whip: 1.171, ip: 4135, sv: 3,   as: 10 },
    { name: "Greg Maddux",       w: 355, era: 3.16, so: 3371, whip: 1.143, ip: 5008, sv: 0,   as: 8  },
    { name: "Pedro Martinez",    w: 219, era: 2.93, so: 3154, whip: 1.054, ip: 2827, sv: 3,   as: 8  },
    { name: "Tom Seaver",        w: 311, era: 2.86, so: 3640, whip: 1.121, ip: 4782, sv: 1,   as: 12 },
    { name: "Bob Gibson",        w: 251, era: 2.91, so: 3117, whip: 1.188, ip: 3884, sv: 6,   as: 9  },
    { name: "Sandy Koufax",      w: 165, era: 2.76, so: 2396, whip: 1.106, ip: 2324, sv: 9,   as: 6  },
    { name: "Warren Spahn",      w: 363, era: 3.09, so: 2583, whip: 1.195, ip: 5243, sv: 29,  as: 17 },
    { name: "Steve Carlton",     w: 329, era: 3.22, so: 4136, whip: 1.247, ip: 5217, sv: 2,   as: 10 },
    { name: "Cy Young",          w: 511, era: 2.63, so: 2803, whip: 1.130, ip: 7356, sv: 17,  as: 0  },
    { name: "Walter Johnson",    w: 417, era: 2.17, so: 3509, whip: 1.061, ip: 5914, sv: 34,  as: 0  },
    { name: "Christy Mathewson", w: 373, era: 2.13, so: 2507, whip: 1.058, ip: 4780, sv: 28,  as: 0  },
    { name: "Lefty Grove",       w: 300, era: 3.06, so: 2266, whip: 1.340, ip: 3940, sv: 55,  as: 8  },
    { name: "Carl Hubbell",      w: 253, era: 2.98, so: 1678, whip: 1.166, ip: 3590, sv: 33,  as: 9  },
    { name: "Whitey Ford",       w: 236, era: 2.75, so: 1956, whip: 1.215, ip: 3170, sv: 10,  as: 8  },
    { name: "Jim Palmer",        w: 268, era: 2.86, so: 2212, whip: 1.180, ip: 3948, sv: 4,   as: 6  },
    { name: "Gaylord Perry",     w: 314, era: 3.11, so: 3534, whip: 1.270, ip: 5350, sv: 11,  as: 5  },
    { name: "Phil Niekro",       w: 318, era: 3.35, so: 3342, whip: 1.268, ip: 5404, sv: 29,  as: 5  },
    { name: "Don Sutton",        w: 324, era: 3.26, so: 3574, whip: 1.142, ip: 5282, sv: 5,   as: 4  },
    { name: "Fergie Jenkins",    w: 284, era: 3.34, so: 3192, whip: 1.142, ip: 4500, sv: 7,   as: 3  },
    { name: "Bert Blyleven",     w: 287, era: 3.31, so: 3701, whip: 1.198, ip: 4970, sv: 0,   as: 2  },
    { name: "Mike Mussina",      w: 270, era: 3.68, so: 2813, whip: 1.192, ip: 3562, sv: 0,   as: 5  },
    { name: "John Smoltz",       w: 213, era: 3.33, so: 3084, whip: 1.175, ip: 3473, sv: 154, as: 8  },
    { name: "Roy Halladay",      w: 203, era: 3.38, so: 2117, whip: 1.178, ip: 2749, sv: 1,   as: 8  },
    { name: "Curt Schilling",    w: 216, era: 3.46, so: 3116, whip: 1.137, ip: 3261, sv: 22,  as: 6  },
    { name: "Trevor Hoffman",    w: 61,  era: 2.87, so: 1133, whip: 1.058, ip: 1089, sv: 601, as: 7  },
    { name: "Mariano Rivera",    w: 82,  era: 2.21, so: 1173, whip: 1.000, ip: 1283, sv: 652, as: 13 },
    { name: "Dennis Eckersley",  w: 197, era: 3.50, so: 2401, whip: 1.161, ip: 3285, sv: 390, as: 6  },
    { name: "Bruce Sutter",      w: 68,  era: 2.83, so: 1042, whip: 1.138, ip: 1042, sv: 300, as: 6  },
  ]
};

// Officially inducted HOF members (name-normalized comparison via isHOFMember)
const HOF_MEMBERS = new Set([
  "hank aaron","willie mays","babe ruth","ted williams","stan musial",
  "ty cobb","derek jeter","cal ripken jr","lou gehrig","albert pujols",
  "ken griffey jr","mike schmidt","reggie jackson","mickey mantle",
  "mike piazza","ivan rodriguez","roberto clemente","tony gwynn",
  "wade boggs","george brett","robin yount","dave winfield",
  "carl yastrzemski","paul molitor","eddie murray","rickey henderson",
  "frank robinson","harmon killebrew","jim thome","chipper jones",
  "vladimir guerrero","edgar martinez","larry walker","todd helton",
  "scott rolen","jeff bagwell","craig biggio","david ortiz",
  "johnny bench","joe morgan","ozzie smith","brooks robinson","ernie banks",
  "nolan ryan","randy johnson","greg maddux","pedro martinez",
  "tom seaver","bob gibson","sandy koufax","warren spahn","steve carlton",
  "cy young","walter johnson","christy mathewson","lefty grove",
  "carl hubbell","whitey ford","jim palmer","gaylord perry",
  "phil niekro","don sutton","fergie jenkins","bert blyleven",
  "mike mussina","john smoltz","roy halladay",
  "trevor hoffman","mariano rivera","dennis eckersley","bruce sutter",
]);

function isHOFMember(name) {
  const norm = s => s.toLowerCase()
    .replace(/[áàäâ]/g,'a').replace(/[éèëê]/g,'e')
    .replace(/[íìïî]/g,'i').replace(/[óòöô]/g,'o').replace(/[úùüû]/g,'u')
    .replace(/[^a-z\s]/g,'').replace(/\s+/g,' ').trim();
  return HOF_MEMBERS.has(norm(name));
}

function calcPercentile(playerVal, allVals, higherIsBetter = true) {
  if (!allVals.length) return 0;
  const count = higherIsBetter
    ? allVals.filter(v => playerVal >= v).length
    : allVals.filter(v => playerVal <= v).length;
  return Math.round((count / allVals.length) * 100);
}

function getHitterPercentiles(stats) {
  return {
    hits: calcPercentile(stats.hits, HOF_DATA.hitters.map(p => p.hits)),
    hr:   calcPercentile(stats.hr,   HOF_DATA.hitters.map(p => p.hr)),
    rbi:  calcPercentile(stats.rbi,  HOF_DATA.hitters.map(p => p.rbi)),
    avg:  calcPercentile(stats.avg,  HOF_DATA.hitters.map(p => p.avg)),
    obp:  calcPercentile(stats.obp,  HOF_DATA.hitters.map(p => p.obp)),
    slg:  calcPercentile(stats.slg,  HOF_DATA.hitters.map(p => p.slg)),
    g:    calcPercentile(stats.g,    HOF_DATA.hitters.map(p => p.g)),
    sb:   calcPercentile(stats.sb,   HOF_DATA.hitters.map(p => p.sb)),
  };
}

function getPitcherPercentiles(stats) {
  return {
    w:    calcPercentile(stats.wins,  HOF_DATA.pitchers.map(p => p.w)),
    era:  calcPercentile(stats.era,   HOF_DATA.pitchers.map(p => p.era), false),
    so:   calcPercentile(stats.so,    HOF_DATA.pitchers.map(p => p.so)),
    whip: calcPercentile(stats.whip,  HOF_DATA.pitchers.map(p => p.whip), false),
    ip:   calcPercentile(stats.ip,    HOF_DATA.pitchers.map(p => p.ip)),
    sv:   calcPercentile(stats.sv,    HOF_DATA.pitchers.map(p => p.sv)),
  };
}

function getHOFAverages() {
  const h = HOF_DATA.hitters;
  const p = HOF_DATA.pitchers;
  const avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
  return {
    hitters: {
      hits: Math.round(avg(h.map(x => x.hits))),
      hr:   Math.round(avg(h.map(x => x.hr))),
      rbi:  Math.round(avg(h.map(x => x.rbi))),
      avg:  avg(h.map(x => x.avg)),
      obp:  avg(h.map(x => x.obp)),
      slg:  avg(h.map(x => x.slg)),
      g:    Math.round(avg(h.map(x => x.g))),
      sb:   Math.round(avg(h.map(x => x.sb))),
    },
    pitchers: {
      w:    Math.round(avg(p.map(x => x.w))),
      era:  avg(p.map(x => x.era)),
      so:   Math.round(avg(p.map(x => x.so))),
      whip: avg(p.map(x => x.whip)),
      ip:   Math.round(avg(p.map(x => x.ip))),
      sv:   Math.round(avg(p.map(x => x.sv))),
    }
  };
}
