var viewer = new Cesium.Viewer('cesiumContainer');

viewer.dataSources.add(Cesium.KmlDataSource.load('https://shltn.github.io/wazuka_wikipediatown/wazuka_cesium-starter-app-master/Source/wazuka_wikipediatown.kml'));

viewer.camera.flyTo({destination : Cesium.Cartesian3.fromDegrees(135.896504,34.795196, 8000.0)});
