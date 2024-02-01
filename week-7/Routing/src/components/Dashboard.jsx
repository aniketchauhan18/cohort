 export default function Dashboard() {
  return (
    <div>
      <Boldify>
        Hi there
      </Boldify>
      Dashboard
    </div>
  )
}

function Boldify ({children}) {
  return (
    <strong>
      {children}
    </strong>
  )
}