import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
        <div id="sidebar" className='sidebar'>
            <div className='user-info'>User Info</div>
            <ul className='dashboard-options'>
                <li>Tasks</li>
                <li>Social Media</li>
                <li>Newsfeed</li>
                <li>Journal</li>
                <li>Health</li>
                <li>Settings</li>
            </ul>
        </div>
    );
  }
}

export default Sidebar;
