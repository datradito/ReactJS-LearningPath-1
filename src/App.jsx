import {Header} from './components/header';
import Counter from './components/counterApp';
import './App.css'

function App() {

  return (
    <>
      <Header title={'Título proporcionado a través de props'} ></Header>
      <main className='flex_column_center'>
        <Counter></Counter>
      </main>
    </>
  )
}

export default App

//dentro de la funcion que estructura el componente no van constantes o funciones que sólo requieran ser usadas 1 vez. las de us global van adentro, las otras van afuera.
//en el nodo padre que envuelve a todo l return del componente pueden ponerse los tags vacíos, <> </>