var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_googleSatelite_1 = new ol.layer.Tile({
            'title': 'google Satelite',
            'type':'base',
            'opacity': 0.824000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_NDVI_11ago_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI_11ago<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI_11ago_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8015504.085581, -4374369.518239, -7995532.176807, -4369343.886881]
        })
    });
var lyr_NDVI_24nov_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI_24nov<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI_24nov_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8015341.458937, -4373708.776447, -8000369.661765, -4369802.549349]
        })
    });
var format_Predios_4 = new ol.format.GeoJSON();
var features_Predios_4 = format_Predios_4.readFeatures(json_Predios_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Predios_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predios_4.addFeatures(features_Predios_4);
var lyr_Predios_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Predios_4, 
                style: style_Predios_4,
                popuplayertitle: 'Predios',
                interactive: true,
                title: '<img src="styles/legend/Predios_4.png" /> Predios'
            });
var format_Predio_ej_5 = new ol.format.GeoJSON();
var features_Predio_ej_5 = format_Predio_ej_5.readFeatures(json_Predio_ej_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Predio_ej_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predio_ej_5.addFeatures(features_Predio_ej_5);
var lyr_Predio_ej_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Predio_ej_5, 
                style: style_Predio_ej_5,
                popuplayertitle: 'Predio_ej',
                interactive: true,
                title: '<img src="styles/legend/Predio_ej_5.png" /> Predio_ej'
            });
var format_Agroindustrias_6 = new ol.format.GeoJSON();
var features_Agroindustrias_6 = format_Agroindustrias_6.readFeatures(json_Agroindustrias_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agroindustrias_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agroindustrias_6.addFeatures(features_Agroindustrias_6);
var lyr_Agroindustrias_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Agroindustrias_6, 
                style: style_Agroindustrias_6,
                popuplayertitle: 'Agroindustrias',
                interactive: false,
                title: '<img src="styles/legend/Agroindustrias_6.png" /> Agroindustrias'
            });
var format_APR_7 = new ol.format.GeoJSON();
var features_APR_7 = format_APR_7.readFeatures(json_APR_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APR_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APR_7.addFeatures(features_APR_7);
var lyr_APR_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APR_7, 
                style: style_APR_7,
                popuplayertitle: 'APR ',
                interactive: true,
                title: '<img src="styles/legend/APR_7.png" /> APR '
            });
var format_Localidades_8 = new ol.format.GeoJSON();
var features_Localidades_8 = format_Localidades_8.readFeatures(json_Localidades_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_8.addFeatures(features_Localidades_8);
var lyr_Localidades_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localidades_8, 
                style: style_Localidades_8,
                popuplayertitle: 'Localidades',
                interactive: false,
                title: '<img src="styles/legend/Localidades_8.png" /> Localidades'
            });
var format_CaeriasAPR_9 = new ol.format.GeoJSON();
var features_CaeriasAPR_9 = format_CaeriasAPR_9.readFeatures(json_CaeriasAPR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaeriasAPR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaeriasAPR_9.addFeatures(features_CaeriasAPR_9);
var lyr_CaeriasAPR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaeriasAPR_9, 
                style: style_CaeriasAPR_9,
                popuplayertitle: 'Cañerias APR',
                interactive: true,
                title: '<img src="styles/legend/CaeriasAPR_9.png" /> Cañerias APR'
            });
