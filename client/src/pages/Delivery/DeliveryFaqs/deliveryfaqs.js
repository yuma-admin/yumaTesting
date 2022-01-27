import React, {useState} from 'react'
import '../DeliveryFaqs/deliveryfaqs.css';
import DeliveryAccordion from './deliveryQuestions';
import deliverydata  from './deliverydata';


function deliveryfaqs() {
    const [questions, setQuestions] = useState(deliverydata)
    return (
        <div className="container-fluid">
            <div className="dfaqs-container">
                <div className=" dfaqs-section dfaqs-border">
                    <div className="col-6">
                        <h2 className="dfaqs-header">
                            FREQUENTLY ASKED QUESTIONS    
                        </h2>
                        <section className='question-container'>
                        {questions.map((question) => (              
                        <DeliveryAccordion key={question.id} {...question} />
                        ))}
                        </section>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default deliveryfaqs