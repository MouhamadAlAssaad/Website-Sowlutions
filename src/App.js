import './App.css';
import Products from './components/products/products';
function App() {
  return (
    <div className="App">
          <div className='right_side'>
              <div style={{margin : "20px 20px 20px 20px" , height:"100%" , width:'100%'}}>
                <div className='headerrr'>
                <h1 className='headerh1'>Our Products</h1>
                </div>
                <Products/>
              </div>
          </div>
    </div>
  );
}

export default App;
