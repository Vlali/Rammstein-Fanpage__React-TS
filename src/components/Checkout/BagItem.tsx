import React from 'react';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import { UseGlobalContext } from '../../context';

const BagItem = ({ albumName, img, price, amount, id }: any) => {
	const { incAmount, decAmount, deleteAnItem } = UseGlobalContext();

	return (
		<div className="single-item-container">
			<div className="single-item-image">
				<img src={img} alt="album pic" />
			</div>
			<div className="single-item-text">
				<p>
					Name: <span>{albumName}</span>
				</p>
				<p>
					Price: <span>{`${price} $`}</span>
				</p>
				<button
					className="remove-btn"
					onClick={() => {
						deleteAnItem(id);
					}}
				>
					remove
				</button>
			</div>
			<div className="single-item-inc-dec">
				<AiFillCaretUp
					onClick={() => {
						incAmount(id);
					}}
				/>
				<p>{amount}</p>
				<AiFillCaretDown
					onClick={() => {
						decAmount(id);
					}}
				/>
			</div>
		</div>
	);
};

export default BagItem;
