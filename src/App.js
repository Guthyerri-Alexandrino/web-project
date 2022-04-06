import './App.css'
import World from './components/Atividade 2/World'
import Arena from './components/Atividade 2/Arena'
import Enemy from './components/Atividade 2/Enemy'
import Hero from './components/Atividade 2/Hero'

function App() {
  return (
    <div>
      <World>
        <Arena arena="Castelo Black">
          <Hero name = "Tiago"/>
          <Enemy name = "Nigue"/>
        </Arena>
		<Arena arena="Castelo Amizade">
          <Hero name = "Guthyerri"/>
          <Enemy name = "Inimiego"/>
        </Arena>
		<Arena arena="Castelo Red">
          <Hero name = "Brena"/>
          <Enemy name = "Jefferson"/>
        </Arena>
      </World>
    </div>
  )
}

export default App