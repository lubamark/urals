var myPlacemark, myMap;
var map = 'yandex-map';
var address = 'Улица Тимура Фрунзе, 24';

if(!document.getElementById(map)) {
  map = 'yandex-map--en';
  address = 'Timura Frunze Street, 24';
}


ymaps.ready(function () {

  myMap = new ymaps.Map(map, {
    center:[55.7347977, 37.5876721],
    zoom: 17,
    controls: []
  }, {suppressMapOpenBlock:  true},{ }
  );

  myPlacemark = new ymaps.Placemark([55.7356977, 37.5876721],{
      iconContent: address,
    },
    {
      preset: 'islands#blackStretchyIcon',
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    myMap.behaviors.disable('drag');
  }
});
