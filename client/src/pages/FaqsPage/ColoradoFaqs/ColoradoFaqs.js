import React from 'react';

// Organize All Colorado Faqs Pages

import ColoradoLaw from './ColoradoLaw';
import ColoradoShopOrder from './ColoradoShopOrder';
import CannabisFaqs from '../CannabisFaqs/CannabisFaqs';
import ConsumptionFaqs from '../ConsumptionFaqs/ConsumptionFaqs';

// Organize All Colorado Data Files

import { ColoradoLawData } from './ColoradoLawData';
import { ColoradoShopOrderData } from './ColoradoShopOrderData';
import { CannabisData } from '../CannabisFaqs/CannabisData';
import { ConsumptionData } from '../ConsumptionFaqs/ConsumptionData';


// Faqs Styling Page
 
import '../faqs.css';

const ColoradoFaqs = () => {

    
        function coFaqs() {
            window.location = '/colorado-faqs';
            
        }

        function miFaqs() {
            window.location = '/michigan-faqs';
        }

    return (
      <div className='faqsContainer'>
        <h1 className="faqsTitle">FAQs</h1>
        <div className='faqButtons'>
            <button onClick={coFaqs}>Colorado FAQS</button><button onClick={miFaqs}>Michigan FAQS</button>
        </div>
        <div className='colorado-faq'>
        <div className='accordion-floatLeft'>
        <h2 className='accordion-header'>Shopping & Ordering</h2>
        <div className="accordion">
          { ColoradoShopOrderData.map(({ question, answerP1, answerP2, answerP3 }) => (
            <ColoradoShopOrder question={question} answerP1={answerP1} answerP2={answerP2} answerP3={answerP3} />
          ))}
        </div>
        </div>
        <div className='accordion-floatRight'>
        <h2 className='accordion-header'>Colorado Laws</h2>
        <div className='accordion'>
            { ColoradoLawData.map(({ question, answerP1, answerP2, answerP3, answerP4}) => (
              <ColoradoLaw question={question} answerP1={answerP1} answerP2={answerP2} answerP3={answerP3} answerP4={answerP4}/>
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
      </div>
    );
  };
  
  export default ColoradoFaqs;