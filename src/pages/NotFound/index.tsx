import { NotFoundContainer, Title, CustomLink } from "./NotFound.styles";

function NotFound() {
  return (
    <NotFoundContainer>
      <Title>Error 404, Page Not Found</Title>
      <CustomLink to="/">Back To Home</CustomLink>
    </NotFoundContainer>
  );
}

export default NotFound;
