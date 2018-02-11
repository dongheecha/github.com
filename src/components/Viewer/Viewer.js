import React, {Component} from 'react';
import styles from './Viewer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Viewer extends Component {

  render() {

    const { id, mediaType, url, loading } = this.props;

    return (

      <div className={cx('viewer')}>
        {
          mediaType === 'image' ? (
            <img onClick={() => window.open(url)} src={url} alt="space"/>
          ) : (
            <div/>
          )
        }
      </div>
    );
  }
}

export default Viewer;