import styled from 'styled-components'

const Header = styled.header`
  position: relative;
  background-color: ${({theme: { headerBack }}) => headerBack};
  color: ${({theme: { headerText }}) => headerText};
  text-align: center;
  font-size: 32px;
  line-height: 1.5;
`

Header.defaultProps = {
  theme: {
    headerBack: '#fc7e00',
    headerText: '#ffffff'
  }
}

export default Header
