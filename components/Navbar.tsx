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
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Page Links */}
        {renderLinks()}

        {/* Buttons */}
        <div className={style.buttons}>
          <Button href="https://discord.com" isIcon ariaLabel="Open Discord">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACf0lEQVR4nO2Yy4tOcRjHP+MS2biExmXkUkPIJQtWlMgGJUwYZWE/sXBNyB9gI5QshIVZsHBXFqIpITvlupIiZiRMTNMcPfUs3k6/9/ye3znvmfeU37ee3XO+l3Oe3+V9ISIiIiIiIj/mArMLPD9HOYYVI4AtwBMgAYaAwzl4juizwtEDbAVGUjI2AW9UtLZ6NZgV0tvn4HkLbC7D+ASg2yFYWzuNIaSn08PVrZoNwVjgpUewjHoGjGlEgBNNMJ9oyTophEnAjyYG6APGFwlwsInmE619ec3LYntfgQCvgZY8AVZXwHyitSpPgDMVMJ5onQ41L5/sUwWMJ1ofQ8doaQC5HDrTgNHAoZrrQb26BMwA2oCrATqLQwIcMJI+dZy+FzP676feZAvw0Ki1PyTAAyPp9sCvt9bRv8GodcdqXt7KdyNpu+N5GaWBOv1yMKYx1ajVa10H7QFzOT8wgOuCNiVAz/TbYUcAofSmsTyjf42jf12AXoclwMkAwheOHyHXMvpvOfTuBugdtwS4HEAodROYp1vpWUP/eWCirocLgVqyBXvRE0g6nPXYEuBDBYwmdeqdJcAXD8ltYLrWXp3hvznM/ASuA3t0/GYC9zzPfLYE+O0hEaE0xgHrgVNq6hXwFfijRuVe9Ry4oqe83C5HOXhmebR/WQJ885DImy8LbR5teSledBiO9NYSzLcaRmibleyY51Y5qDuCjMOCAqaXAUd15xvM0BvSviB01vnzyUW+JIf5FYard6IedpETctE6B/RnCMiizYsbGbz9qi0eCmMy0AU8Sm2Z8tkXFuBdlBqdAdXoUs1SIFvmSh2xjQ36v3W3bq3CHRERERER8f/gH1f//0vffP1PAAAAAElFTkSuQmCC"
              alt="discord"
            />
          </Button>
          <Button className={style.contact} href="/contact">
            Contact
          </Button>

          {/* NOTE: This only shows in mobile screen widths */}
          <Button
            className={`${style.hamburger} ${menuOpen ? style.hamshow : ''}`}
            isIcon
            onClick={toggleMenu}
            aria-controls="mobile-menu"
            ariaLabel={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaElEQVR4nO3WQQqAMAxE0X880/uvLRTvUfECKqIY2v9g9plFYECSpPcUoAI9eSoQZ0VagiP7zWxTFAlgTXBkv8hx4/L0fyRJkn5SnPHkWr9tlCLhjJckSfpMccaTa/22UYqEM16SNKMd8xQCsa44l2YAAAAASUVORK5CYII="
              alt="menu--v6"
            />
            <img
              className={style.hamX}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABN0lEQVR4nO3ZTWrDMBCG4fcoXfQkLZTuK83CSc6eRc8QAk0hJWBDMTFxJM1oLPRBdsYzj34S2YGenp6e1vIKhIr1w9hDVl6AI/ALHLCPABfgOwczIa7jxxojI2Kqn4yJY/PXGWaHfnYLtW89FRkVi5kRrZqWGNGuZYExGzDNQuZLWBQK1tiHxQtXQ5RsoDqiRCNuEDkNuUOkNOYW8UyD7hFrGt0M4tFhr9bhMyv3Rn8zM7EWsylEMxBpYWkNLWx2aeHrNy40uv93jXtMXIFwj4lPINxiYgLCHSZkINxgQgFEdUxYKJzzm2COCQoIc0xQRJhhAvBjdMQQLczXAuJ2ptKKlMbcW06XnFf7BZ40h5SbfQBnw5mYZz4zJ+A99WYTxhoxx2QhpnxW/jN0AN4q1u/p6emhfP4AxlR3VfJGRpkAAAAASUVORK5CYII="
              alt="delete-sign--v1"
            />
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