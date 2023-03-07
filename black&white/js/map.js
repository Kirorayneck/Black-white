var addmap = false;

$(window).scroll(function () {
  var el  = $('.map');
  if ($(this).scrollTop() > el.offset().top - 800) {
    if (addmap) return;
    addmap = true;
    var script = document.createElement('script');
    script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Adb62a6a6b0228c0189c4c887448db4e3abe2dd682b017d2a6ad971c4b9bfa554&amp;width=100%25&amp;height=460&amp;lang=ru_RU&amp;scroll=false";
    el.append(script);
  }
});
