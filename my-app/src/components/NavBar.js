import {useContext } from 'react'
import { useNavigate } from "react-router";
import { CurrentUser } from '../context/CurrentUser';

function NavBar() {

    const navigate = useNavigate()

    const { currentUser } = useContext(CurrentUser)

    let loginActions = (
        <>
       
            <li style={{ float: 'center' }}>
                <p><h6>Welcome to Barking Boutique</h6></p>
            </li>
        {/*
            <li style={{ float: 'right' }}>
                <a href="/" onClick={() => navigate.push("/login")}>
                    Login
                </a>
            </li> */}
        </>
    )

    if (currentUser) {
        loginActions = (
            <>
            <li style={{ float: 'right' }}>
                <a href="/" onClick={() => navigate.push("/login")}>Log Out</a>
            </li>
            <li style={{ float: 'right' }}>
                Logged in as {currentUser.first_name} {currentUser.last_name}
            </li>
        </>
        )
    }

    return (
        <nav>
            <ul>
                

                <li>
                    <a href="/login" onClick={() => navigate.push("/login")}>
                        Log in
                    </a>
                </li>
                <li>
                    <a href="/signup" onClick={() => navigate.push("/signup")}>
                        Sign up
                    </a>
                </li>
                <li>
                    <a href="/cart" onClick={() => navigate.push("/cart")}>
                        Shopping Cart 🛒
                    </a>
                    
                </li>
                {loginActions}
            </ul>
        </nav>
    )
}

export default NavBar;