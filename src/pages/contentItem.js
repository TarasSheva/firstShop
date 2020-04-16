import React from "react";

export const ContentItem = ({notes}) => {
    return (
        <div className='card-deck' style={{padding: 20}}>{notes.map(note => (
            <div className='card' style={{padding: '10px'}}>
                <img src={note.img} alt="" style={{ height: '180px'}}/>
                {note.title}
                <strong>{note.price}</strong>
                <button className='btn btn-sm btn-dark'>Добавить в корзину</button>
            </div>
        ))}</div>
    )

}