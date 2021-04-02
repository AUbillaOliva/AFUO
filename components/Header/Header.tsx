import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'
import { FormattedMessage } from 'react-intl';

// Styles
import styles from './styles/Header.module.css';

const AppHeader = styled.header`
  	background-color: ${(props: any) => props.theme.PRIMARY_BACKGROUND_COLOR};
`;

const AppTitle = styled.h1`
  	color: ${(props: any) => props.theme.TEXT_COLOR};
`;

const AppSubtitle = styled.h6`
  	color: ${(props: any) => props.theme.TEXT_COLOR};
`;

const Header = ({ title, subtitle }) => {
	return (
		<AppHeader className={styles.appHeader}>
			<div className={styles.appHeaderContainer}>
				<Link href="/"><AppTitle className={styles.appTitle}>{title}</AppTitle></Link>
				<AppSubtitle className={styles.appSubtitle}>
					<FormattedMessage id="header.header-subtitle"
						defaultMessage={subtitle}
						description="header-description"
					/>
				</AppSubtitle>
			</div>
		</AppHeader>
	)
}

export default Header;
