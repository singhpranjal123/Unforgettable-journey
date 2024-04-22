import { Component } from "react";
import "./Destination.css";
import delImage1 from "../assests/delhi/arch1.jpg";
import delImage2 from "../assests/delhi/pack1.jpg";
import delImage3 from "../assests/delhi/arch1.jpg";
import delImage4 from "../assests/delhi/arch1.jpg";

class DestinationData extends Component {
    render(){
        return(
        
           <div className={this.props.cName}>
              <div className="des-text">
                <h2>{this.props.heading}</h2>
                <p>
                    {this.props.text}
                 
                </p>   
              </div>
              <div className="image">
                <img alt="img" src={this.props.img1}></img>
                <img alt="img" src={this.props.img2}></img>
              </div>
            </div>
        )
    }
}

export default DestinationData