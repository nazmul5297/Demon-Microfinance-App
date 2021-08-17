import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [{
    title: 'Home',
    path: '/admin',
    icon: < AiIcons.AiFillHome />,
    cName: 'nav-text'
},
{
    title: 'Office Setup',
    path: '/officesetup',
    icon: < IoIcons.IoIosPaper />,
    cName: 'nav-text'
},
{
    title: 'Branch Setup',
    path: '/branchsetup',
    icon: < IoIcons.IoIosPaper />,
    cName: 'nav-text'
},
{
    title: 'Somitee Setup',
    path: '/somiteesetup',
    icon: < FaIcons.FaCartPlus />,
    cName: 'nav-text'
},
{
    title: 'Reports',
    path: '/reports',
    icon: < IoIcons.IoIosPaper />,
    cName: 'nav-text'
},

    // {
    //     title: 'Logout',
    //     path: '/',
    //     icon: < IoIcons.IoMdHelpCircle />,
    //     cName: 'nav-text'
    // }
];