/**
 * Created by Administrator on 2018/6/12.
 */
import React from "react";
import axios from 'axios';
import Xiangjie from '../component/shitixiangjie';
import Cheyoufenxi from '../component/cheyoufenxi';
import Lianxiti1 from '../component/lianxiti';
import Lianxiti2 from '../component/lianxiti2';
import Lianxiti3 from '../component/lianxiti3'

import '../css/jiakaoquan.css';
import '../css/xunxulianxiti.css';
import '../css/xunxulianxiti_1.css';

class ShunxuLianxiTi extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num:1,//判断这是三个大div中的第几个div
            option:['A','B','C','D'],
            init_question:[],//总的题目id
            page_question:[], //每次请求的10个题目
            cur_ti:1, //底部目前是第几题
            xiangjie:false,//详解是否展开
            all_ti:'',//所有题目的数量一共1352
            cur_ti_id:'',//当前提的id
            sure_answer:'',//当前题的正确答案数字
            cur_ti_cont:'',//当前题的所有内容
            click_open:0, //0代表关闭，1代表打开，点击的时候打开答案，然后就不能关闭了
            request_num:'0'

        }
    };

    componentDidMount() {
        var slider_box = document.getElementsByClassName('slider_box');
        var slider = document.getElementsByClassName('slider');
        let start_point = 0;
        let start_point_y = 0;
        let start_end = 0;
        console.log("哈哈，要开始了");
        let _this = this;
        let start_left  = 0;
        let {num} = this.state;
        // let num = 1;

        //DOM交互效果
        let move_dis = 0;
        let move_dis_y = 0;
        let {cur_ti} = this.state;
        let touchstart = (ev) => {
            let {num} = this.state;
            move_dis = 0;
            start_left = getComputedStyle(slider[0]).left;
            start_point = ev.changedTouches[0].pageX;
            start_point_y = ev.changedTouches[0].pageY;
            window.addEventListener('touchmove', touchmove);
            window.addEventListener('touchend', touchend)

        };
        let touchmove = (ev) => {
            move_dis = ev.changedTouches[0].pageX - start_point;
            move_dis_y = ev.changedTouches[0].pageY - start_point_y;
            if(Math.abs(move_dis) >= Math.abs(move_dis_y)){
                slider[0].style.left = (parseFloat(start_left) + move_dis) + "px";
            }else{
                slider[0].style.left = start_left;
            }

            // console.log( "move",move_dis,num)

        };
        let touchend = (ev) => {
            let {init_question} = this.state;
            if (num == 1) {

                if (move_dis > 0 && Math.abs(move_dis) >= 100) {
                    move_dis = 0;
                    cur_ti = 1;
                    this.setState({cur_ti});
                    num = 1;

                } else if (move_dis < 0 && Math.abs(move_dis) >= 100) {
                    move_dis = -750;
                    num = 2;

                    cur_ti += 1;
                    this.setState({cur_ti})
                }else if(move_dis <= 100){
                    move_dis = 0;
                }
            }
            else if (num == 2) {
                if (move_dis > 0 && Math.abs(move_dis) >= 100) {

                    move_dis = 0;
                    this.setState({cur_ti});
                    if(cur_ti ==1 || cur_ti == 2){
                       num = 1;

                        cur_ti = 1;
                        this.setState({cur_ti});

                    }else{
                        num = 2;

                        move_dis = -750;
                        cur_ti -= 1;
                        this.setState({cur_ti})

                    }
                } else if (move_dis < 0 && Math.abs(move_dis) >= 100) {

                    // move_dis = -1500;
                    // num = 3;
                    // cur_ti += 1;
                    move_dis = -750;
                    num = 2;
                    cur_ti += 1;
                    if(cur_ti > init_question.length){
                        cur_ti = init_question.length;
                    }
                    this.setState({cur_ti})
                }else if(move_dis <= 100){
                    move_dis = -750;

                }
            }
            else if(num == 3){
                if (move_dis > 0 && Math.abs(move_dis) >= 100) {
                    // console.log("12345677");
                    move_dis = -750;
                    num = 2;

                } else if (move_dis < 0 && Math.abs(move_dis) >= 100){
                    // console.log('33');
                    move_dis = -1500;
                    num = 3;

                    cur_ti += 1;
                    this.setState({cur_ti})
                }else if(move_dis <= 100){
                    move_dis = -1500;
                }
            };
            slider[0].style.left = move_dis / 30 + "rem";
            window.removeEventListener('touchmove', touchmove);
            window.removeEventListener('touchend', touchend);


            let {request_num} = this.state;
            if(request_num == parseInt(cur_ti/9)){

            }else{
                // if(request_num>parseInt(cur_ti/9)){
                //     return false
                // }

                let {init_question} = this.state;

                if(cur_ti<request_num*9){
                    return false;
                };
                request_num = parseInt(cur_ti/9);//0 0,10 1 10,20 2 20 30
                this.setState({request_num});
                let newarr = init_question.slice(10*request_num,10*request_num+10);
                if(!newarr){
                    return false;
                }
                let newstr = newarr.join(',');
                let {page_question} = this.state;
                let temp_url = "'https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=110297157350821614079&questionIds='+newstr+'&_=0.7174447883740587'";
                temp_url = temp_url.replace(/\//g,"*");
                temp_url = temp_url.replace(/\?/g,"@");
                let yuming = "http://www.helloliangzhu.com/api/";
                axios.get(yuming+temp_url)
                    .then(function (res) {
                        console.log(res.data.data);
                        let temp_arr = res.data.data;
                        page_question = page_question.concat(temp_arr);
                        _this.setState({page_question});
                    })
            }
            // console.log('end-----',num)

        };
        window.addEventListener("touchstart", touchstart);

        //请求试题总题目
        let {init_question,all_ti,cur_ti_cont} = this.state;
        let temp_url2 = 'https://api2.jiakaobaodian.com/api/open/exercise/sequence.htm?_appName=jiakaobaodian&_platform=wap&_r=12163317443341035066&carType=car&cityCode=110000&course=kemu1&_=0.508442611377979';
        temp_url2 = temp_url2.replace(/\//g,"*");
        temp_url2 = temp_url2.replace(/\?/g,"@");
        let yuming = "http://www.helloliangzhu.com/api/";
        axios.get(yuming+temp_url2)
            .then(function (res) {
                console.log(res.data.data.length);
                let all_ti = res.data.data.length;
                let init_question_temp = res.data.data;
                _this.setState({init_question:init_question_temp});
                _this.setState({all_ti})
            })
        //每次请求10道题目
        let {page_question} = this.state;
        let temp_url3 = 'https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=110297157350821614079&questionIds=800000%2C800100%2C800200%2C800300%2C800400%2C800500%2C800600%2C800700%2C800800%2C800900&_=0.7174447883740587';
        temp_url3 = temp_url3.replace(/\//g,"*");
        temp_url3 = temp_url3.replace(/\?/g,"@");
        axios.get(yuming+temp_url3)
            .then(function (res) {
                console.log(res.data.data);
                _this.setState({page_question:res.data.data});
                _this.setState({cur_ti_cont:res.data.data[0]});
                let sure_answer = res.data.data[0].answer;
                let cur_ti_id = res.data.data[0].questionId;
                _this.setState({cur_ti_id});
                console.log(cur_ti_id);
                _this.setState({sure_answer})
            })
    }

    render(){
        let {cur_ti} = this.state; //当前是第几题 从1开始
        let {all_ti} = this.state;
        let {option} = this.state;
        let style_false = {
            "backgroundImage":"url('http://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/exercise/files/580fef9b9860503604b8e6addfd92848.png')",
            "backgroundSize":"2.3rem 2.3rem",
            "backgroundPosition":'center',
            "backgroundRepeat":'no-repeat'
            // background:"url('http://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/exercise/files/580fef9b9860503604b8e6addfd92848.png') no-repeat center .7rem .7rem",
            // 'backgroundPosition':'center'
            // background:'"http://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/exercise/files/580fef9b9860503604b8e6addfd92848.png"'
        };
        let style_true = {
            backgroundImage:'url("http://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/exercise/files/b52ae0cf7d2d3a3cf4d1e0dff9bcad69.png")',
            backgroundSize:'2.3rem 2.3rem',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat'
        }

        let {page_question,init_question} = this.state;//每次请求的十个题目

        let three_question = [];
        if(cur_ti < 3){
            three_question = page_question.slice(0,3);
        }else{
            three_question = page_question.slice(cur_ti-2,cur_ti+1)
        }

        // console.log(three_question);
        let _this = this;
        let ti_tip = 16;
        let temp_three_question = [];
        let {xiangjie,click_open,sure_answer} = this.state;

        //题列表
        let dd_temp = [];
        //生成一个题（1）单选题 （0）判断题
        //答案背景style={click_open == 1?style_true:{}}
        temp_three_question = three_question.map((e,i)=>{
            return <div key={i} className="finall_cont fl">
                <div className="ti_cont">
                    <dl>
                    <dt>
                        <span>{e.optionType == "1"?"单":"判"}</span>
                        <em>{e.question}</em>
                    </dt>
                     <Lianxiti1 cont={e}/>
                    <dd data-answer={ti_tip*(1)} onClick={this.panduan}>
                        <span>{option[0]}</span>
                        <em>{e.optionA}</em>
                    </dd>
                    <dd data-answer={ti_tip*2} onClick={this.panduan}>
                        <span>{option[1]}</span>
                        <em>{e.optionB}</em>
                    </dd>
                    <dd data-answer={ti_tip*(4)} onClick={this.panduan}>
                        <span>{option[2]}</span>
                        <em>{e.optionC}</em>
                    </dd>
                    <dd data-answer={ti_tip*(8)} onClick={this.panduan}>
                        <span>{option[3]}</span>
                        <em>{e.optionD}</em>
                    </dd>
                    </dl>
                    </div>
                    {click_open == 1?<Xiangjie cont={e}/>:''}
                    {click_open == 1?<Cheyoufenxi/>:''}
        </div>
        });
        return(
            <div className="cont">
    <div className="clear fenye_title">
        <a className="fl" href="/monikaoshi_index"></a>
        <div className="car fl"></div>
        <div className="jiakaoquan_zhuye fl">顺序练习</div>
        <div className="set fr"></div>
        <div className="area fr">全国</div>
    </div>
    <div className="title_white"></div>
    <div className="banner">
        <img src={require("../images/maichewang.png")} alt="" />
    </div>
    <div className="slider_box">
        <div className="slider clear">
            <Lianxiti1 cont={three_question[0] } cur_ti = {cur_ti} all_id={init_question} />
            <Lianxiti2 cont={three_question[1] } cur_ti = {cur_ti} all_id={init_question}/>
            <Lianxiti3 cont={three_question[2]}/>
    </div>
    </div>



    <div className="ti_act">
        <span className="shoucang">收藏</span>
        <span className="ti_all_zongshu"><em>{cur_ti}</em>/<i>{all_ti}</i></span>
        <span className="ti_yiwen">打开详解</span>
    </div>
</div>
        )
    }
}

export default ShunxuLianxiTi;