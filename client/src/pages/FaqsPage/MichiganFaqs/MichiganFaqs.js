import React from 'react';

// Organize All Michigan FAQ Sections

import MichiganShopOrder from './MichiganShopOrder';
import MichiganLaw from './MichiganLaw';
import CannabisFaqs from '../CannabisFaqs/CannabisFaqs';
import ConsumptionFaqs from '../ConsumptionFaqs/ConsumptionFaqs';

// Organize All Michigan FAQ Data

import { MichiganLawData } from './MichiganLawData';
import { MichiganShopOrderData } from './MichiganShopOrderData';
import { CannabisData } from '../CannabisFaqs/CannabisData';
import { ConsumptionData } from '../ConsumptionFaqs/ConsumptionData';

// FAQ Styling Page
import '../faqs.css';


const MichiganFaqs = () => {

  function coFaqs() {
    window.location = '/colorado-faqs';
}

function miFaqs() {
    window.location = '/michigan-faqs';
}

  return (
    <div>
      <h1 className="faqsTitle">Frequently Asked Questions</h1>
        <div className='faqButtons'>
            <button onClick={coFaqs}>Colorado FAQS</button><button onClick={miFaqs}>Michigan FAQS</button>
        </div>
      <div className='accordion-floatLeft'>  
      <h2 className='accordion-header'>Shopping & Ordering</h2>
      <div className="accordion">
        { MichiganShopOrderData.map(({ question, answerP1, answerP2, answerP3 }) => (
          <MichiganShopOrder question={question} answerP1={answerP1} answerP2={answerP2} answerP3={answerP3} />
        ))}
      </div>
      </div>
      <div className='accordion-floatRight'>
      <h2 className='accordion-header'>Michigan Laws</h2>
      <div className='accordion'>
          { MichiganLawData.map(({ question, answerP1, answerP2, answerP3, answerP4}) => (
            <MichiganLaw question={question} answerP1={answerP1} answerP2={answerP2} answerP3={answerP3} answerP4={answerP4}/>
          ))}
      </div>
      </div>
      <div className='accordion-floatLeft'>
      <h2 className='accordion-header'>Cannabis</h2>
      <div className='accordion'>
          { CannabisData.map(({ question, answerP1, answerP2, answerP3, answerP4, answerP5}) => (
            <CannabisFaqs question={question} answerP1={answerP1} answerP2={answerP2} answerP3={answerP3} answerP4={answerP4} answerP5={answerP5} />
          ))}
      </div>
      </div>
      <div className='accordion-floatRight'>
      <h2 className='accordion-header'>Consumption</h2>
      <div className='accordion'>
          { ConsumptionData.map(({ question, answerP1, answerP2, answerP3, answerP4, answerP5}) => (
            <ConsumptionFaqs question={question} answerP1={answerP1} answerP2={answerP2} answerP3={answerP3} answerP4={answerP4} answerP5={answerP5} />
          ))}
      </div>
      </div>
    </div>
  );
};

export default MichiganFaqs;