import React from 'react';

import {PortfolioItem} from './PortfolioItem.jsx';
import {PortfolioToolIcon} from './PortfolioToolIcon.jsx';

const PortfolioList = () => (
    <div>
        <div className="portfolio-container">
            <div className = "portfolio-container--item">
                <PortfolioItem 
                index= 'Project #1'
                title = 'Student Expenses'
                subtitle = 'Track those annoying bills.'
                />

                <div className="portfolio-item--tools">
                    <PortfolioToolIcon
                    url= "https://nodejs.org/en/"
                    image= "https://image.ibb.co/i6geWp/nodejs_logo.png"
                    />

                    <PortfolioToolIcon
                    url="https://reactjs.org/"
                    image="https://image.ibb.co/g8PcHU/react_logo.png"
                    />

                    <PortfolioToolIcon
                    url="https://redux.js.org/"
                    image="https://image.ibb.co/fjHKWp/redux_logo.png"
                    />

                    <PortfolioToolIcon
                    url="https://firebase.google.com/"
                    image="https://image.ibb.co/gjcWcU/firebase_logo.png"
                    />
                </div>

                <div className="portfolio-item--link-container">
                    <div>
                        <a  className = "portfolio-item--link__click" href='https://github.com/Joaoviana/react-struggling-student-expenses/'>Src</a>
                    </div>
                    <div>
                        <a  className = "portfolio-item--link__click" href='https://struggling-student-expenses.herokuapp.com'>View</a>
                    </div>
                </div>

             </div>

            <div className = "portfolio-container--item">
                <PortfolioItem className = "Portfolio-item" 
                index= 'Project #2'
                title = 'Indecision'
                subtitle = 'Let the computer choose your tasks for you'
                />

                <div className="portfolio-item--tools">
                    <PortfolioToolIcon
                    url= "https://nodejs.org/en/"
                    image= "https://image.ibb.co/i6geWp/nodejs_logo.png"
                    />

                    <PortfolioToolIcon
                    url="https://reactjs.org/"
                    image="https://image.ibb.co/g8PcHU/react_logo.png"
                    />
                </div>

                <div className="portfolio-item--link-container">
                    <div>
                        <a  className = "portfolio-item--link__click" href='https://github.com/Joaoviana/react-indecision/'>Src</a>
                    </div>
                    <div>
                        <a  className = "portfolio-item--link__click" href='https://struggling-student-indecision.herokuapp.com/'>View</a>
                    </div>
                </div>
           </div>

            <div className = "portfolio-container--item">
                <PortfolioItem 
                index= 'Project #3'
                title = 'React-Redux Boilerplate'
                subtitle = 'Simple with Firebase integration'
                />

                <div className="portfolio-item--tools">
                    <PortfolioToolIcon
                    url= "https://nodejs.org/en/"
                    image= "https://image.ibb.co/i6geWp/nodejs_logo.png"
                    />

                    <PortfolioToolIcon
                    url="https://reactjs.org/"
                    image="https://image.ibb.co/g8PcHU/react_logo.png"
                    />

                    <PortfolioToolIcon
                    url="https://redux.js.org/"
                    image="https://image.ibb.co/fjHKWp/redux_logo.png"
                    />

                    <PortfolioToolIcon
                    url="https://firebase.google.com/"
                    image="https://image.ibb.co/gjcWcU/firebase_logo.png"
                    />
                </div>

                <div className="portfolio-item--link-container">
                    <div>
                        <a  className = "portfolio-item--link__click" href='https://github.com/Joaoviana/react-boilerplate-by-concept'>Src</a>
                    </div>
                </div>

            </div>

            <div className = "portfolio-container--item">
                <PortfolioItem className = "Portfolio-item" 
                index= 'Project #4'
                title = 'Web ChatRoom'
                subtitle = 'Developed with socket.io'
                />

                <div className="portfolio-item--tools">
                    <PortfolioToolIcon
                    url= "https://nodejs.org/en/"
                    image= "https://image.ibb.co/i6geWp/nodejs_logo.png"
                    />

                    <PortfolioToolIcon
                    url= "https://socket.io/"
                    image= "https://image.ibb.co/kbthj9/socket_io_01.png"
                    />
                </div>

                <div className="portfolio-item--link-container">
                    <div>
                        <a  className = "portfolio-item--link__click" href='https://github.com/Joaoviana/node-chat-app/'>Src</a>
                    </div>
                    <div>
                        <a  className = "portfolio-item--link__click" href='https://struggling-student-chat.herokuapp.com/'>View</a>
                    </div>
                </div>

            </div>

            <div className = "portfolio-container--item">
                <PortfolioItem 
                index= 'Project #5'
                title = 'Node Todo List API'
                subtitle = "That's it."
                />

                <div className="portfolio-item--tools">
                    <PortfolioToolIcon
                    url= "https://nodejs.org/en/"
                    image= "https://image.ibb.co/i6geWp/nodejs_logo.png"
                    />

                    <PortfolioToolIcon
                    url= "https://www.mongodb.com/"
                    image= "https://image.ibb.co/ctv1cU/mongodb.png"
                    />
                </div>

                <div className="portfolio-item--link-container">
                    <div>
                        <a  className = "portfolio-item--link__click" href='https://github.com/Joaoviana/node-todo-api'>Src</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
);

export default PortfolioList;