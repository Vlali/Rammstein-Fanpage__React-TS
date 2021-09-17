import React from 'react';
import {
	AiFillFacebook,
	AiOutlineInstagram,
	AiFillGithub,
} from 'react-icons/ai';

const Footer: React.FC = () => {
	return (
		<footer>
			<div className="footer-icon-container">
				<a
					href="https://www.facebook.com/lali.vendrics/ 
				"
					target="_blank"
				>
					<AiFillFacebook className="social" />
				</a>
				<a href="https://www.instagram.com/lali_vendrics/" target="_blank">
					<AiOutlineInstagram className="social" />
				</a>
				<a href="https://github.com/Vlali" target="_blank">
					<AiFillGithub className="social" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
