/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/assets/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/assets/weather/01d.png","401e66803935b7035675d2b71e49ab91"],["/assets/weather/01n.png","44c6f1ba041fe91a6ae4163b38139cd1"],["/assets/weather/02d.png","b1fac6b809a3b0904d10489e490d8959"],["/assets/weather/02n.png","af1c78e11ba987fb7bd105e535e5b071"],["/assets/weather/03d.png","988ec2e80f00b7416979a3991b255e9b"],["/assets/weather/03n.png","988ec2e80f00b7416979a3991b255e9b"],["/assets/weather/04d.png","6d64f09619af982e81997c72b42f4b16"],["/assets/weather/04n.png","6d64f09619af982e81997c72b42f4b16"],["/assets/weather/09d.png","353840d24a6212e62afd2925a1fe8e47"],["/assets/weather/09n.png","353840d24a6212e62afd2925a1fe8e47"],["/assets/weather/10d.png","a80420158756c8841c58ef0af68d1ceb"],["/assets/weather/10n.png","a2c315e3c04072f33aa8b60f466b79d9"],["/assets/weather/11d.png","479324978fd9afe7c281efba79210e13"],["/assets/weather/11n.png","479324978fd9afe7c281efba79210e13"],["/assets/weather/13d.png","ca0f0747e18b9f5a8f646c780aa53620"],["/assets/weather/13n.png","ca0f0747e18b9f5a8f646c780aa53620"],["/assets/weather/50d.png","18ea6a4ca6604ae4c29ce6053c4c4819"],["/assets/weather/50n.png","18ea6a4ca6604ae4c29ce6053c4c4819"],["/assets/weather/hu.png","3754a3ea92275cc8158606e544b132a7"],["/assets/weather/loading.gif","b8c45314a21e9b46abcd38a3a69bd07d"],["/css/custom.css","2c3919749f47305036a89d47ba30dfed"],["/css/gitcalendar.css","74829e0d09899993c140757182339a60"],["/css/index.css","2ad3fcab1788506cada4c9cab3ff21a9"],["/css/stars.css","c48d1085aadf9d6bb984d34bbf5b3601"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/cover/bigdata_list.jpg","e1b7037c27a61e2cbd8019c7cc644153"],["/images/cover/front-matter.svg","86d92de9f1af25abbb22863e2dcc38a6"],["/images/cover/git.png","e2fd3b99d03afd2c69189c17ee1962f1"],["/images/cover/hdfs_shell.jpg","8a0f387b99e96b4b8057e44ee37b7b53"],["/images/cover/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/cover/hexo_chartjs.svg","ed2f373e10b05199cfbc134da918f167"],["/images/cover/hexo_echarts.png","93d6f908f88d822f3f51b78af4687792"],["/images/cover/letter_proverb.png","b77c310dcae837b63a6e8b9bf35f8074"],["/images/cover/markdown_grammar.jpg","c53f165bc3e6107955fd97989ce873d4"],["/images/cover/mysql_command.png","5720c4fac29bd0783247c1a632ed593c"],["/images/cover/mysql_course.jpg","67988d163de5deb394c8b2a50c7b39a6"],["/images/cover/mysql_optimization.jpg","96a22354027b57bbc0f4261859c40bb2"],["/images/cover/r_chart.jpg","41b43a26936866dd7156c004f890e926"],["/images/cover/r_course.png","4f8a7fb3b684a6b6e6cecca21c3c6977"],["/images/cover/r_data_interface.png","7a41f403878dc9ce0eb96a8ae5136ecf"],["/images/cover/r_statistics.jpg","db981d76e99e3b7ff5f323282e749e18"],["/images/gallery/marvel/marvel.jpg","2c979d35f9056140b6102826e6b247f0"],["/images/gallery/wallpaper/background.png","e7d09ea46cd481b9e49614a4ce44a2a5"],["/images/letter/a_black.png","c13d9af95b4832ac84511043d72e0959"],["/images/letter/a_proverb.png","52fe44f8f39a1903c18a5f955b8df0c7"],["/images/letter/a_white.png","601397ba56c410f0b760818a18745341"],["/images/letter/b_black.png","9a65a7e99dc20d4e286a0e4c1c694cf8"],["/images/letter/b_proverb.png","172218b680463e84c2dc6db2a66c1b50"],["/images/letter/b_white.png","72516accbe18e77759425eee8f57aad0"],["/images/letter/c_black.png","94bf105d2a778410ca7c48776d384196"],["/images/letter/c_proverb.png","b46738c6f81e8a9684f4283dedf0fcb5"],["/images/letter/c_white.png","774f0c72a5bac5ee624ca67f1209bb44"],["/images/letter/d_black.png","9023cb721921739380bb079203c234f8"],["/images/letter/d_proverb.png","927be719a6a5ef06fc0a35ff743c1a9e"],["/images/letter/d_white.png","06a5ffb4374c47a89b99cc1ec3acd378"],["/images/letter/e_black.png","d61f6c455843de46872cf588e5935351"],["/images/letter/e_proverb.png","ce3570e1f6e03ff74874de454a38b77e"],["/images/letter/e_white.png","4c2ce3ed71483cb049440e2562d6e49b"],["/images/letter/f_black.png","50127a59753bb477fd5b09bb34d974dd"],["/images/letter/f_proverb.png","0a3a1855c8887581ad281121cdae8b0e"],["/images/letter/f_white.png","1e09ef57bb258d2a2ed81c0f4efd5df0"],["/images/letter/g_black.png","989044a84900991df444a567863f511b"],["/images/letter/g_proverb.png","72aabbbda1c261f1d93a6d3fa6d339af"],["/images/letter/g_white.png","ab1ef415940e7a2a61c7f8ca9f842fc0"],["/images/letter/h_black.png","b5c4bc7a0fe9ecb439a13921e049f6ca"],["/images/letter/h_proverb.png","27d7518a8026ac580e57db902d402c4b"],["/images/letter/h_white.png","b22248cfdf2566a164799e977e2ad5c9"],["/images/letter/i_black.png","d6371a604d5ced76ca8bd298a11a72f5"],["/images/letter/i_proverb.png","729137e6ba510ce1c5796be42fbf26ef"],["/images/letter/i_white.png","3448f30b8f873c9be5c178726ce8a0cc"],["/images/letter/j_black.png","b53104860b65edb522932f0693289f4b"],["/images/letter/j_proverb.png","b43be11ca99e0b9a904ace6567147eec"],["/images/letter/j_white.png","b38892a05deb23eff598deb2511811d7"],["/images/letter/k_black.png","c22adca50c1925bc950a46644d3c1002"],["/images/letter/k_proverb.png","34a79cb1fe955d4b786becc040363d69"],["/images/letter/k_white.png","d719b06cbe6fe8123990e196ca8675a9"],["/images/letter/l_black.png","7320f7383a3f7f67ea26b9b287c2b922"],["/images/letter/l_proverb.png","fc3c50b8138bce1a131e949d04e4e7c2"],["/images/letter/l_white.png","6367f2773ee3d6b90a18c0c64c12a280"],["/images/letter/m_black.png","cfef84b7f53a8ab301d7a38b86b0d5a1"],["/images/letter/m_proverb.png","8ce602b989552cf1469feb439c4a056f"],["/images/letter/m_white.png","65eb39f0fb5b23b983e6dbb1a1a1d800"],["/images/letter/n_black.png","f77d46b5d39294b026de689e271b2a04"],["/images/letter/n_proverb.png","06ba6ed32c214fc9d2cf844ad5529693"],["/images/letter/n_white.png","5656d9bd5cf739c20495df70c4bed538"],["/images/letter/o_black.png","4463f71083a0622ba1169caabf7d75d4"],["/images/letter/o_proverb.png","81ff4500d463339c909145bf56f2fbd3"],["/images/letter/o_white.png","4c776ab62d441db3bd714cb2f7b37260"],["/images/letter/p_black.png","7c30380f752c8ba0c1c8f5acc9f65c3c"],["/images/letter/p_proverb.png","0525a9926b1d19b6323eca9000091b08"],["/images/letter/p_white.png","7b3b266c753267bbb7f89cba3578b34c"],["/images/letter/q_black.png","2af742e69a5793c978a9e2cd301040ac"],["/images/letter/q_proverb.png","2c9cfeec23a5aa2f9355cc8570772ddb"],["/images/letter/q_white.png","300cd914637aa6caa207dd5f96f6aa57"],["/images/letter/r_black.png","cb414a95eff204fb3ca149836b9ab38b"],["/images/letter/r_proverb.png","3352bf8c991ce78f55549bdb43a18972"],["/images/letter/r_white.png","22fc74b38088743eaecc7f0bce21a541"],["/images/letter/s_black.png","fb0b7c638d4cbcc075c7a2c9c5bf1811"],["/images/letter/s_proverb.png","1f991c1f2b82ea1f7ef94889a3a7af8f"],["/images/letter/s_white.png","0c1020e9627373febfc2254e96f2e7d6"],["/images/letter/t_black.png","8abcf6939ff52cff118adc7a604bf7ed"],["/images/letter/t_proverb.png","f39bf985005fdd169fd08fb5e04c54d2"],["/images/letter/t_white.png","6245ba9dfb8d86be34bdc5853f1f9b81"],["/images/letter/u_black.png","7320ad065167b505790e5dc8ed94a33e"],["/images/letter/u_proverb.png","0ecd146affc8ce2a695f6c81cd48b068"],["/images/letter/u_white.png","26e73bc0219dbab9bf1ada648dd019b7"],["/images/letter/v_black.png","418ca3e83cb3bf7ce56b06235bf8beb3"],["/images/letter/v_proverb.png","7debdf8d145a0133f83e09960b20a537"],["/images/letter/v_white.png","5a314fcb057ee8dcc3a4717c9bf3b635"],["/images/letter/w_black.png","88dd2d1b531f292e2081a7abb732cbcc"],["/images/letter/w_proverb.png","fdb9543e60a780fe0fde3e7d37d7f9f0"],["/images/letter/w_white.png","5b9f86258e6c0e25112898f218194beb"],["/images/letter/x_black.png","374233d61431761780fc12c35e0e8e59"],["/images/letter/x_proverb.png","c8cf49ae8234088abe384ef148a500ad"],["/images/letter/x_white.png","7291ec54b9756410d1b3b278807df9e2"],["/images/letter/y_black.png","884fcdb408f4c6cd60ba956d16ddea0c"],["/images/letter/y_proverb.png","8ce0e18123e5df6efded498852b3bd16"],["/images/letter/y_white.png","98634ae00d50d3665b626dd2206c68fb"],["/images/letter/z_black.png","0ab0b8543f32411318c5feaa681fbe70"],["/images/letter/z_proverb.png","060a76bc61a554526a2833f8346d0acc"],["/images/letter/z_white.png","368c927ab9f1a0739517d69e65f3a792"],["/images/post/git/command.png","1060e5787e87b92fc300deb37b85ce13"],["/images/post/git/workflow.png","d6a40f378b92ea97a5e9a3c30388cce5"],["/images/post/git/workflow2.png","b63b34e5a384484e6adc2c6628297786"],["/images/post/mysql_optimization/explain_1.png","64d9d205a4c6b4090f91814248f37159"],["/images/post/mysql_optimization/explain_2.png","6b19459eba2a64c9a5deca89b252dc8a"],["/images/post/r_chart/3d_pie_chart.png","2879b31a777589552db5bace9682d289"],["/images/post/r_chart/barchart.png","e445269f27a4621578f51a970861e429"],["/images/post/r_chart/barchart_months_revenue.png","fd39e3c88f510483eb1c2e952934eb64"],["/images/post/r_chart/barchart_stacked.png","b183ce1fb8d76398194ae68b720cc981"],["/images/post/r_chart/boxplot.png","c427c58d0df29c2f6345d5da8c18c1b3"],["/images/post/r_chart/boxplot_with_notch.png","b145d7436928444237c7156e34baed84"],["/images/post/r_chart/histogram.png","596cabe3d2223b083d97b9d2247e3167"],["/images/post/r_chart/histogram_lim_breaks.png","00e110f3eb2e8b0d75cad9231950de6a"],["/images/post/r_chart/line_chart.png","e39aae71e455c32ff1f96a7a48430bb5"],["/images/post/r_chart/line_chart_2_lines.png","d0ecaa36bcbf1388f060d1bf7fd9ddab"],["/images/post/r_chart/line_chart_label_colored.png","7137bb081dbf36e8cfb472bf8a31384c"],["/images/post/r_chart/pie.png","3e3ace90a9c764bacd84f64bfbd0639f"],["/images/post/r_chart/pie_percentage_legends.png","40d070be3cb7c753a78b5e703b6f8796"],["/images/post/r_chart/pie_title_colours.png","8df787f89a66512671763ff6fe355372"],["/images/post/r_chart/scatterplot.png","bccc7d066fa9a6486606c1aee8ee0592"],["/images/post/r_chart/scatterplot_matrices.png","a6548dd7b26c82cb8ee097457c24cdb0"],["/images/post/r_course/break.jpg","0cde96aadf4736d4a2385956ffd5bad1"],["/images/post/r_course/for.jpg","d634f0854700a10df40da2168cd45683"],["/images/post/r_course/if.jpg","7116b28212e65443c0639bd2db932039"],["/images/post/r_course/if_else.jpg","f3a10d41bfe4c405c653c3b8125a57b7"],["/images/post/r_course/loop.jpg","b756554eb1deaf48de926491ec1ea2a8"],["/images/post/r_course/next.jpg","402900751803582bf6cd14a96fda5974"],["/images/post/r_course/repeat.jpg","0cde96aadf4736d4a2385956ffd5bad1"],["/images/post/r_course/switch.jpg","79d9bfc7f137ef9193353ac83781d0da"],["/images/post/r_course/while.jpg","dada6febea9bf56be033ba68df755a31"],["/images/post/r_statistics/dbinom.png","48a8c0724232c3784ec990cc271807e7"],["/images/post/r_statistics/decision_tree.png","4d2f790634fca7f41b339fab698deb80"],["/images/post/r_statistics/dnorm.png","a03409f5f790d5e792949a49d6b3f3bc"],["/images/post/r_statistics/linear_regression.png","23831abc19c3d482b4236292fc0afc2c"],["/images/post/r_statistics/nls.png","9295ecdf19a50af0f233d4e4c6b1bde7"],["/images/post/r_statistics/pnorm.png","1935d668bc7936f8dfccbd870758c8d3"],["/images/post/r_statistics/qnorm.png","3896aceca4e5de2915613e43591bba2d"],["/images/post/r_statistics/rainfall.png","ae9d36d6a72e1e662de15df0e9a4e707"],["/images/post/r_statistics/rainfall_combined.png","4115d0cd1d2ee8e3b28cdab2ca865e5b"],["/images/post/r_statistics/rnorm.png","5f5aef59af652e3ba13c4407a5abdb74"],["/images/post/r_statistics/survival.png","9c9dd73fd5ebff2e9ee2469e4ce85ca7"],["/images/sys/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/images/sys/404.png","7ade9a88a5ced2c311e69b0b16680591"],["/images/sys/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/sys/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/sys/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/images/sys/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/images/user/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/images/user/404.png","7ade9a88a5ced2c311e69b0b16680591"],["/images/user/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/user/alipay.jpg","ea53ad155283ca1a09f4ece4f3f45669"],["/images/user/avatar.jpg","c555244424f8948b4f3c4e9c6cfd1367"],["/images/user/avatar.png","b2bfcff315a115d47f6dcb7bb2a86422"],["/images/user/avatar_hover.gif","8db5efdbe3f36746b18f7779c04b2d58"],["/images/user/background.png","f89ec9803019211bccd65120ac153632"],["/images/user/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/images/user/favicon.jpg","c555244424f8948b4f3c4e9c6cfd1367"],["/images/user/favicon.png","b2bfcff315a115d47f6dcb7bb2a86422"],["/images/user/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/images/user/loading.gif","c46411ff468982ff619a27478d7bfe0d"],["/images/user/twitter.png","e2c34cebc1ebc721507e0eeeb9272525"],["/images/user/wechat.jpg","8e4ce6df824859405415b758f8279b8a"],["/images/user/weibo.png","1529dc9ea9900b25d424e79be55c8351"],["/images/user/youtube.png","15b57193a354a9b1628b5ac3219b407d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/js/Valine.min.js","746a6655530b8c20145394f038dc4ca0"],["/js/card_clock.js","9451601c1a26d962e981b227a07d456d"],["/js/card_history.js","3e2d04ae9a090b77ce82a629daf22e98"],["/js/custom.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/fcircle.js","2c1ccb1d45fb4b2fb658da852b50501e"],["/js/gitcalendar.js","f8791ce4adcf6fcf2c9ca8f1832c63dd"],["/js/history.js","4283748d1e767c02b1d3c59ed8a1ceb2"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/stars.js","1901abfa4adad11ec861eb697389f83a"],["/js/swiper_init.js","dcf69c07e6595a5fce5121731baf2525"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/sw-register.js","a0aaf962ac6e723fd9a5e96b297ebbd7"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"blog.eurkon.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
