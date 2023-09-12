import foto1 from '../../assets/img/foto1.jpeg'
import foto2 from '../../assets/img/foto2.jpeg'
import foto3 from '../../assets/img/foto3.jpeg'
import foto4 from '../../assets/img/foto4.jpeg'
import foto5 from '../../assets/img/foto5.jpeg'
import foto6 from '../../assets/img/foto6.jpeg'
import foto7 from '../../assets/img/foto7.jpeg'
import foto8 from '../../assets/img/foto8.jpeg'
import foto9 from '../../assets/img/foto9.jpeg'
import foto10 from '../../assets/img/foto10.jpeg'
import {
  CarouselActive,
  CarouselInner,
  CarouselSlide,
  ContainerCarousel,
  ImageCarousel,
} from './CarouselStyles'

const CarouselImages = () => {
  return (
    <ContainerCarousel style={{}}>
      <CarouselSlide
        id="myCarousel"
        className="carousel slide"
        data-ride="carousel"
      >
        <CarouselInner className="carousel-inner">
          <CarouselActive className="item active">
            <ImageCarousel src={foto1} alt="Los Angeles" />
          </CarouselActive>

          <CarouselActive className="item">
            <ImageCarousel src={foto2} alt="Los Angeles" />
          </CarouselActive>

          <CarouselActive className="item">
            <ImageCarousel src={foto3} alt="Los Angeles" />
          </CarouselActive>

          <CarouselActive className="item">
            <ImageCarousel src={foto4} alt="Los Angeles" />
          </CarouselActive>

          <CarouselActive className="item">
            <ImageCarousel src={foto5} alt="Los Angeles" />
          </CarouselActive>

          <CarouselActive className="item">
            <ImageCarousel src={foto6} alt="Los Angeles" />
          </CarouselActive>

          <CarouselActive className="item">
            <ImageCarousel src={foto7} alt="Los Angeles" />
          </CarouselActive>

          <CarouselActive className="item">
            <ImageCarousel src={foto8} alt="Los Angeles" />
          </CarouselActive>

          <CarouselActive className="item">
            <ImageCarousel src={foto9} alt="Los Angeles" />
          </CarouselActive>

          <CarouselActive className="item">
            <ImageCarousel src={foto10} alt="Los Angeles" />
          </CarouselActive>
        </CarouselInner>
      </CarouselSlide>
    </ContainerCarousel>
  )
}

export default CarouselImages
