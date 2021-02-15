import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#087E8B" : "#DB7C26")};
  white-space: nowrap;
  font-weight: bold;
  padding: ${({ big }) => (big ? "1em 2.5em" : ".625em 2em")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: unset;
  border: unset;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "50px" : "none")};
  &:hover {
    background: ${({ primary }) => (primary ? "#077bf1" : "#DB7C26")};
  }
`
