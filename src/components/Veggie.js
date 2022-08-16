import React,{ useEffect, useState } from 'react';
import styles from "./Popular.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination} from 'swiper';
import styled from "styled-components";
import 'swiper/css/pagination';
import { Link } from "react-router-dom";




function Veggie() {

   const [veggie, setVeggie] = useState([]);

   useEffect(() => {
      getVeggie()      
   },[]);


  const getVeggie = async() => {
   const api = await fetch
   (`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true&number=9&tags=vegetarian`)
   const data= await api.json();
   console.log(data);
   setVeggie(data.recipes);
  }

   return (
      <Wrapper>
         <h3>Vegetarian Picks</h3>
     <Swiper 
     pagination={true} modules={[Pagination]} 
     slidesPerView={4}
     spaceBetween={20}>
      <div className={styles.popular}>
      {veggie?.map((recipe)  => {
         return (
            
            <>
            
            <SwiperSlide key={recipe.id}>
           <div className={styles.popularMenu} key={recipe.id}>
            <Card>
            <Link to={"/recipe/" + recipe.id}>
               <p className={styles.title}>{recipe.title} </p>
               <img src={recipe.image} alt={recipe.title} />
            </Link>
            </Card>
            </div>
            </SwiperSlide>
            </>
            
         );

      })}
      
      </div>
      </Swiper>
      </Wrapper>
   );  
};
const Wrapper = styled.div`
  margin: 4rem 0;
`;

const Card = styled.div`
  min-height: 25rem;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    color: #fff;
    width: 100%;
    height: 40%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Veggie;
