import React from 'react';
import './Sidebar.scss';
const Sidebar = () => {
  return (
    <div className="sidebar">
      {/*サイドバー左*/}
      <div className="sidebarLeft">
        <div className='serverIcon'>
            <img src="./logo192.png" alt="" />
        </div>
        <div className='serverIcon'>
            <img src="./logo192.png" alt="" />
        </div>
      </div>
      {/*サイドバー右*/}
      <div className="sidebarRight">
        <div className='sideberTop'>
            <h3>Discord</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
