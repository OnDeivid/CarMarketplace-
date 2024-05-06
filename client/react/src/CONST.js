import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosLogIn } from "react-icons/io";

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: IoHomeOutline,
    },
    {
        title: 'Login',
        path: 'login',
        icon: IoIosLogIn,
    },
    {
        title: 'Register',
        path: 'register',
        icon: IoIosLogIn,
    },
    {
        title: 'Profile',
        path: 'profile',
        icon: CgProfile,
    },

]