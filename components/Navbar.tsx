
import Link from 'next/link'

import styles from '@/Navbar.module.css';
import { ActiveLink } from '@/ActiveLink';

export const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  }
]


export const Navbar = () => {

  console.log(menuItems)

  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map(({text, href}) => (
          <ActiveLink key={href} text={text} href={href} />
        ))
      }
    </nav>
  )
}
