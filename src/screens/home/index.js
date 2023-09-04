import { useContext, useEffect } from 'react';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';

import * as S from './styles';
import { AuthContext } from '../../context/auth';
import { Header } from '../../components/header';
import WebSocketManager from '../../utils/webSocket';

//teste
const LOCATION_TRACKING = 'location-tracking';
var l1;
var l2;

export default function Home() {
  const { name, locationEnabled, handleLocationEnabled } =
    useContext(AuthContext);

  // location
  const startLocationTracking = async () => {
    await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
      accuracy: Location.Accuracy.Highest,
      timeInterval: 2000,
      distanceInterval: 0,
    });

    const hasStarted = await Location.hasStartedLocationUpdatesAsync(
      LOCATION_TRACKING
    );
    console.log('hasStarted', hasStarted);
    handleLocationEnabled({ locationStatus: true });
  };

  const startLocation = () => {
    startLocationTracking();
  };

  const stopLocation = () => {
    handleLocationEnabled({ locationStatus: false });
    TaskManager.isTaskRegisteredAsync(LOCATION_TRACKING).then((tracking) => {
      if (tracking) {
        Location.stopLocationUpdatesAsync(LOCATION_TRACKING);
      }
    });
  };
  // location

  useEffect(() => {
    const config = async () => {
      let foreground = await Location.requestForegroundPermissionsAsync();
      let background = await Location.requestBackgroundPermissionsAsync();
      if (foreground.status != 'granted' && background.status !== 'granted') {
        console.log('Permission to access location was denied');
      } else {
        console.log('Permission to access location granted');
      }
    };

    config();
  }, []);

  return (
    <S.Container>
      <Header title="Home" screen="Home" />

      {locationEnabled ? (
        <S.EndButton>
          <S.EndText onPress={stopLocation}>Parar de receber</S.EndText>
        </S.EndButton>
      ) : (
        <S.StartButton>
          <S.StartText onPress={startLocation}>
            Receber Ordens de Serviço
          </S.StartText>
        </S.StartButton>
      )}
    </S.Container>
  );
}

TaskManager.defineTask(LOCATION_TRACKING, async ({ data, error }) => {
  if (error) {
    console.log('LOCATION_TRACKING task ERROR:', error);
    return;
  }
  if (data) {
    const { locations } = data;
    let lat = locations[0].coords.latitude;
    let long = locations[0].coords.longitude;

    l1 = lat;
    l2 = long;

    const position = {
      type: 'notify_frontend',
      lat: l1,
      lon: l2,
    };
    // WebSocketManager.ws.send(JSON.stringify(position));
    if (WebSocketManager.ws.readyState === WebSocket.OPEN) {
      WebSocketManager.ws.send(JSON.stringify(position));
    }

    console.log(
      position
      // `${new Date(Date.now()).toLocaleString()}: ${lat},${long}`
    );
  }
});
