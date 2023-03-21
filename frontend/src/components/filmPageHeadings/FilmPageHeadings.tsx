import React from 'react';
import './FilmPageHeadings.scss';

const HomeHeadings = ({text}: string) => {
    return (
        <div className='film-page-headings'>
            <div className="f-page-h-span">
                <span>{text}</span>
            </div>
        </div>
    );
};

export default HomeHeadings;