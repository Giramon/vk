ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [56.1553, 61.4313],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });
    var geolocation = ymaps.geolocation;
 
    geolocation.get({
    
        provider: 'yandex',
        
        mapStateAutoApply: true,
        
        autoReverseGeocode: true
    }).then(function (result) {
 
        
        myMap.geoObjects.add(result.geoObjects);
 
        var address = result.geoObjects.get(0).properties.get('text');
        document.getElementById('address').innerText = address;
 
        
        console.log(result.geoObjects.get(0).properties.get('metaDataProperty'));
 
    });
   
    }
