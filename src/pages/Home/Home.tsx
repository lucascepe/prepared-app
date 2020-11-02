import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCardContent, IonCard, IonIcon, IonFab, IonFabButton, IonButtons, IonButton } from '@ionic/react';
import React, { Component } from 'react';
import { starOutline, closeOutline,checkmarkOutline, add } from "ionicons/icons";
import './Home.css';
import Person from "../../images/person.png"

export default class Home extends Component  {
  render(){
        return (
          <>
          <IonPage>
            <IonContent fullscreen>
              <div>
              <h4>Good Morning</h4>
              <img src={Person}/>
              <div>   
                <h3>Your Goals</h3> 
                <IonCard>   
                <IonCardContent>
                    <h2>Common Task</h2>
                    <h3>another title</h3>
                    <p>Progess bar comes here</p>
              </IonCardContent> 
              </IonCard>   
              <p>View all</p>
              </div>
              <div>
                <h3>Activities</h3>
                <IonCard>   
                <IonCardContent>
                    <h2>Feedback Received</h2>
                    <IonButtons>
                      <IonButton>                
                        <IonIcon icon={starOutline}></IonIcon>   
                    </IonButton>
                    <IonButton>                
                        <IonIcon icon={starOutline}></IonIcon>   
                    </IonButton>
                    <IonButton>                
                        <IonIcon icon={starOutline}></IonIcon>   
                    </IonButton>
                    <IonButton>                
                        <IonIcon icon={starOutline}></IonIcon>   
                    </IonButton>
                  </IonButtons>        
                    <p>This needs to be an image and go to the right of the stars</p>
              </IonCardContent> 
              </IonCard> 
              <IonCard>   
                <IonCardContent>
                  <h2>Proposed Goal</h2>
                  <p>This needs to be an image and go to the right of the stars</p>
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
      };
};

