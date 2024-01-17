import React from 'react';
import Navbar from './Navbar';
import Flag from './Flag';
import data from './schedule';

function Home(){
  return (<>

<Navbar />
<div className='container my-3' style={{paddingBottom:'1px'}}>
<center><h1>Upcoming Matches</h1></center> 
</div> 
{
data.map((data,i) => (
<Flag value1={`${data.Teama}`} value2={`${data.Teamb}`} day={`${data.day}`} />
)) 
}
</>
  );
};

export default Home;