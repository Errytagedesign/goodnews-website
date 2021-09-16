import React from 'react';
import NewsPage from '../../components/NewsPage';

import PoliticsImage from '../../assets/Politics 1.jpg'

function CanadaAppointsNigerianbornKayceeMadu() {
    return (
        <div>
            
            <NewsPage articleTitle="Canada appoints Nigerian-born Kaycee Madu, Justice Minister"  
            articleImage={PoliticsImage} 
            articleContents={<p className="p-5">
                    Nigerian-born Kaycee Madu has been appointed as Canada’s new minister of justice. <br /> <br />
                    Madu is also the first Black Man to occupy either Provincial or Federal Justice positions of the Justice Minister, Attorney General, or Solicitor General in the country. <br /> <br />
                    The appointee was born and raised in southeastern Nigeria. He graduated from the University of Lagos with a law degree in 2001 and relocated to Canada with his family in 2005. <br /> <br />
                    Announcing his appointment, the Member of Legislative Assemblies (MLA) for Edmonton-South West and Minister of Justice and Solicitor General stated on his Twitter page; “Thank you, everyone, for all the well wishes. I am beyond humbled to accept my new role as Minister of Justice and Solicitor General – where I will pursue fairness, equality, and justice for all with every ounce of strength I have.” <br /> <br />
                    Canadian Premier, Jason Kenney, elevated Madu to the position of minister of justice from Municipal Affairs in a cabinet shuffle that saw Calgary-Elbow MLA Doug Schweitzer deployed to the economic portfolio, according to Canada’s CBC report. <br /> <br />
                    Kenney described Madu as “a man who has experienced racial prejudice first hand and can bring that sensitivity to this important role,” adding that “I’m excited to have him in that position.” <br /> <br />
                    Madu, who has practiced law in both Nigeria and Alberta, was first elected as a Member of Legislative Assemblies in the April 2019 general election.

            </p>} />
        </div>
    )
}

export default CanadaAppointsNigerianbornKayceeMadu
