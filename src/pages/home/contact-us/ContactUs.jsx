import { Typography, Grid, Card, CardContent, makeStyles } from '@mui/material';
import { GrPhone, GrMailOption } from 'react-icons/gr';
import { MdLocationOn } from 'react-icons/md';

const useStyles = makeStyles(theme => ({
  section: {
    marginTop: theme.spacing(5),
    background: theme.palette.grey[300],
    borderRadius: theme.spacing(1),
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
    },
  },
  card: {
    padding: theme.spacing(5),
    textAlign: 'center',
  },
  icon: {
    fontSize: '2rem',
    marginLeft: theme.spacing(2),
  },
}));

const ContactUs = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" align="center" className="font-bold my-10">
        About Us
      </Typography>
      <Grid container className={classes.section} spacing={3}>
        <Grid item lg={4} md={12}>
          <Card className={classes.card}>
            <GrMailOption className={classes.icon} />
            <CardContent>
              <Typography variant="h6" className="font-semibold">
                info@Facility-minder.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} md={12}>
          <Card className={classes.card}>
            <MdLocationOn className={classes.icon} />
            <CardContent>
              <Typography variant="h6" className="font-semibold">
                Dhaka
              </Typography>
              <Typography variant="body2" className="font-light">
                Banani, 1212
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} md={12}>
          <Card className={classes.card}>
            <GrPhone className={classes.icon} />
            <CardContent>
              <Typography variant="h6" className="font-semibold">
                +1300 138 892
              </Typography>
              <Typography variant="body2" className="font-light">
                Monday - Saturday
              </Typography>
              <Typography variant="body2" className="font-light">
                9 AM - 6 PM
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUs;
