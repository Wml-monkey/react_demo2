/**
 * Created by Administrator on 2018/6/12.
 */
import React from "react";
import axios from 'axios';
import '../css/school.css';
import '../css/jiakaoquan.css';
import '../css/jiaxiao_index.css';
import '../css/tiku.css';
import Title from '../component/title';

class TiKu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            kemu1:[],
            kemu4:[],
            rementiku:[]
        }
    }

    componentDidMount(){
        let _this = this;
        axios.get("https://api2.jiakaobaodian.com/api/open/chapter/list.htm?_appName=jiakaobaodian&_platform=wap&_r=18591046240818115079&carType=car&course=kemu1&limit=5&_=0.8724265193911183")
                .then(function (res){
                    let temp_all_ti_id = res.data.data;
                    console.log(temp_all_ti_id);
                    _this.setState({kemu1:temp_all_ti_id})
                })
        axios.get("https://api2.jiakaobaodian.com/api/open/chapter/list.htm?_appName=jiakaobaodian&_platform=wap&_r=19478286166385700096&carType=car&course=kemu3&limit=5&_=0.8663787988115799")
                .then(function (res){
                    let temp_all_ti_id = res.data.data;
                    console.log(temp_all_ti_id);
                    _this.setState({kemu4:temp_all_ti_id})
                })
        axios.get("https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=17188836444214889101&limit=5&questionIds=872900%2C873000%2C873100%2C873200%2C873300&_=0.5540784466030286")
                .then(function (res){
                    let temp_all_ti_id = res.data.data;
                    console.log(temp_all_ti_id);
                    _this.setState({rementiku:temp_all_ti_id})
                })
    }

    render(){
        let kemu1_str = ['falvfagui','xinhao','1anquanxingche','jidongchejiashi'];
        let kemu4_str = ['weifaxingwei','4anquanxingche','jiaotongbiaozhi','zhiyedaode','eluehuanjing','jinjiqingkuang','jiaotongshigu'];
        let {kemu1,kemu4,rementiku} = this.state;
        let newkemu1 = kemu1.map((e,i)=>{
            return (
            <a href={"/tiku/"+kemu1_str[i]+"_1"}><dd key={i}>
            <em>{i+1}</em>
            <span>{e.title}</span>
            <i>{e.count}</i>
            <b></b>
        </dd></a>
            )
        });
        let newkemu4 = kemu4.map((e,i)=>{
            return (
               <a href={"/tiku/"+kemu4_str[i]+"_1"}> <dd key={i}>
            <em>{i+1}</em>
            <span>{e.title}</span>
            <i>{e.count}</i>
            <b></b>
        </dd></a>
            )
        })
        let newrementiku = rementiku.map((e,i)=>{
            return (
            <dd key={i} className="question_dd">
            <em>*</em>
            <span>{e.question}</span>
            <i>{e.count}</i>
            <b></b>
        </dd>
            )
        })
        return(

            <div className="cont">
    <Title/>
    <div className="ads">
        <img src={require("../images/ads_img.jpeg")} alt="" />
    </div>
    <dl className="tiku_list">
        <dt>2018年科目一基础理论知识考试题库</dt>
        {newkemu1}
    </dl>
    <dl className="tiku_list">
        <dt>2018年科目四基础理论知识考试题库</dt>
        {newkemu4}
    </dl>
    <dl className="remen_tiku">
        <dt>热门题库</dt>
        {newrementiku}
    </dl>
<div className="lujing">
    <a href="">首页</a>
    <a href="" className="jiantou">北京科目一</a>
    <a href="" className="jiantou">题库</a>
</div>
<div className="corporation">
    <p>北京木仓科技有限公司版权所有 | 京ICP备11009001号-1</p>
    <p>商务合作：cooperation@mucang.cn</p>
</div>
    </div>

        )
    }
}

export default TiKu;