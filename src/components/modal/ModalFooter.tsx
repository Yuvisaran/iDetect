import { ButtonComponent} from './../buttons/ButtonComponent';
import * as React from 'react';
import ButtonType from './../../constants/buttons/ButtonTypeEnum';
import ButtonVariants from './../../constants/buttons/ButtonVariantEnum';

export interface ModalButton {
  buttonType: ButtonType,
  buttonName: string,
  buttonVariants: ButtonVariants
}

export interface ModalFooter {
  buttonsPrimaryInOrder: Array<ModalButton>, //the order should be from left to right
  buttonsSecondary: ModalButton //only one secondary
}

export const ModalFooterComponent = (props : ModalFooter) => {
  return (
    <div className="c-modal__foot">
      {footerSecondary(props.buttonsSecondary)}
      {footerPrimary(props.buttonsPrimaryInOrder)}
    </div>
  );
}

function footerSecondary(props : ModalButton) {
  if (props.buttonType == ButtonType.SECONDARY) {
    return (
      <div className="c-modal__actions c-modal__actions--secondary">
      <ButtonComponent buttonName={props.buttonName} buttonType={props.buttonType} buttonVariants={props.buttonVariants}/>
      </div>
    );
  }else {
    return;
  }
}
function footerPrimary(props : Array<ModalButton>) {
    return (
      <div className="c-modal__actions">
        {props.map(function (props, index) {
          return <ButtonComponent buttonName={props.buttonName} buttonType={props.buttonType} buttonVariants={props.buttonVariants}/>
    })}</div>);

}
