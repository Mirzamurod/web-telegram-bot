import { FC } from 'react'
import './button.css'

interface IProps {
  type: 'add' | 'remove' | 'checkout'
  title: string
  onClick?: (value: any) => any
  disabled?: boolean
}

const Button: FC<IProps> = props => {
  const { type, title, onClick, disabled } = props

  return (
    <button
      className={`btn ${type} ${disabled && 'disabled'}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  )
}

export default Button
