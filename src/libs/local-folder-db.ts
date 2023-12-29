interface Topic {
  id: string;
  title: string;
  desc: string;
}

let topicsData: Topic[] = [
  {
    id: "1",
    title: "html",
    desc: "hyper text markup language",
  },
  {
    id: "2",
    title: "css",
    desc: "cascading stylesheet",
  },
  {
    id: "3",
    title: "javascript",
    desc: "dynamic programming languages",
  },
];

// create
const createTopic = (topic: Topic) => {
  topicsData.push(topic);
};

// read all
const getAllTopics = () => {
  return topicsData || null;
};

// read one
const getOneTopicById = (id: string) => {
  const topic = topicsData && topicsData.length > 0 ? topicsData.find((item: Topic) => item.id === id) : null;
  return topic;
};

// update one
const updateOneTopicById = (id: string, updateTopic: Topic) => {
  if (topicsData && topicsData.length > 0) {
    const topics = topicsData.filter((item: Topic) => item.id !== id);
    const updatedTopicsData = [...topics, updateTopic];
    topicsData = updatedTopicsData;
  }
};

// delete one
const deleteOneTopicById = (id: string) => {
  if (topicsData && topicsData.length > 0) {
    const topics = topicsData.filter((item: Topic) => item.id !== id);
    topicsData = topics;
  }
};

// delete all
const deleteAllTopic = () => {
  topicsData = [];
};

export { createTopic, getAllTopics, getOneTopicById, deleteOneTopicById, deleteAllTopic, updateOneTopicById };
