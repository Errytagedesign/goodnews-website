import React from 'react'
import  './NewsPage.css'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton } from 'react-share'
import { FacebookIcon, TwitterIcon, LinkedinIcon, WhatsappIcon  } from 'react-share'

function NewsPage(props) {
    
        
    return (
        <div className="newsPage mt-5 container">

            <div className="newstime d-flex flex-row justify-content-between p-1" > <p >Top News | GoodNews </p> <p>5 Minutes Ago </p> </div>
            <h2> {props.articleTitle} </h2>
            
            <img className="col-12 " src={props.articleImage } alt="" /> 
           
            
            <p className="p-5"> {props.articleContents} </p>

            <div>

                <FacebookShareButton 
                url={props.shareUrl}
                title={props.articleTitle}
                description={props.articleContents.slice(0,150)}>

               <section className="d-flex flex-row justify-content-between" > 
               <div> 
                   <p>Share</p> 
               </div> 
               <div>
                   <FacebookIcon logoFillColor="White" round="true"> </FacebookIcon> 
                </div> 
               </section>

                </FacebookShareButton>


                <TwitterShareButton 
                url={props.shareUrl}
                title={props.articleTitle}
                description={props.articleContents.slice(0,150)}>

               <section className="d-flex flex-row justify-content-between" > 
               <div> 
                   <p>Share</p> 
               </div> 
               <div>
                   <TwitterIcon logoFillColor="White" round="true"> </TwitterIcon> 
                </div> 
               </section>

                </TwitterShareButton>


                <LinkedinShareButton 
                url={props.shareUrl}
                title={props.articleTitle}
                description={props.articleContents.slice(0,150)}>

               <section className="d-flex flex-row justify-content-between" > 
               <div> 
                   <p>Share</p> 
               </div> 
               <div>
                   <LinkedinIcon logoFillColor="White" round="true"> </LinkedinIcon> 
                </div> 
               </section>

                </LinkedinShareButton>


                <WhatsappShareButton 
                url={props.shareUrl}
                title={props.articleTitle}
                description={props.articleContents.slice(0,150)}>

               <section className="d-flex flex-row justify-content-between" > 
               <div> 
                   <p>Share</p> 
               </div> 
               <div>
                   <WhatsappIcon logoFillColor="White" round="true"> </WhatsappIcon> 
                </div> 
               </section>

                </WhatsappShareButton>


            </div>
        </div>
    )
}

export default NewsPage
