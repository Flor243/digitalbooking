import React,{useState,useEffect} from "react";
import Slider from "react-slick";
import product1 from '../../../utils/images/productImg1.png'
import product2 from '../../../utils/images/productImg2.jpg'
import product3 from '../../../utils/images/productImg3.jpg'
import product4 from '../../../utils/images/productImg4.jpg'
import product5 from '../../../utils/images/productImg5.jpg'
import { Icon } from "../../../atoms/Icon/Icon";
import {FacebookShareButton,TwitterShareButton, WhatsappIcon, WhatsappShareButton,LinkedinIcon,LinkedinShareButton, TwitterIcon} from 'react-share'
import { FacebookIcon } from 'react-share'
import { MockUp } from "../../MockUpCard/MockUp";
import { useParams,useNavigate } from "react-router-dom";
import { Paragraph } from "../../../atoms/paragraph/Paragraph";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import './TabletCarousel.css'
export function TabletCarousel(props) {
  const Share=()=>{
      return( <div className='mobile-share-icons'>
        <FacebookShareButton style={{display:'block'}} url='https://www.digitalhouse.com/ar?utm_source=Google&utm_medium=paidsearch&utm_campaign=Lead&utm_term=Institucional&utm_content=institucional-institucional-curso-home-adresponsive-conversiones-kwcategory-institucional-exactas-none-all-otro-adtext-institucional-none-all-all-ar-search' quote='Mira este producto!!!' hashtag='#booking'>
            <FacebookIcon  size={30} logoFillIcon='white' round={true} ></FacebookIcon>
        </FacebookShareButton>
        <WhatsappShareButton style={{display:'block'}} className='icono'  url='https://www.digitalhouse.com/ar?utm_source=Google&utm_medium=paidsearch&utm_campaign=Lead&utm_term=Institucional&utm_content=institucional-institucional-curso-home-adresponsive-conversiones-kwcategory-institucional-exactas-none-all-otro-adtext-institucional-none-all-all-ar-search' >
            <WhatsappIcon   size={30} logoFillIcon='white' round={true}  >
            </WhatsappIcon>
        </WhatsappShareButton>
        <TwitterShareButton style={{display:'block'}} className='icono' url='https://www.digitalhouse.com/ar?utm_source=Google&utm_medium=paidsearch&utm_campaign=Lead&utm_term=Institucional&utm_content=institucional-institucional-curso-home-adresponsive-conversiones-kwcategory-institucional-exactas-none-all-otro-adtext-institucional-none-all-all-ar-search'>
            <TwitterIcon  size={30} logoFillIcon='white' round={true}></TwitterIcon>
        </TwitterShareButton>
        <LinkedinShareButton style={{display:'block'}} className='icono' url='https://www.digitalhouse.com/ar?utm_source=Google&utm_medium=paidsearch&utm_campaign=Lead&utm_term=Institucional&utm_content=institucional-institucional-curso-home-adresponsive-conversiones-kwcategory-institucional-exactas-none-all-otro-adtext-institucional-none-all-all-ar-search'>
            <LinkedinIcon  size={30} logoFillIcon='white' round={true}></LinkedinIcon>
        </LinkedinShareButton>
    </div>)
    }
  const images=props.images
  const imagesLocal=[product1,product2,product3,product4,product5]
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3500,
    slideCount:true,
    
  };
  const { id } = useParams();
  // const imagesLocal=[product1,product2,product3,product4,product5]

  useEffect(() => {
    console.log(props.likedProducts);
    console.log(id);
    const likedProducts = props.likedProducts;
    if (likedProducts.indexOf(Number(id)) != -1) {
      props.setLiked(true);
    }
  }, [props.likedProducts]);

  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(true);
  const [share, setShare] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (props.images) {
        if (props.images.length > 3) {
          setLoad(false);
        }
      }
    }, 2000);
  }, [props.images]);
  return (<> 

      {load?<div style={{width:'100%'}}><MockUp width='100%' height='454px' /></div>:<div className="contenedor-tablet-carousel" >

             <div className="tablet-slider-container">
              {share&&<Share/>}
            <Slider  {...settings}>
               {images.map((image,id)=><div className="tablet-imagenes" key={id}>
                     <LazyLoadImage effect="blur" width={'100%'} height='100%' src={image} alt="" />
                     <div className="counter-carousel">
                     <Paragraph variant="base" >{id+1}/{images.length}</Paragraph>
                     </div>
                     </div>)}

                
                
              
             </Slider>
             </div>
             <div className="tablet-carousel-icons" >
                 <Icon width="lg" icon="share" onClick={()=>setShare(!share)} />
                 <Icon width="lg" icon={props.liked?'favorite':'bEmptyHeart'} onClick={()=>props.handleFavorite()}/>
             </div>
            </div>}
           

             
            
         
  </>
    
  );
}