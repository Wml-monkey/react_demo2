/**
 * Created by Administrator on 2018/7/3.
 */
/**
 * Created by Administrator on 2018/7/2.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Xiangjie from './shitixiangjie';
import Cheyoufenxi from './cheyoufenxi';
import '../css/xunxulianxiti.css';
import '../css/xunxulianxiti_1.css';


class Lianxiti2 extends React.Component{
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
            jinghua:[]

        }
    }
    componentWillReceiveProps(){
        document.documentElement.scrollTop = "0px";
        let {click_open} = this.state;
        let {cont} = this.props;
        if(cont){
            this.setState({sure_answer:cont.answer})//设置每个题的正确答案
        }
        this.setState({click_open:0});
        let finall_cont = document.querySelectorAll('.finall_cont')[1];
        if(finall_cont){
            finall_cont.style.top = "0px";
        }
        this.addevent(finall_cont);

        var temp_ele = document.querySelectorAll(".finall_cont")[1];
        if(!temp_ele){
            return false;
        }
        //temp_dom.style.background="yellow";
        var temp_spans = temp_ele.querySelectorAll(".a");
        let {style_false,style_true} = this.state;
        temp_spans.forEach((e,i)=>{
            let answer = e.parentNode.getAttribute("data-answer");
                ReactDOM.findDOMNode(e).style.backgroundImage = "";
                ReactDOM.findDOMNode(e).style.backgroundSize = "2.3rem 2.3rem";
                ReactDOM.findDOMNode(e).style.backgroundRepeat = "no-repeat";
                ReactDOM.findDOMNode(e).style.backgroundPositon = "center"

        })
    }

    componentDidMount(){
        let {all_id,cur_ti} = this.props;
        let _this = this;
        axios.get('https://dianping-v2.kakamobi.com/api/web/dianping/list.htm?_appName=jiakaobaodian&_platform=wap&_r=19140088903657720085&cursor=&placeToken=5bee2e55901b4de5b15b735eba3056fa&reverse=true&topic='+all_id[cur_ti-1]+'&_=0.6198489150363993')
            .then(function (res) {
                console.log(res.data.data)
                let temp_jinghua = res.data.data.itemList;
                console.log(temp_jinghua);
                _this.setState({jinghua:temp_jinghua})
            });
    }
    panduan = (e)=>{ //判断点击是否该显示正常内容 onClick事件
        /*
        React 操作DOM元素的两种方式
        var Btn = document.getElementById('btn')
        ReactDom.findDOMNode(Btn).style.color = 'red'

        this.refs.btn.style.color = 'red'

         */
        console.log(e);
        var temp_ele = document.querySelectorAll(".finall_cont")[1];
        //temp_dom.style.background="yellow";
        var temp_spans = temp_ele.querySelectorAll(".a");
        let {style_false,style_true} = this.state;
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

        let {click_open} = this.state;
        click_open = 1;
        this.setState({click_open});

        let{cur_ti,all_id} = this.props;
        let _this = this;
        let {jinghua} = this.state;
        axios.get('https://dianping-v2.kakamobi.com/api/web/shiti/jinghua-list.htm?_appName=jiakaobaodian&_platform=wap&_r=11528747749855586107&placeToken=5bee2e55901b4de5b15b735eba3056fa&topic='+all_id[cur_ti]+'&_=0.7167125294851742')
            .then(function (res) {
                let temp_jinghua = res.data.data.jinghuaList;
                _this.setState({jinghua:temp_jinghua})
            });
        // axios.get('https://dianping-v2.kakamobi.com/api/web/dianping/list.htm?_appName=jiakaobaodian&_platform=wap&_r=19140088903657720085&cursor=&placeToken=5bee2e55901b4de5b15b735eba3056fa&reverse=true&topic='+all_id[cur_ti-1]+'&_=0.6198489150363993')
        //     //  https://dianping-v2.kakamobi.com/api/web/dianping/list.htm?_appName=jiakaobaodian&_platform=wap&_r=14527359435278948101&cursor=30381769&placeToken=5bee2e55901b4de5b15b735eba3056fa&reverse=true&topic=800500&_=0.06501619091447775
        //     //     https://dianping-v2.kakamobi.com/api/web/dianping/list.htm?_appName=jiakaobaodian&_platform=wap&_r=1521389455372041074&cursor=29972109&placeToken=5bee2e55901b4de5b15b735eba3056fa&reverse=true&topic=800400&_=0.15495163411522772
        //     //     https://dianping-v2.kakamobi.com/api/web/dianping/list.htm?_appName=jiakaobaodian&_platform=wap&_r=114018149428245496089&cursor=29163155&placeToken=5bee2e55901b4de5b15b735eba3056fa&reverse=true&topic=800400&_=0.2949994161489995
        //     .then(function (res) {
        //         let {jinghua} = _this.state;
        //         let temp_jinghua = res.data.data.itemList;
        //         jinghua = jinghua.concat(temp_jinghua);
        //         _this.setState({jinghua})
        //     })
        // let span_a = document.querySelector(".a");
        // span_a.style.background = "http://m.jiakaobaodian.com/core-m-assets/jkbd/application/mnks/exercise/files/580fef9b9860503604b8e6addfd92848.png";
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
        var element_temp = document.getElementsByClassName('finall_cont')[1];
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
        let {style_false,style_true,addevent,jinghua} = this.state;

        let {cur_ti_cont} = this.state;
        // let cont = cur_ti_cont;
         let {cont,cur_ti} = this.props;
         let {all_id} = this.props;

         let optiontype = "";
         if(cont){
             optiontype = cont.optionType;
         }
         let finall_cont = document.querySelectorAll('.finall_cont')[1];
        if(cur_ti == 2){
            this.addevent(finall_cont);
        }
        if(!cont){
            return (<div></div>)
        }
        let {ti_tip,option,click_open} = this.state;
        let dan = (dan1)=>{
            if(dan1 == 1){
                 return {
                    display:'block'
                }
            }else{
                return {
                    display:'none'
                }
            }

        }
        let n = 8;
        let newdd = option.map((e,i)=>{
            n = n*2;
            return  (<dd
                    data-answer={n}
                    data-sureanswer={cont.answer}
                    onClick={()=>{this.panduan(e)}}
                    key={i}
                >
                    <span className={"a"}>{e}</span>
                    <em>{cont["option"+e]}</em>
                </dd>)
        });
        return(
            <div className="finall_cont fl" ref="hello">
                <div className="ti_cont">
                    <dl>
                    <dt>
                        <span>{cont.optionType == "1"?"单":"判"}</span>
                        <em>{cont.question}</em>
                    </dt>
                        {
                            newdd
                        }

                    </dl>
                    </div>
                    {click_open == 1?<Xiangjie cont={cont}/>:''}
                    {click_open == 1?<Cheyoufenxi jinghua={jinghua} cur_ti={cur_ti} all_id={all_id}/>:''}
            </div>
        )
    }
}
export default Lianxiti2;