import React, { Fragment } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl';
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faTwitter, faPatreon, faReact } from '@fortawesome/free-brands-svg-icons';

// Models
import { Profile } from '../../src/models/Profile';

// Store
import store from '../../src/redux/store';

// Styles
import styles from './styles/Footer.module.css';

const StyledFooter = styled.footer`
	background-color: ${(props: any) => props.theme.PRIMARY_BACKGROUND_COLOR};
	color: ${(props: any) => props.theme.TEXT_COLOR};

	a {
		color: ${(props: any) => props.theme.TEXT_COLOR};
		opacity: 60%;
		&:hover {
			text-decoration: none;
			opacity: 1;
			color: ${(props: any) => props.theme.COLOR_ACCENT};
		}
	}
`;

const StyledDivider = styled.hr`
	background-color: ${(props: any) => props.theme.DIVIDER_COLOR};
`;

const FooterSocialLinks = (profile: Profile) => {
	return (
		<Fragment>
			<p className={styles.footerLink}><FontAwesomeIcon height={"16px"} icon={faEnvelope} className={"fa mr-3"} aria-hidden={true}></FontAwesomeIcon><a href={"mailto:" + profile.email}>{profile.email}</a></p>
			<p className={styles.footerLink}><FontAwesomeIcon height={"16px"} icon={faInstagram} className={"fa mr-3"} aria-hidden={true}></FontAwesomeIcon><a href={"https://www.instagram.com/" + profile.social.instagram}>{profile.social.instagram}</a></p>
			<p className={styles.footerLink}><FontAwesomeIcon height={"16px"} icon={faFacebook} className={"fa mr-3"} aria-hidden={true}></FontAwesomeIcon><a href={"https://www.facebook.com/" + profile.social.facebook}>{profile.social.facebook}</a></p>
			<p className={styles.footerLink}><FontAwesomeIcon height={"16px"} icon={faTwitter} className={"fa mr-3"} aria-hidden={true}></FontAwesomeIcon><a href={"https://www.twitter.com/" + profile.social.twitter}>{profile.social.twitter}</a></p>
		</Fragment>
	)
}

const FooterSupportLinks = (profile: Profile) => {
	return (
		<Fragment>
			<p className={styles.footerLink}><FontAwesomeIcon height={"16px"} icon={faPatreon} className={"fa mr-3"} aria-hidden={true}></FontAwesomeIcon><a href={"https://www.patreon.com/" + profile.social.patreon}>{profile.social.patreon}</a></p>
		</Fragment>
	)
}

const FooterInfoLinks = (profile: Profile) => {
	return (
		<Fragment>
			<p className={styles.footerLink}><FontAwesomeIcon height={"16px"} icon={faHome} className={"fa mr-3"} aria-hidden={true}></FontAwesomeIcon>{profile.location}</p>
		</Fragment>
	)
}

const Footer = () => {
	return (
		<StyledFooter className={styles.pageFooter}>
			<div className={styles.containerFluid}>
				<div className="row">
					<div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 social-section">
						<h6 className="f-s-t font-weight-bold text-uppercase section-title">
							<FormattedMessage id="footer.social-title"
								defaultMessage=""
								description="footer-link"
							/>
							<span role="img" aria-label="contact" aria-hidden={true}> 📒</span>
						</h6>
						<StyledDivider className="f-sp" />
						{FooterSocialLinks({ email: "afubillaoliva@gmail.com", social: { instagram: "_d.men.t_", facebook: "AUbillaOliva", twitter: "AUbillaOliva", patreon: "afuo" }, location: "Santiago de Chile" })}
					</div>
					<div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 support-section">
						<h6 className="f-s-t font-weight-bold text-uppercase section-title">
							<FormattedMessage id="footer.support-title"
								defaultMessage=""
								description="footer-link"
							/>
							<span role="img" aria-label="coffee" aria-hidden={true}> ☕</span>
						</h6>
						<StyledDivider className="f-sp" />
						{FooterSupportLinks({ email: "afubillaoliva@gmail.com", social: { instagram: "_d.men.t_", facebook: "AUbillaOliva", twitter: "AUbillaOliva", patreon: "afuo" }, location: "Santiago de Chile" })}
					</div>
					<div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 info-section">
						<h6 className="f-s-t font-weight-bold text-uppercase section-title">
							<FormattedMessage id="footer.info-title"
								defaultMessage=""
								description="footer-link"
							/>
							<span role="img" aria-label="information" aria-hidden={true}> ℹ️</span>
						</h6>
						<StyledDivider className="f-sp" />
						{FooterInfoLinks({ email: "afubillaoliva@gmail.com", social: { instagram: "_d.men.t_", facebook: "AUbillaOliva", twitter: "AUbillaOliva", patreon: "afuo" }, location: "Santiago de Chile" })}
					</div>
				</div>
			</div>
			<div className={styles.footerEnd}>
				<p className="text-center">
					<FormattedMessage id="footer.created-with" defaultMessage="Creado con" description="Creado con" />
					<FontAwesomeIcon icon={faReact} height={"92px"} color={store.getState().persistedThemeReducer.theme.COLOR_ACCENT} />
				</p>
				<p className="text-center"><FormattedMessage id="footer.any-issue" defaultMessage="Algún problema en la página?" description="page issue question" /><a href="https://github.com/AUbillaOliva/Afuo/issues/new"> <FormattedMessage id="footer.fix-it" defaultMessage="Arreglalo en github" description="fix it on github" /></a></p>
				<p className="text-center">© afuo {new Date().getFullYear().toString()} </p>
			</div>
		</StyledFooter>
	)
}

export default Footer;
