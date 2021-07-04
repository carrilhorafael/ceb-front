import React, { useState, useContext } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
import Evaluating from '../../../common/evaluating/EvaluatingGrades'
import { GlobalContext } from '../../../context/GlobalContext'
import { getHistory } from '../../../service/Api'
import './style.css'

export default function Wallet () {
    const {user} = useContext(GlobalContext)
    const [history, setHistory] = useState([])
    let grade = 4
    useEffect(()=>{
        getHistory().then(({data})=>{
            setHistory(data)
        })
    }, [])
    return (
        <div>
            <h2>Carteira</h2>
            {!user?
                null
                :
                <div className="main_container">
                    <p>Saldo disponível: R$ {user.wallet.money}</p>
                    {history.map(item => (
                        <div className={`carts_history`} >
                            <div>
                                <p className="restaurant_name">Nome do restaurante</p>
                                <p className="restaurant_name">Rua dos bobos, 134, Adiv, Pros</p>
                            </div>
                            <p>Preço Total: R$21.22</p>
                            <div className="restaurant_evaluated">
                                <Evaluating grade={grade}/>
                            </div>
                        </div>
                    ))}
                </div> 
            }
        </div>
    )
}