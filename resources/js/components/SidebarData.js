import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { FiLogOut } from "react-icons/fi";

export const SidebarData = [{
    title: 'WelcomeHome',
    path: '/welcomehome',
    icon: < AiIcons.AiFillHome />,
    cName: 'nav-text'
},
{
    title: 'Membership',
    path: '/membership',
    icon: < IoIcons.IoIosPaper />,
    cName: 'nav-text'
},
{
    title: 'Report Generator',
    path: '/reports',
    icon: < IoIcons.IoIosPaper />,
    cName: 'nav-text'
},
{
    title: 'Logout',
    path: '/logout',
    icon: < FiLogOut />,
    cName: 'nav-text'
}
];