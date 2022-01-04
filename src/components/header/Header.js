import React from 'react'
import './Header.scss'
import {FaBars} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdNotifications,MdApps} from 'react-icons/md'
const Header = ({HandleToggleBar}) => {
    return (
        <div className="header border border-dark">
            <FaBars className="header_menu"
             size={26}
             onClick={()=>HandleToggleBar()} />
            <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" 
            className="header_logo" alt="youtube logo" />
            <form>
                <input type="text" placeholder="search here" />
                <button type="submit">
                    <AiOutlineSearch size={22} />
                </button>
            </form>
            <div className="header_icon">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img className="header_avatar" src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="avatar"/>

            </div>
        </div>
    )
}

export default Header
