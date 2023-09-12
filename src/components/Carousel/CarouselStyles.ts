import styled from 'styled-components'

export const ContainerCarousel = styled.div`
  width: 30%;
  @media (max-width: 900px) {
    display: none;
  }
`

export const CarouselSlide = styled.div`
  height: 100%;
  border-radius: '6px 0 0 6px';
`

export const CarouselInner = styled.div`
  height: 100%;
`

export const CarouselActive = styled.div`
  height: 100%;
`

export const ImageCarousel = styled.img`
  width: 100%;
  height: 100% !important;
  border-radius: 6px 0 0 6px;
`
