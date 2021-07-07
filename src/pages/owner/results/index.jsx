import React from 'react'
import Evaluating from '../../../common/evaluating/EvaluatingGrades'
import "./style.css"

export default function RestaurantResults (){

    return (
        <main>
            <h2>Resultados</h2>
            <div className="main_container">
                <div className="results_grid">
                    <div className="results_item_grid">
                        <p className="result_title">Valor total em Vendas</p>
                        <p>R$ 10.000</p>
                    </div>
                    <div className="results_item_grid">
                        <p className="result_title">Prato mais vendido</p>
                    </div>
                    <div className="results_item_grid">
                        <p className="result_title">Avaliação média</p>
                        <Evaluating grade={4} />
                    </div>
                    <div className="results_item_grid">
                        <p className="result_title">Numero de Cliente Fidelizados</p>
                        <p>176</p>
                    </div>
                </div>
            </div>
        </main>
    )
}