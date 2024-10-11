'use client'

export default function ShowBalance({ tracker }: any) {
  return (
    <>
      <h4>your balance</h4>
      <h1 style={{
        marginBottom: '20px'
      }}>${tracker.amount}</h1>
    </>
  )
}