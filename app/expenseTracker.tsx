import { useEffect, useState } from "react"
import axios from "axios"
export interface listItem {
  id: number,
  text: string,
  amount: number
}

export function useExpenseTracker() {
  const [amount, setAmount] = useState(0)
  const [historyList, setHistoryList] = useState<listItem[]>([])
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    axios.post('/api/getList', {}).then(response => {
      const items: listItem[] = response.data
      setHistoryList(items);
      const totalIncome = items.filter(item => item.amount >= 0).reduce((acc, curr) => acc + curr.amount, 0);
      const totalExpense = items.filter(item => item.amount < 0).reduce((acc, curr) => acc + curr.amount, 0);
      const totalAmount = totalIncome + totalExpense;

      setIncome(totalIncome);
      setExpense(totalExpense);
      setAmount(totalAmount);
    })
  }, [])

  function addItem(item: listItem) {
    item.id = historyList.length + 1
    item.amount = parseFloat(item.amount.toFixed(2))
    axios.post('/api/addItem', item)
    setHistoryList(prevList => [...prevList, item])
    if (item.amount >= 0) sumIncome(item.amount)
    else sumExpense(item.amount)
    sumTotal(item.amount)
  }

  function removeItem(item: listItem) {
    item.amount = parseFloat(item.amount.toFixed(2))
    axios.post('/api/removeItem', item)
    setHistoryList(prevList => prevList.filter(thing => thing.id !== item.id))
    if (item.amount >= 0) sumIncome(-item.amount)
    else sumExpense(-item.amount)
    sumTotal(-item.amount)
  }

  function sumIncome(num: number) {
    setIncome(prevIncome => parseFloat((prevIncome + num).toFixed(2)))
  }

  function sumExpense(num: number) {
    setExpense(prevExpense => parseFloat((prevExpense + num).toFixed(2)))
  }

  function sumTotal(num: number) {
    setAmount(prevAmount => parseFloat((prevAmount + num).toFixed(2)))
  }

  const [liItem, setLiItem] = useState(historyList.map(item => {
    return <li key={item.id}>
      <p>{item.text}</p>
      <p>{item.amount}</p>
    </li>
  }))

  useEffect(() => {
    setLiItem(historyList.map(item => {
      return <li key={item.id} onClick={() => removeItem(item)}>
        <p>{item.text}</p>
        <p className={item.amount < 0 ? "red" : "green"}>${item.amount}</p>
      </li>
    }))
  }, [historyList])

  return {
    amount,
    historyList,
    income,
    expense,
    addItem,
    removeItem,
    liItem
  }
}
