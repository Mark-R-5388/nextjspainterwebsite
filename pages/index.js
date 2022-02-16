import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

export default function Home() {
	return (
		<>
			<header className={styles.home_header}>
				<div className={styles.home_link_container}>
					<Link href='/about'>
						<a className={styles.home_link}>About</a>
					</Link>
					<Link href='/contact'>
						<a className={styles.home_link}>Contact</a>
					</Link>
					<Link href='/gallery'>
						<a className={styles.home_link}>Gallery</a>
					</Link>
				</div>
			</header>

			<section className={styles.home_section}>
				<Image
					priority
					className={styles.home_image}
					src='/images/homepage/home-lg.jpg'
					layout='fill'
					alt='swirling painting'
				/>
				<div className={styles.home_hero_text_container}>
					<h1 className={styles.home_hero_text_header}>The Ultimate Painter</h1>
					<p className={styles.home_hero_text_paragraph}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
						voluptas!
					</p>
				</div>
			</section>

			<main className={styles.home_main}>
				<div className={styles.home_main_container}>
					<div className={styles.home_main_image_container}>
						<Image
							className={styles.home_main_image}
							src='/images/homepage/home-image-1.jpg'
							alt='swirling hapiness'
							layout='fill'
						/>
					</div>
					<div className={styles.home_main_text_container}>
						<h2>Welcome To My Site</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
							nihil corporis a sequi voluptates sint amet, delectus, nam ratione
							eos consequatur unde? Accusamus at sint voluptate numquam. Quos,
							iusto tempore.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
							exercitationem fuga sunt numquam eveniet voluptate repudiandae
							earum voluptatum at enim!
						</p>
					</div>
				</div>
			</main>
			<footer className={styles.home_footer}>
				<div className={styles.home_footer_container}>
					<p className={styles.home_footer_text}>
						The Ultimate Painter &copy; 2022
					</p>
					<div className={styles.home_footer_contact_section}>
						<p>(888)888-8888</p>
						<p>email@email.com</p>
						<div className={styles.home_footer_social_container}>
							<Link href='https://instagram.com'>
								<a>
									<BsFacebook />
								</a>
							</Link>
							<Link href='https://facebook.com'>
								<a>
									<BsInstagram />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
