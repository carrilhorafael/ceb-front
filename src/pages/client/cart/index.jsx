import React, {useState} from 'react'

export default function Cart () {
    const [cart, setCart] = useState()

    return (
        <div>
            <h2>Seu carrinho</h2>
            {!cart?
                <div className="main_container">
                    <p>Você não tem nada no carrinho</p>
                </div>
                :
                <div className="main_container">
                    <p>Total: 1000 reais</p>
                </div>
                
            }

        </div>
    )
}