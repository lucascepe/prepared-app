import React, { Component, Fragment } from "react";
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
} from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";

export default class Register extends Component {
  render() {
    return (
      <Fragment>
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonButtons>
                <IonBackButton defaultHref="/">
                  <IonIcon icon={arrowBackOutline} />
                </IonBackButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
              <h3>Create Account</h3>
              <form className="form-group">
                 <IonItem>
                     <IonInput placeholder="Enter your name"></IonInput>
                 </IonItem>
                 <IonItem>
                     <IonInput placeholder="Enter your e-mail"></IonInput>
                 </IonItem>
                 <IonItem>
                     <IonInput placeholder="Enter your password"></IonInput>
                 </IonItem>
                 <IonItem>
                     <IonInput placeholder="Confirm your password"></IonInput>
                 </IonItem>
                 <IonButton color="primary" expand="block">Register</IonButton>
             </form>
          </IonContent>
        </IonPage>
      </Fragment>
    );
  }
}
