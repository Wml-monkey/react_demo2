/**
 * Created by Administrator on 2018/6/12.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../css/jiakaoquan.css';
import '../css/zhangjielianxi_index.css';

class ZhangJieLianXiIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chapter:[],
            leixing:['falv','xinhao','anquanxingche','jidongchejiashi'],
            leixing4:['anlifenxi','changshi','jiaotongbiaozhi','wenmingjiashi','elueqihou','jinjiqingkuang','shigu','difangtiku']
        }
    }
    componentDidMount(){
        let {chapter} = this.state;
        let _this = this;
        let temp_url = 'https://api2.jiakaobaodian.com/api/open/chapter/list.htm?_appName=jiakaobaodian&_platform=wap&_r=14898942392657997117&carType=car&cityCode=110000&course=kemu1&_=0.06768575499129659';
        temp_url = temp_url.replace(/\//g,"*");
        temp_url = temp_url.replace(/\?/g,"@");
        let yuming = "http://www.helloliangzhu.com/api/";
        axios.get(yuming+temp_url)
            .then(function (res) {
                console.log(res.data.data);
                let temp_arr = res.data.data;
                _this.setState({chapter:temp_arr})
            })
    }
    render(){
        let {chapter} = this.state;
        let {leixing} = this.state;
        let new_chapter = chapter.map((e,i)=>{
            return <Link to={'/monikaoshi/zhangjielianxi_index/'+leixing[i]}><li key={i}>
            <em className="zhangjie_num">{e.chapter}</em>
            <span>{e.title}</span>
            <i>{e.count}</i>
            <em className="zhangjie_bg"></em>
                </li></Link>
        })
        return(
            <div className="cont">
    <div className="clear fenye_title">
        <a className="fl" href="/monikaoshi_index"></a>
        <div className="car fl"></div>
        <div className="jiakaoquan_zhuye fl">章节练习</div>
        <div className="set fr"></div>
        <div className="area fr">全国</div>
    </div>
    <div className="title_white"></div>
    <div className="ads">
        <img src={require("../images/ads_img.jpeg")} alt="" />
    </div>
    <ul className="zhangjie_list">
        {new_chapter}
    </ul>
    <div className="zhangjie_dibu">
         <div className="lujing">
                <a href="">首页</a>
                <a href="" className="jiantou">北京科目一</a>
             <a href="" className="jiantou">章节练习</a>
            </div>
            <div className="corporation">
                <p>北京木仓科技有限公司版权所有 | 京ICP备11009001号-1</p>
                <p>商务合作：cooperation@mucang.cn</p>
            </div>
    </div>
    </div>
        )
    }
}
export default ZhangJieLianXiIndex;