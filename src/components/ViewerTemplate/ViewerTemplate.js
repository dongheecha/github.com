import React from 'react';
import styles from './ViewerTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const ViewerTemplate = ({ viewerList }) => {
    return (
        <div >
            <header>
                Astronomy Picture of the Day
            </header>
            <div className={cx('viewer-template')}>
                
                    {viewerList}
              
            </div>
        </div>
    )
}

export default ViewerTemplate;