import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPinComponent from '../components/LocationPinComponent';
import { Button, Card } from 'react-bootstrap';
import locationPhoto from '../images/gardner.jpg'

class MapPageContainer extends React.Component {
    static defaultProps = {
        center: {lat: 42.3387, lng: -71.0989}, 
        zoom: 12
     }

     addActivityTrigger() {
        this.props.addActivity('Go to Isabella Stewart Gardner Museum');
        this.props.toggle('home');
     }
     //the center coordinates are NYC. I chose 12 as the zoom because it didn’t seem too far away or too close. 
     //The higher the number you choose, the more you zoom in on the map.
	render() {
		return (
            <React.Fragment>
            	<nav className="navbar navbar-expand-sm navbar-dark bg-success">
		            <button onClick={() => this.props.toggle('home')}
							className="text-secondary btn fas fa fa-times">
		            </button>
		            <span className="navbar-brand">
		                Ciarra and Luke
		            </span>
		        </nav>
		        <div className="container">
                <div className="row">
                    <div style={{height: `12em`, width: `1em`}} className="col">
                        <GoogleMapReact 
                            bootstrapURLKeys={{
                                key: 'AIzaSyDKBs_iuhnI_kVvLDVva-b4N-kBJGVdhV4', 
                                language: 'en'
                            }}
                            defaultCenter={this.props.center}
                            center={this.props.center}
                            defaultZoom={this.props.zoom}
                            onChildMouseEnter={this.onChildMouseEnter}
                            onChildMouseLeave={this.onChildMouseLeave}
                        >
                            <LocationPinComponent
                                lat={42.3387}
                                lng={-71.0989}
                                text={'You'}
                            />
                        </GoogleMapReact>
                    </div>
                </div>
                <div style={{paddingTop: '10px'}} className="row"></div>
                <div className="row">
                    <Card className="col">
                        <Card.Img variant="top" src={locationPhoto} />
                        <Card.Body>
                            <Card.Title>Isabella Stewart Gardner Museum</Card.Title>
                            <Card.Text>
                                The Isabella Stewart Gardner Museum is an art museum in Boston, Massachusetts, which houses significant examples of European, Asian, and American art. Its collection includes paintings, sculpture, tapestries, and decorative arts
                            </Card.Text>
                            <Button variant="primary" onClick={() => this.addActivityTrigger()}>Add to Activity List</Button>
                        </Card.Body>
                    </Card>
                </div>
                </div>
            </React.Fragment>
		)
	}
}

export default MapPageContainer;