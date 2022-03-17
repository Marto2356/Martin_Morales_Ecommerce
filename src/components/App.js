import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom'

function App () {
    return  (
        <BrowserRouter>
            <Header/>
            <ItemListContainer/>
            <Main/>
            <ItemDetailContainer/>
            <Footer/>
            <ToastContainer/>
        </BrowserRouter>
    )
}
export default App