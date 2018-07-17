/**
 * Created by Administrator on 2018/7/2.
 */
import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Xiangjie from './shitixiangjie';
import Cheyoufenxi from './cheyoufenxi';
import '../css/xunxulianxiti.css';
import '../css/xunxulianxiti_1.css';


class Lianxiti1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            style_false:{
                            "backgroundImage":"url('http://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/exercise/files/580fef9b9860503604b8e6addfd92848.png')",
                            "backgroundSize":"2.3rem 2.3rem",
                            "backgroundPosition":'center',
                            "backgroundRepeat":'no-repeat'
                            // background:"url('http://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/exercise/files/580fef9b9860503604b8e6addfd92848.png') no-repeat center .7rem .7rem",
                            // 'backgroundPosition':'center'
                            // background:'"http://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/exercise/files/580fef9b9860503604b8e6addfd92848.png"'
                        },
            style_true:{
                            backgroundImage:'url("http://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/exercise/files/b52ae0cf7d2d3a3cf4d1e0dff9bcad69.png")',
                            backgroundSize:'2.3rem 2.3rem',
                            backgroundPosition:'center',
                            backgroundRepeat:'no-repeat'
                        },
            ele_height:'',
            start_top:0,
            view_height:'',//可视区的高度（应该显示的高度）
            start_point:0,
            element:{},
            ti_tip:16,//每个题的答案的基数
            num:1,
            option:['A','B','C','D'],
            xiangjie:false,//详解是否展开
            sure_answer:'',//当前题的正确答案数字
            cur_ti_cont:'',//当前题的所有内容
            click_open:0, //0代表关闭，1代表打开，点击的时候打开详解和车友分析
            page_question:[],
            addevent:this.addevent,
            jinghua:[],
            
        }
    }
    componentDidMount(){//每次请求10道题目
         let {page_question,cur_ti_cont} = this.state;
         let _this = this;
         axios.get('https://dianping-v2.kakamobi.com/api/web/shiti/jinghua-list.htm?_appName=jiakaobaodian&_platform=wap&_r=11528747749855586107&placeToken=5bee2e55901b4de5b15b735eba3056fa&topic='+800000+'&_=0.7167125294851742')
            .then(function (res) {
                let temp_jinghua = res.data.data.jinghuaList;
                _this.setState({jinghua:temp_jinghua})
            })

    }
    panduan = (ev)=>{ //判断点击是否该显示正常内容 onClick事件
        console.log(111)
        var temp_ele = document.querySelectorAll(".finall_cont")[0];
        //temp_dom.style.background="yellow";
        var temp_spans = temp_ele.querySelectorAll(".a");
        console.log(temp_spans)
        temp_spans.forEach((e,i)=>{
            let answer = e.parentNode.getAttribute("data-answer");
            let sureanswer = e.parentNode.getAttribute("data-sureanswer");
            if(answer == sureanswer){
                ReactDOM.findDOMNode(e).style.backgroundImage = "url(http://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/exercise/files/b52ae0cf7d2d3a3cf4d1e0dff9bcad69.png)";
                ReactDOM.findDOMNode(e).style.backgroundSize = "2.3rem 2.3rem";
                ReactDOM.findDOMNode(e).style.backgroundRepeat = "no-repeat";
                ReactDOM.findDOMNode(e).style.backgroundPositon = "center"
            }else{
                 ReactDOM.findDOMNode(e).style.backgroundImage = "url(http://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/exercise/files/580fef9b9860503604b8e6addfd92848.png)";
                ReactDOM.findDOMNode(e).style.backgroundSize = "2.3rem 2.3rem";
                ReactDOM.findDOMNode(e).style.backgroundRepeat = "no-repeat";
                ReactDOM.findDOMNode(e).style.backgroundPositon = "center"
            }
        })

        let span = ev.target.children[0];

        let {click_open} = this.state;
        let {sure_answer} = this.state;
        click_open = 1;

        this.setState({click_open});
        let {jinghua} = this.state;
        let _this = this;
        axios.get('https://dianping-v2.kakamobi.com/api/web/shiti/jinghua-list.htm?_appName=jiakaobaodian&_platform=wap&_r=11528747749855586107&placeToken=5bee2e55901b4de5b15b735eba3056fa&topic='+800000+'&_=0.7167125294851742')
            .then(function (res) {
                let temp_jinghua = res.data.data.jinghuaList;
                _this.setState({jinghua:temp_jinghua})
            })
        //let span_a = document.querySelector(".a");

        //span_a.style.background = "http://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/exercise/files/580fef9b9860503604b8e6addfd92848.png"
        // console.log(span);
        // span_a.style.background = "url('http://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/exercise/files/580fef9b9860503604b8e6addfd92848.png') no-repeat 2.3rem 2.3rem center"

    };
    touchmove = (ev)=>{
        // let {start_top,start_point,element,view_height} = this.state;
        // let move_dis = ev.changedTouches[0].pageY - start_point;
        //  let temp_dis = move_dis+start_top;
        //  let element_height = element.getBoundingClientRect().height;
        // element.style.top = temp_dis+"px";
        // if(parseFloat(element.style.top)<-(element_height-view_height)){
        //      element.style.top = -(element_height-view_height)+"px";
        //  };
        // if(parseFloat(element.style.top)>0){
        //     element.style.top = "0px";
        // };
    };
    touchend = (ev)=>{
        // let {start_top,start_point,element} = this.state;
        // if(parseFloat(element.style.top)>0){
        //     element.style.top = "0px";
        // };
        // element.removeEventListener('touchmove',this.touchmove);
        // element.removeEventListener('touchend',this.touchend);
    };
    touchstart = (ev)=>{
        let {start_top,start_point,element,view_height} = this.state;
        //获取子级的父级直到获取finall_cont为止
        var element_temp = document.getElementsByClassName('finall_cont')[0];
        var ti_act = document.getElementsByClassName('ti_act')[0];
        var fenye_title = document.getElementsByClassName('fenye_title')[0];
        var banner = document.getElementsByClassName('banner')[0];
        var window_height = window.innerHeight;
        let view_height_1 = window_height - ti_act.getBoundingClientRect().height - fenye_title.getBoundingClientRect().height-banner.getBoundingClientRect().height
        this.setState({view_height:view_height_1});
        start_top = parseFloat(window.getComputedStyle(element_temp).top);
        start_point = ev.changedTouches[0].pageY;
        this.setState({start_top,start_point});
        this.setState({element:element_temp});
        element_temp.addEventListener('touchmove',this.touchmove);
        element_temp.addEventListener('touchend',this.touchend);
    };
    addevent = (finall_cont)=>{
        let {click_open} = this.state;

        if(click_open !== 0){
            finall_cont.addEventListener('touchstart',this.touchstart);
        }
    };
    render(){
        let {addevent,style_false,style_true} = this.state;
        let finall_cont = document.querySelectorAll(".finall_cont")[0];

        // let {cur_ti_cont} = this.state;
        // let cont = cur_ti_cont;
        let {cont} = this.props;
        if(!cont){
            return (<div></div>)
        }
        let {ti_tip,option,click_open,jinghua} = this.state;
        addevent(finall_cont);
        return(
            <div className="finall_cont fl">
                <div className="ti_cont">
                    <dl>
                    <dt>
                        <span>{cont.optionType == "1"?"单":"判"}</span>
                        <em>{cont.question}</em>
                    </dt>
                    <dd data-answer={ti_tip*(1)} data-sureanswer={cont.answer} onClick={this.panduan}>
                        <span className="a">{option[0]}</span>
                        <em>{cont.optionA}</em>
                    </dd>
                    <dd data-answer={ti_tip*2} data-sureanswer={cont.answer} onClick={this.panduan}>
                        <span className="a">{option[1]}</span>
                        <em>{cont.optionB}</em>
                    </dd>
                    <dd data-answer={ti_tip*(4)} data-sureanswer={cont.answer} onClick={this.panduan}>
                        <span className="a">{option[2]}</span>
                        <em>{cont.optionC}</em>
                    </dd>
                    <dd data-answer={ti_tip*(8)} data-sureanswer={cont.answer} onClick={this.panduan}>
                        <span className="a">{option[3]}</span>
                        <em>{cont.optionD}</em>
                    </dd>
                    </dl>
                    </div>
                    {click_open == 1?<Xiangjie cont={cont}/>:''}
                    {click_open == 1?<Cheyoufenxi jinghua={jinghua}/>:''}
            </div>
        )
    }
}
export default Lianxiti1;