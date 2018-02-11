import React, { Component } from 'react';
import Viewer from './Viewer';
import {
    ChasingDots,
    FadingCircle
} from 'better-react-spinkit'


class ViewerList extends Component {
 
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.viewers !== nextProps.viewers;
  }

  render() {

    const { viewers } = this.props;
    console.log(viewers);
    const viewerList = viewers.map(
      ({id, url, mediaType, loading, key}) => (
        <Viewer
          id={id}
          url={url}
          mediaType={mediaType}
          loading={loading}
          key={key}
        />
      )
    );

    return (
      <div>
        {viewerList}
      </div>
    );
  }
  
};

export default ViewerList;