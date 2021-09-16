import React from 'react'
import  './NewsPage.css'

function NewsPage(props) {
    
        
    return (
        <div className="newsPage mt-5 container">

            <div className="newstime d-flex flex-row justify-content-between p-1" > <p >Top News | GoodNews </p> <p>5 Minutes Ago </p> </div>
            <h2> {props.articleTitle} </h2>
            
            <img className="col-12 " src={props.articleImage } alt="" /> 
           
            
            <p> {props.articleContents} </p>
        </div>
    )
}

export default NewsPage
