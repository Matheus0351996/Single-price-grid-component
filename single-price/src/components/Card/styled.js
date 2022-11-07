import styled from "styled-components";

export const Container = styled.div`
width: 700px;
height: 558px;
background-color: lightcyan;
border-radius: 5px;
font-family: 'Karla', sans-serif;
font-weight: 100;
margin-bottom: 200px;
`

export const Title = styled.h1`
color: hsl(179, 62%, 43%);
padding: 20px;
`
export const SubTitle = styled.h2`
color: hsl(71, 73%, 54%);
margin-left: 1.3rem;
margin-bottom: 0px;
`
export const Paragraph= styled.p`
color: hsl(218, 22%, 67%);
margin-left: 20px;
margin-bottom: 30px;
`



export const BluePart = styled.div`
display: flex;
justify-content: space-evenly;
height: 300px;
width: 100%;

h3{
    font-size: 16px;
    padding: 30px;
    height:10px;
}

`

export const DarkBluePart = styled.div`
background-color: hsl(179,62%,43%);
border-radius: 0 0 0px 10px;
width:50%;

h3{
    color: hsl(180, 100%, 99%);
    margin-left: 2rem;
    padding:20px;
}

.acess{
color: hsl(179, 51%, 80%);
margin-left: 16px;
margin-top: 0px;
margin-left: 2rem;
}

`
export const LightBluePart =styled.div`
background-color: hsl(179.5, 47%, 52%);
border-radius: 0 0 10px 0px;
width:50%;


h3{
    color: hsl(180, 100%, 99%);
}

p{
    color: hsl(179, 51%, 80%);
    margin: 5px;
    margin-left: 2rem;
}

`

export const Price = styled.div`
display: flex;
margin: 10px;
align-items: center;
height: 50px;

.price{
    font-size: 30px;
    color: hsl(180, 100%, 99%);
    margin-left: 1rem;
    
}

.per-month{
    color: hsl(179, 51%, 80%);
    margin-left:1rem
}

`


export const Button = styled.button`
background-color: rgb(188,221,61);
justify-content: center;
margin: 10px;
width: 230px;
height: 40px;
border-radius: 8px;
color:white;
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
border: none;
margin-left: 2rem;
margin-top: 2rem;
box-shadow: 1rem 1rem 2rem rgba(0,0,0,0.2);

a{
    text-decoration: none;
}

`
