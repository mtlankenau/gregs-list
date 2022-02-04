import React, { Component } from 'react';
import { Box, Flex, Stack, Button, Link } from '@chakra-ui/react';

class Navbar extends Component {
  constructor() {
    super()

    this.state = {
      loggedIn: false
    }
  }

  componentDidMount() {
    if (document.cookie.split(';').filter((item) => item.trim().startsWith('logedIn=')).length) {
      this.setState({ loggedIn: true })
    }
    window.setInterval(() => {
      if (document.cookie.split(';').filter((item) => item.trim().startsWith('logedIn=')).length) {
        this.setState({ loggedIn: true })
      }
      else {
        this.setState({ loggedIn: false })
      }
    }, 500)
  }

  render() {
    return (
 
     <Flex justify='space-around'>
        <Box>
          <Stack spacing={8} justify='center' align='center' isInline>
            <Button position='relative' variant='outline'>
              <Link href='/home'>Home</Link>
            </Button>
            <Button position='relative' variant='outline' >
              <Link  href='/login'>Login</Link>
            </Button>
            <Button position='relative' variant='outline'>
              <Link href='/signup'>
                Signup
              </Link>
            </Button>
          </Stack>
        </Box>
      </Flex>
  );
}
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