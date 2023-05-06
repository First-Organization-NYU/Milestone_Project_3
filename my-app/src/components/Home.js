import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="homePage">
            <h1>Welcome to Our Pet Supplies Site</h1>
            <img src="https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1609361904.0353816/a-chew-toy.jpg">
            </img>
            <h3 className="page-content">Welcome to our online pet supplies store, where we offer an extensive range of treats and toys for your furry friends.
                We're dedicated to providing you with the highest quality products that will keep them happy, healthy, and entertained.
                Whether you're looking for tasty treats or fun toys, we have everything you need to spoil your furry friends.
                Browse our selection today and give your pups the love and attention they deserve!</h3>
                <button className="view-btn"><Link to="/toys">Shop For Toys!</Link></button>
                <button className="view-btn"><Link to="/treats">Shop For Treats!</Link></button>
            <h1>Are you a Dog Lover?! </h1>
            <u><h2 style={{color: 'red'}}>Bet that you are!</h2></u>
            <h1>🙋</h1>
            <h3>Come checkout some cute images of your favorite Dog Breeds <a href='/dogbreeds'>here</a>!</h3>
            <br></br>
            <h1>And if you are REALLY feeling it 😇 </h1>
            <br></br>
            <h3>We have some adorable ones right here waiting to go home with you!</h3>
            <button className="view-btn">
                <a href='https://nyu-milestonetwo.herokuapp.com/' alt="pet-adoption">Adopt Pet!</a>
            </button>
        </div>
    )
}

export default Home