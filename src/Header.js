import  React  from "react"
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
    const [{basket, user} ,dispatch] = useStateValue();
    
    const handleAuthentication = () => {
      if (user) {
        auth.signOut();
      }
    }

  return (
        <div className='header'>
         <Link to="/">
          <img  className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>

     <div className="header_search">
       <input className='header_searchInput' type="text" />
         <SearchIcon className='header_searchIcon'/>
        </div>

  <div className="header_nav">
      <Link to={!user && '/Login'}>
       <div onClick={handleAuthentication}
       className="header_option">
         <div className='header_one'>
            hello{!user ? 'guest': <p>{user?.email}</p>}
        </div>
        <span className="header_two">{user ? 'sign Out' : 'sign In'}</span>
    </div>
    </Link>

    <div className="header_option">
        <span className='header_one'>
            Review
        </span>
        <span className="header_two">Order</span>
    </div>
    <div className="header_option">
        <span className='header_one'>
            Your
        </span>
        <span className="header_two">Prime</span>
    </div>
    <div className="header_optionBasket">
        <Link to="/Checkout">
        <ShoppingCartIcon className="cart"/>
        <span className="header_basketCount">{basket?.length}</span>
        </Link>
    </div>

      </div>
    </div>
 )
}

export default Header
