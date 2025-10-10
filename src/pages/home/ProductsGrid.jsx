
import Product from './Product';

function ProductsGrid({ products, loadCart }) {

  return (
     <div className="products-grid">

            {products.map((product) => {
                // const [quantity, setQuantity] = useState(1); // befindet sich jetzt in Product.jsx

                return (
                  <Product key={product.id} product={product} loadCart={loadCart} />
                );
            })};
        </div>
  )
}

export default ProductsGrid