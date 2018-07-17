/**
 * Created by Administrator on 2018/7/5.
 */
import React from 'react';
import axios from 'axios';
import Lianxiti1 from '../component/lianxiti1_moban';
import Title1 from './title1'
import '../css/xunxulianxiti.css';
import '../css/xunxulianxiti_1.css';
class Shitimoban4 extends React.Component{
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
        }
    }
    componentDidMount(){
        let {fenlei} = this.state;
        let {cur_num,tempname,all_num,request_num,ti_cont,all_ti_id} = this.state;//解构当前第几题 ; 该分类所有题目的总数
        let slider = this.refs.slider;
        let start_point_x = 0;
        let move_dis = 0;
        let start_left = 0;
        let cur_div = 1;
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
                    slider.style.left = "-375px";
                    cur_div = 2;
                    cur_num += 1;
                }
            }
            else if(cur_div === 2){
                let {ti_cont} = this.state;
                if(move_dis <= 0 && Math.abs(move_dis) <= 100){
                    slider.style.left = "-375px";
                    cur_div = 2;
                }else if(move_dis < 0 && Math.abs(move_dis) >100){
                    if(cur_num == ti_cont.length-1){
                        slider.style.left = "-750px";
                        cur_div = 3;
                    }else{
                        slider.style.left = "-375px";
                        cur_div = 2;
                    }
                    cur_num += 1;
                } else if(move_dis >= 100){
                    if(cur_num > 2){
                         slider.style.left = "-375px";
                         cur_num -= 1;
                        cur_div = 2;
                    }else{
                        slider.style.left = "0px";
                        cur_num -= 1;
                        cur_div = 1;
                    }

                }else if(move_dis >= 0 && move_dis<100){
                    slider.style.left = "-375px";
                    cur_div = 2;

                }
            }
            else if(cur_div === 3){
                if(move_dis >= 100 ){
                    slider.style.left = "-375px";
                    cur_num -= 1;
                    cur_div = 2;
                }else if(move_dis > 0 && move_dis <100){
                    slider.style.left = "-750px";
                    cur_div = 3;
                }else if(move_dis <= 0){
                    slider.style.left = "-750px";
                    cur_div = 3;
                }
                this.setState({cur_num})
            }
            this.setState({cur_num}); //改变state里的状态cur_num当前是第几题
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
                    // axios.get("https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=113891875744709570102&questionIds="+newstr+"&_=0.7787974039876049")
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
        if(id === "anlifenxi"){
            //请求所有的试题的id
            this.setState({tempname:'章节练习'});
            let temp_url = "https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=113166983055230066081&carType=car&chapterId=127&cityCode=110000&course=kemu3&_=0.612991807993333";
            temp_url = temp_url.replace(/\//g,"*");
            temp_url = temp_url.replace(/\?/g,"@");
            let yuming = "http://www.helloliangzhu.com/api/";
            axios.get(yuming+temp_url)
            // axios.get("")
                .then(function (res) {
                    let temp_all_ti_id = res.data.data.questionList;
                    _this.setState({all_ti_id:temp_all_ti_id});
                    _this.setState({all_num:temp_all_ti_id.length})
                });
            //请求10个题目的所有内容
            let temp_url2 = "https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=1685134532212948078&questionIds=909800%2C909900%2C910000%2C910100%2C910200%2C910300%2C910400%2C910500%2C910600%2C910700&_=0.9200063459762067";
            temp_url2 = temp_url2.replace(/\//g,"*");
            temp_url2 = temp_url2.replace(/\?/g,"@");
            axios.get(yuming+temp_url2)
            // axios.get()
                .then(function (res) {
                    let temp_ti_cont = res.data.data;
                    let temp_three_item = temp_ti_cont.slice(0,3);
                    _this.setState({three_item:temp_three_item});
                    _this.setState({ti_cont:temp_ti_cont})
                })
        }
        else if(id === "changshi"){
            this.setState({tempname:'章节练习'});
            //请求所有的试题id
             let temp_url3 = "https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=11441743335281013066&carType=car&chapterId=128&cityCode=110000&course=kemu3&_=0.5582125932537545";
            temp_url3 = temp_url3.replace(/\//g,"*");
            temp_url3 = temp_url3.replace(/\?/g,"@");
            let yuming = "http://www.helloliangzhu.com/api/";
            axios.get(yuming+temp_url3)
            // axios.get()
                .then(function (res) {
                    let temp_all_ti_id = res.data.data.questionList;
                    _this.setState({all_ti_id:temp_all_ti_id});
                    _this.setState({all_num:temp_all_ti_id.length})
                });
            //请求10个题目的所有内容
            let temp_url4 = "https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=17264266739772705096&questionIds=913500%2C913600%2C913700%2C913800%2C913900%2C914000%2C914100%2C914200%2C914300%2C914400&_=0.38545924643658447";
            temp_url4 = temp_url4.replace(/\//g,"*");
            temp_url4 = temp_url4.replace(/\?/g,"@");
            axios.get(yuming+temp_url4)
            // axios.get()
                .then(function (res) {
                    let temp_ti_cont = res.data.data;
                    let temp_three_item = temp_ti_cont.slice(0,3);
                    _this.setState({three_item:temp_three_item});
                    _this.setState({ti_cont:temp_ti_cont})
                })
        }//到这里了
        else if(id === "jiaotongbiaozhi"){
            this.setState({tempname:'章节练习'});
             let temp_url5 = "https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=114454573273608046086&carType=car&chapterId=129&cityCode=110000&course=kemu3&_=0.21400190377146533";
            temp_url5 = temp_url5.replace(/\//g,"*");
            temp_url5 = temp_url5.replace(/\?/g,"@");
            let yuming = "http://www.helloliangzhu.com/api/";
            axios.get(yuming+temp_url5)
            //请求所有的试题id
            // axios.get(")
                .then(function (res) {
                    let temp_all_ti_id = res.data.data.questionList;
                    _this.setState({all_ti_id:temp_all_ti_id});
                    _this.setState({all_num:temp_all_ti_id.length})
                });
            //请求10个题目的所有内容
            let temp_url6 = "https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=13834526618376987102&questionIds=932700%2C932800%2C932900%2C933000%2C933100%2C933200%2C933300%2C933400%2C933500%2C933600&_=0.21423436118817096";
            temp_url6 = temp_url6.replace(/\//g,"*");
            temp_url6 = temp_url6.replace(/\?/g,"@");
            axios.get(yuming+temp_url6)
            // axios.get()
                .then(function (res) {
                    let temp_ti_cont = res.data.data;
                    let temp_three_item = temp_ti_cont.slice(0,3);
                    _this.setState({three_item:temp_three_item});
                    _this.setState({ti_cont:temp_ti_cont})
                })
        }
        else if(id === "wenmingjiashi"){
            this.setState({tempname:'章节练习'});
            //请求所有的试题id
             let temp_url7 = "https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=19333372089160018079&carType=car&chapterId=130&cityCode=110000&course=kemu3&_=0.17457335163505538";
            temp_url7 = temp_url7.replace(/\//g,"*");
            temp_url7 = temp_url7.replace(/\?/g,"@");
            let yuming = "http://www.helloliangzhu.com/api/";
            axios.get(yuming+temp_url7)
            // axios.get()
                .then(function (res) {
                    let temp_all_ti_id = res.data.data.questionList;
                    _this.setState({all_ti_id:temp_all_ti_id});
                    _this.setState({all_num:temp_all_ti_id.length})
                });
            //请求10个题目的所有内容
             let temp_url8 = "https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=110383853228191120074&questionIds=954200%2C954300%2C954400%2C954500%2C954600%2C954700%2C954800%2C954900%2C955000%2C955100&_=0.726559388556264";
            temp_url8 = temp_url8.replace(/\//g,"*");
            temp_url8 = temp_url8.replace(/\?/g,"@");
            axios.get(yuming+temp_url8)
            // axios.get()
                .then(function (res) {
                    let temp_ti_cont = res.data.data;
                    let temp_three_item = temp_ti_cont.slice(0,3);
                    _this.setState({three_item:temp_three_item});
                    _this.setState({ti_cont:temp_ti_cont})
                })
        }
        else if(id === "elueqihou"){
            this.setState({tempname:'章节练习'});
            //请求所有的试题id
            let temp_url10 = "https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=115189120195047814083&carType=car&chapterId=131&cityCode=110000&course=kemu3&_=0.18036755461457155";
            temp_url10 = temp_url10.replace(/\//g,"*");
            temp_url10 = temp_url10.replace(/\?/g,"@");
            let yuming = "http://www.helloliangzhu.com/api/";
            axios.get(yuming+temp_url10)
            // axios.get()
                .then(function (res) {
                    let temp_all_ti_id = res.data.data.questionList;
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
        else if(id === "jinjiqingkuang"){
            this.setState({tempname:'章节练习'});
            //请求所有的试题id
             let temp_url12 = "https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=11227868814566900089&carType=car&chapterId=132&cityCode=110000&course=kemu3&_=0.7621615731849889";
            temp_url12 = temp_url12.replace(/\//g,"*");
            temp_url12 = temp_url12.replace(/\?/g,"@");
            let yuming = "http://www.helloliangzhu.com/api/";
            axios.get(yuming+temp_url12)
            // axios.get()
                .then(function (res) {
                    let temp_all_ti_id = res.data.data.questionList;
                    console.log(temp_all_ti_id);
                    _this.setState({all_ti_id:temp_all_ti_id});
                    _this.setState({all_num:temp_all_ti_id.length});
                    let temp_pre = temp_all_ti_id.slice(0,10);
                    let temp_pre_str = temp_pre.join(',');
                    let temp_url13 = "https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=1657387806036910084&questionIds="+temp_pre_str+"&_=0.6830064257951447";
                    temp_url13 = temp_url13.replace(/\//g,"*");
                    temp_url13 = temp_url13.replace(/\?/g,"@");
                    axios.get(yuming+temp_url13)
                    // axios.get()
                        .then(function (res) {
                            let temp_ti_cont = res.data.data;
                            let temp_three_item = temp_ti_cont.slice(0,3);
                            _this.setState({three_item:temp_three_item});
                            _this.setState({ti_cont:temp_ti_cont})
                        })
                });
            //请求10个题目的所有内容

        }
         else if(id === "shigu"){
            this.setState({tempname:'章节练习'});
            //请求所有的试题id
            let temp_url14 ="https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=11633998330712262081&carType=car&chapterId=133&cityCode=110000&course=kemu3&_=0.8479715524091702";
            temp_url14 = temp_url14.replace(/\//g,"*");
            temp_url14 = temp_url14.replace(/\?/g,"@");
            let yuming = "http://www.helloliangzhu.com/api/";
            axios.get(yuming+temp_url14)
            // axios.get()
                .then(function (res) {
                    let temp_all_ti_id = res.data.data.questionList;
                    console.log(temp_all_ti_id);
                    _this.setState({all_ti_id:temp_all_ti_id});
                    _this.setState({all_num:temp_all_ti_id.length});
                    let temp_pre = temp_all_ti_id.slice(0,10);
                    let temp_pre_str = temp_pre.join(',');
                    let temp_url15 = "https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=1657387806036910084&questionIds="+temp_pre_str+"&_=0.6830064257951447";
                    temp_url15 = temp_url15.replace(/\//g,"*");
                    temp_url15 = temp_url15.replace(/\?/g,"@");
                    axios.get(yuming+temp_url15)
                    // axios.get()
                        .then(function (res) {
                            let temp_ti_cont = res.data.data;
                            let temp_three_item = temp_ti_cont.slice(0,3);
                            _this.setState({three_item:temp_three_item});
                            _this.setState({ti_cont:temp_ti_cont})
                        })
                });
            //请求10个题目的所有内容

        }
        else if(id === "difangtiku"){
            this.setState({tempname:'章节练习'});
            //请求所有的试题id
             let temp_url14 ="https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=14197655147599056099&carType=car&chapterId=270&cityCode=110000&course=kemu3&_=0.13916184520377084";
            temp_url14 = temp_url14.replace(/\//g,"*");
            temp_url14 = temp_url14.replace(/\?/g,"@");
            let yuming = "http://www.helloliangzhu.com/api/";
            axios.get(yuming+temp_url14)
            // axios.get(")
                .then(function (res) {
                    let temp_all_ti_id = res.data.data.questionList;
                    console.log(temp_all_ti_id);
                    _this.setState({all_ti_id:temp_all_ti_id});
                    _this.setState({all_num:temp_all_ti_id.length});
                    let temp_pre = temp_all_ti_id.slice(0,10);
                    let temp_pre_str = temp_pre.join(',');
                    let temp_url16 = "https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=1657387806036910084&questionIds="+temp_pre_str+"&_=0.6830064257951447";
                    temp_url16 = temp_url16.replace(/\//g,"*");
                    temp_url16 = temp_url16.replace(/\?/g,"@");
                    axios.get(yuming+temp_url16)
                    // axios.get()
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
             let temp_url14 ="https://api2.jiakaobaodian.com/api/open/exercise/sequence.htm?_appName=jiakaobaodian&_platform=wap&_r=17815564007251166080&carType=car&cityCode=110000&course=kemu3&_=0.9217950136250013";
            temp_url14 = temp_url14.replace(/\//g,"*");
            temp_url14 = temp_url14.replace(/\?/g,"@");
            let yuming = "http://www.helloliangzhu.com/api/";
            axios.get(yuming+temp_url14)
            // axios.get()
                .then(function (res) {
                    let temp_all_ti_id = res.data.data;
                    console.log(temp_all_ti_id);
                    _this.setState({all_ti_id:temp_all_ti_id});
                    _this.setState({all_num:temp_all_ti_id.length});
                    let temp_pre = temp_all_ti_id.slice(0,10);
                    let temp_pre_str = temp_pre.join(',');
                    let temp_url16 = "https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=13926796888191033099&questionIds="+temp_pre_str+"&_=0.2187031668381838";
                    temp_url16 = temp_url16.replace(/\//g,"*");
                    temp_url16 = temp_url16.replace(/\?/g,"@");
                    axios.get(yuming+temp_url16)
                    // axios.get()
                        .then(function (res) {
                            let temp_ti_cont = res.data.data;
                            let temp_three_item = temp_ti_cont.slice(0,3);
                            _this.setState({three_item:temp_three_item});
                            _this.setState({ti_cont:temp_ti_cont})
                        })
                });
            //请求10个题目的所有内容

        }
        else if(id === "tagId="+url_num){
            this.setState({tempname:'章节练习'});
            //请求所有的试题id
            let temp_url14 ="https://api2.jiakaobaodian.com/api/open/question/list-by-tag.htm?_appName=jiakaobaodian&_platform=wap&_r=111829215106376704080&carType=car&cityCode=110000&course=kemu3&tagId="+url_num+"&_=0.055232431368431145";
            temp_url14 = temp_url14.replace(/\//g,"*");
            temp_url14 = temp_url14.replace(/\?/g,"@");
            let yuming = "http://www.helloliangzhu.com/api/";
            axios.get(yuming+temp_url14)
            // axios.get()
                .then(function (res) {
                    let temp_all_ti_id = res.data.data;
                    console.log(temp_all_ti_id);
                    _this.setState({all_ti_id:temp_all_ti_id});
                    _this.setState({all_num:temp_all_ti_id.length});
                    let temp_pre = temp_all_ti_id.slice(0,10);
                    let temp_pre_str = temp_pre.join(',');
                    let temp_url16 = "https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=1657387806036910084&questionIds="+temp_pre_str+"&_=0.6830064257951447";
                    temp_url16 = temp_url16.replace(/\//g,"*");
                    temp_url16 = temp_url16.replace(/\?/g,"@");
                    axios.get(yuming+temp_url16)
                    // axios.get()
                        .then(function (res) {
                            let temp_ti_cont = res.data.data;
                             if(!temp_ti_cont){
                                alert("本项目中没有题目！！");
                                return
                            }
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
        let {all_num,cur_num,ti_cont,tempname} = this.state;
        let three_ti_cont = [];
        if(cur_num == 1 || cur_num ==2){//第一题和第二题比较特殊
            three_ti_cont = ti_cont.slice(0,3);//slice切割指的是列表下标
        }else if(cur_num == ti_cont.length-1 || cur_num == ti_cont.length){
            three_ti_cont = ti_cont.slice(-3);
        }else{
            three_ti_cont = ti_cont.slice(cur_num-2,cur_num+1);//slice切割指的是列表的下标
        }
        let newlianxiti = three_ti_cont.map((e,i)=>{
            return <Lianxiti1 key={i} cont={e} temp_key={i}/>
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
export default Shitimoban4;