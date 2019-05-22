Ext.require([
    'Ext.container.Container',
    'Ext.panel.Panel',
    'Ext.grid.Panel',
    'Ext.grid.filters.Filters',
    'GeoExt.component.Map',
    'GeoExt.data.store.Features',
    'GeoExt.toolbar.WfsPaging'
]);

var olMap;
var gridWest;
var featStore;

Ext.application({
    name: 'FeatureGridWithPaging',
    launch: function() {

        // vector layer holding the WFS features
        var wfsLayer = new ol.layer.Vector({
            sortBy: 'NAME',
            startIndex: 0,
            count: 10,
            source: new ol.source.Vector({
                format: new ol.format.GeoJSON({
                    featureProjection: 'EPSG:3857'
                }),
                url: function() {
                    var url = 'https://maps.dwd.de/geoserver/dwd/ows?';
                    var params = 'service=WFS&' +
                        'version=2.0.0&' +
                        'request=GetFeature&' +
                        'typeName=dwd:Warngebiete_Kreise&' +
                        'outputFormat=application/json&' +
                        'sortBy=' + wfsLayer.get('sortBy') + '&' +
                        'startIndex=' + wfsLayer.get('startIndex') + '&' +
                        'count=' + wfsLayer.get('count');

                    return url + params;
                }
            }),
            style: new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(255, 255, 0, 1.0)',
                    width: 2
                })
            })
        });

        // create feature store by passing a layer
        featStore = Ext.create('GeoExt.data.store.Features', {
            model: 'GeoExt.data.model.Feature',
            layer: wfsLayer,
            passThroughFilter: true
        });

        // create the feature grid
        gridWest = Ext.create('Ext.grid.Panel', {
            title: 'Feature Grid with selection',
            width: 500,
            border: true,
            region: 'west',
            store: featStore,
            columns: [
                {
                    text: 'Cell ID',
                    dataIndex: 'WARNCELLID',
                    flex: 1,
                    filter: {
                        type: 'list'
                    }
                },
                {
                    text: 'Name',
                    dataIndex: 'NAME',
                    flex: 2,
                    filter: {
                        type: 'string'
                    }
                }
            ],
            bbar: {
                xtype: 'gx_wfspaging_toolbar',
                displayInfo: true
            }
        });

        olMap = new ol.Map({
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.TileWMS({
                        url: 'https://ows.terrestris.de/osm-gray/service',
                        params: {'LAYERS': 'OSM-WMS', 'TILED': true},
                        attributions: [new ol.Attribution({
                            html: '<a href="https://www.openstreetmap.org/' +
                            'copyright">OpenStreetMap contributors</a>'
                        })]
                    })
                }),
                wfsLayer
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([8, 50]),
                zoom: 5
            })
        });

        var mapComponent = Ext.create('GeoExt.component.Map', {
            map: olMap
        });
        var mapPanel = Ext.create('Ext.panel.Panel', {
            region: 'center',
            height: 400,
            layout: 'fit',
            items: [mapComponent]
        });
        var description = Ext.create('Ext.panel.Panel', {
            contentEl: 'description',
            region: 'north',
            title: 'Description',
            height: 120,
            border: false,
            bodyPadding: 5,
            autoScroll: true
        });
        Ext.create('Ext.Viewport', {
            layout: 'border',
            items: [description, mapPanel, gridWest]
        });
    }
});
