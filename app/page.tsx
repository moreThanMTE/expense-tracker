'use client'
import React from 'react';
import Header from "./@components/header"
import ShowBalance from "./@components/showBalance"
import History from "./@components/history"
import AddNew from "./@components/addNew"
import InAndOut from "./@components/in&out"
import { useExpenseTracker } from "./expenseTracker"

export default function Home() {
  const MemoizedShowBalance = React.memo(ShowBalance);
  const MemoizedHistory = React.memo(History);
  const MemoizedInAndOut = React.memo(InAndOut);
  const MemoizedAddNew = React.memo(AddNew);
  const tracker = useExpenseTracker()
  return (
    <div className="background">
      <Header />
      <MemoizedShowBalance tracker={tracker} />
      <MemoizedInAndOut tracker={tracker} />
      <MemoizedHistory tracker={tracker} />
      <MemoizedAddNew tracker={tracker} />
    </div>
  );
}
