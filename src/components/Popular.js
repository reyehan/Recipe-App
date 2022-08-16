import React,{ useEffect, useState } from 'react';
import styles from "./Popular.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination} from 'swiper';
import 'swiper/css/pagination';
import styled from "styled-components";
import { Link } from "react-router-dom";




function Popular() {

   const [popular, setPopular] = useState([]);

   useEffect(() => {
      getPopular()      
   },[]);


  const getPopular = async() => {
   const api = await fetch
   (`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true&number=9`)
   const data= await api.json();
   console.log(data);
   setPopular(data.recipes);
  }

   return (
      <Wrapper>
         <h3>Popular Picks</h3>
     <Swiper 
     pagination={true} modules={[Pagination]} 
     slidesPerView={3}
     spaceBetween={20}>
      <div className={styles.popular}>
      {popular?.map((recipe)  => {
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

// const Gradient = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
//   z-index: 3;
//   border-radius: 2rem;
// `;


export default Popular;

// https://api.spoonacular.com/recipes/random?apikey=${process.env.REACT-APP-API-KEY}&number=9
// `https://api.spoonacular.com/recipes/random?apikey=${process.env.REACT_APP_API_KEY}&number=9`
// 5cd3f576b4eb4d75a5a34110ea4d8282