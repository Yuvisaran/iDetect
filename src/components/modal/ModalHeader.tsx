import * as React from 'react';

export interface ModalHeader {
  modalTitle: string
}

export const ModalHeaderComponent = (props : ModalHeader) => {
  return (
    <div className="c-modal__head">
        <legend className="c-modal__title">
            {props.modalTitle}
        </legend>
    </div>
  );
}
