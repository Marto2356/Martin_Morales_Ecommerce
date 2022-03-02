import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ItemListContainer from './ItemListContainer'

function App () {
    return  <>
                <Header/>
                <ItemListContainer saludo="Hola mi nombre es Martin Morales y este es mi proyecto."/>
                <Main/>
                <Footer/>
            </>
}
export default App