import FullUsers from "./FullUsers";

export default function User(props) {
	const {items} = props;


	return (
		<div>
			{
				items.map(value => <FullUsers item={value} key={value.id}/>)
			}

		</div>
	)
}
