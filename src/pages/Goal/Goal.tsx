import React, { Component } from 'react'
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
  import QRCode from "../../images/qr-code.png"

export default class Goal extends Component {
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
                        </IonToolbar>
                </IonHeader>
                <IonContent>
                    <div>
                    <h4>Common Taks</h4>
                    <p>progress bar to right</p>
                    <p>Induction</p>
                    <img src={QRCode} />
                    <p> Continue by having your supervisor scan the QR Code.</p>
                    </div>
                </IonContent>
            </IonPage>
            </>
        )
    }
}
