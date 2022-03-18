import { useParams, useHistory } from "react-router-dom";

const MovieDescription = () => {
    const history = useHistory();
    const handle = () => {
        history.push("/hay mchet ");
    };
    const { id } = useParams();
    return <div onClick={handle}>hello movieDescription : {id}</div>;
};

export default MovieDescription;
