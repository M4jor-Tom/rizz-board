// @ts-nocheck
import './App.css';
import CardList from './card-list/CardList';
import { User } from './types/user';
import { useWebSocket } from './hooks/user-hook';
import Map from './map/Map';

function App() {

  const user: User | undefined = useWebSocket("ws://localhost:8080");

  if(user === undefined) {

    return (<div>Loading...</div>);
  }
  
  // const geoServerUrl = 'https://ahocevar.com/geoserver/wfs?service=WFS&version=1.0.0&request=GetFeature&typeName=osm:water_areas&outputFormat=application/json&srsname=EPSG:4326&bbox=10.686,43.722,14.377,46.553,EPSG:4326';
  const geoServerUrl = 'https://maps-public.geo.nyu.edu/geoserver/sdr/wms?service=WFS&version=1.0.0&request=GetFeature&typeName=osm:water_areas&outputFormat=application/json&srsname=EPSG:4326&bbox=10.686,43.722,14.377,46.553,EPSG:4326';

  return (<>
    <div style={{ height: '100vh' }}>
      <Map geoServerUrl={geoServerUrl} />
    </div>
    <div className="App">
      <CardList
        user={user}
      />
    </div>
  </>);
}

export default App;
