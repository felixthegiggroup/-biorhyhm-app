import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from "@ionic/react";
import React, { useState } from "react";
import BiorhyhmCard from "./components/BiorhyhmCard";
import { useLocalStorage } from "./hooks";

function App() {
  const [birthDate, setBirthDate] = useLocalStorage("birthDate", "");
  const [targetDate, setTargetDate] = useState(new Date().toISOString());
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythm App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {birthDate && (
          <BiorhyhmCard targetDate={targetDate} birthDate={birthDate} />
        )}
        <IonItem>
          <IonLabel position="fixed">Date of Birth:</IonLabel>
          <IonDatetime
            displayFormat="D MMM YYYY"
            value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Target Day:</IonLabel>
          <IonDatetime
            displayFormat="D MMM YYYY"
            value={targetDate}
            onIonChange={(event) => setTargetDate(event.detail.value)}
          />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
