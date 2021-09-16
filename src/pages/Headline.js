import React from 'react';
import NewsPage from '../components/NewsPage'
// import articleImg from '../assets/Greater Lagos 5.jpg';

import Data from '../index.json'

function getQuery() {
    let search = window.location.search
    let params = new URLSearchParams(search)
    let foo = parseInt(params.get('id'))
    return foo
}

function Headline() {
    let news = Data.filter(news => news.id === getQuery())
    return (
                <div>
                    <NewsPage articleTitle={news[0].likes}  articleImage={news[0].url} articleContents={news[0].Description} />
                </div>
    )
}

export default Headline
