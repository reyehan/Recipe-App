import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useParams } from 'react-router-dom';


const Recipes = () => {
   const params = useParams();
   const [details, setDetails] = useState({});

   const fetchDetails = async () => {
      const data = await fetch
      (`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`);
      const  detailData = data.json();
      setDetails(detailData);
   }

   useEffect(() => {
      fetchDetails();
   }, [params.name]);

  return (
    <DetailWrapper>
      <div>
         <h2>{details.title}</h2>
         <img src={details.image} alt=""/>
      </div>
      <Info>
         <Button>Instructions</Button>
         <Button>Ingredients</Button>
      </Info>
    </DetailWrapper>
  )
};
const DetailWrapper = styled.div`
  margin: 10rem inherit 5rem;
  display: flex;
  @media (max-width: 1068px) {
    flex-direction: column;
  }
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
  h2 {
    margin-bottom: 2rem;
  }
  ul {
    margin-top: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  p {
    margin: 1rem 0;
    font-size: 1.1rem;
    line-height: 1.8rem;
    &:first-child {
      margin-top: 2rem;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid #000;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 5rem;
  @media (max-width: 1068px) {
    margin-top: 3rem;
    margin-left: 1rem;
  }
`;

export default Recipes;