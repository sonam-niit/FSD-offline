import BuggyComponent from "./components/BuggyComponent"
import ErrorBoundry from "./components/ErrorBoundary"

function App() {

  return (
    <div>
      <h1>Test Error Boundary</h1>
      <ErrorBoundry>
        <BuggyComponent />
      </ErrorBoundry>
    </div>
  )
}

export default App
