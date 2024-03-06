import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ $zindexFixed: "1030" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">ShopifyMart</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="d-flex justify-content-end collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Home</NavLink>

                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>

                            { isAuthenticated && <div className='mx-2 my-2'>{user.name}</div> }

                            {isAuthenticated ? (
                                <li>
                                    <button className="btn mx-1 btn-outline-primary my-2 my-sm-0" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                        Log Out
                                    </button>
                                </li>

                            ) : (
                                <li>
                                    <button onClick={() => loginWithRedirect()}>Log In</button>
                                </li>
                            )
                            }




                            <li className="nav-item">
                                <NavLink to="/cart" className="nav-link">
                                    <FiShoppingCart />
                                </NavLink>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;





