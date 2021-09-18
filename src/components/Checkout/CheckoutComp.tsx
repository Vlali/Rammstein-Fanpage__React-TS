import BagItem from './BagItem';
import { UseGlobalContext } from '../../context';
import uniqid from 'uniqid';
const YourBag: React.FC = () => {
	const { bag, total, deleteYourBag } = UseGlobalContext();
	return (
		<section className="your-bag">
			<div className="your-bag-h1-cont-container">
				<div className="your-bag-h1-cont">
					<h1>Your Bag</h1>
				</div>
			</div>

			<section className="cart">
				<section className="bag-items-container">
					{bag.map((item) => {
						return <BagItem key={uniqid()} {...item} />;
					})}

					<div className="button-container-bag">
						<button className="delete-your-bag" onClick={deleteYourBag}>
							Delete your bag
						</button>
					</div>
					<hr />
					<div className="total-and-price">
						<p>Total</p>

						<p>amount: {`${total}€`}</p>
					</div>
				</section>
			</section>
		</section>
	);
};

export default YourBag;
