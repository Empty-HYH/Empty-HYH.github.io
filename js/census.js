var fetch = require("node-fetch");

var key = {
  api_key: 'oTe3eg0Ggy1AKYBTmNIrO0Cm',
  secret_key: 'Ygpg5sERFfOuV6LTUorWYy8kpXbMhseH',
  redirect_uri: 'oob',
  site_name= 'blog.eurkon.com'
}









function getAuthCode (key) {
  // 通过身份验证 返回html页面
  let authorize_url = 'http://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=' + key.api_key + '&redirect_uri=' + key.redirect_uri + '&scope=basic&display=popup';
  fetch(authorize_url)
    .then(data => {
      getAuthCode(data.auth_code);
    }).catch(function (error) {
      console.log(error);
    });
}

function getAuthCode (auth_code) {
  // 获取ACCESS_TOKEN
  token_url = 'http://openapi.baidu.com/oauth/2.0/token?grant_type=authorization_code&code=' + auth_code + '&client_id=' + key.api_key + '&client_secret=' + key.secret_key + '&redirect_uri=' + key.redirect_uri;
  fetch(token_url)
    .then(data => data.json())
    .then(data => {
      data.expires_in
      data.refresh_token
      data.access_token;
      data.session_secret;
      data.session_key;
      data.scope
      getSiteList(data.access_token);
      console.log(data)
    }).catch(function (error) {
      console.log(error);
    });
}

// 获取网站列表
function getSiteList (access_token) {
  site_url = 'https://api.baidu.com/json/tongji/v1/ReportService/getSiteList?access_token=' + access_token;
  fetch(site_url)
    .then(data => data.json())
    .then(data => {
      let site_id;
      data.list.forEach(site => {
        if (site.domain === site_name) {
          site_id = site.site_id
        }
      });
      getData(site_id, access_token);
      console.log(data)
    }).catch(function (error) {
      console.log(error);
    });
}

function getData (site_id) {
  param = {
    method: 'trend/time/a',
    start_date: '20210101',
    end_date: '20210309',
    start_date2: '20200101',
    end_date2: '20200309',
    metrics:'pv_count,visitor_count',
    gran:'day',
    order: '',
    start_index: '',
    max_results:0
  }
  param_url = '&method=trend/time/a&start_date=20210101&end_date=20210309&metrics=pv_count,visitor_count&max_results=0&gran=day';
  data_url = 'https://api.baidu.com/json/tongji/v1/ReportService/getData?access_token=' + access_token + '&site_id=' + site_id + param_url;
  fetch(data_url)
    .then(data => data.json())
    .then(data => {
      console.log(data)
    }).catch(function (error) {
      console.log(error);
    });
}