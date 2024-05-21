import { Container, Profile, UserName, Welcome } from "./styles";

const Mainheader: React.FC = () => {
  return (
    <Container>
      <h1>Toogle</h1>
      <Profile>
        <Welcome>Ola,</Welcome>
        <UserName>Marcola</UserName>
      </Profile>
    </Container>
  );
};

export default Mainheader;
