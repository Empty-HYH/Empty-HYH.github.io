/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/css/custom.css","9c439aee7cde08cba1f38cd1d422f53d"],["/css/index.css","fb76df84583b8f76f4e56ccdba774f5c"],["/css/stars.css","c48d1085aadf9d6bb984d34bbf5b3601"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/images/cover/bigdata_interview.png","d0ee26f1e82dd25c9b90e0434f2ca1ea"],["/images/cover/bigdata_list.jpg","e1b7037c27a61e2cbd8019c7cc644153"],["/images/cover/git.png","e2fd3b99d03afd2c69189c17ee1962f1"],["/images/cover/hdfs_shell.jpg","8a0f387b99e96b4b8057e44ee37b7b53"],["/images/cover/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/cover/hexo.svg","86d92de9f1af25abbb22863e2dcc38a6"],["/images/cover/hexo_chartjs.svg","ed2f373e10b05199cfbc134da918f167"],["/images/cover/hexo_echarts.png","93d6f908f88d822f3f51b78af4687792"],["/images/cover/hive.jpg","96fd62e733931eaacb394b243cff19b6"],["/images/cover/html_symbols.jpg","85f15173121a5f6355717e633c4cb136"],["/images/cover/java_interview.jpg","cdd0349898e9357ab39a902b276dc058"],["/images/cover/letter_proverb.png","b77c310dcae837b63a6e8b9bf35f8074"],["/images/cover/linux_command.png","1268a220e9fe1351f65618c79c84b106"],["/images/cover/markdown_grammar.jpg","c53f165bc3e6107955fd97989ce873d4"],["/images/cover/mysql_command.png","e3daa69b80ca52b2e745ffbb367dfa97"],["/images/cover/mysql_course.jpg","67988d163de5deb394c8b2a50c7b39a6"],["/images/cover/mysql_optimization.jpg","96a22354027b57bbc0f4261859c40bb2"],["/images/cover/r_chart.jpg","41b43a26936866dd7156c004f890e926"],["/images/cover/r_course.png","4f8a7fb3b684a6b6e6cecca21c3c6977"],["/images/cover/r_data_interface.png","7a41f403878dc9ce0eb96a8ae5136ecf"],["/images/cover/r_statistics.jpg","db981d76e99e3b7ff5f323282e749e18"],["/images/cover/sort_algorithm.jpg","7f484b72e48db3c42f8ebaa73b535d85"],["/images/cover/spark_rdd.jpg","1462dda8cfed25481d1be4701e4146bf"],["/images/cover/special_symbols.jpg","ef333ff29071bc55984019e51a6d8194"],["/images/gallery/marvel/marvel.jpg","2c979d35f9056140b6102826e6b247f0"],["/images/gallery/wallpaper/background.png","e7d09ea46cd481b9e49614a4ce44a2a5"],["/images/post/bigdata_interview/blocksize.png","c47603187c983501e913bc47d79a0089"],["/images/post/bigdata_interview/datanode.png","7b1c853221c56c2ed45097d252394791"],["/images/post/bigdata_interview/flume_module.png","3dd5c9674b3643bcd09aceca67975743"],["/images/post/bigdata_interview/flume_multi_module.png","26995a0f48820621e8d4c3c213cbcaaf"],["/images/post/bigdata_interview/ha_namenode.png","fa2095019b0fdbdc3662e1d0c2041897"],["/images/post/bigdata_interview/hbase_architecture.png","64a6719f356420f3c7fb380834522535"],["/images/post/bigdata_interview/hbase_deep_architecture.png","5a845c4884fe3293b5fc43e8dad34ad7"],["/images/post/bigdata_interview/hbase_rpc.png","12832ebffd7ca7b399cb96e30ad858a9"],["/images/post/bigdata_interview/hdfs_architecture.png","272b35a89da96d6ed24241d8c7ebb107"],["/images/post/bigdata_interview/hdfs_duplication1.png","3153bbb0752633b0d578a30a2b156e49"],["/images/post/bigdata_interview/hdfs_error1.png","879d48707c5be82fc795b75bfd1b279f"],["/images/post/bigdata_interview/hdfs_error2.png","9e6064cc08f6e58c0c6bf521c1961c55"],["/images/post/bigdata_interview/hdfs_error3.png","b28ca1f05026f4f98b8ce3818bee3625"],["/images/post/bigdata_interview/hdfs_error4.png","35b63a2d73044d2306d50685b51c6f9f"],["/images/post/bigdata_interview/hdfs_read.png","8d71ac2cfbf1879f083f3d0d6519cc18"],["/images/post/bigdata_interview/hdfs_read1.png","601deef13ee561a092923ceeb4b5cfe5"],["/images/post/bigdata_interview/hdfs_write.png","3338cec6c96ef88d7e2881b383bc00ba"],["/images/post/bigdata_interview/hdfs_write1.png","cded7a203d87ca4c351102520aea87f7"],["/images/post/bigdata_interview/hdfs_write2.png","00c178623fbeaf470d696a670d90d2b4"],["/images/post/bigdata_interview/hdfs_write3.png","2dd7507bf6489715cf57e6eec3107366"],["/images/post/bigdata_interview/hive_architecture.png","5c73222d06328ad61df35f34b6435183"],["/images/post/bigdata_interview/hive_sqlparsemr.png","870ddd4b86ff91c8599808d8b93ec614"],["/images/post/bigdata_interview/kafka_architecture.png","b65fa9e8aa18efd06a1ae46e2b3e2cf9"],["/images/post/bigdata_interview/kafka_highwatermark.png","1fadf0823ee7ab9f6a6adecfa6a00942"],["/images/post/bigdata_interview/kafka_partition.png","6915e38f2cf09e79395f84e16ccc4e85"],["/images/post/bigdata_interview/kafka_simple.png","6eb2d05bf2b85ab2e114a093766b2bfb"],["/images/post/bigdata_interview/map_task.png","2978664ca31b3342ab55ec88cb9df000"],["/images/post/bigdata_interview/mapreduce_combiner.png","6d5243dc96fa7a4a12b9e1aed8b105ca"],["/images/post/bigdata_interview/mapreduce_shuffle.png","8629c2a4ed649ad90844233cf359e845"],["/images/post/bigdata_interview/mysql_explain.png","1d13c41d65022e2a7e6e17d95ea34bbf"],["/images/post/bigdata_interview/mysql_precesslist.png","b2269f521045c08e262b128bd02ae2ca"],["/images/post/bigdata_interview/namenode.png","88a512efc4e7cc6b5f43ec0d2858bf16"],["/images/post/bigdata_interview/reduce_task.png","0798611adab4ca8439f50ac1c69a1766"],["/images/post/bigdata_interview/yarn.png","b281e2bffab7277ee2b427b9cb8310af"],["/images/post/bigdata_interview/zookeeper_leader.png","07acf594dbcad98ea69b0c13a1fdc06f"],["/images/post/bigdata_interview/zookeeper_listener.png","b2bbba96eb04152a494c9a2fb2918a6e"],["/images/post/bigdata_interview/zookeeper_notification.png","79cc3f3f7916341ad2e828c23da9aeac"],["/images/post/git/command.png","1060e5787e87b92fc300deb37b85ce13"],["/images/post/git/workflow.png","d6a40f378b92ea97a5e9a3c30388cce5"],["/images/post/git/workflow2.png","b63b34e5a384484e6adc2c6628297786"],["/images/post/hexo_census/access_token.png","324b7b7979049a64a68fd645a12004db"],["/images/post/hexo_census/auth_code.png","3c3eff42964fde512a6a5494e5200ed2"],["/images/post/hexo_census/data_export.png","b53c69f2f9c11eb2c6e1beb7f2db9501"],["/images/post/hexo_census/index.png","ca76bb41975ebaba5c6c88abd6590cae"],["/images/post/hexo_census/login.png","2874f116aa9a6e4919fbc8c8dbb843c7"],["/images/post/hexo_census/project.png","8b71587b8aa4e78f263545ec0ae23e80"],["/images/post/hexo_census/project_info.png","44dc0dd5d39dbecf4669fce32693823d"],["/images/post/hexo_census/site_data.png","ddac0230c8546d894e4bd432785c48c2"],["/images/post/hexo_census/site_id.png","e1eda8a487de9d5ea17246483d4ba07b"],["/images/post/hexo_census/site_id_debug.png","d90e32641e07034424771f1d5619762f"],["/images/post/java_interview/113.png","6e313fa2a60a1b89dac82bcdd37e38a8"],["/images/post/java_interview/135.png","3a8e94f888ac7da621f4e8b902b194db"],["/images/post/java_interview/156.png","0873526d3563c33920aa0e044aecb80a"],["/images/post/java_interview/168.png","b2cf6c16a58c62fee25688b0152472c8"],["/images/post/java_interview/169_1.png","64f1e2d24310e7570e8fcce8b15435da"],["/images/post/java_interview/169_2.png","35b2f08d9de7ab8a676d6f239e33b22d"],["/images/post/java_interview/46.png","65105f59761522797f2fb90e8bd2e389"],["/images/post/java_interview/66.png","9e7a3ce75af339ca2587558aa9690a2a"],["/images/post/java_interview/81.png","3a6dae9b678cdac7b072637965c42252"],["/images/post/java_interview/89_1.png","41188b3cfb9c5267a5d92cae47123d9f"],["/images/post/java_interview/89_2.png","3c35ce4d4e86119c03b1cce08a834b24"],["/images/post/java_interview/93_1.png","5a9d7f368a68f82b6eefa7eeb6f784d7"],["/images/post/java_interview/93_2.png","45b530f168677a3596c03546d11e0558"],["/images/post/java_interview/93_3.png","2e32c65bfdf002181fee5bcdc2d2da9e"],["/images/post/java_interview/servlet_jsp.png","eef2b0a261c945ef686a8156f242a492"],["/images/post/mysql_optimization/explain_1.png","64d9d205a4c6b4090f91814248f37159"],["/images/post/mysql_optimization/explain_2.png","6b19459eba2a64c9a5deca89b252dc8a"],["/images/post/r_chart/3d_pie_chart.png","2879b31a777589552db5bace9682d289"],["/images/post/r_chart/barchart.png","e445269f27a4621578f51a970861e429"],["/images/post/r_chart/barchart_months_revenue.png","fd39e3c88f510483eb1c2e952934eb64"],["/images/post/r_chart/barchart_stacked.png","b183ce1fb8d76398194ae68b720cc981"],["/images/post/r_chart/boxplot.png","c427c58d0df29c2f6345d5da8c18c1b3"],["/images/post/r_chart/boxplot_with_notch.png","b145d7436928444237c7156e34baed84"],["/images/post/r_chart/histogram.png","596cabe3d2223b083d97b9d2247e3167"],["/images/post/r_chart/histogram_lim_breaks.png","00e110f3eb2e8b0d75cad9231950de6a"],["/images/post/r_chart/line_chart.png","e39aae71e455c32ff1f96a7a48430bb5"],["/images/post/r_chart/line_chart_2_lines.png","d0ecaa36bcbf1388f060d1bf7fd9ddab"],["/images/post/r_chart/line_chart_label_colored.png","7137bb081dbf36e8cfb472bf8a31384c"],["/images/post/r_chart/pie.png","3e3ace90a9c764bacd84f64bfbd0639f"],["/images/post/r_chart/pie_percentage_legends.png","40d070be3cb7c753a78b5e703b6f8796"],["/images/post/r_chart/pie_title_colours.png","8df787f89a66512671763ff6fe355372"],["/images/post/r_chart/scatterplot.png","bccc7d066fa9a6486606c1aee8ee0592"],["/images/post/r_chart/scatterplot_matrices.png","a6548dd7b26c82cb8ee097457c24cdb0"],["/images/post/r_course/break.jpg","0cde96aadf4736d4a2385956ffd5bad1"],["/images/post/r_course/for.jpg","d634f0854700a10df40da2168cd45683"],["/images/post/r_course/if.jpg","7116b28212e65443c0639bd2db932039"],["/images/post/r_course/if_else.jpg","f3a10d41bfe4c405c653c3b8125a57b7"],["/images/post/r_course/loop.jpg","b756554eb1deaf48de926491ec1ea2a8"],["/images/post/r_course/next.jpg","402900751803582bf6cd14a96fda5974"],["/images/post/r_course/repeat.jpg","0cde96aadf4736d4a2385956ffd5bad1"],["/images/post/r_course/switch.jpg","79d9bfc7f137ef9193353ac83781d0da"],["/images/post/r_course/while.jpg","dada6febea9bf56be033ba68df755a31"],["/images/post/r_statistics/dbinom.png","48a8c0724232c3784ec990cc271807e7"],["/images/post/r_statistics/decision_tree.png","4d2f790634fca7f41b339fab698deb80"],["/images/post/r_statistics/dnorm.png","a03409f5f790d5e792949a49d6b3f3bc"],["/images/post/r_statistics/linear_regression.png","23831abc19c3d482b4236292fc0afc2c"],["/images/post/r_statistics/nls.png","9295ecdf19a50af0f233d4e4c6b1bde7"],["/images/post/r_statistics/pnorm.png","1935d668bc7936f8dfccbd870758c8d3"],["/images/post/r_statistics/qnorm.png","3896aceca4e5de2915613e43591bba2d"],["/images/post/r_statistics/rainfall.png","ae9d36d6a72e1e662de15df0e9a4e707"],["/images/post/r_statistics/rainfall_combined.png","4115d0cd1d2ee8e3b28cdab2ca865e5b"],["/images/post/r_statistics/rnorm.png","5f5aef59af652e3ba13c4407a5abdb74"],["/images/post/r_statistics/survival.png","9c9dd73fd5ebff2e9ee2469e4ce85ca7"],["/images/post/sort_algorithm/bubble_sort.gif","e1a5e701ab13aa61112dcf0d7732e929"],["/images/post/sort_algorithm/bucket_sort.gif","58b4d4b9e802104727677d7b0b60157a"],["/images/post/sort_algorithm/counting_sort.gif","e03e1b43409b29aa7a38ff904fe81181"],["/images/post/sort_algorithm/heap_sort.gif","f5f61a52a62f6f465444dd9bbdab8896"],["/images/post/sort_algorithm/insertion_sort.gif","ffda0249330d775e6fd3488f198c5c43"],["/images/post/sort_algorithm/merge_sort.gif","b99460f4173a23f9ed1be77f2f9fd224"],["/images/post/sort_algorithm/quick_sort.gif","90fb5f9dd147f5acbb04419c8c8b4ac0"],["/images/post/sort_algorithm/radix_sort.gif","fec18411fbc2bfd4617b820b73e64a96"],["/images/post/sort_algorithm/selection_sort.gif","f37e5468225dff6e2edd0d9bec3778a2"],["/images/post/sort_algorithm/shell_sort.gif","26d982ad88862f930b1b7e67ad87b37f"],["/images/post/spark_rdd/aggregate.png","cef5c31c7c45ce566177eaaeec39fb3c"],["/images/post/spark_rdd/cache.png","d3b57c0e546b238783f00aff85ae1159"],["/images/post/spark_rdd/cartesian.png","3d9b689b5a58a80396ab99683cd1891f"],["/images/post/spark_rdd/cogroup.png","9acc82b03210c9b0c935945470113b8a"],["/images/post/spark_rdd/collect.png","19303c0fd925d9f077acd8bef5064a4d"],["/images/post/spark_rdd/collect_as_map.png","49d3a8a2db62d35802c9ff7370cf427a"],["/images/post/spark_rdd/combine_by_key.png","118892c03379f84ec7dd15a278a28ac6"],["/images/post/spark_rdd/count.png","6de5273c26894c30cbb5f9228e562532"],["/images/post/spark_rdd/distinct.png","c21f288cdeec334d38ce5c01df7f6242"],["/images/post/spark_rdd/filter.png","a71139b69c93916c6f555fa0bb2f2abf"],["/images/post/spark_rdd/flat_map.png","84fa907e0f8f3eeb670020a8ace25cc5"],["/images/post/spark_rdd/fold.png","6cbb26ed65548b35bdf3f1fa85bc477b"],["/images/post/spark_rdd/foreach.png","956df932f706e765a9bd34ace04d662e"],["/images/post/spark_rdd/glom.png","0acdab0b2b940f1a01ba6f114bb28b4e"],["/images/post/spark_rdd/group_by.png","3704d85e2023936d46bbebd317f12242"],["/images/post/spark_rdd/join.png","a4e777564c959fba9ca099301dd6d0b5"],["/images/post/spark_rdd/lookup.png","edcc56a72e6bc7bd1001af68a5082250"],["/images/post/spark_rdd/map.png","12a76bb3dc442b416011269f33cd1718"],["/images/post/spark_rdd/map_partitions.png","870e206cb59358b297588caefcd0b477"],["/images/post/spark_rdd/map_values.png","5b1674e06e03564ca28d3deaa6ced1c0"],["/images/post/spark_rdd/partition_by.png","9abc8ce8a6d720ab9394fc3b26466fd5"],["/images/post/spark_rdd/persist.png","550dd2fd4006122631ce3f31be75fe0c"],["/images/post/spark_rdd/reduce.png","b81d0be31c017874efb697c49203d777"],["/images/post/spark_rdd/reduce_by_key.png","3d12aa844b4ca4c9900a406690e2283b"],["/images/post/spark_rdd/sample.png","159e525eab99ec1f0ff57c50e8e2de79"],["/images/post/spark_rdd/save_as_object_file.png","a4e6192aac5042bed3f89c3aefefebf3"],["/images/post/spark_rdd/save_as_text_file.png","296bfcbec91c30324fe6ebf8498a97c7"],["/images/post/spark_rdd/subtract.png","1ad6a2b7baa5a7c1c40c94b4cf1c8f4d"],["/images/post/spark_rdd/take_sample.png","2073df6dc8bd4234e11baafb6c71ffb1"],["/images/post/spark_rdd/union.png","2e572d295d6052dcd21b6a6c6ac38cf9"],["/images/post/visit_calendar/demo.png","217251202a89ad0cf550b89d0fcbc75f"],["/images/user/alipay.jpg","ea53ad155283ca1a09f4ece4f3f45669"],["/images/user/avatar.jpg","c555244424f8948b4f3c4e9c6cfd1367"],["/images/user/avatar.png","b2bfcff315a115d47f6dcb7bb2a86422"],["/images/user/avatar_hover.gif","8db5efdbe3f36746b18f7779c04b2d58"],["/images/user/background.png","f89ec9803019211bccd65120ac153632"],["/images/user/clock_loading.gif","b8c45314a21e9b46abcd38a3a69bd07d"],["/images/user/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/images/user/favicon.jpg","c555244424f8948b4f3c4e9c6cfd1367"],["/images/user/favicon.png","b2bfcff315a115d47f6dcb7bb2a86422"],["/images/user/loading.gif","c46411ff468982ff619a27478d7bfe0d"],["/images/user/wechat.jpg","8e4ce6df824859405415b758f8279b8a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/js/Valine.min.js","746a6655530b8c20145394f038dc4ca0"],["/js/card_clock.js","7171cbab13bb6f977f0d75f6244e5edf"],["/js/card_history.js","bfc0863faeaa21e67d32d2a0313b7330"],["/js/census.js","c4070812d4e3fdf71ed68da569c95af6"],["/js/custom.js","df33f399673f93bee218b633e0d6d8d2"],["/js/fcircle.js","f23075e5c0aba454cca73e2c83cceb79"],["/js/gitcalendar.js","9e607d4d58742a5629067f2829c3815a"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/stars.js","1901abfa4adad11ec861eb697389f83a"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/js/visit_calendar.js","d570b5fd6fde05c582ca73aa11add812"],["/js/wow_init.js","78f6fb700968a00e903bc967fa9bc10b"],["/sw-register.js","87d79eb70ecbea38fec031364724876b"]];
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
