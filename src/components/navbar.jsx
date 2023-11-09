import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className='flex justify-evenly'>
        <li>
          <Link  className='' to="/">Home</Link>
        </li>
        <li>
          <Link to="/basket">Basket</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
