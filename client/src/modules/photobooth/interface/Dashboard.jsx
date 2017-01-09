import React, { PropTypes } from 'react';
import Sidebar from './Sidebar';

// const styles = {
//   root: {
//     maxHeight: '100%'
//   }
// };

 const Dashboard = ({ cloudinary, getFromBackEnd, getCloudinaryData }) => (
    <div className='dashboard'>
     <Sidebar
        getCloud={getCloudinaryData}
        getDB={getFromBackEnd}
        pics={cloudinary}
     />
   </div>
 );

 Dashboard.propTypes = {
   cloudinary: PropTypes.array,
   getCloudinaryData: PropTypes.func.isRequired,
   getFromBackEnd: PropTypes.func.isRequired
 };

 export default Dashboard;
