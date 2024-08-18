import  img0 from "../images/0.png";
import  img1 from "../images/1.png";
import  img2 from "../images/2.png";
import  img3 from "../images/3.png";
import  img4 from "../images/4.png";
import  img5 from "../images/5.png";
import  img6 from "../images/6.png";



export default function HangmanFigure(params){
    const handleImg = params.data === 6 
    ? img0 
    : params.data === 5 
    ? img1 
    : params.data === 4 
    ? img2 
    : params.data === 3 
    ? img3 
    : params.data === 2 
    ? img4 
    : params.data === 1 
    ? img5 
    : params.data === 0 
    ? img6
    : img0
    
    return (
        <div className='hangmanContainer'>
          <img src={handleImg} alt=""/>
        </div>
    );

} 

    
  






