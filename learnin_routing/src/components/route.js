import { lazy } from 'react';
import Home from './Home';
const Users = lazy(() => import('./users'));
const UserProfile = lazy(() => import('./UserProfile'));
const About = lazy(() => import('./About'));
const Login = lazy(() => import('./Login'));
const AuthProfile = lazy(() => import('./AuthProfile'));
const SearchUser = lazy(() => import('./SearchUsers'));
const NotFound = lazy(() => import('./NotFound'));


export const appRoute = [
    {
        path: "/",
        component: Home,
        requiredAuth: false,
    },

    {
        path: "/users/user/:username",
        component: UserProfile,
        requiredAuth: false,
    },

    {
        path: "/about",
        component: About,
        requiredAuth: false,
    },

    {
        path: "/login",
        component: Login,
        requiredAuth: false,
    },

    {
        path: "/authProfile",
        component: AuthProfile,
        requiredAuth: true,
    },

    {
        path: "/search",
        component: SearchUser,
        requiredAuth: false,
    },

    {
        path: "*",
        component: NotFound,
        requiredAuth: false,
    },

    {
        path: "/users",
        component: Users,
        requiredAuth: false,
    },
]