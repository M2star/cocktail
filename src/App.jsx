import './App.css';
import Home from './page/Home';
import { Route, Routes,} from 'react-router-dom'

import ProductDetails from './component/common/productDetail/ProductDetail';
import PageNotFound from './component/Cart/pageNotfound/PageNotFound';
function App() {
  return (
    <div className="container">
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='product/:id' element={<ProductDetails />}/>
      <Route path='*' element={<PageNotFound />}/>
     </Routes>
    
    </div>
  );
}

export default App;
