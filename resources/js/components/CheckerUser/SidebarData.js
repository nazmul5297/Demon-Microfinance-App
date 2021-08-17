import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { FiLogOut } from "react-icons/fi";


export const SidebarData = [{
    title: 'Home',
    path: '/checkeruser',
    icon: < AiIcons.AiFillHome />,
    cName: 'nav-text'
},
{
    title: 'Request',
    path: '/request',
    icon: <AiIcons.AiOutlinePullRequest />,
    cName: 'nav-text'
},
{
    title: 'Logout',
    path: '/logout',
    icon: <FiLogOut />,
    cName: 'nav-text'
},

];