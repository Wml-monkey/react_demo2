/**
 * Created by Administrator on 2018/6/12.
 */
import React from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../css/jiakaoquan.css';
import '../css/zhuangxianglianxi.css';

class ZhuanXinagLianXiIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            leixing:[]
        }
    }
    componentDidMount(){
        let _this = this;
        let {leixing} = this.state;
        let temp_url12 = "https://api2.jiakaobaodian.com/api/open/exercise/strengthen.htm?_appName=jiakaobaodian&_platform=wap&_r=17927685747252087102&carType=car&cityCode=110000&course=kemu3&_=0.9222610989133149";
            temp_url12 = temp_url12.replace(/\//g,"*");
            temp_url12 = temp_url12.replace(/\?/g,"@");
            let yuming = "http://www.helloliangzhu.com/api/";
            axios.get(yuming+temp_url12)
        // axios.get(" ")
                .then(function (res) {
                    console.log(res)
                    let temp_leixing = res.data.data.nodes;
                    console.log(temp_leixing);
                    _this.setState({leixing:temp_leixing})
                    // let temp_three_item = temp_ti_cont.slice(0,3);
                    // _this.setState({three_item:temp_three_item});
                    // _this.setState({ti_cont:temp_ti_cont})
                })
    }

    render(){
        let {leixing} = this.state;
        let leijia = (arr)=>{
            let num1 = 0;
            let temp = arr.forEach((e,i)=>{
                num1 += e.count
            });
            return num1
        }
        let neirong = (arr)=>{

            let temp_arr1 = arr.map((e,i)=>{
                    return <a href={"/monikaoshi/4_zhuanxianglianxi_index/"+e.action.split("?")[1]}>{e.label}</a>
                });
            console.log(temp_arr1);
            return temp_arr1

            }
        let newleixing = leixing.map((e,i)=>{
            return (
                <dl className="zhuanxiang_cont" key={i}>
                    <dt>
                        <span className="zhuanxiang_title">{e.label}</span>
                        <span className="zhuanxiang_num"><em>{leijia(e.nodes)}</em><i>题</i></span>
                    </dt>
                    <dd>
                        {neirong(e.nodes)}
                    </dd>
                </dl>
            )
        });

        return(
            <div className="cont">
    <div className="clear fenye_title">
        <a className="fl" href="/monikaoshi_index"></a>
        <div className="car fl"></div>
        <div className="jiakaoquan_zhuye fl">专项练习</div>
        <div className="set fr"></div>
        <div className="area fr">全国</div>
    </div>
    <div className="title_white"></div>
    <div className="ads">
        <img src={require("../images/ads_img.jpeg")} alt="" />
    </div>
                {newleixing}
<div className="zhangjie_dibu">
         <div className="lujing">
                <Link to="/"><a href="">首页</a></Link>
                 <Link to="/monikaoshi_index"><a href="" className="jiantou">北京科目四</a></Link>
                 <Link to="/monikaoshi/4_zhuanxianglianxi_index"><a href="" className="jiantou">专项练习</a></Link>
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
        export default ZhuanXinagLianXiIndex