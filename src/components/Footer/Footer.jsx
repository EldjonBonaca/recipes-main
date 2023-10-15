import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer (props) {
  const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  
  return (
    <footer>
      <div>
        <ul className='alphabet'>
          {alphabet.map((ele, idx) => {
            if (idx !== alphabet.length - 1) {
              return <li key={idx}><Link to={`/alphabet/${ele}`}>{ele}</Link> &middot;</li> 
            } else { 
              return <li key={idx}><Link to={`/alphabet/${ele}`}>{ele}</Link></li>  
            }
            
          })}
        </ul>
      </div>
    </footer>
  );
}