import React, { useState } from 'react';
import './Experience.css';
import PageHeader from './Components/PageHeader';
import menuItems from './Components/MenuItems';

function Experience() {
    const [selectedItem, setSelectedItem] = useState(menuItems[0]);

    return (
        <div className="experience-container">
            <PageHeader title="My Professional Journey" subtitle="Work Experience"/>
            <div className="experience-content">
                <div className="experience-menu">
                    {menuItems.map((item, index) => (
                        <div 
                            key={index}
                            className="experience-menu-item"
                            style={{ backgroundColor: selectedItem.id === item.id ? "rgb(29, 24, 54)" : "transparent" }}
                            onClick={() => setSelectedItem(item)}
                        >
                            <img src={item.img} />
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <a className="experience-menu-item-title">{item.title}</a>
                                <a className="experience-menu-item-id">{item.id}</a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="experience-details">
                    <a className="experience-title">{selectedItem.title}</a>
                    <a className="experience-id">{selectedItem.id}</a>
                    <a className="experience-date">{selectedItem.date}</a>
                    <div className="experience-content-text">
                        {selectedItem.content.split("\n").map((line, index) => (
                            <a key={index}>{line}</a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
