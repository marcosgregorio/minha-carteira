import { Container, Profile, UserName, Welcome } from "./styles";
import { useMemo, useState } from "react";
import { emojis } from "../../utils/emoji";
import { Toogle } from "../Toogle/Toogle";
import { useTheme } from "../../hooks/theme";

const Mainheader: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() => theme.title === "dark");
  
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  }, []);
  
  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  }

  return (
    <Container>
      <Toogle 
        checked={darkTheme}
        onChange={handleChangeTheme}
        labelLeft="Light"
        labelRight="Dark"
      />
      <Profile>
        <Welcome>Ola, {emoji} </Welcome>
        <UserName>Marcola</UserName>
      </Profile>
    </Container>
  );
};

export default Mainheader;
