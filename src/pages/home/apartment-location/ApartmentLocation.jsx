import GoogleMapReact from 'google-map-react';
import GetInTouch from '../../contact-us-page/GetInTouch';

const ApartmentLocation = () => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 23.8041,
      lng: 90.4152,
    },
    zoom: 11,
  };

  return (
    <div className="w-full lg:flex gap-5">
      <div className="w-1/2 mx-auto">
        <GetInTouch></GetInTouch>
      </div>
      <div className="my-5 w-1/2" style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyALGv9qfLIEt8yiB3FoOim1XEk87BUky2w' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={23.7937} lng={90.4066} text="My Location" />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default ApartmentLocation;
