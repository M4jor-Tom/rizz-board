import React from 'react';
import DeckGL from '@deck.gl/react';
import StaticMap from 'react-map-gl';
import { GeoJsonLayer } from '@deck.gl/layers';

// Configuration de la vue initiale
const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 5,
  pitch: 0,
  bearing: 0
};

interface MapProps {
  geoServerUrl: string;
}

const Map: React.FC<MapProps> = ({ geoServerUrl }) => {
  // Création d'une couche GeoJSON à partir de GeoServer
  const layer = new GeoJsonLayer({
    id: 'geojson-layer',
    data: geoServerUrl,
    pickable: true,
    stroked: false,
    filled: true,
    lineWidthMinPixels: 2,
    getFillColor: [160, 160, 180, 200],
    getLineColor: [0, 0, 0, 255]
  });

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={[layer]}
    >
      <StaticMap />
    </DeckGL>
  );
};

export default Map;
