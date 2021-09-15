import React from 'react';
import NewsPage from '../components/NewsPage'
import articleImg from '../assets/Headline 2.webp';

function Headline2() {
    return (
        <div>
             <NewsPage articleTitle='NRC Builds N320m, 40-bed Hotel for Travellers'  articleImage={articleImg} articleContents={<p>
                The Nigerian Railway Corporation (NRC) has constructed a 40-bed hotel worth N320 million at
                its Ebute-Meta station in Lagos. 
                <br/> <br/>
                The Railway Guest House has a swimming pool, restaurant and meeting hall, among other
                facilities.  <br/> <br/>
                Speaking at the inauguration on Wednesday, Managing Director, Railway Property, Timothy
                Zalanga, said the project was beginning a new business strategy for the NRC. It would
                subsequently focus on property development rather than land leases.  <br/> <br/>
                “This project shows that with the focus of the present regime on railway development, we can
                achieve more in the overall interest of the public,” he said.  <br/> <br/>
                Mr Zalanga said 60 per cent of the construction cost was funded from replacement costs of some
                of the NRC structures demolished for the new Lagos – Ibadan standard gauge line to get into
                Apapa port.  <br/> <br/>
                Railways Property funded the remaining 40 per cent. <br/> <br/>
                Managing Director, NRC, Fidet Okhiria, said that the guest house would be managed by
                hospitality and lifestyle company Ojez Group following a successful bidding process involving
                over 30 entities.  <br/> <br/>
                Joseph Odobeatu, Managing Director of Ojez Group, said the Nigerian Police Railways
                Command, private security and an internal security team would secure the hotel.
            </p>} />
        </div>
    )
}

export default Headline2
