import { Container, MainContent } from "./Layout.styles";
import Header from "../Header";
function Layout({ children }: any) {
  return (
    <>
      <Container>
        <Header />
        <MainContent>{children}</MainContent>
      </Container>
    </>
  );
}

export default Layout;
