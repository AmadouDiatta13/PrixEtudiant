import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/"><img id="logo" src="/images/logo.jpg" alt="Prix Etudiant"></img></Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Chariot</a>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Connexion</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Commandes</Link>
                    <Link to="/products">Produits</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/category/Materiel Electronique">Materiel Electronique</Link>
            </li>
             <ul>
              <li>
                <Link to="/category/Menager">Menager</Link>
              </li>					  
					    <li>
              <Link to="/category/Ordinateur">Ordinateur</Link>
              </li>
					    <li>
              <Link to="/category/Portable">Portable</Link>
              </li>
               <li>
              <Link to="/category/Tablette">Tablette</Link>
              </li>
					    <li>
              <Link to="/category/Accessoire">Accessoire</Link>
              </li>
				     </ul>
            <li>
              <Link to="/category/Habillement">Habillement</Link>
            </li>
             <ul>
              <li>
                <Link to="/category/Homme">Homme</Link>
              </li>
              <li>
               <Link to="/category/Femme">Femme</Link>
              </li>
             <li>
             <Link to="/category/Enfant">Enfant</Link>
             </li>            
					</ul>               
            <li>
              <Link to="/category/Beaute">Beauté</Link>
            </li>
            <li>
              <Link to="/category/Alimentation">Alimentation</Link>
            </li>
            
            <li>
              <Link to="/category/Immobilier">Immobilier</Link>
            </li>
            <ul>
            <li>
            <Link to="/category/Terrain">Terrain</Link>
            </li>            
            <li>
              <Link to="/category/Construction">Construction</Link>
            </li>            
            <li>
            <Link to="/category/Assurance">Assurance</Link>
            </li>            
            <li>
            <Link to="/category/Location">Location</Link>
            </li>           
					 </ul>
            <li>
              <Link to="/category/Vehicule">Vehicule</Link>
            </li>
            <ul>
              <li>
              <Link to="/category/Voiture">Voiture</Link>
              </li>           
            <li>
            <Link to="/category/Moto">Moto</Link>
            </li>           
            <li>
            <Link to="/category/Velo">Velo</Link>
            </li>           
           </ul>       
            <li>
              <Link to="/category/Decoration">Decoration</Link>
            </li>
            <li>
              <Link to="/category/Animaux">Animaux</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">
	 <a href=" +221785202084" ><img src="/images/icons/whatsapp.svg" alt="whatsapp"></img></a>
	 <a href=""><img src="/images/icons/twitter.svg" alt="twitter"></img></a>
	 <a href="https://www.facebook.com/Prix-%C3%A9tudiants-254341861865406/" target="_blank"><img src="/images/icons/facebook.svg" alt="facebook"></img></a>
	 <a href="https://www.instagram.com/prixetudiant/"><img src="/images/icons/instagram.svg" alt="instagram"></img></a>
	 <a href="mailto:prixetudiant@gmail.com"><img src="/images/icons/gmail.svg" alt="gmail"></img></a>
   <p>+221-78-520-20-84</p>
   </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
