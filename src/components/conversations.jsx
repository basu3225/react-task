import React, { Component } from 'react';
import './conversations.css';

import Carousel from 'react-bootstrap/Carousel';
import img2 from "./../assets/images/img2.jpg";
import img3 from "./../assets/images/img3.jpg";
import img4 from "./../assets/images/img4.jpg";
import img5 from "./../assets/images/img5.jpg";


class Conversation extends Component {
   
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          index: 0,
          direction: null,
        };
      }
    
      handleSelect(selectedIndex, e) {
        this.setState({
          index: selectedIndex,
          direction: e.direction,
        });
      }
    
      
      render() {
              
        const { index, direction } = this.state;
    
        return (
            <div> <h2 className="heading1">XXCEED</h2>
            <h1 className="heading2">Seeking your next high?</h1>
            <p>Meet and learn from a global community of extreme <br></br>
            athletes, gamers, musicians, artists and sports persons.</p>
           
             <form>
            <label>
              <input type="text" className="form-control" id="mail" name="name" placeholder="Enter your email" />
            </label>
            <label>
            <input type="submit" className="form-control" id="button" value="NOTIFY ME" />
            </label>
             </form>

          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect} >
          
          
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2} class="img-fluid" alt="Responsive image2"></img>
              
              <Carousel.Caption>
               
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3} class="img-fluid" alt="Responsive image3"></img>
              
    
              <Carousel.Caption>
               
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img4} class="img-fluid" alt="Responsive image4"></img>
              
    
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img5} class="img-fluid" alt="Responsive image5"></img>
              
              <Carousel.Caption>
               
              </Carousel.Caption>
            </Carousel.Item>
           
          </Carousel>
          </div>
        );
        
      }
    }
     
   
export default Conversation;