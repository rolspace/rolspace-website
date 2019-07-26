import { Link } from 'gatsby'
import styled from 'styled-components'

const PageLink = styled(Link)`
  color: #888;
  font-family: Poppins;
  font-size: 0.70rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  text-decoration: none;

  &:hover {
    color: #555;
  }

  & svg {
    vertical-align: middle;
  }`

export default PageLink
