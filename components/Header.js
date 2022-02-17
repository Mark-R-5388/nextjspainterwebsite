import Link from 'next/link';
import styles from '../styles/Header.module.css';

console.log(styles);

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header_link_container}>
				<Link href='/'>
					<a className={styles.header_link}>Home</a>
				</Link>
				<Link href='/about'>
					<a className={styles.header_link}>About</a>
				</Link>
				<Link href='/gallery'>
					<a className={styles.header_link}>Gallery</a>
				</Link>
				<Link href='/contact'>
					<a className={styles.header_link}>Contact</a>
				</Link>
			</div>
		</header>
	);
};

export default Header;
