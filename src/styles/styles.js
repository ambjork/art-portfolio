import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  color: #999;
  text-decoration: none;
  margin-right: 100px;

  &:hover {
    color: #111;
  }
`;