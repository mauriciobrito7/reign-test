import { Container, MainContent } from "./Layout.styles";
import Header from "../Header";
import Nav from "../Nav";

function Layout({ children }: any) {
  return (
    <>
      <Container>
        <Header />
        <Nav />
        <MainContent>{children}</MainContent>
      </Container>
    </>
  );
}

export default Layout;
