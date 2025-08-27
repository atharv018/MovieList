import { useNavigate } from "react-router-dom";


const Start = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/home");
    };

    return (
        <div className="bg-black min-h-screen flex flex-col p-4 box-border w-full text-white items-center justify-center">
            <h1 className="text-4xl font-bold p-8">Welcome to MovieList !!!</h1>
            <h1 className="text-xl p-4">Start adding movies to your WatchList</h1>
            <button onClick={handleGetStarted} className="bg-red-600 text-white px-4 py-2 rounded text-xl">Get Started</button>
        </div>
    );
};

export default Start;
