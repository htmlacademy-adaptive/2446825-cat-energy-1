ymaps.ready(init);
            function init() {
              var myMap = new ymaps.Map("map", {
                center: [59.938631, 30.323037],
                zoom: 14
              }, {
                searchControlProvider: 'yandex#search'
              });
              var myPlacemark = new ymaps.Placemark([59.938631, 30.323037], null, {
                iconLayout: 'default#image',
                iconImageHref: "img/map/map-pin.svg",
                iconImageSize: [57, 53],
                iconImageOffset: [-29, -53]
              });
              myMap.geoObjects.add(myPlacemark);
            }
