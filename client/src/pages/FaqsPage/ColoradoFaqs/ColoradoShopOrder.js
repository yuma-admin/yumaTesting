import React, { useState } from 'react';
import { ColoradoShopOrderData } from './ColoradoShopOrderData';

const ColoradoShopOrder = ({ question, answerP1, answerP2, answerP3, answerP4, answerP5 }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{question}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">
      <p>{answerP1}</p>
      <p>{answerP2}</p>
      <p>{answerP3}</p>
      <p>{answerP4}</p>
      <p>{answerP5}</p>
      </div>}
    </div>
  );
};

const CoShopOrder = () => {
  return (
    <div className="accordion">
    { ColoradoShopOrderData.map(({ question, answerP1, answerP2, answerP3 }) => (
      <ColoradoShopOrder question={question} answerP1={answerP1} answerP2={answerP2} answerP3={answerP3} />
    ))}
  </div>
  )
}

export default CoShopOrder;