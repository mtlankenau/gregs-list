import React, { Component } from 'react';
import { Box, Flex, Stack, Button, Link } from '@chakra-ui/react';
import Auth from '../utils/auth';

const NavBar = () => {
  return (
     <Flex justify='space-around'>
        <Box pb={8}>
          <Stack spacing={8} justify='center' align='center' isInline>
            <Button position='relative' variant='outline'>
                <Link href='/'>Home</Link>
            </Button>
            {Auth.loggedIn() ? (
              <>
              <Button position='relative' variant='outline' >
                <Link  href='/profile'>Profile</Link>
              </Button>
              <Button position='relative' variant='outline' >
                <Link  href='/'>Logout</Link>
              </Button>
              </>
            ) : (
              <>
              <Button position='relative' variant='outline' >
                <Link  href='/login'>Login</Link>
              </Button>
                <Button position='relative' variant='outline'>
                  <Link href='/signup'>
                    Signup
                  </Link>
              </Button>
              </>
            )}
            {/* <Button position='relative' variant='outline'>
              <Link href='/home'>Home</Link>
            </Button>
            <Button as={Link} href='/createJob' position='relative' variant='outline'>
                Post Job
            </Button>
            <Button as={Link} href='/login' position='relative' variant='outline' >
              Login
            </Button>
            <Button as={Link} href='/signup' position='relative' variant='outline'>
                Signup
            </Button>
            <Button as={Link} href='/profile' position='relative' variant='outline'>
                Profile
            </Button>
              </Link>
            </Button> */}
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