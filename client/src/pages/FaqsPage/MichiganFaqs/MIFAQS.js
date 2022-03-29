import React, { useState } from 'react';
import MiLawFaqs from './MichiganLaw';

import '../faqs.css';
import ConsumptionFaqs from '../ConsumptionFaqs/ConsumptionFaqs';
import CannabisFaqs from '../CannabisFaqs/CannabisFaqs';
import MichiganShopOrder from './MichiganShopOrder';



const MIFAQS = () => {

        // Uses useState to display the category that the user clicks : Defaults to Statelaws section //
    const [faqs, setFaqs] = useState("stateLaws")

    return (
        <div className='yumaBorder container-fluid'>
            <div className='faqTitle'>
            FAQs
            </div>
            <div className='faqHeaders'>
            <a href='#' onClick={() => setFaqs("stateLaws")}>State Laws</a>
            <a href='#' onClick={() => setFaqs("consumption")}>Consumption</a>
            <a href='#' onClick={() => setFaqs("cannabis")}>Cannabis</a>
            <a href='#' onClick={() => setFaqs("ordering")}>Ordering</a>
            </div>
            <div className='container'>
             {faqs === "stateLaws" && <MiLawFaqs/>}
             {faqs === "consumption" && <ConsumptionFaqs/>}
             {faqs === "cannabis" && <CannabisFaqs/>}
             {faqs === "ordering" && <MichiganShopOrder/>}
            </div>
        </div>
    )
}

export default MIFAQS