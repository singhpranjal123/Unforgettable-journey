import "./Footer.css"

const Footer=()=>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Unforgettable Journeys</h1>
                    <p>Choose your favourite destination.</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-behance-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom"></div>
        </div>
    )
}
export default Footer