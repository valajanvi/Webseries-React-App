import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

function App() {
    return (



        <>
            <h1 className="heading">Top Web Series of 2024</h1>
          
           
            










           

            {       
                Sdata.map((val, index, arr) => {

                      return (<Card
                    key={val.id}
                    imgsrc={arr[index].imgsrc}
                    title={arr[index].title}
                    sname={arr[index].sname}
                    link={arr[index].link}
                             />)
                          }
                           )}
             
        </>)}
       
 export default  App ;