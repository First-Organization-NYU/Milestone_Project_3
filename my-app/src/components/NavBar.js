import {useContext } from 'react'
import { useNavigate } from "react-router";
import { CurrentUser } from '../context/CurrentUser';

function NavBar() {

    const navigate = useNavigate()

    const { currentUser } = useContext(CurrentUser)

    let postCurrentUser = (
        <>
            <div style={{ float: 'right',  color: 'chartreuse' }} >
                <li>
                    <h5>Welcome to Barking Boutique</h5>
                </li>
            
            </div>
        </>
    )

    if (currentUser) {
        postCurrentUser = (
            <>
            <div style={{ float: 'right',  color: 'chartreuse' }} >
                <li style={{ float: 'right', color: 'chartreuse' }}>
                    <h5><a href="/" onClick={() => navigate.push("/login")}>Log Out</a></h5>
                </li>
                <li style={{ float: 'right' }}>
                    <h5> Logged in as {currentUser.first_name} {currentUser.last_name}</h5>
                </li>
            </div>
        </>
        )
    }

    return (
        <nav>
            <ul>
                <li>
                    {/* <a href="/cart" onClick={() => navigate.push("/cart")}>
                        Shopping Cart 🛒
                    </a> */}
                    
                </li>
                {postCurrentUser}
            </ul>
        </nav>
    )
}

export default NavBar;