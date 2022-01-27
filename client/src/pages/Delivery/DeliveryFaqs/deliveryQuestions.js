import React, {useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const deliveryQuestion = ({ question, answer }) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <article className='dQuestion'>
            <header>
                <h3 onClick={() => setExpanded(!expanded)} className='dquest-title'>
                    {question}
                </h3>
                <button className='d-btn' onClick={() => setExpanded(!expanded)}>
                    {expanded ? <AiOutlineMinus/> : <AiOutlinePlus />}
                </button>
            </header>
            {expanded && <p>{answer}</p>}
        </article>
    )
}

export default deliveryQuestion