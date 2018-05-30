import React, { Component } from 'react';
import Axios from 'axios';
class Ranking extends Component {
  constructor(props) {
        super(props)
            this.state = {
                arr: []
            }
  }
  render() {
    return (
      <div className="ranking">
        <ul>
                    {
                        this.state.arr.map(function(value,ind){
                            return (
                                <li key={ind} className="clearfix">
                                    <a><img src={value.src} alt="" /><span><i></i>{value.num}</span></a>
                                    <div>
                                        <h3>{value.title}</h3>
                                        {
                                            value.song.map(function(value,index){
                                                return (
                                                    <p key={index}>{value.id}<span>{value.name}</span> - {value.singer}</p>
                                                )
                                            })
                                        }
                                        
                                        <i>></i>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <p className="pc"><a>去客户端发现更好音乐></a></p>
      </div>
    );
  }
  componentDidMount() {
        Axios.get("./datas/ranking.json")
        .then(function(res){
            this.setState({arr: res.data});
        }.bind(this))
  }
}

export default Ranking;

