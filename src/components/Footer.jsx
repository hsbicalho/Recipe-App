import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Footer() {
  return (
    <footer
      className="footerConteiner"
      data-testid="footer"
    >
      <Link
        to="/drinks"
      >
        <img
          src={ drinkIcon }
          alt="drinkIcon"
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link
        to="/explore"
      >
        <img
          src={ exploreIcon }
          alt="exploreIcon"
          data-testid="explore-bottom-btn"
        />
      </Link>
      <Link
        to="/foods"
      >
        <img
          src={ mealIcon }
          alt="mealIcon"
          data-testid="food-bottom-btn"
        />
      </Link>
    </footer>
  );
}