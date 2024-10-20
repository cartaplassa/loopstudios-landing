import './App.scss'
import Header from '@blocks/Header'
import Description from '@blocks/Description'
import Creations from '@blocks/Creations'
import Footer from '@blocks/Footer'

function App() {
  return (
    <main className='main'>
      <Header/>
      <Description/>
      <Creations/>
      <Footer/>
    </main>
  )
}

export default App
