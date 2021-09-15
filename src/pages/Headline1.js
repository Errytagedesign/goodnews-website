import React from 'react';
import NewsPage from '../components/NewsPage'
import articleImg from '../assets/Headline 1.jpg';



function Headline1() {
    return (
        <div>
            <NewsPage articleTitle='NCDC&#39;s Chikwe Ihekweazu Appointed WHO Assistant DG'  articleImage={articleImg} articleContents={<p>
                Director-General of the Nigeria Centre for Disease Control (NCDC), Dr. Chikwe Ihekweazu, has
                been appointed Assistant Director-General of the World Health Organization (WHO).
                He will be in charge of Health Emergency Intelligence with effect from November 1, 2021
                A statement issued on Tuesday, August 31 by WHO Director-General, Dr. Tedros Ghebreyesus,
                said Ihekweazu would lead the work on strengthening pandemic and epidemic intelligence
                globally, including heading the WHO Hub for Pandemic and Epidemic Intelligence in Berlin.
                Ghebreyesus&#39; statement read in part: &quot;I am pleased to welcome Dr. Chikwe Ihekweazu as an
                Assistant Director-General for Health Emergency Intelligence from November 1, 2021. He will
                lead the work on strengthening pandemic and epidemic intelligence globally, including heading
                the WHO Hub for Pandemic and Epidemic Intelligence in Berlin.  <br/> <br/>

                &quot;Dr. Ihekweazu is currently the Director-General of Nigeria Centre for Disease Control. He was
                trained as an infectious disease epidemiologist, has over 20 years of experience working in
                senior public health and leadership positions in several National Public Health Institutes,
                including the South African National Institute for Communicable Diseases, the United
                Kingdom&#39;s Health Protection Agency, and Germany&#39;s Robert Koch Institute.
                &quot;He has led several short-term engagements for WHO, mainly in response to major infectious
                disease outbreaks around the world. <br/> <br/>

                &quot;Dr. Ihekweazu, a Nigerian national, who was born in Germany, is a graduate of the College of
                Medicine, University of Nigeria and has a Masters in Public Health from the Heinrich-Heine
                University, Dusseldorf, Germany. In 2003, he was awarded a Fellowship for the European
                Programme for Intervention Epidemiology Training and subsequently completed his Public
                Health specialization in the United Kingdom. He is widely published in medical peer-reviewed
                journals.&quot;
            </p>} />
        </div>
    )
}

export default Headline1
