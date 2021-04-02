import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const ActiveLink = ({ href, activeClassName, children }) => {
	const child = React.Children.only(children);

	let className = child.props.className || '';
	if (activeClassName) {
		className = `${className} ${activeClassName}`.trim();
	}

	return <Link href={href}>{React.cloneElement(child, { className })}</Link>;
};

ActiveLink.propTypes = {
	href: PropTypes.string,
	activeClassName: PropTypes.string,
	children: PropTypes.node.isRequired
};

ActiveLink.defaultProps = {
	href: '',
	activeClassName: ''
};

export default ActiveLink;