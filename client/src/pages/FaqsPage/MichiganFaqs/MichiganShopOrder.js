import React, { useState } from 'react';
import {MichiganShopOrderData} from './MichiganShopOrderData'

const MichiganShopOrderAccordion = ({ question, answerP1, answerP2, answerP3 }) => {
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
      </div>}
    </div>
  );
};

const MichiganShopOrder = () => {
  return (
    <div className="accordion">
    { MichiganShopOrderData.map(({ question, answerP1, answerP2, answerP3 }) => (
      <MichiganShopOrderAccordion question={question} answerP1={answerP1} answerP2={answerP2} answerP3={answerP3} />
    ))}
  </div>
  )
}

export default MichiganShopOrder;