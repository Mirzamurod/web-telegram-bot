import { FC } from 'react'
import Button from '../button/button'
import { TData } from '../../constants/db'
import { totalPrice } from '../../units/total-price'
import './cart.css'

interface IProps {
  cartItems: (TData & { quantity: number })[]
  onCheckout: (value: any) => any
}

const Cart: FC<IProps> = props => {
  const { cartItems, onCheckout } = props

  return (
    <div className='cart__container'>
      <p>
        Umumiy narx:{' '}
        {totalPrice(cartItems).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </p>
      <Button
        type='checkout'
        onClick={onCheckout}
        disabled={cartItems.length === 0}
        title={cartItems.length === 0 ? 'Buyurtma berish' : "To'lov"}
      />
    </div>
  )
}

export default Cart
