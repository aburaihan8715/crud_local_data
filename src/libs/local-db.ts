interface Topic {
  id: string;
  title: string;
  desc: string;
}

let topicsData = [
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
  return topicsData || [];
};

// read one
const getOneTopicById = (id: string) => {
  const topic = topicsData && topicsData.length > 0 ? topicsData.find((item: Topic) => item.id === id) : {};
  return topic;
};

// update one
const updateOneTopicById = (id: string, updateTopic: Topic) => {
  if (topicsData && topicsData.length > 0) {
    const topics = topicsData.filter((item: Topic) => item.id !== id);
    topicsData.push(...topics, updateTopic);
  }
};

// delete one
const deleteOneTopicById = (id: string) => {
  if (topicsData && topicsData.length > 0) {
    const topics = topicsData.filter((item: Topic) => item.id !== id);
    topicsData.push(...topics);
  }
};

// delete all
const deleteAllTopic = () => {
  topicsData = [];
};

export { createTopic, getAllTopics, getOneTopicById, updateOneTopicById, deleteOneTopicById, deleteAllTopic };
