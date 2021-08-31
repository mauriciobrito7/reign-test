import styled from "styled-components/macro";
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 2em;
`

export const CustomLink = styled(Link)`
    cursor: pointer;
`