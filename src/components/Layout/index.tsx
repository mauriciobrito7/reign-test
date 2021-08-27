import { Container, MainContent } from "./Layout.styles";

function Layout({ children }: any) {
  return (
    <>
      <Container>
        <MainContent>{children}</MainContent>
      </Container>
    </>
  );
}

export default Layout;
