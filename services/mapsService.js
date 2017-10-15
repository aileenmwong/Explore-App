const util           = require('util');
const fs             = require('fs');
const request        = require('request-promise-native');
const path           = require('path');
const os             = require('os');

const writeFile = util.promisify(fs.writeFile);

const tmpDir = fs.mkdtempSync(`${os.tmpdir()}${path.sep}`)

async function getAllParks(state) {
  try {
    const { data: parks } = await request({
      uri: 'https://developer.nps.gov/api/v0/parks',
      qs: {
        limit: 600,
        stateCode: state
      },
      headers: {
        'User-Agent': 'bloop',
        authorization: 'B619A928-B3D8-4138-BDD4-B1C0CC6408C7',
      },
      json: true,
    });

    return parks;

    // await writeFile(path.join(tmpDir, 'allParks.json'), JSON.stringify({ parks }));
    // console.log('wrote file', path.join(tmpDir, 'allParks.json'));
    // return parks;
  } catch (e) {
    console.log(e);
  }
}

function readParksFromFile() {
  try {
    console.log('READ file', path.join(tmpDir, 'allParks.json'))
    return require(path.join(tmpDir, 'allParks.json')).parks;
  } catch (e) {
    return false;
  }
}

async function getParks(state) {
  // debugger;
  let parks = await getAllParks(state);
  console.log(parks)
  return parks.map((park) => {
    const [foo, lat, lng] =  park.latLong ? park.latLong.match(/^lat:(.+),.+:(.+)$/) : [0,0,0];
    return {
      ...park,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    }
  })
};

module.exports = {
  getParks,
}
