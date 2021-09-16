import React from 'react';

// News Components
import Headlines from '../components/Headlines';
import Newscard from '../components/NewsCard';




import vector from '../assets/icons/Vector.svg'
import { Link } from 'react-router-dom';


// bootsrapt css
import 'bootstrap/dist/css/bootstrap.min.css';

// Images

// import Dtiger from '../assets/Sports 3.jpg'
// import PoliticsImage from '../assets/Politics 1.jpg'
// import SME from '../assets/Greater Lagos 1.jpg'
// import IkdBois from '../assets/Entertainment 3.jpg'
// import MikanoGeely from '../assets/Business and Finance 1.jpg'
// import NigerianMath from '../assets/Education 2.png'
// import PiggyVest from '../assets/piggyvest.jpg'
// import Deola from '../assets/Fashion and Lifestyle 1.jpeg'

// import Data from '../topstories.json';
import {Data} from '../components/test';
// import Headline1 from './Headline1';
// import DTigersShockUS from './TopStories/DTigersShockUS';
// import DTigersShockUS from './TopStories/DTigersShockUS';
// import DTigersShockUS from './TopStories/DTigersShockUS';
// import DTigersShockUS from './TopStories/DTigersShockUS';





function TopNews() {
    return (
        <div className=" container mt-5">

            <div className=" d-flex flex-row justify-content-between">
                <div className="d-flex flex-row justify-content-between"> 
                <div><img className="headicon" src={vector} alt="" /></div> <h2> HEADLINES </h2> </div> 
                <div>  <Link to="/HeadlineStories"> See All </Link> </div>
            </div>

            <Headlines />

             
            {/* News Cards Thumbnails */}

             <section className="container d-flex flex-wrap">


             {Data.map(news=> (
                   <div className="col-12 col-md-6 col-lg-4 p-1"> 
                   <Newscard  title={news.title} name={news.Name} imagesrc={news.url} description={news.Description} url={"/newsreadurl?id=" + news.id} />
                   </div> 
                ))}
                 
                 
                 {/* {Data.map(news=> (
                     
                   <div className="col-12 col-md-6 col-lg-4 p-1"> 
                   <Newscard  Title={news.title} Imagesrc={news.url} Description={news.Description.slice(0,150)} pageurl={news.id/Headline1} />
                   </div> 
                     
                  ))} */}
 
                 
{/*              
                <div className="col-12 col-md-6 col-lg-4 p-1">
                    <Newscard Title="D'Tigers Shock US in Pre-Olympics Warm-Up" name="Good News" 
                    Imagesrc={Dtiger} pageurl="/Dtigershockus"
                    Description="Nigeria's male basketball team, popularly known as D'Tigers, began preparations for the Tokyo 2020 Olympics by pulling off a shock 90-87 win over the United States of America. " />
                
                </div> 

                <div className="col-12 col-md-6 col-lg-4 p-1">
                    <Newscard  Title="Canada appoints Nigerian-born Kaycee Madu, Justice Minister" name="Good News" 
                    Imagesrc={PoliticsImage} pageurl="/CanadaAppointsNigerianbornKayceeMadu"
                    Description="Nigerian-born Kaycee Madu has been appointed as Canada’s new minister of justice.
                    Madu is also the first Black Man to occupy either Provincial or Federal Justice positions of the Justice Minister, Attorney General, or Solicitor General in the country.
                    " />
                 
                </div> 


                <div className="col-12 col-md-6 col-lg-4 p-1">
                    <Newscard  Title="Gov’t boost MSMEs, sets up business hub, e-commerce platform" name="Good News" 
                    Imagesrc={SME} pageurl="/Govtboostmsmes"
                    Description="The Lagos State Government has announced the setting up of a business hub and e-commerce digital platform as part of the initiatives to enhance the growth of Micro Small, and Medium Enterprises (MSMEs) and showcase their products.
                    " />
                 
                </div> 

                <div className="col-12 col-md-6 col-lg-4 p-1">
                    <Newscard  Title="Ikorodu Bois appear on Times Square’s Billboard " name="Good News" 
                    Imagesrc={IkdBois} pageurl="/Ikorodubois"
                    Description="The Ikorodu Bois have featured on a Netflix advert displayed on Broadway Times Square, New York City. 
                    The young internet sensations joined A-list celebrities including Burna Boy, Wizkid, Tiwa Savage, and Davido, who had featured on a billboard in Times Square.            " />
                 
                </div> 

                <div className="col-12 col-md-6 col-lg-4 p-1">
                    <Newscard  Title="Mikano Geely Assembly Plant Comes Alive in Ogun" name="Good News" 
                    Imagesrc={MikanoGeely} pageurl="/Ikorodubois"
                    Description="In a move that would further boost local manufacturing and grow the economy, Mikano International, in collaboration with leading automobile maker Geely, has established an assembly plant in Nigeria." />
                 
                </div> 

                <div className="col-12 col-md-6 col-lg-4 p-1">
                    <Newscard  Title="Nigerian maths prodigy, Faith Odunsi, shines on the global stage
" name="Good News" 
                    Imagesrc={NigerianMath} pageurl="/Ikorodubois"
                    Description="Fifteen-year-old Faith Odunsi recently made Nigeria proud as she emerged the Global Open Mathematics Tournament winner, an international competition with participants from Europe, Africa, America, Asia, and Australia. " />
                 
                </div>  */}


 

              
               

             </section>
             
        </div>
    )
}

export default TopNews
