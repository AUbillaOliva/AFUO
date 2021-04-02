import React from 'react'
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import styled from "styled-components";

//Styles
import styles from './styles/About.module.css';

const StyledSection = styled.section`
	background-color: ${(props: any) => props.theme.SURFACE_COLOR};
	color: ${(props: any) => props.theme.TEXT_COLOR};
`;

const StyledDivider = styled.hr`
	background-color: ${(props: any) => props.theme.DIVIDER_COLOR};
`;

const Avatar = () => {
	return <Image className={styles.aboutImage} src="/assets/profile.png" alt="me" width="250" height="250" />
}

const About = () => {
	return (
		<StyledSection className={styles.aboutSection}>
			<div className={styles.containerFluid}>
				<h4 className={styles.aboutSectionTitle}>
					<FormattedMessage id="about.about-section-title"
						defaultMessage="Quién soy"
						description="about section title"
					/>
				</h4>
				<StyledDivider className="mt-4" />
				<div className={styles.aboutBodyContainer}>
					<div className={styles.row + " row"}>
						<div className={"col-xl-6 col-lg-6 col-md-12 col-sm-12 " + styles.leftContainer}>
							<Avatar />
						</div>
						<div className={"col-xl-6 col-lg-6 col-md-12 col-sm-12 " + styles.rightContainer}>
							<div className={styles.aboutDescription}>
								<p><FormattedMessage id="about.about-description" /></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</StyledSection>
	)
}

export default About;
