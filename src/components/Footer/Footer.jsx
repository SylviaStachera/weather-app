import { Link } from 'react-router-dom';
import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <ul className={css.list}>
        <li className={css["additional-space"]}>© 2020 | All Rights Reserved | Developed by</li>
        <li>
          <Link className={css.link}> Sylwia Stachera</Link>
        </li>
      </ul>
    </footer>
  );
};
