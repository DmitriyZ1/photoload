import { useParams, useHistory } from 'react-router-dom';
import { useState } from 'react';

import Modal from './Modal';


function Photo() {
    let { imgname } = useParams();
    let history = useHistory();
    // const [modalpic, setModalpic] = useState();
    
    const [showmodal, setShowmodal] = useState(false);

    const modalka = () => {
        setShowmodal(true);
    }
    
    const modalkaclose = () => {
        setShowmodal(false);
    }

    const arrow = () => {
        history.push('/');
    }
    
    
    return (
        <div className="ph">
           <div className="ph_show"> 
                <img src="/arrow.png" alt="" onClick={() => {arrow()}} className="arrow"/>
                <img src={`/photo/${imgname}`} alt="" onClick={() => modalka()} className="item_photo" />
           </div>
           {showmodal && (<Modal pic={imgname} closemodal={modalkaclose} /> )}
        </div>
    )
}


export default Photo;