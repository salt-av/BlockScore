import React, { useState } from 'react'
import Navbar from './Navbar';
import { useLocation, Link } from 'react-router-dom';
import {ethers} from 'ethers';
import abi from './../contracts/abi2';


export default function BuyTicket(props) {
    const name=document.getElementById("name");
    const searchParams = new URLSearchParams(useLocation().search);
    const val1 = searchParams.get('a');
    const val2 = searchParams.get('b');
    const day = searchParams.get('c');

    const handleTicket = async () => {
      try 
      {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []); 
        const signer = provider.getSigner();
        const contractAddress = '0xda72d7c3604272eafb57fee4aa2b8067bc7091c2';
        const contract = new ethers.Contract(contractAddress, abi.abi, signer);
       
        await contract.setName(name);
        console.log('Ticket issued success!');
      } 
      catch (error) 
      {
        console.error('Error ticketing:', error);
      }

    };
    const styles = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '10px',  
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#eeeeee', 
        borderRadius:"15px"
    }

    const [count, setCount] = useState(0);
      
    const price = (e) => {
        setCount(0.005*e.target.value);
      };

    
return (
<>
<Navbar/>
<div  className='container my-3'  style={styles}>
<div id="Match">
  <table align="center" width="95%">
    <thead>
    <tr width="100%" align="center">
      <td width="25%">{val1}</td>
      <td width="50%" align="center">
      <div className='container my-3'>Date - {day}/03/2024 || Time - 08:45 GMT</div>
      <div className='container my-3'>Location : {val1}'s Home Stadium </div>
      </td> 
      <td width="25%">{val2}</td>
    </tr>
    </thead>  
  </table>
</div>
<div>
    <center>
    <table width="30%">
    <thead>
    <tr width="100%">
      <td width="25%" align="right"><input type="number" onChange={price} placeholder='Number of Tickets' required /></td>
      <td width="50%" align="center">
      <div className='container my-3' id="price">{count}Eth </div>
      </td>
      <td width="15%"> <input id="name" type="text" placeholder='Enter Customer Name' required/></td>
      <td width="25%"><Link to={`/qr?a=${name}`}><input class="btn btn-primary" type="button" value="Pay Now" onClick={handleTicket}/></Link> </td>
    </tr>
    </thead>  
  </table>
  </center> 
</div>
</div>  
</>
)
}