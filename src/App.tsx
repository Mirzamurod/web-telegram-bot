import { useEffect, useState } from 'react'
import { TData, getData } from './constants/db'
import Card from './components/card/card'
import Cart from './components/cart/cart'
import './App.css'

const courses = getData()

// @ts-ignore
const telegram: any = window.Telegram.WepApp

function App() {
  const [cartItems, setCartItems] = useState<(TData & { quantity: number })[]>([])

  useEffect(() => {
    telegram.ready()
  }, [])

  const onAddItem = (item: TData) => {
    const existItem = cartItems.find(c => c.id === item.id)

    if (existItem) {
      const newdata = cartItems.map(c =>
        c.id === item.id ? { ...existItem, quantity: existItem.quantity + 1 } : c
      )

      setCartItems(newdata)
    } else {
      const newData = [...cartItems, { ...item, quantity: 1 }]
      setCartItems(newData)
    }
  }

  const onRemoveItem = (item: TData) => {
    const existItem = cartItems.find(c => c.id === item.id)

    if (existItem?.quantity === 1) {
      const newData = cartItems.filter(c => c.id !== existItem.id)

      setCartItems(newData)
    } else {
      const newData = cartItems.map(c =>
        c.id === existItem!.id ? { ...existItem, quantity: existItem!?.quantity - 1 } : c
      )

      setCartItems(newData as (TData & { quantity: number })[])
    }
  }

  const onCheckout = () => {
    telegram.MainButton.text = 'Sotib olish'
    telegram.MainButton.show()
  }

  return (
    <>
      <h1 className='heading'>Sammi kurslar</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout} />
      <div className='cards__container'>
        {courses.map(course => (
          <Card key={course.id} course={course} onAddItem={onAddItem} onRemoveItem={onRemoveItem} />
        ))}
      </div>
    </>
  )
}

export default App
