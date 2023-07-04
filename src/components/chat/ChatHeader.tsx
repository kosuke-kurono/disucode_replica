import React from 'react';
import  './ChatHeader.scss';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PushPinIcon from '@mui/icons-material/PushPin';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import HelpIcon from '@mui/icons-material/Help';

const ChatHeader = () => {
  return (
    <div className='chatHeader'>
        <div className='chatHeaderLeft'>
<h3>
    <span className='chatHeaderHash'>#</span>
    Web制作
</h3>
        </div>
        <div className='chatHeaderRight'>
            <NotificationsIcon/>
            <PushPinIcon className='pushPinIcon'/>
            <PeopleAltIcon/>
            <div className='chatHeaderSearch'>
                <input type="text" placeholder='検索' />
                <SearchIcon/>
            </div>
                <InboxIcon/>
            <HelpIcon/>
        </div>
    </div>
  )
}

export default ChatHeader