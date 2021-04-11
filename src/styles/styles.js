import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  color: blanchedalmond;
  text-decoration: none;
  margin-right: 100px;

  &:hover {
    text-decoration: underline;
  }
`;