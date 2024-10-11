export default function History({ tracker }: any) {
  return (
    <div style={{
      marginBottom: '30px'
    }}>
      <h3>History</h3>
      <ul>
        {tracker.liItem}
      </ul>
    </div>
  )
}