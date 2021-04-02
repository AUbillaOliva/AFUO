import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';

// Model
import { ProjectModel } from '../../src/models/ProjectModel';

// Styles
import styles from './styles/Carousel.module.css';

// Components
import Project from '../Project/Project';

interface CarouselProps {
	items: ProjectModel[];
}

const Carousel = (props: CarouselProps) => {

	const [counter, setCounter] = useState(0);
	const router = useRouter();

	const handleClick = (count: number) => {
		if (count === 1) {
			if (counter + count < props.items.length) {
				setCounter(counter + count);
			} else {
				setCounter(0);
			}
		} else if (count === -1) {
			if (counter + count < 0) {
				setCounter(props.items.length - 1);
			} else {
				setCounter(counter + count);
			}
		}
	}

	return (
		<div className={styles.carousel}>
			<div className={styles.carouselInner}>
				{
					props.items.length !== 0 ? <Project
						key={props.items[counter]._id}
						title={props.items[counter].title}
						index={counter}
						tags={props.items[counter].tags}
						description={props.items[counter].descriptions[router.locale]}
						urlImage={props.items[counter].images}
						url={props.items[counter].url}
					/> : null
				}
			</div>
			<div className={styles.carouselControls}>
				<div>
					<a className={styles.carouselControlPrev} onClick={() => handleClick(-1)} role="button" data-slide="prev">
						<span className={styles.carouselControlPrevIcon}><Image src="/assets/arrow-left.svg" height="30px" width="30px" /></span>
					</a>
				</div>
				<a className={styles.carouselControlNext} onClick={() => handleClick(1)} role="button" data-slide="next">
					<span className={styles.carouselControlNextIcon}><Image src="/assets/arrow-right.svg" height="30px" width="30px" /></span>
				</a>
			</div>
		</div>
	)
}

export default Carousel;
