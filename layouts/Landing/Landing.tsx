import React from 'react';
import { FormattedMessage } from 'react-intl';

// Styles
import styles from './styles/Landing.module.css';

const Landing = () => {
	return (
		<div className={styles.landingSection}>
			<div className={styles.containerFluid}>
				<div className={styles.landingContent}>
					<h1 className={styles.landingTitle}>
						<FormattedMessage
							id="landing.landing-title"
							defaultMessage="Software de autoaprendizaje mediante investigación y desarrollo."
							description="landing title"
						/>
					</h1>
					<p className={styles.landingSubtitle}>
						<FormattedMessage
							id="landing.landing-subtitle"
							defaultMessage="Hola soy Álvaro, ingeniero civil en computación"
							description="landing title"
						/>
					</p>
				</div>
			</div>
		</div>
	)
}

export default Landing;
