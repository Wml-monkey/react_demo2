/**
 * Created by Administrator on 2018/7/10.
 */
import React from 'react';
import Title1 from '../component/title1';
import '../css/chakanfenxi.css';
import axios from 'axios';
class Tikulianxiti extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            all_id : [],//所有试题id
            page_num:1,//当前的页码数
            lujing:'',//进来的时候所给的路径
            ti_cont:[],//当前页面10道题的详细内容
            page_zongshu:0,//所有的page总数
            click_display:[],//点击显示本题分析
        }
    }
    xianshi = (i)=>{
        console.log(i)
        let {click_display} = this.state;
        click_display[i] = !click_display[i];
        this.setState({click_display})
    };
    componentDidMount(){
        let {click_display} = this.state;
        let temp_click_arr = [false,false,false,false,false,false,false,false,false,false];
        this.setState({click_display:temp_click_arr});
        let _this = this;
        let {match:{params:{id}}} = this.props;
        let {match:{url}} = this.props;
        let temp_url = url.split("_")[0]+"_";
        // let page_num = id.slice(-1);
        let page_num = id.split("_")[1]
        console.log(page_num);
        this.setState({page_num});
        this.setState({lujing:temp_url});
        if(id == "falvfagui_"+page_num){
            axios.get("https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=14930320654936532080&chapterId=121&cityCode=110000&_=0.6805202289131604")
                .then(function (res) {
                    let temp_arr = res.data.data.questionList;
                    _this.setState({all_id:temp_arr});
                    let question_id_10 = temp_arr.slice((page_num-1)*10,10+parseInt(page_num-1)*10);
                    let question_id_str = question_id_10.join(',');
                    let page_zongshu = Math.ceil(temp_arr.length/10);
                    _this.setState({page_zongshu})
                    axios.get("https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=15175931803305522075&limit=10&questionIds="+question_id_str+"&_=0.4969663136844027")
                        .then(function (res) {
                            let temp_cont = res.data.data;
                            _this.setState({ti_cont:temp_cont})
                        })
                })
        }else if(id == "xinhao_"+page_num){
            axios.get("https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=19910054762164892089&chapterId=122&cityCode=110000&_=0.8098601838837833")
                .then(function (res) {
                    let temp_arr = res.data.data.questionList;
                    _this.setState({all_id:temp_arr});
                    let question_id_10 = temp_arr.slice((page_num-1)*10,10+parseInt(page_num-1)*10);
                    let question_id_str = question_id_10.join(',');
                    let page_zongshu = Math.ceil(temp_arr.length/10);
                    _this.setState({page_zongshu})
                    axios.get("https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=15175931803305522075&limit=10&questionIds="+question_id_str+"&_=0.4969663136844027")
                        .then(function (res) {
                            let temp_cont = res.data.data;
                            _this.setState({ti_cont:temp_cont})
                        })
                })
        }else if(id == "1anquanxingche_"+page_num){
            axios.get("https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=15782572330249426085&chapterId=123&cityCode=110000&_=0.9517499095229065")
                .then(function (res) {
                    let temp_arr = res.data.data.questionList;
                    _this.setState({all_id:temp_arr});
                    let question_id_10 = temp_arr.slice((page_num-1)*10,10+parseInt(page_num-1)*10);
                    let question_id_str = question_id_10.join(',');
                    let page_zongshu = Math.ceil(temp_arr.length/10);
                    _this.setState({page_zongshu})
                    axios.get("https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=15175931803305522075&limit=10&questionIds="+question_id_str+"&_=0.4969663136844027")
                        .then(function (res) {
                            let temp_cont = res.data.data;
                            _this.setState({ti_cont:temp_cont})
                        })
                })
        }else if(id == "jidongchejiashi_"+page_num){
            axios.get("https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=115163090406970110070&chapterId=124&cityCode=110000&_=0.7106833826226073")
                .then(function (res) {
                    let temp_arr = res.data.data.questionList;
                    _this.setState({all_id:temp_arr});
                    let question_id_10 = temp_arr.slice((page_num-1)*10,10+parseInt(page_num-1)*10);
                    let question_id_str = question_id_10.join(',');
                    let page_zongshu = Math.ceil(temp_arr.length/10);
                    _this.setState({page_zongshu})
                    axios.get("https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=15175931803305522075&limit=10&questionIds="+question_id_str+"&_=0.4969663136844027")
                        .then(function (res) {
                            let temp_cont = res.data.data;
                            _this.setState({ti_cont:temp_cont})
                        })
                })
        }else if(id == "weifaxingwei_"+page_num){
            axios.get("https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=15649197770938700098&chapterId=127&cityCode=110000&_=0.07077725757984488")
                .then(function (res) {
                    let temp_arr = res.data.data.questionList;
                    _this.setState({all_id:temp_arr});
                    let question_id_10 = temp_arr.slice((page_num-1)*10,10+parseInt(page_num-1)*10);
                    let question_id_str = question_id_10.join(',');
                    let page_zongshu = Math.ceil(temp_arr.length/10);
                    _this.setState({page_zongshu})
                    axios.get("https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=15175931803305522075&limit=10&questionIds="+question_id_str+"&_=0.4969663136844027")
                        .then(function (res) {
                            let temp_cont = res.data.data;
                            _this.setState({ti_cont:temp_cont})
                        })
                })
        }else if(id == "4anquanxingche_"+page_num){
            axios.get("https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=11009517726385512078&chapterId=128&cityCode=110000&_=0.002501132371297121")
                .then(function (res) {
                    let temp_arr = res.data.data.questionList;
                    _this.setState({all_id:temp_arr});
                    let question_id_10 = temp_arr.slice((page_num-1)*10,10+parseInt(page_num-1)*10);
                    let question_id_str = question_id_10.join(',');
                    let page_zongshu = Math.ceil(temp_arr.length/10);
                    _this.setState({page_zongshu})
                    axios.get("https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=15175931803305522075&limit=10&questionIds="+question_id_str+"&_=0.4969663136844027")
                        .then(function (res) {
                            let temp_cont = res.data.data;
                            _this.setState({ti_cont:temp_cont})
                        })
                })
        }else if(id == "jiaotongbiaozhi_"+page_num){
            axios.get("https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=12762273519229084085&chapterId=129&cityCode=110000&_=0.9052503263160683")
                .then(function (res) {
                    let temp_arr = res.data.data.questionList;
                    _this.setState({all_id:temp_arr});
                    let question_id_10 = temp_arr.slice((page_num-1)*10,10+parseInt(page_num-1)*10);
                    let question_id_str = question_id_10.join(',');
                    let page_zongshu = Math.ceil(temp_arr.length/10);
                    _this.setState({page_zongshu})
                    axios.get("https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=15175931803305522075&limit=10&questionIds="+question_id_str+"&_=0.4969663136844027")
                        .then(function (res) {
                            let temp_cont = res.data.data;
                            _this.setState({ti_cont:temp_cont})
                        })
                })
        }else if(id == "zhiyedaode_"+page_num){
            axios.get("https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=1662710512172296072&chapterId=130&cityCode=110000&_=0.9594825383182983")
                .then(function (res) {
                    let temp_arr = res.data.data.questionList;
                    _this.setState({all_id:temp_arr});
                    let question_id_10 = temp_arr.slice((page_num-1)*10,10+parseInt(page_num-1)*10);
                    let question_id_str = question_id_10.join(',');
                    let page_zongshu = Math.ceil(temp_arr.length/10);
                    _this.setState({page_zongshu})
                    axios.get("https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=15175931803305522075&limit=10&questionIds="+question_id_str+"&_=0.4969663136844027")
                        .then(function (res) {
                            let temp_cont = res.data.data;
                            _this.setState({ti_cont:temp_cont})
                        })
                })
        }else if(id == "eluehuanjing_"+page_num){
            axios.get("https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=112576211545586470086&chapterId=131&cityCode=110000&_=0.6460593804699373")
                .then(function (res) {
                    let temp_arr = res.data.data.questionList;
                    _this.setState({all_id:temp_arr});
                    let question_id_10 = temp_arr.slice((page_num-1)*10,10+parseInt(page_num-1)*10);
                    let question_id_str = question_id_10.join(',');
                    let page_zongshu = Math.ceil(temp_arr.length/10);
                    _this.setState({page_zongshu})
                    axios.get("https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=15175931803305522075&limit=10&questionIds="+question_id_str+"&_=0.4969663136844027")
                        .then(function (res) {
                            let temp_cont = res.data.data;
                            _this.setState({ti_cont:temp_cont})
                        })
                })
        }else if(id == "jinjiqingkuang_"+page_num){
            axios.get("https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=14305199087110094077&chapterId=132&cityCode=110000&_=0.581283014928279")
                .then(function (res) {
                    let temp_arr = res.data.data.questionList;
                    _this.setState({all_id:temp_arr});
                    let question_id_10 = temp_arr.slice((page_num-1)*10,10+parseInt(page_num-1)*10);
                    let question_id_str = question_id_10.join(',');
                    let page_zongshu = Math.ceil(temp_arr.length/10);
                    _this.setState({page_zongshu})
                    axios.get("https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=15175931803305522075&limit=10&questionIds="+question_id_str+"&_=0.4969663136844027")
                        .then(function (res) {
                            let temp_cont = res.data.data;
                            _this.setState({ti_cont:temp_cont})
                        })
                })
        }else if(id == "jiaotongshigu_"+page_num){
            axios.get("https://api2.jiakaobaodian.com/api/open/exercise/chapter.htm?_appName=jiakaobaodian&_platform=wap&_r=19699108075744954103&chapterId=133&cityCode=110000&_=0.7038685413076124")
                .then(function (res) {
                    let temp_arr = res.data.data.questionList;
                    _this.setState({all_id:temp_arr});
                    let question_id_10 = temp_arr.slice((page_num-1)*10,10+parseInt(page_num-1)*10);
                    let question_id_str = question_id_10.join(',');
                    let page_zongshu = Math.ceil(temp_arr.length/10);
                    _this.setState({page_zongshu})
                    axios.get("https://api2.jiakaobaodian.com/api/open/question/question-list.htm?_appName=jiakaobaodian&_platform=wap&_r=15175931803305522075&limit=10&questionIds="+question_id_str+"&_=0.4969663136844027")
                        .then(function (res) {
                            let temp_cont = res.data.data;
                            _this.setState({ti_cont:temp_cont})
                        })
                })
        }
    }

    render(){
        let {ti_cont,page_num,page_zongshu,lujing,click_display} = this.state;
        /*

         */
        let dan = (dan1) =>{
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
        let last_div = "";
        let display_true = {
            display:'block'
        };
        let display_false = {
            display:'none'
        }
        let new_ti_cont = ti_cont.map((e,i)=>{
            if(i !== ti_cont.length-1){
                last_div = "zhengti"
            }else{
                last_div = "zhengti "+" last_zhengti";
            }
            let _this = this;
            let panduan_img = (cont)=>{
                let temp_div = (
                    <dd className="dd-img">
                        <video autoPlay src={cont.mediaContent}></video>
                    </dd>
                );
                let temp_img = (
                    <dd className="dd-img">
                        <img src={cont.mediaContent} alt=""/>
                    </dd>
                );
                if(cont.mediaContent.indexOf(".mp4") != -1){
                    return temp_div
                }else{
                    return temp_img
                }
            }
           return (
               <div key={i} className={last_div}>
                    <div className="ti_cont">
                        <dl>
                            <dt>
                                <span>{e.optionType == 1?"单":'判'}</span>
                                <em>{e.question}</em>
                            </dt>
                            {e.mediaContent?panduan_img(e):''}
                            <dd>
                                <span className={e.answer == 16?"active":''}>A</span>
                                <em>{e.optionA}</em>
                            </dd>
                            <dd >
                                <span  className={e.answer == 32?"active":''}>B</span>
                                <em>{e.optionB}</em>
                            </dd>
                            <dd style={dan(e.optionType)}>
                                <span  className={e.answer == 64?"active":''}>C</span>
                                <em>{e.optionC}</em>
                            </dd>
                            <dd style={dan(e.optionType)}>
                                <span className={e.answer == 128?"active":''}>D</span>
                                <em>{e.optionD}</em>
                            </dd>
                        </dl>
                    </div>
                    <div className="chakan" onClick={()=>{this.xianshi(i)}}>
                        查看本题分析
                    </div>
                    <div className="ti_xiangqing" style={click_display[i] == false?display_false:display_true}>
                        <p>试题详解：</p>
                        <div className="ti_introduce" >
                            <div dangerouslySetInnerHTML = {{ __html:e.explain }}></div>

                        </div>
                    </div>
                </div>
           )
        });
        return (
            <div>
                <Title1 tempname={"章节详情"} tempurl={this.props}/>
                {new_ti_cont}
                <div className="page_next clear">
                    <a href={page_num-1 <= 0?lujing+1:lujing+(page_num-1)} className="fl">上一页</a>
                    <span><em>{page_num}</em>/<em>{page_zongshu}</em></span>
                    <a href={parseInt(page_num)+1 >= page_zongshu?lujing+page_zongshu:lujing+(parseInt(page_num)+1)} className="fr">下一页</a>
                </div>
                <div className="lujing">
        <a href="">首页</a>
        <a href="" className="jiantou">题库</a>
        <a href="" className="jiantou">章节详情</a>
    </div>
                <div className="corporation">
        <p>北京木仓科技有限公司版权所有 | 京ICP备11009001号-1</p>
        <p>商务合作：cooperation@mucang.cn</p>
    </div>
            </div>
        )
    }
}
export default Tikulianxiti