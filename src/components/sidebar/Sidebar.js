import React from 'react'
import './Sidebar.scss'
import {MdSubscriptions, MdExitToApp,MdThumbUp,MdHistory,MdLibraryBooks,MdHome,MdSentimentDissatisfied} from 'react-icons/md'
// import { Link } from 'react-router-dom'
const Sidebar = ({toggle,HandleToggleBar}) => {
    return (
        <nav className={toggle?"sidebar open":"sidebar"}
        onClick={()=>HandleToggleBar(false)}>
            <ul>
                <li><MdHome size={23} />
                <span>Home</span>
                </li>
                <li>
                    <MdSubscriptions size={23} />
                    <span>Subscriptions</span>
                </li>
                <li>
                    <MdThumbUp size={23} />
                    <span>Liked Video</span>
                </li>
                <li>
                    <MdHistory />
                    <span>History</span>
                </li>
                <li>
                    <MdLibraryBooks size={23} />
                    <span>Library</span>
                </li>
                <li>
                    <MdSentimentDissatisfied size={23} />
                    <span>I don't Know</span>
                </li>
                <hr />
                <li>
                    <MdExitToApp size={23} />
                    <span>Log Out</span>
                </li>
                <hr />
            </ul>
            

        </nav>
    )
}

export default Sidebar
