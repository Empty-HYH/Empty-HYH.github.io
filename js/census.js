var fetch = require("node-fetch");

var key = {
  api_key: 'oTe3eg0Ggy1AKYBTmNIrO0Cm',
  secret_key: 'Ygpg5sERFfOuV6LTUorWYy8kpXbMhseH',
  auth_code: '39f937d4cadfe704aa8aaad1763ba1e9',
  redirect_uri: 'oob'
}
// 通过身份验证
authorize_url = 'http://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=' + key.api_key + '&redirect_uri=' + key.redirect_uri + '&scope=basic&display=popup';

fetch(authorize_url)
  // .then(data => data.json())
  .then(data => {
    console.log(data)
  }).catch(function (error) {
    console.log(error);
  });

// 获取ACCESS_TOKEN
token_url = 'http://openapi.baidu.com/oauth/2.0/token?grant_type=authorization_code&code=' + key.auth_code + '&client_id=' + key.api_key + '&client_secret=' + key.secret_key + '&redirect_uri=' + key.redirect_uri;

// fetch(token_url)
//   .then(data => data.json())
//   .then(data => {
//     console.log(data)
//   }).catch(function (error) {
//     console.log(error);
//   });