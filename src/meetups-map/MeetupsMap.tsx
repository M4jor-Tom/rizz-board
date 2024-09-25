import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { TileWMS } from 'ol/source';
import { User } from '../types/user';

export function MeetupsMap(user: User) {

  const geoServerURL = 'http://your-geoserver-url/geoserver/wms';

  const map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      new TileLayer({
        source: new TileWMS({
          url: geoServerURL,
          params: {
            'LAYERS': 'your-workspace:your-layer',
            'TILED': true,
          },
          serverType: 'geoserver',
        }),
      }),
    ],
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });
  
  const mapStyles: React.CSSProperties = {
    width: '100%',
    height: '500px',
  };

  return (
    <><div id="map" style={mapStyles}></div></>
  )
}
