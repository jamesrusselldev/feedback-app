import React, { ReactNode } from 'react'

interface IButtonProps {
  children: ReactNode,
  version?: string,
  type: 'submit',
  isDisabled?: false;
}

function Button({children, version = 'primary', type, isDisabled}: IButtonProps) {
  return (
      <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
          {children}
    </button>
  )
}

export default Button