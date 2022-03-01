import React from 'react';
import CannabisFaqs from '../CannabisFaqs/CannabisFaqs';
import ConsumptionFaqs from '../ConsumptionFaqs/ConsumptionFaqs';
import ColoradoLaw from './ColoradoLaw';
import ColoradoShopOrder from './ColoradoShopOrder';

const COFAQS = () => {
    return (
        <div className='faqContainer'>
            <div className='faqTitle'>
                FAQs
            </div>
            <div className='faqHeaders'>
                <a>State Laws</a>
                <a>Consumption</a>
                <a>Cannabis</a>
                <a>Ordering</a>
            </div>
            <div id='stateLaws'>
                <ColoradoLaw/>
            </div>
            <div id='consumption'>
                <ConsumptionFaqs/>
            </div>
            <div id='cannabis'>
                <CannabisFaqs/>
            </div>
            <div id='ordering'>
                <ColoradoShopOrder/>
            </div>
        </div>
    )
}

export default COFAQS