import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Card from "./components/card"
import './App.css'
function App() {

  return (
    <>
    <Navbar/>
    <Card title="card 1" description= "card 1 is this" />
    <Card title="card 2" description= "card 2 is this" />
    <Card title="card 3" description= "card 3 is this" />
    <Card title="card 4" description= "card 4 is this" />
    <Footer/>
    </>
  )
}

export default App
