import React, { useState } from 'react';
import './frontpage.css';
import Main from './Main';
export default function Frontpage({ showMain, handleRegisterClick }){
    

    return(
        <div className='container'>
            <h1>UNMASKED</h1>
            <div className="content">
            
                <div className="left-side">
                    
                    <p className='first'>Prepare to have your mind blown and your perceptions challenged with Unmasked - the ultimate magic and mentalism event! Excel 2022 is proud to present this year's edition of Unmasked, featuring the incredible Fazil Basheer, renowned for his mesmerizing Tricksmania show.

                            
                        
                        <p className='second'>With a reputation for delivering some of the most captivating and mind-bending performances, Fazil Basheer will take you on a journey of mystery, wonder, and amazement. Unmasked is a show that will not only entertain you, but it will also stimulate your curiosity and leave you with a sense of wonder and intrigue.
                        </p>
                        </p>
            
                        </div>
                
                <div className="image">
                    <img src="https://coming-soon-b7l.pages.dev/static/media/excel2022.932cc8102da68199bc0f34683e7527c1.svg" alt=""></img>
                </div>
               
            </div>
            {!showMain && <button className='register' onClick={handleRegisterClick}>REGISTER</button>}
            {showMain && <Main />}
        </div>
    );
}