import React from "react";
import imagelogo from '../assets/logo/logo-removebg-preview.png';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
 
const navListMenuItems = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: NewspaperIcon,
  },
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: RectangleGroupIcon,
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
    icon: TagIcon,
  },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="h5" className="font-semibold">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-semibold text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              SẢN PHẨM
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 outline-none gap-y-2 outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
const styleListItem = "flex items-center gap-2 py-2 pr-4";
function NavList() {
  return (
    <List className="p-0 mt-4 mb-6 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
       <Typography
        as="a"
        href="#"
        variant="h5"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className={styleListItem}>SALE</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="h5"
        color="blue-gray"
        className="font-bold"
      >
        <ListItem className={styleListItem}>QUẦN ÁO</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="h5"
        color="blue-gray"
        className="flex font-bold"
      >
        <ListItem className={styleListItem}>PHỤ KIỆN</ListItem>
      </Typography>
      {/* Menu */}
      <NavListMenu />
      {/*  */}
      <Typography
        as="a"
        href="#"
        variant="h5"
        color="blue-gray"
        className="font-semibold"
      >
        <ListItem className={styleListItem}>
          THÔNG TIN LIÊN HỆ
        </ListItem>
      </Typography>
    </List>
  );
}
 
export function Header() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <div className="">
    <Navbar className="max-w-full px-4 py-2 mx-auto bg-orange-100 border-none rounded-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="flex mr-4 cursor-pointer py-1.5 lg:ml-2 items-center"
        > 
          <div className="flex-shrink-0">
            <img
                className="w-full h-14"                    
                src={imagelogo}
                alt="Your Company"
            />
          </div>
          <p className="text-3xl text-black">
            H & D
          </p>         
        </Typography>
        {/* nav */}
        <div className="hidden lg:block">
          <NavList />
        </div>
        
        <div className="hidden gap-2 lg:flex"> 
          {/* search */}  
          <div className="flex items-center gap-4"> 
              <label className="relative">
               <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                  </svg>
                </span>
              <input className="block w-full py-3 pr-3 bg-white border rounded-full shadofullfull placeholder:italic placeholder:text-gray-600 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search..." type="text" name="search"/>
            </label>
          </div>
          {/* button accout */}        
          {/* <Button variant="text" size="sm">           
            <IconButton className="bg-black rounded-full ">         
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                  </svg>
          </IconButton> */}
          {/* button shopping cart */}
          {/* </Button> 
          <Button variant="text" size="sm">           
            <IconButton className="bg-black rounded-full ">         
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                  </svg> 
          </IconButton>
          </Button>          */}
        {/* button login */}     
        <Button variant="outlined" size="sm" className="">           
            ĐĂNG NHẬP
        </Button>
        </div>
        <IconButton
          variant="text"
          color="black"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="w-6 h-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="w-6 h-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        {/* login vào thì hiện lên */}
        <div className="flex items-center justify-around w-full gap-2 flex-nowrap lg:hidden">
          {/* <Button variant="text" size="sm">           
            <IconButton className="bg-black rounded-full ">         
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                  </svg>
          </IconButton> */}
          {/* button shopping cart */}
          {/* </Button> 
          <Button variant="text" size="sm">           
            <IconButton className="bg-black rounded-full ">         
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                  </svg> 
          </IconButton>
          </Button>         */}
        </div>
         
        <div className="items-center w-full gap-2 flex-nowrap lg:hidden">
          {/* <Button variant="outlined" size="lg" color="black" fullWidth>
            Log In
          </Button> */}

          {/* login vào thì ẩn đi */}
        <Link to="/login">
          <Button variant="gradient" size="lg" fullWidth>
              Sign In
          </Button>   
        </Link>      
        </div>
      </Collapse>
    </Navbar>
    </div>
    
  );
}