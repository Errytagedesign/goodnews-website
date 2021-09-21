import React from 'react';

import Newscard from '../components/NewsCard';

// import { Link } from 'react-router-dom';

// bootsrapt css
import 'bootstrap/dist/css/bootstrap.min.css';

import {PoliticsData} from '../components/PoliticsData'

function Politics() {
    return (
        <div>
        <section className="container d-flex flex-wrap">


            {PoliticsData.map(news=> (
            <div className="col-12 col-md-6 col-lg-4 p-1"> 
            <Newscard  title={news.title} name={news.Name} imagesrc={news.thumbnail} description={news.Description} url={"/politicsread?id=" + news.id} />
            </div> 
            ))}


        </section>



        </div>
    )
}

export default Politics
