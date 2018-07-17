/**
 * Created by Administrator on 2018/6/12.
 */
import React from "react";
import '../css/jiakaoquan.css';
import '../css/xunxulianxiti.css';
import '../css/quanzhenmoni.css';
import Shitimobankaoshi from '../component/shitimobankaoshi';

class QuanZhenMoNi extends React.Component{
    render(){
        return(
            <div className="cont">
    <div className="clear fenye_title">
        <a className="fl" href="/monikaoshi_index"></a>
        <div className="car fl"></div>
        <div className="jiakaoquan_zhuye fl">全真模拟练习</div>

        <div className="tijiao  fr">交卷</div>
        <div className="area fr">全国</div>
    </div>
    <div className="title_white"></div>
    <div className="ads">
        <img src={require("../images/maichewang.png")} alt="" />
    </div>
    <Shitimobankaoshi/>
    <div className="moniti_bottom">
        <a href="" className="top_ti">上一题</a>
        <a href="" className="xia_ti">下一题</a>
        <a href="" className="zongti"><em>1</em>/<i>50</i></a>
        <span className="shijian">17:15</span>
    </div>
    </div>
        )
    }
}

export default QuanZhenMoNi;