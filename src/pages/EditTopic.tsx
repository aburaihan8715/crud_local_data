import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneTopicById, updateOneTopicById } from "../libs/local-db";
import { Topic } from "../types";

const EditTopic = () => {
  const [topic, setTopic] = useState<Topic | null>(null);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id as string;

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!titleRef.current?.value || !descRef.current?.value) return alert("Input should not be empty!");
    const form = e.currentTarget;
    const updatedTopic = {
      id: id,
      title: titleRef.current.value,
      desc: descRef.current.value,
    };
    // console.log(updatedTopic);
    updateOneTopicById(id, updatedTopic);
    form.reset();
    navigate("/");
  };

  useEffect(() => {
    const topicData = getOneTopicById(id);
    if (topicData) setTopic(topicData);
  }, [id]);
  // console.log(topic);
  return (
    <form onSubmit={submitHandler} className="mt-8">
      <div className="flex flex-col gap-4">
        {/* topic title input */}
        <input ref={titleRef} defaultValue={topic?.title} className="py-2 px-3 border rounded text-black" type="text" placeholder="Topic title" />

        {/* topic description input */}
        <input ref={descRef} defaultValue={topic?.desc} className="py-2 px-3 border rounded text-black" type="text" placeholder="Topic description" />

        {/* topic action button */}
        <div className=" flex justify-end">
          <button className="bg-red-600 py-2 px-3 rounded capitalize">submit</button>
        </div>
      </div>
    </form>
  );
};

export default EditTopic;
