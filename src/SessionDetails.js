import { useNavigate, useParams } from "react-router-dom"
import useFetch from "./useFetch";

const SessionDetails = () => {
    const { id } = useParams();
    const { data: session, error, isPending } = useFetch('http://localhost:8001/sessions/' + id);
    const navigate = useNavigate();

    const formatDate = (dateStr) => {
        const dateObj = new Date(dateStr);
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
        const day = dateObj.getDate().toString().padStart(2, '0');
        const year = dateObj.getFullYear();
    
        return `${month}/${day}/${year}`;
    }

    const handleClick = () => {
        fetch('http://localhost:8001/sessions/' + session.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        });
    }

    return (
        <div className="session-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { session && (
                <div>
                    <div>
                        <h2>{ session.location }</h2>
                        <h2>{ session.score }</h2>
                    </div>
                    <p>{ formatDate(session.date) }</p>
                    <div>{ session.description }</div>
                    <button onClick={ handleClick }>delete</button>
                </div>
            )}
        </div>
    )
}

export default SessionDetails;