import React from 'react';
import './Sidebar.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/*サイドバー左*/}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./discodeIcon.png" alt="" />
        </div>
        <div className="serverIcon">
          {/* <img src="./logo192.png" alt="" /> */}
        </div>
      </div>
      {/*サイドバー右*/}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h4>学習用サーバー</h4>
          <ExpandMoreIcon />
        </div>
        {/*サイドバーチャンネル*/}
        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreIcon />
              <h4>テキストチャンネル</h4>
            </div>
            <AddIcon className="sidebarAddIcon" />
          </div>
          <div className='sideberChannelList'>
            <SidebarChannel/>
          </div>
          <div className='sidebarFooter'>
            <div className='sidebarUser'>
              <img src="./icon_YanHam.png" alt="" />
              <div className='userName'>
                <h3>kurono</h3>
                <span>#1234</span>
              </div>
            </div>
            <div className='sidebarSound'>
              <MicIcon/>
              <HeadphonesIcon/>
              <SettingsIcon/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
