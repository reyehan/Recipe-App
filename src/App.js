import Pages from './Pages/Pages';
import './App.css';
import Categories from './components/Categories';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Search />
      <Categories />
      <Pages /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
