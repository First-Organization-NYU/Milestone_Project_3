import { Link } from "react-router-dom"
function Confirmation() {
    return (
        <div className="confirmPage">
            <h1>THANK YOU FOR SHOPPING</h1>
            <h2>Please wait 1-2 weeks for your order to arrive</h2>
            <button><Link to="/">Home Page</Link></button>
        </div>
    )
}

export default Confirmation