const https = require('https');

const host = 'api.indexnow.org';
const key = '5a069df8a34947dc9366e857ab34db6d';
const urlList = [
  'https://wciecdelhi.com/',
  'https://wciecdelhi.com/mbbs-in-kyrgyzstan/',
  'https://wciecdelhi.com/mbbs-abroad/',
  'https://wciecdelhi.com/universities/osh-state-university/',
  'https://wciecdelhi.com/universities/jalal-abad-state-university/'
];

const data = JSON.stringify({
  host: 'wciecdelhi.com',
  key: key,
  keyLocation: `https://wciecdelhi.com/${key}.txt`,
  urlList: urlList
});

const options = {
  hostname: host,
  port: 443,
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  console.log(`IndexNow Status Code: ${res.statusCode}`);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error('Error pinging IndexNow:', error);
});

req.write(data);
req.end();
