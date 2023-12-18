
import { Heading } from '@radix-ui/themes';
import { HamburgerMenuIcon, BellIcon, PersonIcon } from '@radix-ui/react-icons'

const HeaderNavigation = () => (
  <navbar id='navbar'>
    <div className='navbar-left-container'>
        <div className='icons-cm'>
            <HamburgerMenuIcon />
        </div>
    </div>
    <div className='navbar-right-container'>
        <div className='icons-cm'>
            <BellIcon/>
        </div>
        <div>
            <div className='navbar-userinfo'>
                <div className='icons-cm'>
                    <PersonIcon/>
                </div>
                <div className='userinfo-container'>
                    <Heading>Hello, JR Men</Heading>
                    <div>CMG Position</div>
                </div>
            </div>
        </div>
    </div>
  </navbar>
);

export default HeaderNavigation;
