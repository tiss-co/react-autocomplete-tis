import React, { useState } from 'react';


import { AutoComplete } from 'react-autocomplete-tis';
import 'react-autocomplete-tis/dist/index.css';

const App = () => {
  const [items, setItems] = useState([]);

  const options = ['Windows', 'Mac OS', 'Linux'];

  const filteredOptions = options.filter(option => !items.includes(option));

  return (
    <div className='App'>
      <div className='Title'>React AutoComplete Tis</div>
      <div className='Row'>
        {
          items.map((item, index) =>
            <div
              key={index}
              className='Item'
              onClick={() =>
                setItems(prev =>
                  prev.filter(i => i !== item)
                )
              }>
              {item}
            </div>
          )
        }
      </div>
      <div className='Row'>
        <AutoComplete
          className='AutoComplete'
          placeholder='Type OS name'
          options={filteredOptions}
          onSelect={(item, index) => setItems(prev => ([...prev, item]))}
          roundedBorder={true}
          darkMode={false}
        />
      </div>
    </div>
  );
};

export default App;
