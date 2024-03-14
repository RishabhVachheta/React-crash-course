import ClockHeading from './Components/ClockHeading'
import ClockSlogan from './Components/ClockSlogan'
import ClockTime from './Components/CurrentTime'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <ClockTime></ClockTime>
    </center>
  )
}

export default App
