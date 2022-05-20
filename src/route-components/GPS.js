import React, { useState } from 'react';
import Main from '../structure/Main';
import { IonPage, IonButton, IonLoading, IonToast, IonItem, IonLabel } from '@ionic/react';

const exTime = 'Execution time: '
const notMeasured = `${exTime} not yet measured`;
const ms = 'ms';

const GPS = () => {
  //Geo-Stuff (JS API call)
  let executionTimeJS;
  let startFunctionCall;
  const [positionJS, setPositionJS] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ showError: false });
  const getLocationJS = () => {
    startFunctionCall = Date.now();
    navigator.geolocation.getCurrentPosition((position) => {
      setPositionJS(position);
      let date = position.timestamp - startFunctionCall;
      let executionTimeJS = new Date(date).getMilliseconds();
      document.getElementById('jsCall').innerHTML = `${exTime} ${executionTimeJS} ${ms} (JS)`; 
    })
  }
  return (
  <>
      <Main headingText="Let's check your GPS coordinates!">
          <IonPage>
            <IonLoading
            isOpen={loading}
            onDidDismiss={() => setLoading(false)}
            message={'Getting Location...'}
            />
            <IonToast
                isOpen={error.showError}
                onDidDismiss={() => setError({ message: "", showError: false })}
                message={error.message}
                duration={3000}
            />
            <IonButton color="primary" onClick={getLocationJS}>{positionJS ? `${positionJS.coords.latitude} ${positionJS.coords.longitude}` : "Check GPS coordinates"} (click)</IonButton>
            <IonItem id="jsCall" >
                <IonLabel>
                    {executionTimeJS ? `${executionTimeJS}` : `${notMeasured}`}
                </IonLabel>
            </IonItem>
          </IonPage>
      </Main>
  </>
  )
}

export default GPS;