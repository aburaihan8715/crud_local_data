import { Link } from "react-router-dom";

const Home = () => {
  return (
    <ul className="mt-6 flex flex-col gap-4">
      <li className="border py-6 px-4  flex justify-between">
        <div>
          <h2 className="text-2xl font-medium capitalize">html</h2>
          <p>hyper text markup language</p>
        </div>
        <div className="flex gap-2 items-start">
          <button>delete</button>
          <Link to={`/editTopic/123`}>edit</Link>
        </div>
      </li>
    </ul>
  );
};

export default Home;
