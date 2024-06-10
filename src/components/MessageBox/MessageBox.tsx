import { Container } from "./styles";


type MessageBoxProps = {
  title: string;
  description: string;
  footerText: string;
  icon: string
}
export const MessageBox:React.FC<MessageBoxProps> = ({title, description, footerText, icon}) => {
  return (
    <Container>
      <header>
        <h1>
          {title}
          <img src={icon} alt="" />
        </h1>
        <p>{description}</p>
      </header>
      <footer>
        <span>{footerText}</span>
      </footer>
    </Container>
  );
};
