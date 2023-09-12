import styled from 'styled-components'

export const classes = {
  Container: {
    width: { xs: '100%', sm: '100%', md: '70%', lg: '70%', xl: '70%' },
    height: { xs: '100%', sm: '100%', md: '70%', lg: '70%', xl: '70%' },
  },
}

export const BgImage = styled.img`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  filter: blur(50px);
  @media (max-width: 767px) {
    display: none;
  }
`
