import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from './components/container'
import Headding from './components/headding'
import Input from './components/input'
import Liitems from './components/liitems'
import Todocontextprovider from './store'
import Themebtn from './components/changethemebtn'
function App() {
  return <>
    <Todocontextprovider>
      <Container >
        <Headding></Headding>
        <Input></Input>
      </Container>
      <Container>
        <Liitems></Liitems>
      </Container>
        <Themebtn>
        </Themebtn>
    </Todocontextprovider>
  </>
}
export default App
