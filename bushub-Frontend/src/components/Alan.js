import React, { useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import { withRouter } from 'react-router-dom';

function Alan(props) {


    useEffect(() => {
       
        alanBtn({
            key: 'f162d2abc38fd676df5a8b7089373a672e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({ command }) => {
              if (command === 'testCommand') {
                  alert('this code executed');
              }else if(command ==='search'){
              props.history.push("/search");  
              }else if(command==='login'){
                props.history.push('/login')
              }else if(command==='registration'){
                props.history.push('/reg')
              }else if(command==='home'){
                props.history.push('/')
              }
            }
        });


 
      }, []);


      
      
    
  return (
  <></>
  )
}

export default withRouter(Alan)