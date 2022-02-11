import styled from 'styled-components';
import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@material-ui/icons';
import {mobile} from '../mobile';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-left: 20px;
`;
const Center = styled.div`
  padding-top: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const RightSide = styled.div`
  margin-top: 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Logo = styled.h1`
  font-size: 32;
`;
const Description = styled.p`
  margin: 30px 10px;
`;
const SocialMedia = styled.div`
  display: flex;
  margin-left: 20px;
`;
const MediaIcon = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const ContactContainer = styled.div`
  flex-direction: column;
`;
const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  width: 100%;
`;
const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <LeftSide>
        <Logo>ThePivot.</Logo>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis
          tellus vitae felis tincidunt efficitur. Quisque placerat finibus
          tempus. Aliquam dictum pretium tellus, quis dapibus felis pretium
          facilisis. Pellentesque vitae metus quis lorem gravida placerat eu
          quis magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed commodo justo velit.
        </Description>
        <SocialMedia>
          <MediaIcon color="3B5999" href="http://google.com">
            <Facebook />
          </MediaIcon>
          <MediaIcon color="E4405F">
            <Instagram />
          </MediaIcon>
          <MediaIcon color="55ACEE">
            <Twitter />
          </MediaIcon>
          <MediaIcon color="E60023">
            <Pinterest />
          </MediaIcon>
        </SocialMedia>
      </LeftSide>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <RightSide>
        <Title>Contact</Title>
        <ContactContainer>
          <ContactItem>
            <Room style={{marginRight: '10px'}} /> 622 Dixie Path , South
            Tobinchester 98336
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight: '10px'}} /> +90 553 379 91 99
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight: '10px'}} />
            akgunyunus482@gmail.com
          </ContactItem>
        </ContactContainer>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </RightSide>
    </Container>
  );
};
export default Footer;
