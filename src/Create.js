import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [score, setScore] = useState('5');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const session = { location, date, description, score };

        setIsPending(true);

        fetch('http://localhost:8001/sessions', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(session)
        }).then(() => {
            console.log('new session added');
            setIsPending(false);
            navigate('/');
        });
    }

    return (
        <div className="create">
            <h2>Add a New Session</h2>
            <form onSubmit={handleSubmit}>
                <label>Location:</label>
                <input 
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <label>Date:</label>
                <input 
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <label>Description:</label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <label>Wave Score:</label>
                <select
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                { !isPending && <button>Add Session</button> }
                { isPending && <button disabled>Adding Session...</button>}
            </form>
        </div>
    );
}

export default Create;