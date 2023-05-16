import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  } 

 body
{
  overflow-x: hidden !important;
  font-family: 'Poppins', sans-serif;
  font-family: 'Open Sans', sans-serif;
  
}

.product-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}


.card {
  position: relative;
  overflow: hidden;
}

.card img {
  transition: transform 0.3s ease;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.card:hover img {
  transform: scale(1.1); 
}



`;

export default GlobalStyle;
