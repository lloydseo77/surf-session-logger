import SessionList from './SessionList';
import useFetch from './useFetch';

const Home = () => {
    const { data: sessions, isPending, error } = useFetch('http://localhost:8001/sessions');

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { sessions &&  <SessionList sessions={sessions} title="All Sessions" />}
        </div>
    );
}

export default Home;