import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getRandom } from '../../utils/api';
import './Header.css';
import Logout from '../Logout';

export default function Header (props) {
  const [random, setRandom] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    getRandom(setRandom)
  }, [])

  function handleClick() {
    getRandom(setRandom)
  }

  return (
    <header>
      <div className='header-elements'>
        <div>
          <Link to='/'>
            <img className='svg logo-svg' src="/home.svg" />
          </Link>
          <Link to='/category'>
            <img className='svg logo-svg' src="/book-open.svg" />
          </Link>
          <Link to='/area'>
            <img className='svg logo-svg' src="/area.svg" />
          </Link>
          <Link to='/random' state={{...random}} onClick={handleClick}>
            <img className='svg logo-svg' src="/random.svg" />
          </Link>
        </div>
        <Link to='/'>
          <h1 className='title'>Recipe</h1>
        </Link>
        <Link to='/favorites'>
          <img className='svg heart-svg' src="/filled-heart.svg" />
        </Link>
          <button className='login-svg'  onClick={() => navigate('/login')}>Login</button>
          <Logout />
      </div>
        
    </header>
  );
}