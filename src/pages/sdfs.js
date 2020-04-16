import React from "react";

export const Item = (img, title, price) => (
    <div className='card-deck' style={{padding: 20}}>
        <div className='card' style={{padding: '10px'}}>
            <img src={img} alt="" style={{ height: '180px'}}/>
            <p>{title}</p>
            <strong>{price}</strong>
            <button className='btn btn-sm btn-dark'>Добавить в корзину</button>
        </div>
    </div>
)
