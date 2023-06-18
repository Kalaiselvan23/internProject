import React, { useState } from 'react';
import info from '../datas/info';
import Post from './Post';

const tags = ["All", "Technology", "Education", "Lifestyle", "HealthCare", "Sport", "Food"];

const Contents = () => {
  const [isTagged, setTag] = useState("All");

  const setTagandCol = (event) => {
    setTag(event.target.value);
  };

  return (
    <div className='bg-[#141518] '>
      <div className='tags flex gap-2 mx-9 p-5 justify-left '>
        {tags.map((item, index) => (
          <button
            className={isTagged === item ? 'active' : ''}
            style={isTagged === item ? { backgroundColor: '#FFBB29', color: 'black' } : {}}
            value={item}
            onClick={setTagandCol}
          >
            {item}
          </button>
        ))}
      </div>
      <div className='flex flex-wrap justify-start mx-10'>
        {isTagged === 'All' || isTagged === ''
          ? info.map(getPost)
          : info.filter((item) => item.category === isTagged.toLowerCase()).map(getPost)}
      </div>
    </div>
  );
};

const getPost = (items) => {
  return <Post post={items} />;
};

export default Contents;
