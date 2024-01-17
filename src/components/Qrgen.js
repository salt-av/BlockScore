import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

export default function Qrgen(props) {
    const searchParams = new URLSearchParams(useLocation().search);
    const val1 = searchParams.get('a');
    const handleSubmit = (e) => {
        e.preventDefault();
        let qrsrc = 
            `http://api.qrserver.com/v1/create-qr-code/?data=${val1}`;
        let qrimg = document.getElementById("qrimg");
        qrimg.src = qrsrc;
    }
    const styles = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '10px',  
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#eeeeee',
        borderRadius:"15px"
    }
      

    return (
        <>
        <Navbar />
    <div className="container my-3" style={styles}>
        <center>
        <form onSubmit={handleSubmit}>
            <br />
            <button type="submit" className='btn btn-primary'>
                Generate QR
            </button>
        </form>
        <div className="container my-2">
            <img id="qrimg" />
        </div>
        </center>
    </div>
    </>
    )
  }

