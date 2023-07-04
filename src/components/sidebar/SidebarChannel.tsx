import React from 'react';
import './SidebarChannel.scss';

function SidebarChannel() {
  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannelHash">#</span>
        Web制作
      </h4>
      <h4>
        <span className="sidebarChannelHash">#</span>
        ゲーム制作
      </h4>
      <h4>
        <span className="sidebarChannelHash">#</span>
        デザイン制作
      </h4>
    </div>
  );
}

export default SidebarChannel;
