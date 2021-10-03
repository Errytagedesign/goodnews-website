import React from 'react';

import NewsPage from '../components/NewsPage';
// import articleImg from '../assets/Greater Lagos 5.jpg';

// import Data from '../topstories.json'



import {GreaterlagosData} from '../components/GreaterlagosData';


function getQuery() {
    let search = window.location.search
    let params = new URLSearchParams(search)
    let foo = parseInt(params.get('id'))
    return foo
}

function Greaterlagosread() {
    let news = GreaterlagosData.filter(news => news.id === getQuery())
    // let readUrl = <a href="/greaterlagosread?id="> read </a>   

    return (
        <div>
            <NewsPage articleTitle={news[0].title}  articleImage={news[0].url} articleContents={news[0].contents} shareUrl={news[0].id + "/greaterlagosread?id=" } />
        </div>
    )
}

export default Greaterlagosread
