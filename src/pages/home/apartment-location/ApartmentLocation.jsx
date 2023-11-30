import GoogleMapReact from 'google-map-react';

const ApartmentLocation = () => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div className="my-5" style={{ height: '70vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyALGv9qfLIEt8yiB3FoOim1XEk87BUky2w' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={23.7937} lng={90.4066} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default ApartmentLocation;
