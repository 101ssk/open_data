var map;
var marker[];
var infoWindow[];
var shelter = [
  {
    name: '木更津第一小学校':,
    lat: 35.384823,
    lng: 139.924227
  }, {
    name: '木更津第二小学校',
    lat: 35.375813,
    lng: 139.92816
  }, {
    name:'東清小学校',
    lat: 35.389467,
    lng: 139.983403
  }, {
    name:'西清小学校',
    lat: 35.387589,
    lng: 139.938359
  }, {
    name: '南清小学校',
    lat: 35.373098,
    lng: 139.969507
  }, {
    name: '清見台小学校',
    lat: 35.381513,
    lng: 139.950744
  }, {
    name: '岩根小学校',
    lat: 35.407484,
    lng: 139.927244
  }, {
    name: '高柳小学校',
    lat: 35.41193,
    lng: 139.94813
  }, {
    name: '八幡台小学校',
    lat: 35.340877,
    lng: 139.948204
  }, {
    name:'金田小学校',
    lat: 35.425614,
    lng: 139.926386
  }, {
    name: '馬来田小学校',
    lat: 35.369083,
    lng: 139.068304
  }, {
    name: '富岡小学校',
    lat: 35.353628,
    lng: 139.039367
  }, {
    name: '祇園小学校',
    lat: 35.38649,
    lng: 139.959062
  }, {
    name: '畑沢小学校',
    lat: 35.342129,
    lng: 139.903824
  }, {
    name: '請西小学校',
    lat: 35.374939,
    lng: 139.9441
  }, {
    name: '真舟小学校',
    lat: 35.362346,
    lng: 139.93532
  }, {
    name: '木更津第一中学校',
    lat: 35.385904,
    lng: 139.92454
  }, {
    name: '木更津第二中学校',
    lat: 35.372811,
    lng: 139.937708
  }, {
    name: '木更津第三中学校',
    lat: 35.388481,
    lng: 139.944755
  }, {
    name: '岩根中学校',
    lat: 35.412319,
    lng: 139.944697
  }, {
    name: '岩根西中学校',
    lat: 35.413611,
    lng: 139.923916
  }, {
    name: '太田中学校',
    lat: 35.378066,
    lng: 139.948785
  }, {
    name: '畑沢中学校',
    lat: 35.348012,
    lng: 139.914347
  }, {
    name: '波岡中学校',
    lat: 35.341046,
    lng: 139.929827
  }, {
    name: '鎌足中学校',
    lat: 35.34852,
    lng: 139.973449
  }, {
    name: '金田中学校',
    lat: 35.427367,
    lng: 139.926255
  }, {
    name: '中郷中学校',
    lat: 35.402471,
    lng: 139.986778
  }, {
    name: '清川中学校',
    lat: 35.385298,
    lng: 139.970931
  }, {
    name: '富来田中学校',
    lat: 35.368746,
    lng: 140.066087
  }, {
     name: '中央公民館',
     lat: 35.381119,
     lng: 139.924957
   },{
     name: '文京公民館',
     lat: 35.377058,
     lng: 139.928407
   },{
     name: '八幡台公民館',
     lat: 35.341605,
     lng: 139.951251
   },{
     lng: 139.984333
   },{
     name: '鎌足公民館',
     lat: 35.349684,
     lng: 139.976879
   },{
     name: '中郷公民館',
     lat: 35.405584,
     lng: 139.970378
   },{
     name: '富来田公民館',
     lat: 35.366771,
     lng: 140.060574
   },{
     name: '岩根公民館',
     lat: 35.411966,
     lng: 139.941292
   },{
     name: '金田公民館',
     lat: 35.433449,
     lng: 139.926249
   },{
     name: '清見台公民館',
     lat: 35.379979,
     lng: 139.959243
   },{
     name: '畑沢公民館',
     lat: 35.347687,
     lng: 139.912842
   },{
     name: '畑沢公民館',
     lat: 35.347687,
     lng: 139.912842
   },{
     name: '岩根西公民館',
     lat: 35.40885,
     lng: 139.920742
   },{
     name: '富岡公民館',
     lat: 35.35817,
     lng: 140.041653
   },{
     name: '西清川公民館',
     lat: 35.390922,
     lng: 139.945077
   },{
     name: '波岡公民館',
     lat: 35.344945,
     lng: 139.935927
   },{
     name: '桜井公民館',
     lat: 35.365653,
     lng: 139.921314
   },{
     name: '市民体育館',
     lat: 35.375838,
     lng: 139.921999
   },{
     name: '木更津東高等学校',
     lat: 35.382784,
     lng: 139.930646
   },{
     name: '拓殖大学紅陵高等学校',
     lat: 35.363523,
     lng: 139.928153
   },{
     name: '志学館中等部・高等部',
     lat: 35.355089,
     lng: 139.931818
   },{
     name: '木更津工業高等専門学校',
     lat: 35.385615,
     lng: 139.962054
   },{
     name: '木更津総合高等学校',
     lat: 35.37558,
     lng: 139.958119
   },{
     name: '清和大学短期大学部',
     lat: 35.375222,
     lng: 139.956585
   }
];

function initMap(){
  var mapLatLng = new google.maps.LatLng({lat: shelter[0]['lat'], lng: shelter[0]['lng']});
	map = new google.maps.Map(document.getElementById('map'), {
		center: mapLatLng,
		zoom: 15
	});
  for (var i = 0; i < shelter.length; i++) {
    markerLatLng = new google.maps.LatLng({lat: shelter[i]['lat'], lng: shelter[i]['lng']});
    marker[i] = new google.maps.Marker({
      position: markerLatLng,
      map: map
    });

    infoWindow[i] = new google.maps.InfoWindow({
      content: '<div class="map">' + shelter[i]['name'] + '</div>'
    });
    markerEvent(i);
  }
}
function markerEvent(i) {
  marker[i].addListener('click', function() {
    infoWindow[i].open(map, marker[i]);
  });
}
