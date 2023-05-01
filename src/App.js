import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  const data = [
    {
      productImage:
        "https://m.media-amazon.com/images/I/31MX9scnEzL._SY445_SX342_QL70_FMwebp_.jpg",
      productName: "Apple iPhone 14 Pro ",
      price: 999,
      rating : 99,
    },
    {
      productImage:
        "https://m.media-amazon.com/images/I/71Hr-vPvJuL._SX522_.jpg",
      productName: "Apple Watch Series 8 ",
      price: 4700,
      rating: 80,
    },
    {
      productImage:
        "https://m.media-amazon.com/images/I/41UnYGu7AGL._SY445_SX342_QL70_FMwebp_.jpg",
      productName: "Apple 2022 MacBook Air Laptop with M2 chip",
      price: 13300,
      rating: 50,
    },
    {
      productImage:
        "https://m.media-amazon.com/images/I/613pf1JTs9L._SX679_.jpg",
      productName: "Nikon D7500 20.9MP Digital SLR Camera (Black) ",
      price: 8349,
      rating: 50,
    },
    {
      productImage:
        "https://m.media-amazon.com/images/I/61sRKTAfrhL._SX522_.jpg",
      productName: "Apple AirPods Pro (2nd Generation)",
      price: 2600,
      rating: 50,
    },
    {
      productImage:
        "https://m.media-amazon.com/images/I/81gC7frRJyL._SX522_.jpg",
      productName: "Apple 2022 11-inch iPad Pro ",
      price: 8100,
      rating: 3252 ,
    },
    {
      productImage:
        "https://m.media-amazon.com/images/I/719CNIMQaQL._SX522_.jpg",
      productName: "Apple Studio Display - Standard Glass - Tilt-Adjustable Stand ​​​​​​​",
      price: 10000,
      rating:3252 ,
    },
    {
      productImage:
        "https://m.media-amazon.com/images/I/61jup8h--XL._SX522_.jpg",
      productName: "Apple 2023 Mac Mini",
      price: 6000,
      rating:3252 ,
    },
  
  ]

const [count,setCount] = useState(0)
return(

<div className='App'>
<Navbar bg="dark">
        <Container className='container'>
          <Navbar.Brand href="#home">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png"
              width="40" height="40" className="d-inline-block align-left" alt="React Bootstrap logo"/></Navbar.Brand>
            <div className='cart-value'>
               <Badge bg ="primary">
                Cart {count}
               </Badge>
             </div>
        </Container>
      </Navbar>
  {/* <div className='cart-value'>
   <Badge bg ="primary">
    Cart {count}
   </Badge>
  </div> */}
  <div>
    <p className='hint'>Get up to ₹8000 instant savings on selected products with eligible HDFC Bank cards.* </p>
    <header className='heading'>
      <h2>Apple Sales</h2>
      <p>Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV</p>
    </header>
    </div>
  <div className='card-container'>
  {data.map((product,idx)=>(
      <Product
      key= {idx}
      prod={product}
      count = {count}
      setCount= {setCount}
      />
  ))}
  </div>
</div>
  );
}
export default App;

function Product ({prod, count,setCount}){
  
  const [show, setShow] = useState(false)
  // console.log(show)
function addtocart(){
    setCount(count+1);
    setShow(!show)
}
function removecart(){
  setCount(count-1);
  setShow(!show)
}

  return(
    <div className='card-details'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.productImage} />
      <Card.Body>
        <Card.Title>{prod.productName}</Card.Title>
        <Card.Text>${prod.price}</Card.Text>
        <Card.Text> ⭐⭐⭐⭐ {prod.rating}</Card.Text>
        {!show ?
        <Button variant="secondary" 
        onClick={addtocart}
        >Add to cart</Button>
        :
        <Button variant="danger"
        onClick={removecart}>Remove Cart</Button>}
      </Card.Body>
    </Card>
    </div>
  )
}
