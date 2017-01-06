import React, { PropTypes } from 'react';
import Loading from 'react-loading';
import DashboardMenu from './DashboardMenu';
import Library from './Library';

// const styles = {
//   root: {
//     display: 'flex',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     height: '80vh',
//     flexDirection: 'column'
//   }
// };

const Dashboard = ({ cloudinary, getFromBackEnd, getCloudinaryData }) => (
  <div className='dashboard'>
    <DashboardMenu getCloud={getCloudinaryData} getDB={getFromBackEnd} />
    {!cloudinary ? (
      <div className="loader">
        <Loading type='bubbles' color='blue' />
      </div>
    ) : (
      <Library pics={cloudinary} />
    )}
  </div>
);

Dashboard.propTypes = {
  cloudinary: PropTypes.array,
  getCloudinaryData: PropTypes.func.isRequired
};

export default Dashboard;
