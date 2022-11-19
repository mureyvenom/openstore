import { useState } from 'react';
import { FiHeart, FiMenu, FiSearch, FiShoppingCart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import SearchModal from './SearchModal';

interface NavItemProps {
  title: string;
  link: string;
}

const NavItem = ({ title, link }: NavItemProps) => {
  const navigate = useNavigate();

  return (
    <button className="text-sm font-medium text-black uppercase" onClick={() => navigate(link)}>
      {title}
    </button>
  );
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState(false);

  const nav: NavItemProps[] = [
    {
      link: '/',
      title: 'Home',
    },
    {
      link: '/',
      title: 'New Arrivals',
    },
    {
      link: '/',
      title: 'Collections',
    },
    {
      link: '/',
      title: 'Categories',
    },
    {
      link: '/',
      title: 'Contact Us',
    },
  ];

  return (
    <>
      <header className="h-20 bg-white w-full flex items-center justify-between px-10">
        <button className="text-2xl font-bold">OpenStore</button>
        <div className="flex-1 flex items-center justify-end">
          <div className="md:flex hidden md:flex-row flex-col md:gap-5 md:gap-y-0 gap-y-2">
            {nav.map((n) => (
              <NavItem title={n.title} link={n.link} key={n.title} />
            ))}
            <button onClick={() => setSearch(true)}>
              <FiSearch className="text-black text-sm" />
            </button>
            <button>
              <FiHeart className="text-black text-sm" />
            </button>
            <button>
              <FiShoppingCart className="text-black text-sm" />
            </button>
          </div>
          <button className="md:hidden" onClick={() => setToggle(!toggle)}>
            <FiMenu size={20} color="#000" />
          </button>
        </div>
      </header>
      <div
        className={`flex flex-col md:hidden gap-y-2 items-start px-10 transition-all duration-300 transform origin-top-left ${
          toggle ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        {nav.map((n) => (
          <NavItem title={n.title} link={n.link} key={n.title} />
        ))}
        <button onClick={() => setSearch(true)} className="text-black text-sm flex items-center">
          <FiSearch className="mr-1" /> SEARCH
        </button>
      </div>
      {search && <SearchModal closeAction={() => setSearch(false)} />}
    </>
  );
};

export default Navbar;
