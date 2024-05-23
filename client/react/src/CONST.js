import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosCreate } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: IoHomeOutline,
        accessibilityType: 'all'

    },
    {
        title: 'Login',
        path: 'login',
        icon: IoIosLogIn,
        accessibilityType: 'guest'

    },
    {
        title: 'Register',
        path: 'register',
        icon: IoIosLogIn,
        accessibilityType: 'guest'

    },
    {
        title: 'Profile',
        path: 'profile',
        icon: CgProfile,
        accessibilityType: 'user'

    },
    {
        title: 'Create',
        path: 'create',
        icon: IoIosCreate,
        accessibilityType: 'user'
        
    }

]