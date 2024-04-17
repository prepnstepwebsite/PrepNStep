import React from 'react';
import './404.scss'; // make sure the path matches your file structure

const NotFoundPage: React.FC = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Oops, seems like something went wrong. Try a different page.</p>
        </div>
    );
};

export default NotFoundPage;