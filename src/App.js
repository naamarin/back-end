// App.js
import React, { useState, useEffect } from 'react';
import Tabs from './components/Tabs/Tabs';
import './App.css';
import { getTabs, addTab } from './Services/tabService';

function App() {
  const [tabs, setTabs] = useState([]);

  const fetchTabs = async () => {
    const data = await getTabs();
    setTabs(data);
  };

  useEffect(() => {
    fetchTabs();
  }, []);

  const handleAddTab = async () => {
    const newTab = { text: 'New Tab', color: 'lightgray' };
    const addedTab = await addTab(newTab);
    setTabs([...tabs, addedTab]);
  };

  return (
    <div className="App">
      <button onClick={handleAddTab} className="add-tab-button">Add Tab</button>
      <Tabs tabs={tabs} setTabs={setTabs} />
    </div>
  );
}

export default App;
