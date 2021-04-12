import customContext from "../../services/ContextService";

export default function FullUsers(props) {
	const {item} = props;


	return (

					<div>
						<h3>{item.username}-{item.email}</h3>
					</div>


	)
}
