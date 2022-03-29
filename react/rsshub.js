const RSSHub = require('rsshub');

RSSHub.init({
  // config
  NODE_ENV: false
});

RSSHub.request('/sicau/zsjy/bkszs')
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
