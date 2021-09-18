import { Link } from 'react-router-dom';
import { UseGlobalContext } from '../../context';
import { IAlbumData } from '../../types';
const SingleAlbum: React.FC<IAlbumData> = ({ id, albumName, img }) => {
	const { intoTheBag } = UseGlobalContext();
	return (
		<div className="album-container">
			<img src={img} className="album-img" alt="" />

			<h3>{albumName}</h3>

			<button
				className="album-btn buy"
				onClick={() => {
					intoTheBag(id);
				}}
			>
				BUY
			</button>
			<button className="album-btn details">
				<Link to={`/album/${id}`}>DETAILS</Link>
			</button>
		</div>
	);
};

export default SingleAlbum;
