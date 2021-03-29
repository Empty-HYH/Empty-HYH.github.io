function append (parent, text) {
  if (typeof text === 'string') {
    var temp = document.createElement('div');
    temp.innerHTML = text;
    // 防止元素太多 进行提速
    var frag = document.createDocumentFragment();
    while (temp.firstChild) {
      frag.appendChild(temp.firstChild);
    }
    parent.appendChild(frag);
  }
  else {
    parent.appendChild(text);
  }
}

function history_get_data () {
  let myDate = new Date();
  let myMonth = myDate.getMonth() + 1;
  if (myMonth < 10) {
    getMonth = "0" + String(myMonth);
  } else {
    getMonth = String(myMonth);
  }
  let getDate = String(myDate.getDate());
  if (getDate < 10) {
    getDate = "0" + String(getDate);
  } else {
    getDate = String(getDate);
  }
  let getMonthDate = "S" + getMonth + getDate;
  return ["https://cdn.jsdelivr.net/gh/Eurkon/CDN/hexo/json/history/" + getMonth + ".json", getMonthDate]
}

fetch(history_get_data()[0]).then(data => data.json()).then(data => {
  html_item = ''
  for (let item of data[history_get_data()[1]]) {
    html_item += '<div class="swiper-slide history_slide"><span class="history_slide_time">A.D.' +
      item.year + '</span>' + '<span class="history_slide_link">' + item.title + '</span></div>'
  }
  let history_container_wrapper = document.getElementById('history_container_wrapper')
  append(history_container_wrapper, html_item + '<style>.history_slide{text-align:left;font-size:14px;display:flex;flex-direction:column;align-items:flex-start;}#history-baidu > .blog-slider__pagination{display:none}.history_slide_time{color:#858585;Font-style:italic;font-weight:lighter;}</style');
  let swiper_history = new Swiper('.history_swiper-container', {
    passiveListeners: true,
    spaceBetween: 30,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },
    loop: true,
    direction: 'vertical',
    autoplay: {
      disableOnInteraction: true,
      delay: 5000
    },
    mousewheel: false,
    // autoHeight: true,
  });

  let history_comtainer = document.getElementById('history-container');
  history_comtainer.onmouseenter = function () {
    swiper_history.autoplay.stop();
  };
  history_comtainer.onmouseleave = function () {
    swiper_history.autoplay.start();
  }
})