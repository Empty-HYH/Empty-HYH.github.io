var start_date = '20210101' // 开始日期
var date = new Date();
var end_date = date.getFullYear() + (date.getMonth() > 8 ? (date.getMonth() + 1) : ("0" + (date.getMonth() + 1))) + (date.getDate() > 9 ? date.getDate() : ("0" + date.getDate())); // 结束日期
var access_token = '121.777f81bf1db4cc8da3aee9337969b587.YQiJGmUJsP4SLUC4R956Igis_O0hzsiCsfT91Yp.wA6FeA' // accessToken
var site_id = '16265874' // 网址id
var data_url = 'https://baidu-tongji-api.vercel.app/api?access_token=' + access_token + '&site_id=' + site_id
var metrics = 'pv_count' // 统计访问次数 PV 填写 'pv_count'，统计访客数 UV 填写 'visitor_count'，二选一
var metricsName = (metrics === 'pv_count' ? '访问次数' : (metrics === 'visitor_count' ? '访客数' : ''))

// 访问次数（PV）地图
function mapChart () {
  let script = document.createElement("script")
  let param_url = '&start_date=' + start_date + '&end_date=' + end_date + '&metrics=' + metrics + '&method=visit/district/a';
  fetch(data_url + param_url).then(data => data.json()).then(data => {
    let mapName = data.result.items[0]
    let mapValue = data.result.items[1]
    let mapArr = []
    let max = mapValue[0][0]
    for (let i = 0; i < mapName.length; i++) {
      mapArr.push({ name: mapName[i][0].name, value: mapValue[i][0] })
    }
    let mapArrJson = JSON.stringify(mapArr)
    script.innerHTML = `
      var mapChart = echarts.init(document.getElementById('map-chart'), 'light');
      var mapOption = {
        textStyle: {
          color: '#FFF'
        },
        title: {
          text: '博客访问来源地图',
          x: 'center',
          textStyle: {
            color: '#FFF'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          min: 0,
          max: ${max},
          left: 'left',
          top: 'bottom',
          text: ['高','低'],
          color: ['#1E90FF', '#AAFAFA'],
          textStyle: {
            color: '#FFF'
          },
          calculable: true
        },
        series: [{
          name: '${metricsName}',
          type: 'map',
          mapType: 'china',
          showLegendSymbol: false,
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#111',
              borderColor: '#20232a'
            },
            emphasis: {
              areaColor: 'gold'
            }
          },
          data: ${mapArrJson}
          }]
        };
      mapChart.setOption(mapOption);
      window.addEventListener("resize", () => { 
        mapChart.resize();
      });`
    document.getElementById('map-chart').after(script);
  }).catch(function (error) {
    console.log(error);
  });
}

// 访问次数（PV）月份趋势
function trendsChart () {
  let script = document.createElement("script")
  let param_url = '&start_date=' + start_date + '&end_date=' + end_date + '&metrics=' + metrics + '&method=trend/time/a&gran=month'
  fetch(data_url + param_url)
    .then(data => data.json())
    .then(data => {
      let monthArr = []
      let monthValueArr = []
      let monthName = data.result.items[0]
      let monthValue = data.result.items[1]
      for (let i = Math.min(monthName.length, 12) - 1; i >= 0; i--) {
        monthArr.push(monthName[i][0].substring(0, 7).replace('/', '-'))
        if (monthValue[i][0] !== '--') {
          monthValueArr.push(monthValue[i][0])
        } else {
          monthValueArr.push(null)
        }
      }
      let monthArrJson = JSON.stringify(monthArr)
      let monthValueArrJson = JSON.stringify(monthValueArr)
      script = `
        var trendsChart = echarts.init(document.getElementById('trends-chart'), 'light');
        var trendsOption = {
          textStyle: {
            color: '#FFF'
          },
          title: {
            text: '博客访问统计图',
            x: 'center',
            textStyle: {
              color: '#FFF'
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            name: '日期',
            type: 'category',
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#FFF'
              }
            },
            data: ${monthArrJson}
          },
          yAxis: {
            name: '${metricsName}',
            type: 'value',
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#FFF'
              }
            }
          },
          series: [{
            name: '${metricsName}',
            type: 'line',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            itemStyle: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(128, 255, 165)'
              },
              {
                offset: 1,
                color: 'rgba(1, 191, 236)'
              }])
            },
            areaStyle: {
              opacity: 1,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(128, 255, 165)'
              }, {
                offset: 1,
                color: 'rgba(1, 191, 236)'
              }])
            },
            data: ${monthValueArrJson},
            markLine: {
              data: [{
                name: '平均值',
                type: 'average'
              }]
            }
          }]
        };
        trendsChart.setOption(trendsOption);
        window.addEventListener("resize", () => { 
          trendsChart.resize();
        });`
      document.getElementById('trends-chart').after(script);
    }).catch(function (error) {
      console.log(error);
    });
}

// 访问次数（PV）来源
function sourcesChart () {
  let script = document.createElement("script")
  let param_url = '&start_date=' + start_date + '&end_date=' + end_date + '&metrics=' + metrics + '&method=source/all/a';
  fetch(data_url + param_url)
    .then(data => data.json())
    .then(data => {
      monthArr = [];
      let sourcesName = data.result.items[0]
      let sourcesValue = data.result.items[1]
      let sourcesArr = []
      for (let i = 0; i < sourcesName.length; i++) {
        sourcesArr.push({ name: sourcesName[i][0].name, value: sourcesValue[i][0] })
      }
      let sourcesArrJson = JSON.stringify(sourcesArr)
      script = `
        var sourcesChart = echarts.init(document.getElementById('sources-chart'), 'light');
        var sourcesOption = {
          textStyle: {
            color: '#FFF'
          },
          title: {
            text: '博客访问来源统计图',
            x: 'center',
            textStyle: {
              color: '#FFF'
            }
          },
          legend: {
            top: 'bottom',
            textStyle: {
              color: '#FFF'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          series: [{
            name: '${metricsName}',
            type: 'pie',
            radius: [30, 80],
            center: ['50%', '50%'],
            roseType: 'area',
            label: {
              formatter: "{b} : {c} ({d}%)"
            },
            data: ${sourcesArrJson},
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(255, 255, 255, 0.5)'
              }
            }
          }]
        };
        sourcesChart.setOption(sourcesOption);
        window.addEventListener("resize", () => { 
          sourcesChart.resize();
        });`
      document.getElementById('sources-chart').after(script);
    }).catch(function (error) {
      console.log(error);
    });
}

if (document.getElementById('map-chart')) mapChart()
if (document.getElementById('trends-chart')) trendsChart()
if (document.getElementById('sources-chart')) sourcesChart()