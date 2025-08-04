import { Routes } from '@angular/router';
import { Hover } from './hover/hover';
import { About } from './about/about';
import { Experience } from './experience/experience';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'experience',
        component: Experience
    }
];
