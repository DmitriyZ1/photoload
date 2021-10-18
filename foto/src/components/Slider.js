import { useRef, useState, useEffect } from 'react';



function Slider() {
    const [picture, setPicture] = useState([]);
    let lineslider = useRef();
    let sd = 0;

    
    useEffect(() => {
        
        fetch(`http://localhost:3500/slider`)
        .then((data) => data.json())
        .then((arr) => {
            setPicture(arr);
        })
        
    }, []);

    
    const sdvig = (naprv) => {
      
        if (naprv === 'r'){
            if(sd + 320 < picture.length * 320){
               
                sd += 320; 
            }
            else{
                sd = 0;
            }
        }
        else{
            if(sd - 320 >= 0){
                sd -= 320; 
            }
            else{
                sd = picture.length * 320 - 320;
            }
        }
        lineslider.current.style.right = `${sd}px`
    }    

    
    return (
        <div className="slider">
            <div className="slider__body">
                <div className="slider__window">
                    <div className="slider__content" ref={lineslider}>
                        {(picture.length > 0) ? picture.map((item, index) => 
                           <img src={`/photomin/min_${item}`} alt="pic" key={index}/> 
                        ) : 'loading'}
                    </div>
                </div>
           </div>
          
            <button className="butright" onClick={() => sdvig('l')}> &#8678; </button>
            <button className="butleft" onClick={() => sdvig('r')}>  &#8680; </button>
 
        </div>
    )
}


export default Slider;