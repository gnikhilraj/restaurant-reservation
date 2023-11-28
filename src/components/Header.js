import React from 'react'
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg'

function Header(){
 
    return (
      <header className='header'>
        <section>
            <div className='banner'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Meditarian restraunt, focused on traditional recipes served with modern twist.</p>
                <Link to="/booking"><button>Reserve Table</button></Link>

            </div>
            <div className='banner-img'>
                <img src={bannerImg} alt=''/>
            </div>
        </section>
        
      </header>
    )
  
}

export default Header;