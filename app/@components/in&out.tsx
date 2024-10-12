export default function InAndOut({ tracker }: any) {
  return (
    <div className="back">
      <div className="block">
        <h4>收入</h4>
        <p style={{
          color: 'green'
        }}>+￥{tracker.income}</p>
      </div>
      <div className="line"></div>
      <div className="block">
        <h4>支出</h4>
        <p style={{
          color: 'red'
        }}>-￥{tracker.expense}</p>
      </div>
    </div>
  )
}