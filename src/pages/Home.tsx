import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteOneTopicById, getAllTopics } from "../libs/local-folder-db";
import { Topic } from "../types";

const Home = () => {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    const allTopics = getAllTopics();
    if (allTopics) setTopics(allTopics);
  }, []);
  // console.log(topics);
  return (
    <ul className="mt-6 flex flex-col gap-4">
      {topics && topics.length > 0 ? (
        topics.map((topic: Topic) => (
          <li key={topic.id} className="border py-6 px-4  flex justify-between rounded">
            <div>
              <h2 className="text-2xl font-medium uppercase">{topic.title}</h2>
              <p className="capitalize">{topic.desc}</p>
            </div>
            <div className="flex gap-2 items-start">
              <TopicDeleteBtn id={topic.id} />
              <Link to={`/editTopic/${topic.id}`} className="bg-green-600 px-3 py-2 rounded capitalize">
                edit
              </Link>
            </div>
          </li>
        ))
      ) : (
        <h2 className="text-center text-red-500 text-3xl font-semibold capitalize">No topics to show</h2>
      )}
    </ul>
  );
};

export default Home;

// delete button
const TopicDeleteBtn = ({ id }: { id: string }) => {
  const deleteHandler = () => {
    const agree = confirm("Are you sure!");
    if (agree) {
      deleteOneTopicById(id);
      alert("Topic deleted successfully");
    }
  };
  return (
    <button onClick={deleteHandler} className="bg-red-600 px-3 py-2 rounded capitalize">
      delete
    </button>
  );
};
