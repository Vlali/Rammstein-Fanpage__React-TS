import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import { UseGlobalContext } from '../../context';
import { IAlbumDataPlusAmount } from '../../types';

const BagItem: React.FC<IAlbumDataPlusAmount> = ({
	albumName,
	img,
	price,
	amount,
	id,
}) => {
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
