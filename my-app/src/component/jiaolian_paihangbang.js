/**
 * Created by Administrator on 2018/6/20.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
class Jiaolian_paihangbang extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const _this = this;
        axios.get('https://jiaxiao.kakamobi.cn/api/web/v3/coach/coach-rank-with-cache.htm?_appName=jiakaobaodian&_platform=wap&_r=13757717886187437105&cityCode=110000&_=0.6047757248591477')
            .then(function (res) {
                console.log(res);
                let newarr = res.data.data;
                console.log(newarr);
                //_this.setState({BaoMingCount:count})
            })
    }
    render(){
       return(
             <div className="jiaolian_paihangbang clear">
                    <div className="img fl">
                        <img src={require('../images/jiaolianpaihangbang.png')} alt="" />
                    </div>
                    <ul className="jiaolian_name clear fl">
                        <li className="fl">
                            <div className="jiaolian_name_logo fl">
                                <div className="img_box">
                                    <img src={require('../images/no1_jiaolian.jpeg')} alt="" />
                                </div>
                                <p className="jiaolian_paiming">No.1</p>
                            </div>

                            <div className="jiaolian_name_info fl">
                                <p className="jiaolian_p1">霍勇甫</p>
                                <p className="jiaolian_p2"><span>5.0</span>分</p>
                            </div>
                        </li>
                        <li className="fl">
                            <div className="jiaolian_name_logo fl">
                                <div className="img_box">
                                    <img src={require('../images/no1_jiaolian.jpeg')} alt="" />
                                </div>
                                <p className="jiaolian_paiming">No.2</p>
                            </div>

                            <div className="jiaolian_name_info fl">
                                <p className="jiaolian_p1">王腾</p>
                                <p className="jiaolian_p2"><span>5.0</span>分</p>
                            </div>
                        </li>
                    </ul>
                </div>
       )
    }
}

export default Jiaolian_paihangbang;