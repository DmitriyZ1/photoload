

function Modal({pic, closemodal}) {
    return (
        <div className="modal">
            <div className="body__modal">
                <div className="content__modal">
                    <img src={`/photo/${pic}`} alt="das" className="imgzoom"/>
                    <img src="/krest.png" alt="x"  className="closed" onClick={() => {closemodal()}}/>


                </div>
            </div>
        </div>
    )
}

export default Modal;