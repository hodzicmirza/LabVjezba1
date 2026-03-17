import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import Stroke from 'ol/style/Stroke';
import Style from 'ol/style/Style';
const jsonURL = '/bosnia.geojson'

const ispisiGranice = new VectorLayer({
    source: new VectorSource({
      url: jsonURL,
      format: new GeoJSON(),
    }),
    style: new Style({
      stroke: new Stroke({
        color: 'black', // Boja granice
        width: 1,
      }),
    }),
  });
  
  export default ispisiGranice;
