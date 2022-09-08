import "./App.css";
import Header from './Components/Header';
import Auth from './Components/Auth';
import { UserContextProvider } from './Context/userContext';
function App() {
  return (
    <div className='ui container'>
      <UserContextProvider>
        <Header />
        <Auth />
      </UserContextProvider>

    </div>
  )
}

export default App