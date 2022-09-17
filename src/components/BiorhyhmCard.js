import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react";
import React from "react";
import dayjs from "dayjs";
import { calculateBiorhyhms } from "../calculation";
import BiorhymChart from "./BiorhymChart";
import "./BiorhyhmCard.css";

const BiorhyhmCard = ({ targetDate, birthDate }) => {
  const formatter = (toISOString) => {
    return dayjs(toISOString).format("D MM YYYY");
  };

  const { physical, emotional, intellectual } = calculateBiorhyhms(
    birthDate,
    targetDate
  );
  return (
    <IonCard className="biorhyhm-card ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{formatter(targetDate)}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <BiorhymChart targetDate={targetDate} birthDate={birthDate} />
        <p className="physical"> Physical: {physical.toFixed(4)}</p>
        <p className="emotional">Emotional: {emotional.toFixed(4)}</p>
        <p className="intellectual">Intellectual: {intellectual.toFixed(4)}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default BiorhyhmCard;
