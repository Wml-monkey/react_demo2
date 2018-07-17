import React from "react";
import '../css/jiakaoquan.css';
import '../css/jiaotongbiaozhi_daquan.css';


class Jiaotongbiaozhi extends React.Component{
    render(){
        return(

            <div className="cont">
    <div className="clear fenye_title">
        <a className="fl" href=""></a>
        <div className="car fl"></div>
        <div className="jiakaoquan_zhuye fl">交通标志大全</div>
        <div className="set fr"></div>
        <div className="area fr">全国</div>
    </div>
    <div className="title_white"></div>
    <div className="ads">
        <img src={require("../images/ads_img.jpeg")} alt="" />
    </div>
    <ul className="biaozhi_list">
        <li>
            <div className="biaozhi_title">
                <span>禁令标志</span>
                <i><em>50</em>张图片</i>
            </div>
            <div className="biaozhi_imgs clear">
                <img src={require("../images/jiaotong_biaozhi_img.jpg")} alt="" />
                <img src={require("../images/jiaotong_biaozhi_img.jpg")} alt="" />
                <img src={require("../images/jiaotong_biaozhi_img.jpg")} alt="" />
                <img src={require("../images/jiaotong_biaozhi_img.jpg")} alt="" />
            </div>
        </li>
        <li>
            <div className="biaozhi_title">
                <span>禁令标志</span>
                <i><em>50</em>张图片</i>
            </div>
            <div className="biaozhi_imgs clear">
                <img src={require("../images/jiaotong_biaozhi_img.jpg")} alt="" />
                <img src={require("../images/jiaotong_biaozhi_img.jpg")} alt="" />
                <img src={require("../images/jiaotong_biaozhi_img.jpg")} alt="" />
                <img src={require("../images/jiaotong_biaozhi_img.jpg")} alt="" />
            </div>
        </li>
        <li>
            <div className="biaozhi_title">
                <span>禁令标志</span>
                <i><em>50</em>张图片</i>
            </div>
            <div className="biaozhi_imgs clear">
                <img src={require("../images/jiaotong_biaozhi_img.jpg")} alt="" />
                <img src={require("../images/jiaotong_biaozhi_img.jpg")} alt="" />
                <img src={require("../images/jiaotong_biaozhi_img.jpg")} alt="" />
                <img src={require("../images/jiaotong_biaozhi_img.jpg")} alt="" />
            </div>
        </li>
        <li>
            <div className="biaozhi_title">
                <span>禁令标志</span>
                <i><em>50</em>张图片</i>
            </div>
            <div className="biaozhi_imgs clear">
                <img src={require("../images/jiaotong_biaozhi_img.jpg")} alt="" />
                <img src={require("../images/jiaotong_biaozhi_img.jpg")} alt="" />
                <img src={require("../images/jiaotong_biaozhi_img.jpg")} alt="" />
                <img src={require("../images/jiaotong_biaozhi_img.jpg")} alt="" />
            </div>
        </li>
        <li>
            <div className="biaozhi_title">
                <span>禁令标志</span>
                <i><em>50</em>张图片</i>
            </div>
            <div className="biaozhi_imgs clear">
                <img src={require("../images/jiaotong_biaozhi_img.jpg")} alt="" />
                <img src={require("../images/jiaotong_biaozhi_img.jpg")} alt="" />
                <img src={require("../images/jiaotong_biaozhi_img.jpg")} alt="" />
                <img src={require("../images/jiaotong_biaozhi_img.jpg")} alt="" />
            </div>
        </li>
    </ul>
<div className="lujing">
        <a href="">首页</a>
        <a href="" className="jiantou">北京驾校</a>
        <a href="" className="jiantou">交通标志大全</a>
    </div>
    <div className="corporation">
        <p>北京木仓科技有限公司版权所有 | 京ICP备11009001号-1</p>
        <p>商务合作：cooperation@mucang.cn</p>
    </div>
        </div>

        )
    }
}

export default Jiaotongbiaozhi;