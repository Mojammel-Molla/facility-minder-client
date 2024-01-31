import { useState, useEffect } from 'react';
// import { ,  } from '@material-ui/core';
import { FaArrowTurnDown } from 'react-icons/fa6';
import CouponImg1 from '../../../assets/Coupon2images.jpeg';
import CouponImg2 from '../../../assets/Coupon banner.jpg';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Grid, Paper, Typography, Button, Hidden } from '@mui/material';

const Coupon = () => {
  const [couponData, setCouponData] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosSecure('/dashboard/manage-coupons');
        setCouponData(res.data[0].coupon);
      } catch (error) {
        console.error('Error fetching coupon data:', error);
      }
    };

    fetchData();
  }, [axiosSecure]);

  return (
    <Grid container className="hero my-20" component={Paper}>
      {/* Large screen layout */}
      <Hidden mdDown>
        <Grid
          item
          md={6}
          container
          justifyContent="flex-end"
          alignItems="center"
          spacing={5}
        >
          <Grid item>
            <img
              src={CouponImg1}
              alt="Coupon Image 1"
              style={{ maxWidth: '100%' }}
            />
          </Grid>
          <Grid item>
            <img
              src={CouponImg2}
              alt="Coupon Image 2"
              style={{ height: '320px' }}
            />
          </Grid>
        </Grid>
      </Hidden>
      <Grid
        item
        xs={12}
        md={6}
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Typography variant="h4" color="primary" gutterBottom align="center">
          <span style={{ color: '#FF0000' }}>20%</span> Flat Off in
          <br /> New Year bookings
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="center">
          Use the coupon below to get a discount
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className="flex pt-3 font-bold"
          align="center"
        >
          Coupon:
          <span style={{ color: '#FF0000', marginLeft: '0.5rem' }}>
            <FaArrowTurnDown />
          </span>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className="mt-3"
          style={{ width: '20%' }}
          align="center"
        >
          {couponData}
        </Button>
      </Grid>{' '}
      {/* Mobile and tablet layout */}
      <Hidden lgUp>
        <Grid item xs={12} container justifyContent="center" spacing={3}>
          <Grid item>
            <img
              src={CouponImg1}
              alt="Coupon Image 1"
              style={{ maxWidth: '100%' }}
            />
          </Grid>
          <Grid item>
            <img
              src={CouponImg2}
              alt="Coupon Image 2"
              style={{ height: '320px' }}
            />
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default Coupon;
