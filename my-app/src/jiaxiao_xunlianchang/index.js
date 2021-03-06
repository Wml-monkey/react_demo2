/**
 * Created by Administrator on 2018/6/12.
 */
import React from "react";
import '../css/base.css';
import '../css/school.css';
import '../css/jiaxiao_index.css';
import '../css/jiaxiao_xunlianchang.css';

class JiaxiaoXunlianchang extends React.Component{
    render(){
        return(

            <div className="cont">
    <div className="title clear">
        <a className="fl logo_bg" href=""></a>
        <div className="set fr"></div>
        <div className="area fr">全国</div>
    </div>
    <div className="title_white"></div>
    <div className="img">
        <img src={require("../images/jiaxiao_img.png")} alt="" />
        <p><span>1</span>/<em>1122</em></p>
    </div>
    <div className="jiaxiao_cont">
        <div className="jiaxiao_index_title">
            <h2>东方时尚驾校<span></span></h2>
            <p><span><em>评分</em><i>4.7</i></span><span><em>评分</em><i>4.7</i></span><span><em>评分</em><i>4.7</i></span></p>
        </div>
        <div className="jiaxiao_index_weizhi clear">
            <span className="jiaxiao_didian_title">东方时尚驾校</span>
            <span className="jiaxiao_didian_juli"><em>15.3km</em><i></i></span>
        </div>
    </div>
    <div className="jiaxiao_xijie">
        <nav>
            <a className="" href="">班型</a>
            <a className="" href="">简介</a>
            <a className="active" href="">训练场</a>
            <a href="">教练</a>
            <a className="last_taolun" href="">讨论</a>
        </nav>
        <div className="xunlianchang clear">
            <div className="xunlian_img fl">
                <img src={require("../images/xunlian_img.jpg")} alt="" />
            </div>
            <div className="xunlian_cont fl">
                <p><span>大兴训练场</span> <em>最近</em></p>
                <div className="xunlian_dizhi">
                    大兴区黄村金星西路19号
                </div>
                <div className="xunlian_neirong">
                    距离<span>16.2</span>km <em>科二、科三</em>
                </div>
            </div>
        </div>
    </div>
    <div className="xiangguansousuo school_sousuo">
        <dl>
            <dt>推荐驾校</dt>
            <dd className="clear">
                <span>广州驾校</span>
                <span>深圳驾校</span>
                <span>重庆驾校</span>
                <span>南京驾校</span>
                <span>广州驾校</span>
                <span>深圳驾校</span>
                <span>重庆驾校</span>
                <span>南京驾校</span>
                <span>广州驾校</span>
                <span>深圳驾校</span>
                <span>重庆驾校</span>
                <span>南京驾校</span>
            </dd>
        </dl>
    </div>
    <div className="lujing">
        <a href="">首页</a>
        <a href="" className="jiantou">北京驾校</a>
        <a href="" className="jiantou">东方时尚驾校</a>
    </div>
    <div className="corporation">
        <p>北京木仓科技有限公司版权所有 | 京ICP备11009001号-1</p>
        <p>商务合作：cooperation@mucang.cn</p>
    </div>
    <div className="mianfeizixun">免费咨询</div>
        </div>

        )
    }
}
export default JiaxiaoXunlianchang;