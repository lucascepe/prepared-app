import React, { Component } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCardContent,
  IonCard,
  IonIcon,
  IonFab,
  IonFabButton,
  IonButtons,
  IonButton,
  IonBackButton,
  IonSearchbar,
  IonList,
  IonLabel,
  IonItem,
  IonInput,
  IonToggle,
  IonRadio,
  IonCheckbox,
} from "@ionic/react";

import { arrowBackOutline, shareOutline } from "ionicons/icons";


export default class NewGoal extends Component {
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
            <IonTitle>New Goal</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
            <div>
                <h4>Obstetric anesthesia</h4>
            </div>
            <div>
                <IonSearchbar></IonSearchbar>
                <IonList>
                    <IonItem>
                        <IonLabel>Common Tasks</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Regional Anesthesia</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Cardiac Anesthesia</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Thorasic Anesthesia</IonLabel>
                    </IonItem>
                 </IonList>
            </div>
        </IonContent>
    </IonPage>
      </>
    );
  }
}
