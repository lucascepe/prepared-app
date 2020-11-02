import React, { Component } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import prepared from "../../images/prepared-logo.png";

export default class Login extends Component {
    render() {
        return (
            <>
            <IonPage>
             <IonContent fullscreen>
             <IonToolbar>
                <IonImg src={prepared} />
             </IonToolbar>
             <form className="form-group">
                 <IonItem>
                     <IonInput placeholder="Enter your name"></IonInput>
                 </IonItem>
                 <IonItem>
                     <IonInput placeholder="Enter your e-mail"></IonInput>
                 </IonItem>
                 <IonButton color="primary" expand="block">Sign In</IonButton>
             </form>
             <h3>Forgot Password?</h3>
             <br></br>
             <p>Don't have an account?<span><a href="/register">Create one</a></span></p>
            </IonContent>
          </IonPage>
            </>
        )
    }
}
