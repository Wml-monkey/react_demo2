/**
 * Created by Administrator on 2018/7/5.
 */
import React from 'react';
import axios from 'axios';
import Lianxiti1 from '../component/lianxiti1_moban';
import Title1 from './title1'
import '../css/xunxulianxiti.css';
import '../css/xunxulianxiti_1.css';
// import '../css/xunxulianxiti_2.css'
class Shitimoban extends React.Component{
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
            tempname:'',//记录这是哪一个模块。比如章节练习，顺序练习
            click_arr:[],//记录每次点击的选项及试题
        }
    }
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
                        this.setState({cur_num}); //改变state里的状态cur_num当前是第几题
                    }else{
                        slider.style.left = "0px";
                        cur_num -= 1;
                        cur_div = 1;
                        this.setState({cur_num}); //改变state里的状态cur_num当前是第几题
                    }

                }else if(move_dis >= 0 && move_dis<100){
                    slider.style.left = -width+"px";
                    cur_div = 2;

                }
            }
            else if(cur_div === 3){
                if(move_dis >= 100 ){
                    slider.style.left = -width+"px";
                    cur_num -= 1;
                    cur_div = 2;
                    this.setState({cur_num})
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
                    let temp_url = "https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=113891875744709570102&questionIds="+newstr+"&_=0.7787974039876049";
                    temp_url = temp_url.replace(/\//g,"*");
                    temp_url = temp_url.replace(/\?/g,"@");
                    let yuming = "http://www.helloliangzhu.com/api/";
                    axios.get(yuming+temp_url)
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
        console.log(id)
        this.setState({fenlei:id});
        let url_num = id.split('=')[1];
        console.log(url_num);
        let _this = this;
        if(id === "falv"){
            //请求所有的试题的id
            this.setState({tempname:'章节练习'});
            let temp_url = "https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=115263408121154924075&carType=car&chapterId=121&cityCode=110000&course=kemu1&_=0.4662841894366232";
            temp_url = temp_url.replace(/\//g,"*");
            temp_url = temp_url.replace(/\?/g,"@");
            let yuming = "http://www.helloliangzhu.com/api/";
            axios.get(yuming+temp_url)
                .then(function (res) {
                    let temp_all_ti_id = res.data.data.questionList;
                    _this.setState({all_ti_id:temp_all_ti_id});
                    _this.setState({all_num:temp_all_ti_id.length})
                });
            //请求10个题目的所有内容
            let temp_url2 = "https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=113381061111934724072&questionIds=800000%2C800100%2C800200%2C800300%2C800400%2C800500%2C800600%2C800700%2C800800%2C800900&_=0.682448805980983";
            temp_url2 = temp_url2.replace(/\//g,"*");
            temp_url2 = temp_url2.replace(/\?/g,"@");
            axios.get(yuming+temp_url2)
                .then(function (res) {
                    let temp_ti_cont = res.data.data;
                    let temp_three_item = temp_ti_cont.slice(0,3);
                    _this.setState({three_item:temp_three_item});
                    _this.setState({ti_cont:temp_ti_cont})
                })
        }
        else if(id === "xinhao"){
            this.setState({tempname:'章节练习'});
            //请求所有的试题id
            let temp_url3 = "https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=18947837951859692116&carType=car&chapterId=122&cityCode=110000&course=kemu1&_=0.761973958343108";
            temp_url3 = temp_url3.replace(/\//g,"*");
            temp_url3 = temp_url3.replace(/\?/g,"@");
            let yuming = "http://www.helloliangzhu.com/api/";
            axios.get(yuming+temp_url3)
                .then(function (res) {
                    let temp_all_ti_id = res.data.data.questionList;
                    _this.setState({all_ti_id:temp_all_ti_id});
                    _this.setState({all_num:temp_all_ti_id.length})
                });
            //请求10个题目的所有内容
            let temp_url4 = "https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=18320007065137360067&questionIds=836500%2C836600%2C836700%2C836800%2C836900%2C837000%2C837100%2C837200%2C837300%2C837400&_=0.323066517841645";
            temp_url4 = temp_url4.replace(/\//g,"*");
            temp_url4 = temp_url4.replace(/\?/g,"@");
            axios.get(yuming+temp_url4)
                .then(function (res) {
                    let temp_ti_cont = res.data.data;
                    let temp_three_item = temp_ti_cont.slice(0,3);
                    _this.setState({three_item:temp_three_item});
                    _this.setState({ti_cont:temp_ti_cont})
                })
        }
        else if(id === "anquanxingche"){
            this.setState({tempname:'章节练习'});
            //请求所有的试题id
            let temp_url5 = "https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=14801088664780073&carType=car&chapterId=123&cityCode=110000&course=kemu1&_=0.3422604883470941";
            temp_url5 = temp_url5.replace(/\//g,"*");
            temp_url5 = temp_url5.replace(/\?/g,"@");
            let yuming = "http://www.helloliangzhu.com/api/";
            axios.get(yuming+temp_url5)
                .then(function (res) {
                    let temp_all_ti_id = res.data.data.questionList;
                    _this.setState({all_ti_id:temp_all_ti_id});
                    _this.setState({all_num:temp_all_ti_id.length})
                });
            //请求10个题目的所有内容
            let temp_url6 = "https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=1272059344579965092&questionIds=867700%2C867800%2C867900%2C868000%2C868100%2C868200%2C868300%2C868400%2C868500%2C868600&_=0.5688705553327813";
            temp_url6 = temp_url6.replace(/\//g,"*");
            temp_url6 = temp_url6.replace(/\?/g,"@");
            axios.get(yuming+temp_url6)
                .then(function (res) {
                    let temp_ti_cont = res.data.data;
                    let temp_three_item = temp_ti_cont.slice(0,3);
                    _this.setState({three_item:temp_three_item});
                    _this.setState({ti_cont:temp_ti_cont})
                })
        }
        else if(id === "jidongchejiashi"){
            this.setState({tempname:'章节练习'});
            //请求所有的试题id
            let temp_url7 = "https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=16071737770304636083&carType=car&chapterId=124&cityCode=110000&course=kemu1&_=0.9346901138864101";
            temp_url7 = temp_url7.replace(/\//g,"*");
            temp_url7 = temp_url7.replace(/\?/g,"@");
            let yuming = "http://www.helloliangzhu.com/api/";
            axios.get(yuming+temp_url7)
                .then(function (res) {
                    let temp_all_ti_id = res.data.data.questionList;
                    _this.setState({all_ti_id:temp_all_ti_id});
                    _this.setState({all_num:temp_all_ti_id.length})
                });
            //请求10个题目的所有内容
            let temp_url8 = "https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=112390787980832046094&questionIds=886400%2C886500%2C886600%2C886700%2C886800%2C886900%2C887000%2C887100%2C887200%2C887300&_=0.2330507296434916";
            temp_url8 = temp_url8.replace(/\//g,"*");
            temp_url8 = temp_url8.replace(/\?/g,"@");
            axios.get(yuming+temp_url8)
                .then(function (res) {
                    let temp_ti_cont = res.data.data;
                    let temp_three_item = temp_ti_cont.slice(0,3);
                    _this.setState({three_item:temp_three_item});
                    _this.setState({ti_cont:temp_ti_cont})
                })
        }
        // else if(id === "quanzhenmoni1"){
        //     console.log("333444");
        //     this.setState({tempname:'全真模拟'});
        //     //请求所有的试题id
        //     axios.get("https://api2.jiakaobaodian.com/api/open/exam/do-exam.htm?_appName=jiakaobaodian&_platform=wap&_r=17307210534781296081&carType=car&cityCode=110000&course=kemu1&_=0.6501078590288618")
        //         .then(function (res) {
        //             let temp_all_ti_id = res.data.data;
        //             _this.setState({all_ti_id:temp_all_ti_id});
        //             _this.setState({all_num:temp_all_ti_id.length});
        //             let temp_pre = temp_all_ti_id.slice(0,10);
        //             let temp_pre_str = temp_pre.join(',');
        //             axios.get("https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=1657387806036910084&questionIds="+temp_pre_str+"&_=0.6830064257951447")
        //                 .then(function (res) {
        //                     let temp_ti_cont = res.data.data;
        //                     let temp_three_item = temp_ti_cont.slice(0,3);
        //                     _this.setState({three_item:temp_three_item});
        //                     _this.setState({ti_cont:temp_ti_cont})
        //                 })
        //         });
        //     //请求10个题目的所有内容
        // }
        else if(id === "tagId="+url_num){
            this.setState({tempname:'章节练习'});
            //请求所有的试题id
            let temp_url10 = "https://api2.jiakaobaodian.com/api/open/question/list-by-tag.htm?_appName=jiakaobaodian&_platform=wap&_r=111829215106376704080&carType=car&cityCode=110000&course=kemu1&tagId="+url_num+"&_=0.055232431368431145";
            temp_url10 = temp_url10.replace(/\//g,"*");
            temp_url10 = temp_url10.replace(/\?/g,"@");
            let yuming = "http://www.helloliangzhu.com/api/";
            axios.get(yuming+temp_url10)
                .then(function (res) {
                    let temp_all_ti_id = res.data.data;
                    console.log(temp_all_ti_id);
                    _this.setState({all_ti_id:temp_all_ti_id});
                    _this.setState({all_num:temp_all_ti_id.length});
                    let temp_pre = temp_all_ti_id.slice(0,10);
                    let temp_pre_str = temp_pre.join(',');
                    let temp_url11 = "https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=1657387806036910084&questionIds="+temp_pre_str+"&_=0.6830064257951447";
                    temp_url11 = temp_url11.replace(/\//g,"*");
                    temp_url11 = temp_url11.replace(/\?/g,"@");
                    axios.get(yuming+temp_url11)
                        .then(function (res) {
                            let temp_ti_cont = res.data.data;
                            let temp_three_item = temp_ti_cont.slice(0,3);
                            _this.setState({three_item:temp_three_item});
                            _this.setState({ti_cont:temp_ti_cont})
                        })
                });
            //请求10个题目的所有内容

        }
        else if(id === "shunxu"){
            this.setState({tempname:'顺序练习'});
            //请求所有的试题id
            let temp_url12 = "https://api2.jiakaobaodian.com/api/open/exercise/sequence.htm?_appName=jiakaobaodian&_platform=wap&_r=17815564007251166080&carType=car&cityCode=110000&course=kemu3&_=0.9217950136250013";
            temp_url12 = temp_url12.replace(/\//g,"*");
            temp_url12 = temp_url12.replace(/\?/g,"@");
            let yuming = "http://www.helloliangzhu.com/api/";
            axios.get(yuming+temp_url12)
                .then(function (res) {
                    let temp_all_ti_id = res.data.data;
                    console.log(temp_all_ti_id);
                    _this.setState({all_ti_id:temp_all_ti_id});
                    _this.setState({all_num:temp_all_ti_id.length});
                    let temp_pre = temp_all_ti_id.slice(0,10);
                    let temp_pre_str = temp_pre.join(',');
                    let temp_url13 = "https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=13926796888191033099&questionIds="+temp_pre_str+"&_=0.2187031668381838";
                    temp_url13 = temp_url13.replace(/\//g,"*");
                    temp_url13 = temp_url13.replace(/\?/g,"@");
                    axios.get(yuming+temp_url13)
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
    render(){
        let {all_num,cur_num,ti_cont,tempname,click_arr} = this.state;
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

            return <Lianxiti1 key={i} cont={e} temp_key={i} click_arr={click_arr} push={_this.push} cur_num={(cur_num+(i-1))}/>
        });
        let tempurl = this.props;
        return(
            <div>
               <Title1 tempname={tempname} tempurl={tempurl}/>
    <div className="banner">
        <img src={require("../images/maichewang.png")} alt="" />
    </div>
    <div className="slider_box">
        <div className="slider clear" ref="slider">
            {newlianxiti}
        </div>
    </div>



    <div className="ti_act">
        <span className="shoucang">收藏</span>
        <span className="ti_all_zongshu"><em>{cur_num}</em>/<i>{all_num}</i></span>
        <span className="ti_yiwen">打开详解</span>
    </div>
            </div>
        )
    }

}
export default Shitimoban;