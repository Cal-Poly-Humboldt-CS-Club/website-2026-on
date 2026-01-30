import React from 'react';
import style from './Navbar.module.css';
import Button from '../components/Button';
import Image from 'next/image';

const Navbar: React.FC = () => {
    return (
        <nav className={style.nav}>
            {/* Logo */}
            <div className={style.logo}>
                <a href="/">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={50}
                        height={50}
                    />
                </a>
            </div>

            {/* Page Links */}
            <ul className={style.links}>
                <li>
                    <a href="/join" className="hover:text-gray-400">Join</a>
                </li>
                <li>
                    <a href="/events" className="hover:text-gray-400">Events</a>
                </li>
                <li>
                    <a href="/shop" className="hover:text-gray-400">Shop</a>
                </li>
                <li>
                    <a href="/sponsors" className="hover:text-gray-400">Sponsors</a>
                </li>
            </ul>

            {/* Buttons */}
            <div className={style.buttons}>
                <Button href='https://discord.com' isIcon>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACf0lEQVR4nO2Yy4tOcRjHP+MS2biExmXkUkPIJQtWlMgGJUwYZWE/sXBNyB9gI5QshIVZsHBXFqIpITvlupIiZiRMTNMcPfUs3k6/9/ye3znvmfeU37ee3XO+l3Oe3+V9ISIiIiIiIj/mArMLPD9HOYYVI4AtwBMgAYaAwzl4juizwtEDbAVGUjI2AW9UtLZ6NZgV0tvn4HkLbC7D+ASg2yFYWzuNIaSn08PVrZoNwVjgpUewjHoGjGlEgBNNMJ9oyTophEnAjyYG6APGFwlwsInmE619ec3LYntfgQCvgZY8AVZXwHyitSpPgDMVMJ5onQ41L5/sUwWMJ1ofQ8doaQC5HDrTgNHAoZrrQb26BMwA2oCrATqLQwIcMJI+dZy+FzP676feZAvw0Ki1PyTAAyPp9sCvt9bRv8GodcdqXt7KdyNpu+N5GaWBOv1yMKYx1ajVa10H7QFzOT8wgOuCNiVAz/TbYUcAofSmsTyjf42jf12AXoclwMkAwheOHyHXMvpvOfTuBugdtwS4HEAodROYp1vpWUP/eWCirocLgVqyBXvRE0g6nPXYEuBDBYwmdeqdJcAXD8ltYLrWXp3hvznM/ASuA3t0/GYC9zzPfLYE+O0hEaE0xgHrgVNq6hXwFfijRuVe9Ry4oqe83C5HOXhmebR/WQJ885DImy8LbR5teSledBiO9NYSzLcaRmibleyY51Y5qDuCjMOCAqaXAUd15xvM0BvSviB01vnzyUW+JIf5FYard6IedpETctE6B/RnCMiizYsbGbz9qi0eCmMy0AU8Sm2Z8tkXFuBdlBqdAdXoUs1SIFvmSh2xjQ36v3W3bq3CHRERERER8f/gH1f//0vffP1PAAAAAElFTkSuQmCC" alt="discord"></img>
                </Button>
                <Button href="/contact">
                    Contact
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;