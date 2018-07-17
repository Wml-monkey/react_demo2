/**
 * Created by Administrator on 2018/7/5.
 */
import React from 'react';
import axios from 'axios';
import Lianxiti1 from '../component/lianxiti1_moban';
import Title1 from './title1';
import Daojishi from './daojishi'
import '../css/xunxulianxiti.css';
import '../css/xunxulianxiti_1.css';
import '../css/jiakaoquan.css';
import '../css/quanzhenmoni.css';
import Defenmask from '../component/defen_mask';
import Qiangzhijieshu from '../component/qiangzhijieshu'
class Shitimobankaoshi extends React.Component{
    constructor(props){
        super(props);
        this.state = {

            fenlei:'',//法律，交通信号，安全行车。。。各种专项题
            all_ti_id:[],//当前种类所有试题的id编号
            all_num:0,//该分类所有题目的总数
            ti_cont:[],//题目的详细内容，初始化为前10条数据
            cur_num:1,//当前是第几题
            three_item:[],//每次刷新的三个item
            request_num:0,//请求的次数，初始化为0，数据每到10条请求一次
            tempname:'模拟考试',//记录这是哪一个模块。比如章节练习，顺序练习
            defen:0,//做题目取得的分数
            click_arr:[],//记录每次点击的选项及试题
            haha:0,//交卷的时候打开遮罩
            qiangzhikaiguan:0,//倒计时结束后打开的面板
            daojishi:"",//设置倒计时
        }
    }
    jiaojuan = ()=>{
        let {click_arr} = this.state;
        let newclick_arr = click_arr.filter((e,i)=>{
            return e.answer == e.sureanswer
        });
        console.log(click_arr.length,newclick_arr.length)
        this.setState({haha:1})
    };
    jixudati = ()=>{
        this.setState({haha:0})
    };
    qiangzhi = ()=>{
        this.setState({haha:0});
        this.setState({qiangzhikaiguan:1})
    };

