import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Products from '../components/Products';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Products />
    </Container>
  );
};

export default ProductList;
