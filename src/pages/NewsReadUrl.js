import React from 'react';
import NewsPage from '../components/NewsPage'
// import articleImg from '../assets/Greater Lagos 5.jpg';

// import Data from '../topstories.json'

import {Data} from '../components/test'





function getQuery() {
    let search = window.location.search
    let params = new URLSearchParams(search)
    let foo = parseInt(params.get('id'))
    return foo
}

function NewsReadUrl() {
    let news = Data.filter(news => news.id === getQuery())
   
    
    return (
        <div>
            <NewsPage articleTitle={news[0].title}  articleImage={news[0].url} articleContents={news[0].contents} />
           
        </div>
    )
}

export default NewsReadUrl