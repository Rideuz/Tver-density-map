var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: 'Плотность населения',
                interactive: true,
    title: 'Плотность населения<br />\
    <img src="styles/legend/_0_0.png" /> 2,1 - 7,3<br />\
    <img src="styles/legend/_0_1.png" /> 7,3 - 14,4<br />\
    <img src="styles/legend/_0_2.png" /> 14,4 - 49,9<br />\
    <img src="styles/legend/_0_3.png" /> 49,9 - 661<br />\
    <img src="styles/legend/_0_4.png" /> 661 - 2706,2<br />' });

lyr__0.setVisible(true);
var layersList = [lyr__0];
lyr__0.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr_count': 'addr_count', 'addr_regio': 'addr_regio', 'admin_leve': 'admin_leve', 'boundary': 'boundary', 'name': 'name', 'name_ca': 'name_ca', 'name_en': 'name_en', 'name_lt': 'name_lt', 'name_ru': 'name_ru', 'name_uk': 'name_uk', 'official_s': 'official_s', 'oktmo_user': 'oktmo_user', 'type': 'type', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', 'name_pl': 'name_pl', 'old_name': 'old_name', 'alt_name': 'alt_name', 'name_zh': 'name_zh', 'addr_distr': 'addr_distr', 'name_de': 'name_de', 'area_km2': 'area_km2', 'pop_densit': 'pop_densit', 'Population_population': 'Population_population', });
lyr__0.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'addr_count': 'TextEdit', 'addr_regio': 'TextEdit', 'admin_leve': 'TextEdit', 'boundary': 'TextEdit', 'name': 'TextEdit', 'name_ca': 'TextEdit', 'name_en': 'TextEdit', 'name_lt': 'TextEdit', 'name_ru': 'TextEdit', 'name_uk': 'TextEdit', 'official_s': 'TextEdit', 'oktmo_user': 'TextEdit', 'type': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', 'name_pl': 'TextEdit', 'old_name': 'TextEdit', 'alt_name': 'TextEdit', 'name_zh': 'TextEdit', 'addr_distr': 'TextEdit', 'name_de': 'TextEdit', 'area_km2': '', 'pop_densit': '', 'Population_population': 'TextEdit', });
lyr__0.set('fieldLabels', {'fid': 'hidden field', 'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'addr_count': 'hidden field', 'addr_regio': 'hidden field', 'admin_leve': 'hidden field', 'boundary': 'hidden field', 'name': 'inline label - always visible', 'name_ca': 'hidden field', 'name_en': 'hidden field', 'name_lt': 'hidden field', 'name_ru': 'hidden field', 'name_uk': 'hidden field', 'official_s': 'hidden field', 'oktmo_user': 'hidden field', 'type': 'hidden field', 'wikidata': 'hidden field', 'wikipedia': 'hidden field', 'name_pl': 'hidden field', 'old_name': 'hidden field', 'alt_name': 'hidden field', 'name_zh': 'hidden field', 'addr_distr': 'hidden field', 'name_de': 'hidden field', 'area_km2': 'hidden field', 'pop_densit': 'inline label - always visible', 'Population_population': 'hidden field', });
lyr__0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});