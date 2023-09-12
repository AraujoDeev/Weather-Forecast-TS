import styled from 'styled-components'

export const classes = {
  Container: {
    width: { xs: '100%', sm: '100%', md: '70%', lg: '70%', xl: '70%' },
    backgroundColor: '#003f69',
    color: '#fff',
    zIndex: '999',
    borderRadius: {
      xs: '6px',
      sm: '6px',
      md: '0 6px 6px 0',
      lg: '0 6px 6px 0',
      xl: '0 6px 6px 0',
    },
  },
  ContainerForm: {
    height: '10%',
  },
  Form: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  Input: {
    width: '40%',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: 'transparent',
    border: '1px solid gray',
    borderRadius: '4px',
    padding: '4px 8px',
    outline: 'none',
  },
  Button: {
    width: '40px',
    height: '40px',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    backgroundColor: 'transparent',
  },
  MainInformation: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '90%',
  },
  Top: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '50%',
  },
  Bottom: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '20%',
  },
  MaxMin: {
    width: '40%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  Future: {
    width: '100%',
    height: '30%',
  },
  IconSearch: {
    fontSize: '20px',
  },
}

export const Inupt = styled.input`
  text-transform: capitalize;
`
