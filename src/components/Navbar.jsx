import styled from 'styled-components';
import {Badge} from '@material-ui/core';
import {Search, ShoppingCartOutlined} from '@material-ui/icons';

const Container = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
`;

const Language = styled.div`
  display: flex;
  color: black;
  margin: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100%;
`;
const LeftSide = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const RightSide = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

const SearchBar = styled.div`
  display: flex;
  border: 0.5px solid lightgray;
  justify-cpntent: center;
  margin-left: 25px;
  padding: 5px;
  align-items: center;
`;
const Input = styled.input`
  border: none;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Logo = styled.h1`
  font-weight: 700;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LeftSide>
          <Language>En</Language>
          <SearchBar>
            <Input placeholder="Search..." />
            <Search style={{color: 'gray', fontSize: 16}} />
          </SearchBar>
        </LeftSide>
        <Center>
          <Logo>ThePivot.</Logo>
        </Center>
        <RightSide>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sıgn In</MenuItem>
          <MenuItem>
            <Badge badgeContent={3} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </RightSide>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