var format_Huertosfruticolas_10 = new ol.format.GeoJSON();
var features_Huertosfruticolas_10 = format_Huertosfruticolas_10.readFeatures(json_Huertosfruticolas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huertosfruticolas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huertosfruticolas_10.addFeatures(features_Huertosfruticolas_10);
var lyr_Huertosfruticolas_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huertosfruticolas_10, 
                style: style_Huertosfruticolas_10,
                popuplayertitle: 'Huertos fruticolas',
                interactive: true,
    title: 'Huertos fruticolas<br />\
    <img src="styles/legend/Huertosfruticolas_10_0.png" /> ARANDANO AMERICANO<br />\
    <img src="styles/legend/Huertosfruticolas_10_1.png" /> AVELLANO<br />\
    <img src="styles/legend/Huertosfruticolas_10_2.png" /> CEREZO<br />\
    <img src="styles/legend/Huertosfruticolas_10_3.png" /> FRAMBUESA<br />\
    <img src="styles/legend/Huertosfruticolas_10_4.png" /> KIWI<br />\
    <img src="styles/legend/Huertosfruticolas_10_5.png" /> MANZANO ROJO<br />\
    <img src="styles/legend/Huertosfruticolas_10_6.png" /> MANZANO VERDE<br />\
    <img src="styles/legend/Huertosfruticolas_10_7.png" /> MORAS CULTIVADAS E HIBRIDOS<br />\
    <img src="styles/legend/Huertosfruticolas_10_8.png" /> NOGAL<br />\
    <img src="styles/legend/Huertosfruticolas_10_9.png" /> OLIVO<br />\
    <img src="styles/legend/Huertosfruticolas_10_10.png" /> ZARZAPARRILLA ROJA<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_googleSatelite_1.setVisible(true);lyr_NDVI_11ago_2.setVisible(false);lyr_NDVI_24nov_3.setVisible(false);lyr_Predios_4.setVisible(true);lyr_Predio_ej_5.setVisible(true);lyr_Agroindustrias_6.setVisible(true);lyr_APR_7.setVisible(true);lyr_Localidades_8.setVisible(true);lyr_CaeriasAPR_9.setVisible(true);lyr_Huertosfruticolas_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_googleSatelite_1,lyr_NDVI_11ago_2,lyr_NDVI_24nov_3,lyr_Predios_4,lyr_Predio_ej_5,lyr_Agroindustrias_6,lyr_APR_7,lyr_Localidades_8,lyr_CaeriasAPR_9,lyr_Huertosfruticolas_10];
lyr_Predios_4.set('fieldAliases', {'MSLINK': 'MSLINK', 'AREA_HA': 'AREA_HA', 'ESCAINGR': 'ESCAINGR', 'FECHINGR': 'FECHINGR', 'ROL': 'ROL', 'CODICOMU': 'CODICOMU', 'DESCCOMU': 'DESCCOMU', 'CODITIROL': 'CODITIROL', 'PROPIETA': 'PROPIETA', 'NOMBPRED': 'NOMBPRED', 'SUPERFIC': 'SUPERFIC', 'RIEGO1_HA': 'RIEGO1_HA', 'RIEGO2_HA': 'RIEGO2_HA', 'RIEGO3_HA': 'RIEGO3_HA', 'RIEGO4_HA': 'RIEGO4_HA', 'SECAN1_HA': 'SECAN1_HA', 'SECAN2_HA': 'SECAN2_HA', 'SECAN3_HA': 'SECAN3_HA', 'SECAN4_HA': 'SECAN4_HA', 'SECAN5_HA': 'SECAN5_HA', 'SECAN6_HA': 'SECAN6_HA', 'SECAN7_HA': 'SECAN7_HA', 'SECAN8_HA': 'SECAN8_HA', 'CLASIFROL': 'CLASIFROL', 'DESCCLASIF': 'DESCCLASIF', 'ANOREASII': 'ANOREASII', 'ORTOIMAGEN': 'ORTOIMAGEN', 'ORTOFOTO': 'ORTOFOTO', 'LUGARBN': 'LUGARBN', 'LOTESCIR': 'LOTESCIR', 'SITIOSCIR': 'SITIOSCIR', 'OBSERVCIR': 'OBSERVCIR', 'ENLACELITE': 'ENLACELITE', 'ENLACINDAP': 'ENLACINDAP', 'GID_ORIGIN': 'GID_ORIGIN', });
lyr_Predio_ej_5.set('fieldAliases', {'MSLINK': 'MSLINK', 'AREA_HA': 'AREA_HA', 'ESCAINGR': 'ESCAINGR', 'FECHINGR': 'FECHINGR', 'ROL': 'ROL', 'CODICOMU': 'CODICOMU', 'DESCCOMU': 'DESCCOMU', 'CODITIROL': 'CODITIROL', 'PROPIETA': 'PROPIETA', 'NOMBPRED': 'NOMBPRED', 'SUPERFIC': 'SUPERFIC', 'RIEGO1_HA': 'RIEGO1_HA', 'RIEGO2_HA': 'RIEGO2_HA', 'RIEGO3_HA': 'RIEGO3_HA', 'RIEGO4_HA': 'RIEGO4_HA', 'SECAN1_HA': 'SECAN1_HA', 'SECAN2_HA': 'SECAN2_HA', 'SECAN3_HA': 'SECAN3_HA', 'SECAN4_HA': 'SECAN4_HA', 'SECAN5_HA': 'SECAN5_HA', 'SECAN6_HA': 'SECAN6_HA', 'SECAN7_HA': 'SECAN7_HA', 'SECAN8_HA': 'SECAN8_HA', 'CLASIFROL': 'CLASIFROL', 'DESCCLASIF': 'DESCCLASIF', 'ANOREASII': 'ANOREASII', 'ORTOIMAGEN': 'ORTOIMAGEN', 'ORTOFOTO': 'ORTOFOTO', 'LUGARBN': 'LUGARBN', 'LOTESCIR': 'LOTESCIR', 'SITIOSCIR': 'SITIOSCIR', 'OBSERVCIR': 'OBSERVCIR', 'ENLACELITE': 'ENLACELITE', 'ENLACINDAP': 'ENLACINDAP', 'GID_ORIGIN': 'GID_ORIGIN', });
lyr_Agroindustrias_6.set('fieldAliases', {'DESCCOMU': 'DESCCOMU', 'ROLPREDI': 'ROLPREDI', 'DESCTIEM': 'DESCTIEM', 'COMUDERE': 'COMUDERE', 'PROVDERE': 'PROVDERE', 'REGIDERE': 'REGIDERE', });
lyr_APR_7.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'COMUNA': 'COMUNA', 'COD': 'COD', 'X_UTM': 'X_UTM', 'Y_UTM': 'Y_UTM', 'NOM_REG': 'NOM_REG', 'NOMBRE_APR': 'NOMBRE_APR', 'AÃO': 'AÃO', 'EXPEDIENTE': 'EXPEDIENTE', 'QOT': 'QOT', 'TIPO': 'TIPO', 'SITUACIÃ�': 'SITUACIÃ�', 'FUENTE': 'FUENTE', 'GID_ORIGIN': 'GID_ORIGIN', });
lyr_Localidades_8.set('fieldAliases', {'REGION': 'REGION', 'NOM_REGION': 'NOM_REGION', 'PROVINCIA': 'PROVINCIA', 'NOM_PROVIN': 'NOM_PROVIN', 'COMUNA': 'COMUNA', 'NOM_COMUNA': 'NOM_COMUNA', 'DISTRITO': 'DISTRITO', 'LOCALIDAD': 'LOCALIDAD', 'NOM_LOCALI': 'NOM_LOCALI', 'ENTIDAD': 'ENTIDAD', 'NOM_ENTIDA': 'NOM_ENTIDA', 'CATEGORIA': 'CATEGORIA', 'NOM_CATEGO': 'NOM_CATEGO', 'MANZENT_I': 'MANZENT_I', 'TOTAL_PERS': 'TOTAL_PERS', 'TOTAL_VIVI': 'TOTAL_VIVI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'fam_AP': 'fam_AP', });
lyr_CaeriasAPR_9.set('fieldAliases', {'folders': 'folders', 'ID': 'ID', 'Diametro': 'Diametro', 'Material': 'Material', 'Estado': 'Estado', });
lyr_Huertosfruticolas_10.set('fieldAliases', {'ESPECIE': 'ESPECIE', 'VARIEDAD': 'VARIEDAD', 'ANO_PLANTA': 'ANO_PLANTA', 'ASOCIACION': 'ASOCIACION', 'REINJERTO': 'REINJERTO', 'SIST_PLANT': 'SIST_PLANT', 'SIST_CONDU': 'SIST_CONDU', 'NUM_HILERA': 'NUM_HILERA', 'POLINIZA': 'POLINIZA', 'DIST_ENTRE': 'DIST_ENTRE', 'DIST_SOBRE': 'DIST_SOBRE', 'NUM_ARBOL': 'NUM_ARBOL', 'SUP_BLOQUE': 'SUP_BLOQUE', 'MET_RIEGO': 'MET_RIEGO', 'MET_CONDUC': 'MET_CONDUC', 'GID_ORIGIN': 'GID_ORIGIN', 'MSLINK': 'MSLINK', 'AREA_HA': 'AREA_HA', 'ESCAINGR': 'ESCAINGR', 'FECHINGR': 'FECHINGR', 'ROL': 'ROL', 'CODICOMU': 'CODICOMU', 'DESCCOMU': 'DESCCOMU', 'CODITIROL': 'CODITIROL', 'PROPIETA': 'PROPIETA', 'NOMBPRED': 'NOMBPRED', 'SUPERFIC': 'SUPERFIC', 'RIEGO1_HA': 'RIEGO1_HA', 'RIEGO2_HA': 'RIEGO2_HA', 'RIEGO3_HA': 'RIEGO3_HA', 'RIEGO4_HA': 'RIEGO4_HA', 'SECAN1_HA': 'SECAN1_HA', 'SECAN2_HA': 'SECAN2_HA', 'SECAN3_HA': 'SECAN3_HA', 'SECAN4_HA': 'SECAN4_HA', 'SECAN5_HA': 'SECAN5_HA', 'SECAN6_HA': 'SECAN6_HA', 'SECAN7_HA': 'SECAN7_HA', 'SECAN8_HA': 'SECAN8_HA', 'CLASIFROL': 'CLASIFROL', 'DESCCLASIF': 'DESCCLASIF', 'ANOREASII': 'ANOREASII', 'ORTOIMAGEN': 'ORTOIMAGEN', 'ORTOFOTO': 'ORTOFOTO', 'LUGARBN': 'LUGARBN', 'LOTESCIR': 'LOTESCIR', 'SITIOSCIR': 'SITIOSCIR', 'OBSERVCIR': 'OBSERVCIR', 'ENLACELITE': 'ENLACELITE', 'ENLACINDAP': 'ENLACINDAP', 'GID_ORIG_1': 'GID_ORIG_1', });
lyr_Predios_4.set('fieldImages', {'MSLINK': 'TextEdit', 'AREA_HA': 'TextEdit', 'ESCAINGR': 'TextEdit', 'FECHINGR': 'Range', 'ROL': 'TextEdit', 'CODICOMU': 'Range', 'DESCCOMU': 'TextEdit', 'CODITIROL': 'Range', 'PROPIETA': 'TextEdit', 'NOMBPRED': 'TextEdit', 'SUPERFIC': 'TextEdit', 'RIEGO1_HA': 'TextEdit', 'RIEGO2_HA': 'TextEdit', 'RIEGO3_HA': 'TextEdit', 'RIEGO4_HA': 'TextEdit', 'SECAN1_HA': 'TextEdit', 'SECAN2_HA': 'TextEdit', 'SECAN3_HA': 'TextEdit', 'SECAN4_HA': 'TextEdit', 'SECAN5_HA': 'TextEdit', 'SECAN6_HA': 'TextEdit', 'SECAN7_HA': 'TextEdit', 'SECAN8_HA': 'TextEdit', 'CLASIFROL': 'TextEdit', 'DESCCLASIF': 'TextEdit', 'ANOREASII': 'Range', 'ORTOIMAGEN': 'TextEdit', 'ORTOFOTO': 'TextEdit', 'LUGARBN': 'TextEdit', 'LOTESCIR': 'TextEdit', 'SITIOSCIR': 'TextEdit', 'OBSERVCIR': 'TextEdit', 'ENLACELITE': 'TextEdit', 'ENLACINDAP': 'TextEdit', 'GID_ORIGIN': 'TextEdit', });
lyr_Predio_ej_5.set('fieldImages', {'MSLINK': 'TextEdit', 'AREA_HA': 'TextEdit', 'ESCAINGR': 'TextEdit', 'FECHINGR': 'Range', 'ROL': 'TextEdit', 'CODICOMU': 'Range', 'DESCCOMU': 'TextEdit', 'CODITIROL': 'Range', 'PROPIETA': 'TextEdit', 'NOMBPRED': 'TextEdit', 'SUPERFIC': 'TextEdit', 'RIEGO1_HA': 'TextEdit', 'RIEGO2_HA': 'TextEdit', 'RIEGO3_HA': 'TextEdit', 'RIEGO4_HA': 'TextEdit', 'SECAN1_HA': 'TextEdit', 'SECAN2_HA': 'TextEdit', 'SECAN3_HA': 'TextEdit', 'SECAN4_HA': 'TextEdit', 'SECAN5_HA': 'TextEdit', 'SECAN6_HA': 'TextEdit', 'SECAN7_HA': 'TextEdit', 'SECAN8_HA': 'TextEdit', 'CLASIFROL': 'TextEdit', 'DESCCLASIF': 'TextEdit', 'ANOREASII': 'Range', 'ORTOIMAGEN': 'TextEdit', 'ORTOFOTO': 'TextEdit', 'LUGARBN': 'TextEdit', 'LOTESCIR': 'TextEdit', 'SITIOSCIR': 'TextEdit', 'OBSERVCIR': 'TextEdit', 'ENLACELITE': 'TextEdit', 'ENLACINDAP': 'TextEdit', 'GID_ORIGIN': 'TextEdit', });
lyr_Agroindustrias_6.set('fieldImages', {'DESCCOMU': 'TextEdit', 'ROLPREDI': 'TextEdit', 'DESCTIEM': 'TextEdit', 'COMUDERE': 'TextEdit', 'PROVDERE': 'TextEdit', 'REGIDERE': 'TextEdit', });
lyr_APR_7.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'COMUNA': 'TextEdit', 'COD': 'TextEdit', 'X_UTM': 'TextEdit', 'Y_UTM': 'TextEdit', 'NOM_REG': 'TextEdit', 'NOMBRE_APR': 'TextEdit', 'AÃO': 'Range', 'EXPEDIENTE': 'TextEdit', 'QOT': 'TextEdit', 'TIPO': 'TextEdit', 'SITUACIÃ�': 'TextEdit', 'FUENTE': 'TextEdit', 'GID_ORIGIN': 'TextEdit', });
lyr_Localidades_8.set('fieldImages', {'REGION': 'TextEdit', 'NOM_REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'NOM_PROVIN': 'TextEdit', 'COMUNA': 'TextEdit', 'NOM_COMUNA': 'TextEdit', 'DISTRITO': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'NOM_LOCALI': 'TextEdit', 'ENTIDAD': 'TextEdit', 'NOM_ENTIDA': 'TextEdit', 'CATEGORIA': 'TextEdit', 'NOM_CATEGO': 'TextEdit', 'MANZENT_I': 'TextEdit', 'TOTAL_PERS': 'TextEdit', 'TOTAL_VIVI': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'fam_AP': 'TextEdit', });
lyr_CaeriasAPR_9.set('fieldImages', {'folders': 'TextEdit', 'ID': 'TextEdit', 'Diametro': 'TextEdit', 'Material': 'TextEdit', 'Estado': 'TextEdit', });
lyr_Huertosfruticolas_10.set('fieldImages', {'ESPECIE': 'TextEdit', 'VARIEDAD': 'TextEdit', 'ANO_PLANTA': 'TextEdit', 'ASOCIACION': 'TextEdit', 'REINJERTO': 'TextEdit', 'SIST_PLANT': 'TextEdit', 'SIST_CONDU': 'TextEdit', 'NUM_HILERA': 'TextEdit', 'POLINIZA': 'TextEdit', 'DIST_ENTRE': 'TextEdit', 'DIST_SOBRE': 'TextEdit', 'NUM_ARBOL': 'TextEdit', 'SUP_BLOQUE': 'TextEdit', 'MET_RIEGO': 'TextEdit', 'MET_CONDUC': 'TextEdit', 'GID_ORIGIN': 'TextEdit', 'MSLINK': 'TextEdit', 'AREA_HA': 'TextEdit', 'ESCAINGR': 'TextEdit', 'FECHINGR': 'Range', 'ROL': 'TextEdit', 'CODICOMU': 'Range', 'DESCCOMU': 'TextEdit', 'CODITIROL': 'Range', 'PROPIETA': 'TextEdit', 'NOMBPRED': 'TextEdit', 'SUPERFIC': 'TextEdit', 'RIEGO1_HA': 'TextEdit', 'RIEGO2_HA': 'TextEdit', 'RIEGO3_HA': 'TextEdit', 'RIEGO4_HA': 'TextEdit', 'SECAN1_HA': 'TextEdit', 'SECAN2_HA': 'TextEdit', 'SECAN3_HA': 'TextEdit', 'SECAN4_HA': 'TextEdit', 'SECAN5_HA': 'TextEdit', 'SECAN6_HA': 'TextEdit', 'SECAN7_HA': 'TextEdit', 'SECAN8_HA': 'TextEdit', 'CLASIFROL': 'TextEdit', 'DESCCLASIF': 'TextEdit', 'ANOREASII': 'Range', 'ORTOIMAGEN': 'TextEdit', 'ORTOFOTO': 'TextEdit', 'LUGARBN': 'TextEdit', 'LOTESCIR': 'TextEdit', 'SITIOSCIR': 'TextEdit', 'OBSERVCIR': 'TextEdit', 'ENLACELITE': 'TextEdit', 'ENLACINDAP': 'TextEdit', 'GID_ORIG_1': 'TextEdit', });
lyr_Predios_4.set('fieldLabels', {'MSLINK': 'no label', 'AREA_HA': 'inline label - always visible', 'ESCAINGR': 'no label', 'FECHINGR': 'no label', 'ROL': 'inline label - always visible', 'CODICOMU': 'no label', 'DESCCOMU': 'no label', 'CODITIROL': 'no label', 'PROPIETA': 'inline label - always visible', 'NOMBPRED': 'inline label - always visible', 'SUPERFIC': 'inline label - always visible', 'RIEGO1_HA': 'no label', 'RIEGO2_HA': 'no label', 'RIEGO3_HA': 'no label', 'RIEGO4_HA': 'no label', 'SECAN1_HA': 'no label', 'SECAN2_HA': 'no label', 'SECAN3_HA': 'no label', 'SECAN4_HA': 'no label', 'SECAN5_HA': 'no label', 'SECAN6_HA': 'no label', 'SECAN7_HA': 'no label', 'SECAN8_HA': 'no label', 'CLASIFROL': 'no label', 'DESCCLASIF': 'no label', 'ANOREASII': 'no label', 'ORTOIMAGEN': 'no label', 'ORTOFOTO': 'no label', 'LUGARBN': 'no label', 'LOTESCIR': 'no label', 'SITIOSCIR': 'no label', 'OBSERVCIR': 'no label', 'ENLACELITE': 'no label', 'ENLACINDAP': 'no label', 'GID_ORIGIN': 'no label', });
lyr_Predio_ej_5.set('fieldLabels', {'MSLINK': 'no label', 'AREA_HA': 'inline label - always visible', 'ESCAINGR': 'no label', 'FECHINGR': 'no label', 'ROL': 'inline label - always visible', 'CODICOMU': 'no label', 'DESCCOMU': 'no label', 'CODITIROL': 'no label', 'PROPIETA': 'inline label - always visible', 'NOMBPRED': 'no label', 'SUPERFIC': 'inline label - always visible', 'RIEGO1_HA': 'no label', 'RIEGO2_HA': 'no label', 'RIEGO3_HA': 'no label', 'RIEGO4_HA': 'no label', 'SECAN1_HA': 'no label', 'SECAN2_HA': 'no label', 'SECAN3_HA': 'no label', 'SECAN4_HA': 'no label', 'SECAN5_HA': 'no label', 'SECAN6_HA': 'no label', 'SECAN7_HA': 'no label', 'SECAN8_HA': 'no label', 'CLASIFROL': 'no label', 'DESCCLASIF': 'no label', 'ANOREASII': 'no label', 'ORTOIMAGEN': 'no label', 'ORTOFOTO': 'no label', 'LUGARBN': 'no label', 'LOTESCIR': 'no label', 'SITIOSCIR': 'no label', 'OBSERVCIR': 'no label', 'ENLACELITE': 'no label', 'ENLACINDAP': 'no label', 'GID_ORIGIN': 'no label', });
lyr_Agroindustrias_6.set('fieldLabels', {'DESCCOMU': 'no label', 'ROLPREDI': 'no label', 'DESCTIEM': 'no label', 'COMUDERE': 'no label', 'PROVDERE': 'no label', 'REGIDERE': 'no label', });
lyr_APR_7.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'COMUNA': 'no label', 'COD': 'no label', 'X_UTM': 'no label', 'Y_UTM': 'no label', 'NOM_REG': 'no label', 'NOMBRE_APR': 'inline label - always visible', 'AÃO': 'no label', 'EXPEDIENTE': 'no label', 'QOT': 'no label', 'TIPO': 'no label', 'SITUACIÃ�': 'no label', 'FUENTE': 'no label', 'GID_ORIGIN': 'no label', });
lyr_Localidades_8.set('fieldLabels', {'REGION': 'no label', 'NOM_REGION': 'no label', 'PROVINCIA': 'no label', 'NOM_PROVIN': 'no label', 'COMUNA': 'no label', 'NOM_COMUNA': 'no label', 'DISTRITO': 'no label', 'LOCALIDAD': 'no label', 'NOM_LOCALI': 'inline label - always visible', 'ENTIDAD': 'no label', 'NOM_ENTIDA': 'no label', 'CATEGORIA': 'no label', 'NOM_CATEGO': 'no label', 'MANZENT_I': 'no label', 'TOTAL_PERS': 'inline label - always visible', 'TOTAL_VIVI': 'inline label - always visible', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'fam_AP': 'no label', });
lyr_CaeriasAPR_9.set('fieldLabels', {'folders': 'no label', 'ID': 'no label', 'Diametro': 'inline label - always visible', 'Material': 'inline label - always visible', 'Estado': 'inline label - always visible', });
lyr_Huertosfruticolas_10.set('fieldLabels', {'ESPECIE': 'inline label - always visible', 'VARIEDAD': 'inline label - always visible', 'ANO_PLANTA': 'inline label - always visible', 'ASOCIACION': 'inline label - always visible', 'REINJERTO': 'no label', 'SIST_PLANT': 'no label', 'SIST_CONDU': 'no label', 'NUM_HILERA': 'no label', 'POLINIZA': 'no label', 'DIST_ENTRE': 'no label', 'DIST_SOBRE': 'no label', 'NUM_ARBOL': 'inline label - always visible', 'SUP_BLOQUE': 'no label', 'MET_RIEGO': 'inline label - always visible', 'MET_CONDUC': 'no label', 'GID_ORIGIN': 'no label', 'MSLINK': 'no label', 'AREA_HA': 'no label', 'ESCAINGR': 'no label', 'FECHINGR': 'no label', 'ROL': 'no label', 'CODICOMU': 'no label', 'DESCCOMU': 'no label', 'CODITIROL': 'no label', 'PROPIETA': 'no label', 'NOMBPRED': 'no label', 'SUPERFIC': 'no label', 'RIEGO1_HA': 'no label', 'RIEGO2_HA': 'no label', 'RIEGO3_HA': 'no label', 'RIEGO4_HA': 'no label', 'SECAN1_HA': 'no label', 'SECAN2_HA': 'no label', 'SECAN3_HA': 'no label', 'SECAN4_HA': 'no label', 'SECAN5_HA': 'no label', 'SECAN6_HA': 'no label', 'SECAN7_HA': 'no label', 'SECAN8_HA': 'no label', 'CLASIFROL': 'no label', 'DESCCLASIF': 'no label', 'ANOREASII': 'no label', 'ORTOIMAGEN': 'no label', 'ORTOFOTO': 'no label', 'LUGARBN': 'no label', 'LOTESCIR': 'no label', 'SITIOSCIR': 'no label', 'OBSERVCIR': 'no label', 'ENLACELITE': 'no label', 'ENLACINDAP': 'no label', 'GID_ORIG_1': 'no label', });
lyr_Huertosfruticolas_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});