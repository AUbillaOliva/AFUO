import React, { Fragment } from 'react'
import styled from 'styled-components';

// Styles
import styles from './styles/RepoCard.module.css';

interface CardPorps {
	title: string;
	description?: string | undefined;
	language?: string | undefined;
	url?: string | undefined;
}

const StyledCard = styled.a`
	background-color: ${(props: any) => props.theme.SURFACE_COLOR};
	color: ${(props: any) => props.theme.TEXT_COLOR};

	&:hover {
		color: ${(props: any) => props.theme.TEXT_COLOR};
	}
`;

const StyledFooter = styled.div`
	.java { color: brown; }
	.html { color: orange; }
	.javascript { color: yellow; }
	.c { color: pink; }
	.python { color: green; }
`;

const RepoCard = (props: CardPorps) => {

	return (
		<Fragment>
			{
				props.url !== undefined ?
					(
						<StyledCard href={props.url} className={styles.card + " card"}>
							<div className={styles.cardBody + " card-body"}>
								<h6 className={styles.cardTitle + " card-title"}>{props.title}</h6>
								<p className={styles.cardDescription + " card-description"}>{props.description}</p>
							</div>
							{
								props.language !== undefined ?
									(
										<StyledFooter className="card-footer">
											<span className={styles.repoLanguage + " " + props.language?.toLocaleLowerCase()}>{props.language}</span>
										</StyledFooter>
									)
									: null
							}
						</StyledCard>
					)
					: null
			}
		</Fragment>
	)
}

export default RepoCard;
