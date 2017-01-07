import React, { PropTypes } from 'react';
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
     <DashboardMenu getCloud={getCloudinaryData} />
     <Library getDB={getFromBackEnd} pics={cloudinary} />
   </div>
 );

 Dashboard.propTypes = {
   cloudinary: PropTypes.array,
   getCloudinaryData: PropTypes.func.isRequired,
   getFromBackEnd: PropTypes.func.isRequired
 };

 export default Dashboard;
