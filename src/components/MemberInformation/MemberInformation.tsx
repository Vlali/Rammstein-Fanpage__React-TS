import { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import SingleMember from './SingleMember';
import Loading from '../Loading/Loading';
import { UseGlobalContext } from '../../context';
const MemberInformation: React.FC = () => {
	const [index, setIndex] = useState(0);
	const { loading, memberDetails } = UseGlobalContext();
	const nextSlide = () => {
		setIndex((oldIndex) => {
			let index = oldIndex + 1;
			if (index > memberDetails.length - 1) {
				index = 0;
			}
			return index;
		});
	};
	const prevSlide = () => {
		setIndex((oldIndex) => {
			let index = oldIndex - 1;
			if (index < 0) {
				index = memberDetails.length - 1;
			}
			return index;
		});
	};

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex((oldIndex) => {
				let index = oldIndex + 1;
				if (index > memberDetails.length - 1) {
					index = 0;
				}
				return index;
			});
		}, 5000);
		return () => {
			clearInterval(slider);
		};
	}, [index]);

	if (loading) {
		return <Loading />;
	}
	return (
		<section className="members-info-main">
			<section className="container-with-buttons">
				<button className="welcome-btn left members-info-btn members-info-left">
					<AiOutlineArrowLeft className="svg" onClick={prevSlide} />
				</button>

				{memberDetails.map((person, personIndex) => {
					const { id } = person;
					let position = 'next-slide';
					if (personIndex === index) {
						//
						position = 'active-slide';
					}
					if (
						personIndex === index - 1 ||
						(index === 0 && personIndex === memberDetails.length - 1)
					) {
						position = 'last-slide';
					}
					return <SingleMember {...person} position={position} key={id} />;
				})}

				<button className="welcome-btn right  members-info-btn members-info-right">
					<AiOutlineArrowRight className="svg" onClick={nextSlide} />
				</button>
			</section>
		</section>
	);
};

export default MemberInformation;
