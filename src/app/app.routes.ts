import { Routes } from '@angular/router';
import { About } from './about/about';
import { Experience } from './experience/experience';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '',
        title: 'Home - Portfolio',
        component: Home
    },
    {
        path: 'about',
        title: 'About Me - Portfolio',
        component: About
    },
    {
        path: 'experience',
        title: 'Work Experience - Portfolio',
        component: Experience
    },
    {
        path: 'projects',
        title: 'Projects - Portfolio',
        component: Home // Placeholder - you can create a Projects component later
    },
    {
        path: 'contact',
        title: 'Contact - Portfolio',
        component: Home // Placeholder - you can create a Contact component later
    }
];
