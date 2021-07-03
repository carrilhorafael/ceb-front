import React, {useState} from 'react'

export default function Cart () {
    const [cart, setCart] = useState()

    return (
        <div>
            <h3>Carrinho</h3>
            {!cart?
                <p>Você não tem nada no carrinho</p>
                :
                <div>
                    <p>Total: 1000 reais</p>
                </div>
                
            }

        </div>
    )
}