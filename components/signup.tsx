import { IonCol, IonGrid, IonLabel, IonRow, LazyLoadImage } from '../functions';
export default function Signup() {
  return (
    <div className='form' id="signup">
      <div className="innerForm">
        <IonGrid className='formElements'>
          <IonRow>
            <IonCol>
              <IonLabel className="formLabel">Sign Up</IonLabel>
            </IonCol>
            <IonCol class="emptyColSpacer" />
          </IonRow>
        </IonGrid>
        <LazyLoadImage className="formBG" id={`formBG`} alt={`formBG`} src={`/assets/formBG.png`} 
        width={`100%`} height={`auto`} effect="blur" />
      </div>
    </div>
  );
}
