import * as React from 'react';
import { ModalFooterComponent, ModalFooter, ModalButton } from './modalFooter';
import ButtonType from './../../constants/buttons/ButtonTypeEnum';
import ButtonVariants from './../../constants/buttons/ButtonVariantEnum'
import { ModalHeaderComponent } from './modalHeader';

interface field {
  fieldName: string,
  fieldConst: string
}

export interface fieldObject {
  fieldName: string,
  fieldConst: string,
  isDropdown: boolean,
  dropdownValue?: Array<field>
}

interface Props {
  modalType : string, //could be : c-modal c-modal--small js-modal is-static pour small | c-modal js-modal is-static pour default | c-modal c-modal--large js-modal is-static pour large || maybe we can go through a function to avoid passing css through a component
  modalTitle: string,
  fields: Array<fieldObject>,
  buttonsPrimaryInOrder: Array<ModalButton>,
  buttonsSecondary: ModalButton
}

const modalFields = (dropDown : fieldObject) => {
  if(!dropDown.isDropdown) {
    return (
      <fieldset className="c-form__field">
          <label className="o-label c-form__label" htmlFor={dropDown.fieldName}>{dropDown.fieldConst}</label>
          <input className="o-input c-form__input" type="text" name={dropDown.fieldName}></input>
      </fieldset>
    )
  } else {
    return (
      <fieldset className="c-form__field">
          <label className="o-label" htmlFor={dropDown.fieldName}>{dropDown.fieldConst}</label>
          <select className="o-select " name={dropDown.fieldName} id={dropDown.fieldName}>
            {dropDown.dropdownValue.map(function(field, index) {
              return <option value={field.fieldConst}>{field.fieldName}</option>
            })}
          </select>
      </fieldset>
    )
  }
}

export const ModalMain: React.SFC<Props> = (props) => {
  console.log(props);
    return (
      <div className="c-modal js-modal is-static">
          <div className="c-modal__view js-modal-view">
              <form action="#" method="post">
                  <ModalHeaderComponent modalTitle={props.modalTitle}/>
                  <div className="c-modal__body">
                    {props.fields.map(function (field :fieldObject) {
                      return modalFields(field);
                    })}
                  </div>
                <ModalFooterComponent buttonsSecondary={props.buttonsSecondary} buttonsPrimaryInOrder={props.buttonsPrimaryInOrder}/>
              </form>
          </div>
      </div>
    );
}
