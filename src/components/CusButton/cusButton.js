/**
 * long description for the file
 *
 * @summary short description for the file
 * @author Ananth
 *
 * Created at     : 2018-03-27 15:35:31
 * Last modified  : 2018-04-04 15:55:09
 */

import React from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';

import 'src/common/css/mockcss/style.css';

const CusButton = (props) => {
  const { varients, children, disabled, onClick, id, name, attention, href, target, ariaLabel } = props;
  const className = attention ? 'u-attention-required' : '';
  switch (varients) {
    case 'withIcon':
      return (
        <button className={`o-btn ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name}>
          {children}
        </button>
      );
    case 'link':
      return (
        <a className='o-btn' href={href} target={target}>
          {children}
        </a>
      );
    case 'primary':
      return (
        <button className={`o-btn o-btn--primary ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name}>
          {children}
        </button>
      );
    case 'neutral':
      return (
        <button className={`o-btn  o-btn--neutral ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name}>
          {children}
        </button>
      );
    case 'transparent':
      return (
        <button className={`o-btn  o-btn--transparent ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name}>
          {children}
        </button>
      );
    case 'inline':
      return (
        <button className={`o-btn  o-btn--inline ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name}>
          {children}
        </button>
      );
    case 'iconOnly':
      return (
        <button className={`o-btn  o-btn--tooltip ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name} aria-label={ariaLabel}>
          {children}
        </button>
      );
    case 'iconOnlyRight':
      return (
        <button className={`o-btn  o-btn--tooltip o-btn--tooltip-right ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name} aria-label={ariaLabel}>
          {children}
        </button>
      );
    case 'concealed':
      return (
        <button className={`o-btn  o-btn--concealed o-btn--tooltip ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name} aria-label={ariaLabel}>
          {children}
        </button>
      );
    // todo: two child caanot be sent as children . find a new way
    // case 'isEffective':
    //   return (
    //     <div className="o-btn-wrapper js-effective-btn">
    //       <button className="o-btn u-attention-required" type="button">
    //         {childOne}
    //       </button>
    //       <button className="o-btn o-btn--warning">
    //         {childTwo}
    //       </button >
    //     </div >
    //   );
    case 'textField':
      return (
        <button className={`o-btn  o-btn--text-lookalike ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name}>
          {children}
        </button>
      );
    case 'positive':
      return (
        <button className={`o-btn o-btn--positive u-positive o-btn--tooltip ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name} aria-label={ariaLabel}>
          {children}
        </button>
      );
    case 'destructive':
      return (
        <button className={`o-btn o-btn--destructive u-negative o-btn--tooltip ${className}`} type="button" disabled={disabled} onClick={onClick} id={id} name={name} aria-label={ariaLabel}>
          {children}
        </button>
      );
    // todo: two child caanot be sent as children . find a new way
    // case 'multiBtn':
    //   return (
    //     <div className="c-multi-btn">
    //       <button className="o-btn o-btn--tooltip c-multi-btn__item is-active" type="button" aria-label={ariaLabel}>
    //       {childOne}
    //       </button>
    //       <button className="o-btn o-btn--tooltip c-multi-btn__item" type="button" aria-label="Table view">
    //       {childTwo}
    //       </button >
    //     </div >
    //   );
    default:
      return (
        <button className='o-btn' type="button" disabled={disabled} onClick={onClick} id={id} name={name}>
          {children}
        </button>
      );
  }
}

CusButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node
  ]),
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  name: PropTypes.string,
  attention: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.string,
  varients: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired
}

CusButton.defaultProps = {
  disabled: false,
  onClick: _noop,
  className: '',
  children: '',
  id: null,
  name: '',
  varients: '',
  attention: false,
  href: '#',
  target: '_self'
}

export default CusButton;
