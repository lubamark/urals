var myPlacemark, myMap;

ymaps.ready(function () {

  myMap = new ymaps.Map('yandex-map', {
      center:[55.73435,37.5875],
    zoom: 16,
    controls: []
  }, {suppressMapOpenBlock:  true},{ }
  );

  myPlacemark = new ymaps.Placemark([55.7356977, 37.5876721], {
    //balloonContent: 'улица Тимура Фрунзе, 24',
    //iconContent: 'улица Тимура Фрунзе, 24'
  },
    {
      preset: 'islands#dotIcon',
      iconColor: '#333333'
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
});
