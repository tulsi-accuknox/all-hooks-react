import './App.css'
import Usecallback from './Components/Usecallback/Usecallback'

import Useeffect from './Components/Useffect/Useeffect'
import Usememo from './Components/Usememo/Usememo'
import Usereducer from './Components/Usereducer/Usereducer'
import Useref from './Components/Useref/Useref'
import UseState from './Components/UseState/UseState'

function App() {

  return (
    <div className="App">
      <UseState/>
      <Useeffect/>
      <Usereducer/>
      <Useref/>
      <Usememo/>
      <Usecallback/>
    </div>
  )
}

export default App
