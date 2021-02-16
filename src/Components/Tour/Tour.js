import React from 'react';
import './Tour.scss';

class Tour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showInfo: false
        }
        
        this.showInfo = this.showInfo.bind(this);
        this.deleteTour = this.deleteTour.bind(this);
    } 

    showInfo() {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    deleteTour() {
        this.props.deleteTour(this.props.tour.id)
    }

    render() {
        const {city, name, img, info} = this.props.tour;
        return (
            // <article className="article-container">
                <div className="card">
                    <div>
                        <img src={img} alt=""/>
                    </div>
                    
                    <div className="info">
                        <span className="btn-close">
                            <i className="far fa-times-circle" onClick={this.deleteTour}/>
                        </span>
                        <h1>{city} </h1>
                        <h3>{name}</h3>
                        <h5>Info <span className={this.state.showInfo ? "fas fa-chevron-circle-up" : "fas fa-chevron-circle-down"} onClick={this.showInfo}></span></h5>
                        {this.state.showInfo && <p>{info}</p>} 
                    </div>  
                </div>
            // </article>
        )
    }
}

export default Tour
