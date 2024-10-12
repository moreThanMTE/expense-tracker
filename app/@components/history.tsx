export default function History({ tracker }: any) {
  return (
    <div style={{
      marginBottom: '30px'
    }}>
      <h3>历史记录</h3>
      <ul>
        {tracker.liItem}
      </ul>
    </div>
  )
}