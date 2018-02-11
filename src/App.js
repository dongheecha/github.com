import React, { Component } from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import ViewerList from './components/Viewer/ViewerList';
import moment from 'moment';
import * as api from './lib/api';


class App extends Component {
   
  id = 3;
 
  state = {
    viewers: [{
      loading: false,
      maxDate: null,
      date: null,
      urL: null,
      mediaType: null,
      key : 0
    }]
  };

     
  getAPOD = async (date) => {
    const { viewers } = this.state;
    if (this.state.loading) return; // 이미 요청중이라면 무시

    // 로딩 상태 시작
    this.setState({
      loading: true
    });

    try {
    
      const response = await Promise.all([
        api.getAPOD("2018-02-02"),
        api.getAPOD("2018-02-01"),
        api.getAPOD("2018-01-31")
      ]);
  
      console.log(response);

      const newState = {};

      // 비구조화 할당 + 새로운 이름 
      const   [{ date: retrievedDate, url, media_type: mediaType }] = response.data;
      
      // 전달받은 데이터 넣어주기
      this.setState({
        // concat 을 사용하여 배열에 추가
        viewers: viewers.concat({
          id: this.id++,
          date: retrievedDate,
          mediaType,
          url,
          key : this.id
        })
      });

  
    } catch (e) {
      // 오류가 났을 경우
      console.log(e);
    }

      // 로딩 상태 종료
      this.setState({
        loading: false
      });
  }

  handlePrev = () => {
    const { date } = this.state;
    const prevDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
    console.log(prevDate);
    this.getAPOD(prevDate);
  }

  componentDidMount() {
   
    this.getAPOD();
    
   
  }

  render() {
   
    const {viewers} = this.state;
    console.log(this.state.data)
    return (
     
      <ViewerTemplate viewerList={(
        <ViewerList viewers={viewers}/>
      )} />
      
    );
  }
}

export default App;
