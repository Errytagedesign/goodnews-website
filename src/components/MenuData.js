import React from 'react';
import { MenuButton, Youtube, Envelope, CalendarEvent, CaretDownFill, CaretUpFill, CpuFill } from 'react-bootstrap-icons';

export const  MenuData = [


     {

        title: 'Categories',
        path: '/',
        icon: <MenuButton size={20} />,
        iconClosed: <CaretDownFill />,
        iconOpen: <CaretUpFill />,

        SubCat: [

            {
                title: 'Technology',
                path: '/technology',
                icon: <CpuFill size={20} />, 
        },

            {
                title: 'Sport',
                path: '/sport',
                icon: <CpuFill size={20} />, 
        },

            {
                title: 'Politics',
                path: '/politics',
                icon: <CpuFill size={20} />, 
        },

            {
                title: 'Greater Lagos',
                path: '/greaterlagos',
                icon: <CpuFill size={20} />, 
        },

            {
                title: 'Fashion and Lifestyle',
                path: '/ashionLifestyle',
                icon: <CpuFill size={20} />, 
        },

            {
                title: 'Entertainments',
                path: '/entertainments',
                icon: <CpuFill size={20} />, 
        },

            {
                title: 'Education',
                path: '/education',
                icon: <CpuFill size={20} />, 
        },
           
        {
                title: 'Business and Finance',
                path: '/businessFinance',
                icon: <CpuFill size={20} />, 
        },

            {
                title: 'Opinion',
                path: '/opinion',
                icon: <CpuFill size={20} />, 
        },

        ]



    },


{
    title: 'Videos',
        path: '/',
        icon: <Youtube size={20} />,
        iconClosed: <CaretDownFill />,
        iconOpen: <CaretUpFill />,
},

{
    title: 'Newsletter',
        path: '/',
        icon: <Envelope size={20} />,
        iconClosed: <CaretDownFill />,
        iconOpen: <CaretUpFill />,
},

{
    title: 'Events',
        path: '/',
        icon: <CalendarEvent size={20} />,
        iconClosed: <CaretDownFill />,
        iconOpen: <CaretUpFill />,
}






]