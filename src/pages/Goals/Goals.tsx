import React, { Component } from "react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonBackButton,
  IonIcon,
  IonTitle,
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonFab,
  IonFabButton,
} from "@ionic/react";
import {
  arrowBackOutline,
  closeOutline,
  checkmarkOutline,
  add,
} from "ionicons/icons";

export default class Goals extends Component {
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
              <IonTitle>Your Goals</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <div>
              <h4>Focus Areas</h4>
              <IonCard>
                <IonCardContent>
                  <h2>Common Task</h2>
                  <h3>induction</h3>
                  <p>Progess bar comes here</p>
                </IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardContent>
                  <h2>Common Task</h2>
                  <h3>induction</h3>
                  <p>Progess bar comes here</p>
                </IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardContent>
                  <h2>Common Task</h2>
                  <h3>induction</h3>
                  <p>Progess bar comes here</p>
                </IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardContent>
                  <h2>Common Task</h2>
                  <h3>induction</h3>
                  <p>Progess bar comes here</p>
                </IonCardContent>
              </IonCard>
            </div>
            <div>
              <h4>Proposed Goals</h4>
              <IonCard>
                <IonCardContent>
                  <h2>Proposed Goal</h2>
                  <p>
                    This needs to be an image and go to the right of the stars
                  </p>
                  <IonButtons>
                    <IonButton>
                      <IonIcon icon={closeOutline}></IonIcon>
                    </IonButton>
                    <IonButton>
                      <IonIcon icon={checkmarkOutline}></IonIcon>
                    </IonButton>
                  </IonButtons>
                </IonCardContent>
              </IonCard>
              <IonCard>
                <IonCardContent>
                  <h2>Proposed Goal</h2>
                  <p>
                    This needs to be an image and go to the right of the stars
                  </p>
                  <IonButtons>
                    <IonButton>
                      <IonIcon icon={closeOutline}></IonIcon>
                    </IonButton>
                    <IonButton>
                      <IonIcon icon={checkmarkOutline}></IonIcon>
                    </IonButton>
                  </IonButtons>
                </IonCardContent>
              </IonCard>
            </div>
              <IonFab vertical="bottom" horizontal="center" slot="fixed">
                <IonFabButton>
                  <IonIcon icon={add} />
                </IonFabButton>
              </IonFab>
          </IonContent>
        </IonPage>
      </>
    );
  }
}
