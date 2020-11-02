import React, { Component } from "react";
import {
  IonButtons,
  IonBackButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonProgressBar
} from "@ionic/react";

import { arrowBackOutline, shareOutline } from "ionicons/icons";
import Person from "../../images/person.png"

export default class Profile extends Component {
  render() {
    return (
      <>
      <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                <IonBackButton defaultHref="/">
                  <IonIcon icon={arrowBackOutline} />
                </IonBackButton>
              </IonButtons>
            <IonButtons slot="primary">
            <IonButton><IonIcon icon={shareOutline}/></IonButton>
            </IonButtons>
            <IonTitle>Andreas Müller</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <div>
                <img src={Person}/>
            </div>
            <div>
                <h3>Skills overview</h3>
                <div>
                    <h4>Intravenous injection and cannu</h4>
                    <IonProgressBar value={0.5}></IonProgressBar>
                    <h4>Local skin anesthesia</h4>
                    <IonProgressBar value={0.2}></IonProgressBar>
                    <h4>Wound cleaning</h4>
                    <IonProgressBar value={0.8}></IonProgressBar>
                    <h4>Simple spirometry</h4>
                    <IonProgressBar value={0.6}></IonProgressBar>
                </div>
                <br></br>
            </div>
        </IonContent>
        </IonPage>
      </>
    );
  }
}
