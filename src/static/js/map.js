
function mapInitialize() {

	const zoomMap = 7;
	// const zoomMap = $('.zoom').val();
	const mapLat = 60.50701876576828;
	const mapLng = 5.469737642940489;
	const myLatLng = { lat: Number(mapLat), lng: Number(mapLng)};
	const mapIcon = '../static/images/general/pin.svg';
	const styledMapType = new google.maps.StyledMapType(
		[
			{
				"featureType": "all",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#444444"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [
					{
						"color": "#858585"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": "22"
					},
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "all",
				"stylers": [
					{
						"color": "#858585"
					},
					{
						"visibility": "on"
					}
				]
			}
		],
		{ name: "Styled Map" }
	);
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: Number(zoomMap),
		center: myLatLng,
		disableDefaultUI: true,

	});
	map.mapTypes.set("styled_map", styledMapType);
	map.setMapTypeId("styled_map");
	new google.maps.Marker({
		position: myLatLng,
	});
	const text = [
		{
			title: 'Bergen Stillas AS - Stillasutleie i Bergen',
			text: 'Oilfield Equipment Supplier',
			link: 'https://goo.gl/maps/ASCyucDCtKUYtwQ28',
		},
		{
			title: 'Litlås 20, 5954 Mongstad',
			text: 'Oilfield Equipment Supplier',
			link: 'https://goo.gl/maps/qiUFr95r1ynNqLFq6',
		}
	];
	const features = [
	{
		position: new google.maps.LatLng(60.39002507857367, 5.26916544239156),
		title: '<div class="map-title">'+text[0].title+'</div><div class="map-text">'+text[0].text+'</div><a class="map-link" target="_blank" href="'+text[0].link+'">Route on the map</a>',
	},
	{
		position: new google.maps.LatLng(60.74053095333124, 7.602331232208001),
		title: '<div class="map-title">'+text[1].title+'</div><div class="map-text">'+text[1].text+'</div><a class="map-link" target="_blank" href="'+text[1].link+'">Route on the map</a>',
	},
];
for (let i = 0; i < features.length; i++) {
	const marker = new google.maps.Marker({
		position: features[i].position,
		icon: mapIcon,
		map: map,
		title: features[i].title,
	});
	var infowindow = new google.maps.InfoWindow();

	google.maps.event.addListener(marker, 'click', (function (marker, i) {
		return function () {
			infowindow.setContent(
				'<div class="map-title">'+text[i].title+'</div><div class="map-text">'+text[i].text+'</div><a class="map-link" target="_blank" href="'+text[i].link+'">Route on the map</a>'
			);
			infowindow.open(map, marker);
		}

	})(marker, i));
};


}
// let map;
//
// map = new google.maps.Map(document.getElementById("map"), {
// 	center: new google.maps.LatLng(50.430211,30.496166),
// 	zoom: 13,
// });
// // var infowindow = new google.maps.InfoWindow();
// var mapIcon = 'static/images/general/pin.svg';
// map.mapTypes.set("styled_map", styledMapType);
// map.setMapTypeId("styled_map");
// const text = [
// 	{
// 		title: 'content for Marker 1',
// 		text: 'text text text text text ',
// 		link: 'https://goo.gl/maps/93szzAXtRzhob2VBA',
// 	},
// 	{
// 		title: 'content for Marker 2',
// 		text: 'text text text text text ',
// 		link: 'https://goo.gl/maps/93szzAXtRzhob2VBA',
// 	}
// ];
// const features = [
// 	{
// 		position: new google.maps.LatLng(60.39002507857367, 5.26916544239156),
// 		title: '<div class="map-title">'+text[0].title+'</div><div class="map-text">'+text[0].text+'</div><a class="map-link" target="_blank" href="'+text[0].link+'">link</a>',
// 	},
// 	{
// 		position: new google.maps.LatLng(60.74053095333124, 7.602331232208001),
// 		title: '<div class="map-title">'+text[1].title+'</div><div class="map-text">'+text[1].text+'</div><a class="map-link" target="_blank" href="'+text[1].link+'">link</a>',
// 	},
// ];
// for (let i = 0; i < features.length; i++) {
// 	const marker = new google.maps.Marker({
// 		position: features[i].position,
// 		icon: mapIcon,
// 		map: map,
// 		title: features[i].title,
// 	});
// 	var infowindow = new google.maps.InfoWindow();
//
// 	google.maps.event.addListener(marker, 'click', (function (marker, i) {
// 		return function () {
// 			infowindow.setContent(
// 				'<div class="map-title">'+text[1].title+'</div><div class="map-text">'+text[1].text+'</div><a class="map-link" target="_blank" href="'+text[1].link+'">link</a>'
// 			);
// 			infowindow.open(map, marker);
// 		}
//
// 	})(marker, i));
// };

// function mapInitialize() {
//
// 	var markers = new Array();
//
// 	var mapOptions = {
// 		zoom: 5,
// 		mapTypeId: google.maps.MapTypeId.ROADMAP,
// 		center: new google.maps.LatLng(1, 1)
// 	};
//
// 	var locations = [
// 		[new google.maps.LatLng(0, 0), 'Marker 1', 'Infowindow content for Marker 1'],
// 		[new google.maps.LatLng(0, 1), 'Marker 2', 'Infowindow content for Marker 2'],
// 		[new google.maps.LatLng(0, 2), 'Marker 3', 'Infowindow content for Marker 3'],
// 		[new google.maps.LatLng(1, 0), 'Marker 4', 'Infowindow content for Marker 4'],
// 		[new google.maps.LatLng(1, 1), 'Marker 5', 'Infowindow content for Marker 5'],
// 		[new google.maps.LatLng(1, 2), 'Marker 6', 'Infowindow content for Marker 6']
// 	];
//
// 	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
//
// 	var infowindow = new google.maps.InfoWindow();
//
// 	for (var i = 0; i < locations.length; i++) {
//
// 		// Append a link to the markers DIV for each marker
// 		$('#markers').append('<a class="marker-link" data-markerid="' + i + '" href="#">' + locations[i][1] + '</a> ');
//
// 		var marker = new google.maps.Marker({
// 			position: locations[i][0],
// 			map: map,
// 			title: locations[i][1],
// 		});
//
// 		// Register a click event listener on the marker to display the corresponding infowindow content
// 		google.maps.event.addListener(marker, 'click', (function (marker, i) {
//
// 			return function () {
// 				infowindow.setContent(locations[i][2]);
// 				infowindow.open(map, marker);
// 			}
//
// 		})(marker, i));
//
// 		// Add marker to markers array
// 		markers.push(marker);
// 	}
//
// 	// Trigger a click event on each marker when the corresponding marker link is clicked
// 	$('.marker-link').on('click', function () {
//
// 		google.maps.event.trigger(markers[$(this).data('markerid')], 'click');
// 	});
// }

