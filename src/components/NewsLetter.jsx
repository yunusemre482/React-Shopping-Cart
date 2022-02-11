import {Send} from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  opacity: 0.8;
  background-color: #fef4ea;
`;
const SearchBar = styled.div`
  width: 50%;
  display: flex;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 30px;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const NewsLetter = () => {
  return (
    <Container>
      <Title>The Pivot.</Title>
      <Description>
        This app is example for my react projects just see results{' '}
      </Description>
      <SearchBar>
        <Input placeholder="...Search" />
        <Button>
          <Send />
        </Button>
      </SearchBar>
    </Container>
  );
};

export default NewsLetter;