    adddefen = ()=>{
        let {defen} = this.state;
        console.log(defen+1);
      this.setState({defen:defen+1})
    };
    push = (obj)=>{
        let {cur_num} = this.state;
        let {click_arr} = this.state;
        click_arr.push(obj);
        console.log(click_arr)
        this.setState({click_arr})
    };
    componentDidMount(){
        let {fenlei} = this.state;
        let {cur_num,tempname,all_num,request_num,ti_cont,all_ti_id} = this.state;//解构当前第几题 ; 该分类所有题目的总数
        let slider = this.refs.slider;
        let start_point_x = 0;
        let move_dis = 0;
        let start_left = 0;
        let cur_div = 1;
        let width = window.innerWidth;
        let touchmove = (ev)=>{
              move_dis = ev.changedTouches[0].pageX - start_point_x;
              slider.style.left = (move_dis+start_left) + 'px';
        };
        let touchend = () =>{
            if(cur_div === 1){
                if(move_dis < 0 && move_dis >= -100){
                    slider.style.left = "0px";
                    cur_div = 1;
                }else if(move_dis >= 0){
                    slider.style.left = "0px";
                    cur_div = 1;
                }else if(move_dis<0 && move_dis < -100){
                    slider.style.left = -width+"px";
                    cur_div = 2;
                    cur_num += 1;
                    this.setState({cur_num}); //改变state里的状态cur_num当前是第几题
                }
            }
            else if(cur_div === 2){
                let {ti_cont} = this.state;
                if(move_dis <= 0 && Math.abs(move_dis) <= 100){
                    slider.style.left = -width+"px";
                    cur_div = 2;
                }else if(move_dis < 0 && Math.abs(move_dis) >100){
                    if(cur_num == ti_cont.length-1){
                        slider.style.left = -width*2+"px";
                        cur_div = 3;
                    }else{
                        slider.style.left = -width+"px";
                        cur_div = 2;
                    }
                    cur_num += 1;
                    this.setState({cur_num}); //改变state里的状态cur_num当前是第几题
                } else if(move_dis >= 100){
                    if(cur_num > 2){
                         slider.style.left = -width+"px";
                         cur_num -= 1;
                        cur_div = 2;
                    }else{
                        slider.style.left = "0px";
                        cur_num -= 1;
                        cur_div = 1;
                    }
                     this.setState({cur_num}); //改变state里的状态cur_num当前是第几题

                }else if(move_dis >= 0 && move_dis<100){
                    slider.style.left = -width+"px";
                    cur_div = 2;

                }
            }
            else if(cur_div === 3){
                if(move_dis >= 100 ){
                    slider.style.left = -width+"px";;
                    cur_num -= 1;
                    cur_div = 2;
                     this.setState({cur_num}); //改变state里的状态cur_num当前是第几题
                }else if(move_dis > 0 && move_dis <100){
                    slider.style.left = -width*2+"px";
                    cur_div = 3;
                }else if(move_dis <= 0){
                    slider.style.left = -width*2+"px";
                    cur_div = 3;
                }
            }
            window.removeEventListener("touchmove",touchmove);
            window.removeEventListener("touchend",touchend);
            move_dis = 0;
            let {ti_cont,all_num,all_ti_id,request_num} = this.state;
            if(request_num == parseInt(cur_num/9)){

            }else{

                if(cur_num < request_num*9){
                    return false;
                }else{
                    request_num = parseInt(cur_num/9);
                    this.setState({request_num});
                    let newarr = all_ti_id.slice(10*request_num,10*request_num+10)
                    if(!newarr){
                        return false
                    }
                    let newstr = newarr.join(",");
                    let {ti_cont} = this.state;
                    let _this = this;
                    let temp_url12 = "https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=113891875744709570102&questionIds="+newstr+"&_=0.7787974039876049";
                    temp_url12 = temp_url12.replace(/\//g,"*");
                    temp_url12 = temp_url12.replace(/\?/g,"@");
                    let yuming = "http://www.helloliangzhu.com/api/";
                    axios.get(yuming+temp_url12)
                    // axios.get("")
                        .then(function (res) {
                            let temp_arr = res.data.data;
                            ti_cont = ti_cont.concat(temp_arr);
                            _this.setState({ti_cont});
                        })
                }
            }



        };
        let touchstart = (ev)=>{
            // slider.style.position = "fixed";
            // slider.style.top = "102px";
            if(!slider.style.left){
                start_left = 0;
            }else{
                start_left = parseFloat(slider.style.left);
            }
            start_point_x = ev.changedTouches[0].pageX;
            window.addEventListener("touchmove",touchmove);
            window.addEventListener("touchend",touchend);
        };
        window.addEventListener('touchstart',touchstart);


        //拿到路由中的种类
        let {match:{params:{id}}} = this.props;
        console.log(id);
        this.setState({fenlei:id});
        let url_num = id.split('=')[1];
        console.log(url_num);
        let _this = this;
        if(id === "quanzhenmoni1"){
            this.setState({tempname:'全真模拟'});
            //请求所有的试题id
            axios.get("https://api2.jiakaobaodian.com/api/open/exam/do-exam.htm?_appName=jiakaobaodian&_platform=wap&_r=17307210534781296081&carType=car&cityCode=110000&course=kemu1&_=0.6501078590288618")
                .then(function (res) {
                    let temp_all_ti_id = res.data.data;
                    _this.setState({all_ti_id:temp_all_ti_id});
                    _this.setState({all_num:temp_all_ti_id.length});
                    let temp_pre = temp_all_ti_id.slice(0,10);
                    let temp_pre_str = temp_pre.join(',');
                    axios.get("https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=1657387806036910084&questionIds="+temp_pre_str+"&_=0.6830064257951447")
                        .then(function (res) {
                            let temp_ti_cont = res.data.data;
                            let temp_three_item = temp_ti_cont.slice(0,3);
                            _this.setState({three_item:temp_three_item});
                            _this.setState({ti_cont:temp_ti_cont})
                        })
                });
            //请求10个题目的所有内容
        }else if(id === "quanzhenmoni4"){
            this.setState({tempname:'全真模拟'});
            //请求所有的试题id
            axios.get("https://api2.jiakaobaodian.com/api/open/exam/do-exam.htm?_appName=jiakaobaodian&_platform=wap&_r=111029583932789190094&carType=car&cityCode=110000&course=kemu3&_=0.48967721511681894")
                .then(function (res) {
                    let temp_all_ti_id = res.data.data;
                    _this.setState({all_ti_id:temp_all_ti_id});
                    _this.setState({all_num:temp_all_ti_id.length});
                    let temp_pre = temp_all_ti_id.slice(0,10);
                    let temp_pre_str = temp_pre.join(',');
                    axios.get("https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=1657387806036910084&questionIds="+temp_pre_str+"&_=0.6830064257951447")
                        .then(function (res) {
                            let temp_ti_cont = res.data.data;
                            let temp_three_item = temp_ti_cont.slice(0,3);
                            _this.setState({three_item:temp_three_item});
                            _this.setState({ti_cont:temp_ti_cont})
                        })
                });
            //请求10个题目的所有内容
        }




    }

    panduan = ()=>{

    };
    pre = ()=>{
        let {cur_num} = this.state;
        this.setState({cur_num:cur_num-1})
    };
    next = ()=>{
        let {cur_num} = this.state;
        let new_cur_num = cur_num+1;
        this.setState({cur_num:new_cur_num})
    };
    render(){
        let {all_num,cur_num,ti_cont,tempname,shijian,click_arr,haha,qiangzhikaiguan,daojishi} = this.state;
        let three_ti_cont = [];
        if(cur_num == 1 || cur_num ==2){//第一题和第二题比较特殊
            three_ti_cont = ti_cont.slice(0,3);//slice切割指的是列表下标
        }else if(cur_num == ti_cont.length-1 || cur_num == ti_cont.length){
            three_ti_cont = ti_cont.slice(-3);
        }else{
            three_ti_cont = ti_cont.slice(cur_num-2,cur_num+1);//slice切割指的是列表的下标
        }
        let _this = this;
        let newlianxiti = three_ti_cont.map((e,i)=>{
            return <Lianxiti1 key={i} cont={e} temp_key={i} adddefen={this.adddefen} click_arr={click_arr} push={_this.push} cur_num={(cur_num+(i-1))}/>
        });
        let tempurl = this.props;
        return(
            <div>
               <div className="clear fenye_title">
                    <a className="fl" href="/monikaoshi_index"></a>
                    <div className="car fl"></div>
                    <div className="jiakaoquan_zhuye fl">全真模拟练习</div>

                    <div className="tijiao  fr" onClick={this.jiaojuan}>交卷</div>
                    <div className="area fr">全国</div>
                </div>
    <div className="banner">
        <img src={require("../images/maichewang.png")} alt="" />
    </div>
    <div className="slider_box">
        <div className="slider clear" ref="slider">
            {newlianxiti}
        </div>
    </div>
                <Daojishi cur_num={cur_num} qiangzhi={this.qiangzhi} daojishi={daojishi}/>
                <Defenmask haha={haha} jixudati={this.jixudati} click_arr={click_arr} qiangzhi={this.qiangzhi}/>
                <Qiangzhijieshu click_arr={click_arr} qiangzhikaiguan={qiangzhikaiguan}/>
            </div>
        )
    }

}
export default Shitimobankaoshi;