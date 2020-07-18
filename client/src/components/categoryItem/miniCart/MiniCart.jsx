import React from 'react';
import "./miniCart.scss"

const MiniCart = ({cart}) => {

        return (
            <div className="miniCart">
                    {cart.map((item)=>{
                            return(
                                <div className="miniCartItem">
                                <img className="nkar" src={item.imageUrl} alt={item.name} />
                                <h5 className="anun"> {item.name}</h5>
                        <h4 className="gin">{item.price}$</h4>
                                    </div>
                            )
                    })}
            </div>
        );

}

export default MiniCart;

