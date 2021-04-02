import React from 'react'
import Link from 'next/link';
import { injectIntl } from 'react-intl';
import styled from 'styled-components';

// Atoms
import Button from '../../atoms/Button/Button';

// Styles
import styles from './styles/Project.module.css';

interface ProjectProps {
	title?: string;
	description?: string;
	urlImage?: string[];
	index?: number;
	url?: string;
	tags?: string[];
	key?: string | number;
}

const StyledBadge = styled.span`
	background-color: ${(props: any) => props.theme.COLOR_ACCENT};
	color: ${(props: any) => props.theme.BUTTON_TEXT_COLOR};
`;

const injectGetMessage = (fn: any) => React.createElement(injectIntl(({ intl }) => fn(intl.formatMessage)));

const Project = (props: ProjectProps) => {
	return (
		<div className={styles.carouselItem + " carousel-item active"}>
			<div className={styles.containerFluid}>
				<div className="row">
					<div className={(props.urlImage !== undefined ? "col-xl-6 col-lg-6 col-md-12 col-sm-12 " : "col-12 ") + styles.leftContainer}>
						<h6 className={styles.projectTitle}>{props.title}</h6>
						{
							props.tags !== undefined ?
								props.tags.map((tag: string, index: number) =>
									<Link key={index} /* href={`/projects/tags/${tag}`} */ href="/" >
										<a className={styles.projectTagLink}>
											<StyledBadge className="badge mr-1 mb-3">
												{tag}
											</StyledBadge>
										</a>
									</Link>
								)
								: null
						}
						<p className={styles.projectDes}>{props.description}</p>
						<div className="text-left">
							{injectGetMessage((getMessage: any) => <Button text={getMessage({ id: 'button.info' })} url={props.url} />)}
						</div>
					</div>
					{
						props.urlImage !== undefined ?
							<div className={"col-xl-6 col-lg-6 col-md-12 col-sm-12 " + styles.rightContainer}>
								<img className={styles.projectImage} src={props.urlImage[0]} alt="project" />
							</div>
							: null
					}
				</div>
			</div>
		</div>
	)
}

export default Project;
