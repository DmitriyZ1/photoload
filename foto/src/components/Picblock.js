import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function Picblock () {
    
    const [arrPicks, setArrPicks] = useState([]);
    const [pagelist, setPagelist] = useState(1);
    const [fetching, setFetching] = useState(true);

    
    useEffect(() => {
        
        if(fetching && pagelist <= 4){
            fetch(`http://localhost:3500/${pagelist}`)
            .then((data) => data.json())
            .then((arr) => {
                setArrPicks([...arrPicks, ...arr]);
                setPagelist((prevstate) => prevstate + 1);
            })
            .finally(() => { setFetching(false) })
        }   
        // eslint-disable-next-line
    }, [fetching])

    
    const scrolfun = (e) => {
        let obls = e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight);
        if (obls < 100) {
            setFetching(true);
        }
    }
    
    useEffect(() => {
        document.addEventListener('scroll', scrolfun);
        return () => {
            document.removeEventListener('scroll', scrolfun);
       }
    },[])

    
    
    return(
        <>  
            <div className="picblock_contein" >
                {
                    (arrPicks.length > 0) ? 
                        arrPicks.map((item, index)=> 
                            <Link to={`/show/${item}`} className="photo" key={index}> 
                                <img src={`/photomin/min_${item}`} alt="pic" />
                            </Link> )   :  <div>Loading...</div>
                }   
            </div>
        </>
    )
}

export default Picblock;