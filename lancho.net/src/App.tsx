import './App.css'
import Login from './login'
import Home from './home'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar';

function App() {


  return (
    <>
    <header>
      <NavigationBar/>
    </header>
      <Home/>
      {/* <Login/> */}
      {/* <Image></Image> */}
    </>
  )
}

export default App
