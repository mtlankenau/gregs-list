import React, { Component } from 'react';
import { Box, Flex, Stack, Button, Link, Image, Spacer } from '@chakra-ui/react';
import Auth from '../utils/auth';

const NavBar = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  
  return (
     <Flex direction='row' >
        <Box pb={8} mt='10px' w='70px'>
          <Stack  direction='row'>
                  <Image align='left'
                      height='50'
                      width='50'
                      src={require('../assets/images/logo.jpg')}
                      alt='Logo'/>
            </Stack>
          </Box>
        <Spacer />
        <Box pb={8} mt='10px' >
        <Stack  spacing={10} direction='row'>
            <Button as={Link} href='/' position='relative' variant='outline' border='2px' borderColor='blue.200'>
              Home
            </Button> 
            {Auth.loggedIn() ? (
              <>
              <Button as={Link} href={`/profile/${Auth.getProfile().data.username}`} position='relative' variant='outline' border='2px' borderColor='blue.200'>
                Profile
              </Button>
              <Button as={Link} href='/' onClick={logout} position='relative' variant='outline' border='2px' borderColor='blue.200'>
                Logout
              </Button>
              </>
            ) : (
              <>
              <Button as={Link} href='/login' position='relative' variant='outline' border='2px' borderColor='blue.200'>
                Login
              </Button>
              <Button as={Link} href='/signup' position='relative' variant='outline' border='2px' borderColor='blue.200'>
                    Signup
              </Button>
              </>
            )}
          </Stack>
        </Box>
      </Flex>
  );
}

export default NavBar;
















////////////////////////////
////////////////////////////
// OLD CODE // CAN IGNORE //
////////////////////////////

// const NavBar = () => {
//   return (
//     <div class="ui menu">
//       {/* <Menu.Item as={ Link } to='/home'>
//         Home
//       </Menu.Item> <br/> 
//       <Menu.Item as={ Link } to='/home'>
//         Page 2
//       </Menu.Item> <br/>
//       <Menu.Item as={ Link } to='/home'>
//         Page 3
//       </Menu.Item> */}
//     </div>
//   );
// }

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link
// } from 'react-router-dom';

// export default function navbar() {
//     return (
//         <nav
//         className="navbar is-primary"
//         role="navigation"
//         aria-label="main navigation"
//        >
//         <div className="container">
  
//           <div className={`navbar-menu `}>
//             <div className="navbar-start">
//               <NavLink
//                 className="navbar-item"
//                 activeClassName="is-active"
//                 to="/"
//               >
//                 Main
//               </NavLink>
  
//               <NavLink
//                 className="navbar-item"
//                 activeClassName="is-active"
//                 to="/about"
//               >
//                 About Me
//               </NavLink>
  
//               <NavLink
//                 className="navbar-item"
//                 activeClassName="is-active"
//                 to="/portfolio"
//               >
//                 Portfolio
//               </NavLink>
  
//               <NavLink
//                 className="navbar-item"
//                 activeClassName="is-active"
//                 to="/contact"
//               >
//                 Contact Me
//               </NavLink>
  
//               <NavLink
//                 className="navbar-item"
//                 activeClassName="is-active"
//                 to="/resume"
//               >
//                 Resume
//               </NavLink>
  
  
  
//             </div>
  
//           </div>
//         </div>
//       </nav>
//       );
// }