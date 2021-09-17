import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { UseGlobalContext } from '../../context';

const HomeComp = () => {
	const { classNameImg, leftSlide, rightSlide } = UseGlobalContext();
	return (
		<section className={`container ${classNameImg}`}>
			<div className="center">
				<button className="welcome-btn left">
					<AiOutlineArrowLeft className="svg " onClick={leftSlide} />
				</button>
				<div className="welcome-text">
					<h1>WELCOME TO MY FIRST REACT TS WEBSITE</h1>
					<p>Rammstein Website</p>
				</div>
				<button className="welcome-btn right" onClick={rightSlide}>
					<AiOutlineArrowRight className="svg " />
				</button>
			</div>
		</section>
	);
};

export default HomeComp;
