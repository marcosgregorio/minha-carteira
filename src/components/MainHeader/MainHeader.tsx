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

  const showAsideMenu = () => {
    const aside = document.querySelector("#aside-bar") as HTMLElement;
    if (aside) {
      console.log(aside.style.display);
      aside.style.display = aside.style.display === "none" ? "block" : "none";
    }
  };

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  return (
    <Container>
      <button onClick={showAsideMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>
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
