// import { Routes, Route, Link } from "react-router-dom";
// import { SomeList } from "./pages/SomeList";
// import { NavList } from "./components/NavList";
// import { HomePage } from "./pages/HomePage";
// import Nav from "./components/data/Nav";
import "./App.css";
import "./css/reset.css";
import "./css/header.css";

function ShopItemFunc(props) {
  const data = props.item;
  return(
    <div className="main-content">
      <h2>{data.brand}</h2>
      <h1>{data.title}</h1>
      <h3>{data.description}</h3>
      <div className="description">{data.descriptionFull}</div>
      <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{`${data.currency}${data.price.toFixed(2)}`}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
}



function App() {
  // const nav = new Nav();
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: "Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    price: 399,
    currency: '£'
  }
  return (
    // <>
    //   <NavList items={nav.links} />
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/some-list" element={<SomeList />} />
    //   </Routes>
    // </>
    <>
      <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc item={item} />
      </div>
    </div>
    </>
  );
}

export default App;
