import React from 'react'
import star_black from '../../assets/star_black.svg'
import star_golden from '../../assets/star_golden.svg'
import "./style.css"

export default function Evaluating ({grade}){

    const handleGrade = (evaluate, e) => {
        console.log(e.target.parentElement.parentElement.parentElement)
        e.target.parentElement.parentElement.parentElement.id= "grade-"+evaluate
    }
    return (
        <div>
            <button className="button_evaluating" onClick={e => console.log(1, e)}><img className="star" src={grade >= 1 ? star_golden : star_black}/></button>
            <button className="button_evaluating" onClick={e => console.log(2, e)}><img className="star" src={grade >= 2 ? star_golden : star_black}/></button>
            <button className="button_evaluating" onClick={e => console.log(3, e)}><img className="star" src={grade >= 3 ? star_golden : star_black}/></button>
            <button className="button_evaluating" onClick={e => console.log(4, e)}><img className="star" src={grade >= 4 ? star_golden : star_black}/></button>
            <button className="button_evaluating" onClick={e => console.log(5, e)}><img className="star" src={grade >= 5 ? star_golden : star_black}/></button>
        </div>
    )
}