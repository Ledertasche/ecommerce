import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import ProductsGrid from './ProductsGrid';
import './HomePage.css';

function HomePage({ cart }) {
    const [products, setProducts] = useState([]);
    // const [cart, setCart] = useState([]); 

    useEffect(() => {
        const getHomeData = async () => {
          const response = await axios.get('/api/products');
          setProducts(response.data);
    };
        getHomeData();
    }, []);
    // 5. Möglichkeit
    // useEffect(() => {
    // axios.get('/api/products')
    //     .then((response) => {
    //      console.log(response.data)
    //      setProducts(response.data)
    //     });
    // }, []);

    //   4. Möglichkeit mit Auslagerung von http://localhost:3000 vite.config.js
    // axios.get('/api/cart-items')
    //     .then((response) => {
    //         console.log(response.data);
    //         setCart(response.data);
    //     })
    // }, []) // die [] ist das Dependency Array

    //   3. Möglichkeit
    // axios.get('http://localhost:3000/api/products')
    //    .then((response) => {
    //     console.log(response.data)
    //    });
    // }, [])

    // fetch('http://localhost:3000/api/products')
    //    1. Möglichkeit
    //    .then((response) => {
    //     response.json().then((data) => {
    //          console.log(data);
    //     })
    //    })
    // }, [])

    // fetch('http://localhost:3000/api/products')
    //    2. Möglichkeit
    // .then((response) => {
    //     console.log(response);
    //     return response.json()
    //    }).then((data) => {
    //          console.log(data);
    //     });
    // }, [])

    
    return (
    <>
    <title>Ecommerce</title>
    <Header cart={cart}/>

        <div className="home-page">
            <ProductsGrid products={products}/>
        </div>
    </>
    );
}
export default HomePage