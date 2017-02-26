var viewer = new Cesium.Viewer('cesiumContainer');

viewer.dataSources.add(Cesium.KmlDataSource.load('https://shltn.github.io/ikomagw/Ikome_cesium-starter-app-master/Source/civictechparty.kml'));

viewer.camera.flyTo({destination : Cesium.Cartesian3.fromDegrees(135.896504,34.795196, 8000.0)});
