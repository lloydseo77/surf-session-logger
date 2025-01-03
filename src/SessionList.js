import { Link } from 'react-router-dom';


const SessionList = ({ sessions, title }) => {

    const formatDate = (dateStr) => {
        const dateObj = new Date(dateStr);
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
        const day = dateObj.getDate().toString().padStart(2, '0');
        const year = dateObj.getFullYear();
    
        return `${month}/${day}/${year}`;
    }

    return (
        <div className="session-list">
            <h2>{ title }</h2>
            {sessions.map(session => (
                <div className="session-preview" key={session.id}>
                    <Link to={`/sessions/${session.id}`}>
                        <h2>{ session.location }</h2>
                        <p>{ formatDate(session.date) }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default SessionList;