import React, { forwardRef } from 'react';

import './styles/Button.scss';

const Button = (props, ref) => {
  const onClick = function handleClick(e) {
    if (props.click) props.click(e);
  };
  let className = props.className || '';
  if (props.large) className += ' large';
  if (props.lesser) className += ' lesser';
  if (props.warning) className += ' warning';
  if (props.disabled) className += ' disabled';

  return (
    <button
      className={className}
      disabled={props.disabled}
      ref={ref}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

export default forwardRef(Button);
