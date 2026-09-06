'use client';

import React from 'react';
import style from './Navbar.module.css';
import Button from '../components/Button';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleResize = () => {
      if (window.innerWidth > 670) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((current) => !current);

  const renderLinks = () => (
    <ul className={style.links}>
      <li>
        <Link href="/" onClick={closeMenu} className="hover:text-gray-400">
          Home
        </Link>
      </li>
      <li>
        <Link href="/join" onClick={closeMenu} className="hover:text-gray-400">
          Join
        </Link>
      </li>
      <li>
        <Link href="/events" onClick={closeMenu} className="hover:text-gray-400">
          Events
        </Link>
      </li>
      <li>
        <Link href="/about" onClick={closeMenu} className="hover:text-gray-400">
          About Us
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      <nav className={style.nav} aria-label="Primary site navigation">
        {/* Logo */}
        <div className={style.logo}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
            />
          </Link>
        </div>

        {/* Page Links */}
        {renderLinks()}

        {/* Buttons */}
        <div className={style.buttons}>
          <Button href="https://discord.com" isIcon ariaLabel="Open Discord">
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z" fill="#262626"/>
            </svg>
          </Button>
          <Button className={style.contact}>
            <a href="mailto:compsci@humboldt.edu">Contact</a>
          </Button>

          {/* NOTE: This only shows in mobile screen widths */}
          <Button
            className={`${style.hamburger} ${menuOpen ? style.hamshow : ''}`}
            isIcon
            onClick={toggleMenu}
            aria-controls="mobile-menu"
            ariaLabel={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {/* <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaElEQVR4nO3WQQqAMAxE0X880/uvLRTvUfECKqIY2v9g9plFYECSpPcUoAI9eSoQZ0VagiP7zWxTFAlgTXBkv8hx4/L0fyRJkn5SnPHkWr9tlCLhjJckSfpMccaTa/22UYqEM16SNKMd8xQCsa44l2YAAAAASUVORK5CYII="
              alt="menu--v6"
            /> */}
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
              <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
            </svg>
            <svg className={style.hamX} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 24 24">
              <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
            </svg>
          </Button>
        </div>
      </nav>

      {/* Popup window, NOTE: This only shows up in mobile screen widths */}
      <div className={`${style.popup} ${menuOpen ? style.show : ''}`} aria-hidden={!menuOpen}>
        <span onClick={closeMenu} className={style.backdrop} aria-hidden="true" />
        <nav
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-heading"
        >
          <div>
            <h1 id="mobile-menu-heading">Site Navigation</h1>
            {renderLinks()}
          </div>
          <div className={style.contactInfo}>
            <Image src="/logo.png" alt="Logo" width={130} height={130} />
            <p>Reach out to us if you have any questions!</p>
            <Button className={style.contact} href="/contact">
              Contact us!
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;