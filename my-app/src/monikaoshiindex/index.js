/**
 * Created by Administrator on 2018/6/12.
 */
import React from 'react';
import '../css/index.css';
import '../css/jiakaoquan.css';
import axios from 'axios';
import {Link} from "react-router-dom"
import '../css/xiazai.css';
import '../css/school.css';
import '../css/monikaoshi_index.css';

class MonikaoshiIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr : []
        }
    }
    componentDidMount(){
        const _this = this;
        let temp_url = "https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=112669972574068826105&limit=5&questionIds=869400%2C869500%2C869600%2C869700%2C869800&_=0.0719987956227024";
        temp_url = temp_url.replace(/\//g,"*");
        temp_url = temp_url.replace(/\?/g,"@");
        let yuming = "http://www.helloliangzhu.com/api/";
        axios.get(yuming+temp_url)
            .then(function (res) {
                console.log(res.data.data);
                let newarr = res.data.data;
                _this.setState({arr:newarr})
            })
    }

    render(){
        let style = {
            display:'block',
            "white-space":"nowrap",
            overflow:"hidden",
            "text-overflow":"ellipsis"
        }
        let {arr} = this.state;
        let newarr = arr.map((e,i)=>{
            //e.question
            return <dd><a style={style} href="">{e.question}</a></dd>
        });

        return(
            <div className="cont">
    <div className="clear fenye_title">
        <a className="fl" href="/"></a>
        <div className="car fl"></div>
        <div className="jiakaoquan_zhuye fl">北京模拟考试
        </div>
        <div className="set fr"></div>
        <div className="area fr">全国</div>
    </div>
    <div className="title_white"></div>
    <div className="ads">
        <img src={require("../images/ads_img.jpeg")} alt="" />
    </div>
    <div className="kemu">
        <dl>
            <dt>
                <span className="ke_1">科目一</span><span className="ke_1_info">小车(C1)理论考试</span><span className="ke_more">更多</span>
            </dt>
            <dd className="clear">
                <Link to="/monikaoshi/shunxulianxiti">
                <div className="shunxu">
                    顺序练习
                </div>
                </Link>
                <Link to="/monikaoshi/zhangjielianxi_index">
                <div className="zhangjie">
                    章节练习
                </div>
                    </Link>
                <Link to="/monikaoshi/zhuanxianglianxi_index">
                <div className="zhuanxiang">
                    专项练习
                </div>
                    </Link>
                <Link to="/monikaoshi/quanzhenmoni/quanzhenmoni1">
                <div className="moni">
                    全真模拟
                </div>
                    </Link>
            </dd>
        </dl>
        <dl className="ke4">
            <dt>
                <span className="ke_1">科目四</span><span className="ke_1_info">小车(C1)理论考试</span><span className="ke_more">更多</span>
            </dt>
            <dd className="clear">
                <Link to="/monikaoshi/4_shunxulianxiti/shunxu">
                <div className="shunxu">
                    顺序练习
                </div>
                </Link>
                <Link to="/monikaoshi/4_zhangjielianxi_index">
                <div className="zhangjie">
                    章节练习
                </div>
                    </Link>
                <Link to="/monikaoshi/4_zhuanxianglianxi_index">
                <div className="zhuanxiang">
                    专项练习
                </div>
                    </Link>
                <Link to="/monikaoshi/quanzhenmoni/quanzhenmoni4">
                <div className="moni">
                    全真模拟
                </div>
                    </Link>
            </dd>
        </dl>
        <ul className="kemu_3_4 clear">
            <li>
                <div className="video">
                    <img src={require("../images/video_1.png")} alt="" />
                    <a href=""></a>
                </div>
                <p>科目二 <span>学车视频</span></p>
            </li>
            <li>
                <div className="video">
                    <img src={require("../images/video_1.png")} alt="" />
                    <a href=""></a>
                </div>
                <p>科目三 <span>学车视频</span></p>
            </li>
        </ul>
    </div>
    <dl className="rementiku">
        <dt>热门题库</dt>
        {newarr}
    </dl>
<div className="lujing">
        <a href="">首页</a>
        <a href="" className="jiantou">北京模拟考试</a>
    </div>
    <div className="corporation">
        <p>北京木仓科技有限公司版权所有 | 京ICP备11009001号-1</p>
        <p>商务合作：cooperation@mucang.cn</p>
    </div>
    </div>
        )
    }
}
export default MonikaoshiIndex;