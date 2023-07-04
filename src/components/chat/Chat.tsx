import React from 'react'
import "./Chat.scss";
import ChatHeader from './ChatHeader';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifBoxIcon from '@mui/icons-material/GifBox';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import NoteIcon from '@mui/icons-material/Note';
import ChatMessage from './ChatMessage';

function Chat() {
  return (
    <div className='chat'>
        {/*ヘッダー*/}
        <ChatHeader />
        {/*メッセージ表示*/}
        <div className='chatMessage'>
            <ChatMessage/>
            <ChatMessage/>
            <ChatMessage/>
        </div>
        {/*メッセージ入力*/}
        <div className='chatInput'>
            <AddCircleIcon/>
            <form action="">
                <input type="text" placeholder='#Web制作へメッセージを送信' />
                <button type='submit' className='chatInputButton'>送信</button>
            </form>
            <div className='chatInputIcons'>
                <CardGiftcardIcon/>
                <GifBoxIcon/>
                <NoteIcon/>
                <SentimentSatisfiedAltIcon/>
            </div>
        </div>
    </div>
  )
}

export default Chat