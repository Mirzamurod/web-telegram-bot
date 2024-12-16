import { useCallback, useEffect, useState } from 'react'
import { TData, getData } from './constants/db'
import Card from './components/card/card'
import Cart from './components/cart/cart'
import './App.css'

const courses = getData()

function App() {
  const [cartItems, setCartItems] = useState<(TData & { quantity: number })[]>([])

  // @ts-ignore
  const telegram = window.Telegram.WebApp

  useEffect(() => {
    const checkTelegramAPI = () => {
      // @ts-ignore
      if (window.Telegram?.WebApp) {
        // @ts-ignore
        // const telegram = window.Telegram.WebApp
        telegram.ready()
        console.log('Telegram WebApp API muvaffaqiyatli yuklandi!')
      } else {
        console.error('Telegram WebApp API hali yuklanmagan. Tekshirish davom etmoqda...')
        setTimeout(checkTelegramAPI, 500) // 500 ms dan keyin yana tekshirib ko'radi
      }
    }

    checkTelegramAPI()
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

  const onSendData = useCallback(() => {
    const queryId = telegram.initDataUnsafe?.query_id

    if (queryId) {
      fetch('https://webtelegrambackend.onrender.com/web-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ products: cartItems, queryId }),
      })
    } else telegram.sendData(JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    telegram.onEvent('mainButtonClicked', onSendData)

    return () => telegram.offEvent('mainButtonClicked', onSendData)
  }, [onSendData])

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
