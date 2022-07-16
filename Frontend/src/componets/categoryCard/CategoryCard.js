import { Card, Container, Divider, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

// const newsData = async () =>{
//   await newsResponse();
//   // console.log(newses)
//   // return newses
// }

// console.log(newsData(), "newsData")


function CategoryCard(props) {

  const navigate = useNavigate();

  const handelClick =(id) =>{
    navigate(`/categories/${id}`);

  }

  return (
    <>
    
      <Card style={{ width: 300 ,padding:"10px 0", margin:"20px 0", textAlign:'start'}} 
      onClick={()=>handelClick(props.category.category)}
      >
        <Container>
          <Typography variant={"h6"} fontWeight={500}>
            {props.category.category}
          </Typography>
        </Container>
      </Card>
    </>
  );
}

export default CategoryCard;
