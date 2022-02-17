import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const Gallery = () => {
	return (
		<>
			<Header />

			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
				cupiditate eum illum consequuntur officia distinctio.
			</p>
			<Link href='/'>
				<a>Home Page</a>
			</Link>
			<Footer />
		</>
	);
};

export default Gallery;
