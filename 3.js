ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [55.15, 61.43],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });
    var geolocation = ymaps.geolocation;
    var searchControl = new ymaps.control.SearchControl({
    options: {
    // Будет производиться поиск по топонимам и организациям.
    provider: 'yandex#search'
   }
   var searchControl = new ymaps.control.SearchControl({
    options: {
        provider: 'yandex#map'
    }
});  
});
myMap.controls.add(searchControl);
 
    geolocation.get({
    
        provider: 'yandex',
        
        mapStateAutoApply: true,
        
        autoReverseGeocode: true
    }).then (function (result) {
 
        
        myMap.geoObjects.add(result.geoObjects);
 
        var address = result.geoObjects.get(0).properties.get('text');
        document.getElementById('address').innerText = address;
 
        
        console.log(result.geoObjects.get(0).properties.get('metaDataProperty'));
 
    });
   
    }
