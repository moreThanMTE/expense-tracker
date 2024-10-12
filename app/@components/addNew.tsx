import style from './addNew.module.css'
import { useState } from 'react'

export default function AddNew({ tracker }: any) {
  const [formText, setFormText] = useState('')
  const [formAmount, setFormAmount] = useState(0)

  function textChange(e: any) {
    setFormText(e.target.value)
  }

  function amountChange(e: any) {
    const regex = /^-?\d*\.?\d*$/; // 允许正负号和数字，以及小数点
    if (regex.test(e.target.value) || e.target.value === "") {
      setFormAmount(e.target.value)
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault()

    tracker.addItem({
      text: formText,
      amount: Number(formAmount)
    })

    setFormAmount(0)
    setFormText('')
  }

  return (
    <>
      <h3>记录交易</h3>
      <form onSubmit={handleSubmit}>
        <p>备注</p>
        <input type="text" placeholder="Enter text..." className={style.Input} value={formText} onChange={textChange} />
        <p>金额</p>
        <p>(收入填正数 支出填负数)</p>
        <input type="text" placeholder="Enter amount..." className={style.Input} value={formAmount === 0 ? '' : formAmount} onChange={amountChange} />
        <button type="submit" style={{
          width: '100%',
          height: '40px',
          border: 'none',
          background: 'cornflowerblue',
          color: 'white',
          marginTop: '10px'
        }}
          disabled={formText === '' && formAmount === 0 || '' ? true : false}>记录交易</button>
      </form>
    </>
  )
}