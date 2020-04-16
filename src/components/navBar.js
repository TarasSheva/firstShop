import React from "react";
import {NavLink} from "react-router-dom";

export const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-brand">
            <NavLink className='nav-link' to='/'>Интернет магазин</NavLink>
        </div>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/catalog/p1' exact>Каталог</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/about'>Информация</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className='nav-link' to='/contacts'>Контакты</NavLink>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <NavLink className="btn btn-outline-secondary my-2 my-sm-0" to='/basket'>Корзина<span
                    className="badge badge-light"> 4</span></NavLink>
            </form>
        </div>
    </nav>
)