import React, { useState } from 'react';
import Color from '../Color/Color';
import Style from './Tab.module.css';
import { updateTab, deleteTab } from '../../Services/tabService';

function Tab({ tab, setTabs }) {
    const [text, setText] = useState(tab.text);
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = async () => {
        const updatedTab = { ...tab, text };
        const data = await updateTab(tab.id, updatedTab);
        setTabs((prevTabs) => prevTabs.map((t) => (t.id === data.id ? data : t)));
        setIsEditing(false);
    };

    const handleColorChange = async (newColor) => {
        const data = await updateTab(tab.id, { color: newColor });
        setTabs((prevTabs) => prevTabs.map((t) => (t.id === data.id ? data : t)));
    };

    const handleDelete = async () => {
        await deleteTab(tab.id);
        setTabs((prevTabs) => prevTabs.filter((t) => t.id !== tab.id));
    };

    return (
        <div className={Style.tab} style={{ backgroundColor: tab.color }}>
            <button className={Style.deleteButton} onClick={handleDelete}>X</button>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onBlur={handleSave}
                        onKeyPress={(e) => e.key === 'Enter' && handleSave()}
                    />
                    <button onClick={handleSave}>Save</button>
                </>
            ) : (
                <div onDoubleClick={() => setIsEditing(true)}>
                    {tab.text}
                </div>
            )}
            <Color onColorChange={handleColorChange} />
        </div>
    );
}

export default Tab;
