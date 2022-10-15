import React, { useEffect ,useState} from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import { Row, Col,Container } from 'reactstrap'
import { chunk } from 'lodash'

const ProductList = ({products,onDelete }) => {

  const storedProducts = JSON.parse(localStorage.getItem('productsArray')) || products

  const [productsGroups,setProductsGroups] = useState(chunk(storedProducts,3))
  const [productsArray,setproductsArray] = useState(storedProducts)

  const productsConcat = productsArray.concat(products)
  let productsConcatSet = [ ...new Set(productsConcat.map(s => JSON.stringify(s)))].map(s => JSON.parse(s));

 
  useEffect(()=>{
    const updateProductsArray=()=>{
      setproductsArray(productsConcatSet)
    }
   
    updateProductsArray()
  const getAllProducts=()=>{
    localStorage.setItem('productsArray',JSON.stringify(productsArray));
    var allProducts =JSON.parse(localStorage.getItem('productsArray'))
    setProductsGroups(chunk(allProducts,3))
  }
   getAllProducts()
     },[productsArray,productsConcatSet])



   return (
  
    <Container> 
   
      {productsGroups.map((productsGroup, index) => (
        <Row key={index} className="mb-5">
          {productsGroup.map(product => (
            <Col sm="4" key={product.id} >
              <Product product={product} onDelete={onDelete}/>
            </Col>
          ))}
        </Row>
      ))}
    
     </Container> 
   
   
    
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProductList;
