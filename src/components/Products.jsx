import styled from 'styled-components';
import {popularProducts} from '../infos/data';
import Product from './Product';

const Container = styled.div`
  padding: 20px;
  margin:5px;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
