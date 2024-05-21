import { Container, Profile, UserName, Welcome } from "./styles";
import { useMemo } from "react";
import { emojis } from "../../utils/emoji";
import { Toogle } from "../Toogle/Toogle";

const Mainheader: React.FC = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  }, []);

  return (
    <Container>
      <Toogle></Toogle>
      <Profile>
        <Welcome>Ola, {emoji} </Welcome>
        <UserName>Marcola</UserName>
      </Profile>
    </Container>
  );
};

export default Mainheader;
