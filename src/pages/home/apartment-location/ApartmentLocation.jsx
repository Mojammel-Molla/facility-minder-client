import GoogleMapReact from 'google-map-react';
import GetInTouch from '../../contact-us-page/GetInTouch';
import AreaTitle from '../../../shared/area-title/AreaTitle';

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
    <div className="bg-base-200 pt-3">
      <h1 className="text-center text-2xl md:text-4xl font-bold py-3">
        Helps To Find Us
      </h1>
      <div className="w-full lg:flex gap-5">
        <div className="md:w-1/2 mx-auto">
          <GetInTouch></GetInTouch>
        </div>
        <div className="my-5 w-1/2" style={{ height: '70vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyALGv9qfLIEt8yiB3FoOim1XEk87BUky2w',
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent lat={23.7937} lng={90.4066} text="My Location" />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default ApartmentLocation;
