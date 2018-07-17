/**
 * Created by Administrator on 2018/7/5.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class Lianxiti1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ti_tip:16, //每个题的答案的基数
            option:['A','B','C','D'], //每一个选项A.B,C,D
            click_open:0,//点击的开关，如果为0，解释的内容不显示，1为解释的内容显示
            defen:0,//当前得分
            click_kaiguan:true,//只能判断点击一次，点击一次后变为false
        }
    };
    componentWillReceiveProps(){
        // console.log(this.props.click_arr);

        // this.setState({click_kaiguan:true});
        // this.setState({click_open:0});
        // let {temp_key} = this.props;
        // let temp_ele = document.querySelectorAll(".finall_cont")[temp_key];
        // let temp_spans = temp_ele.querySelectorAll(".a");
        // let {style_false,style_true} = this.state;
        // temp_spans.forEach((e,i)=>{
        //     let answer = e.parentNode.getAttribute("data-answer");
        //     e.parentNode.className = ""
        //
        // })
       let  _this = this;
        setTimeout(function () {


       let {cur_num,temp_key} = _this.props;
       console.log(cur_num);
        let {click_arr} = _this.props;
        let {click_kaiguan} = _this.state;
        console.log(click_arr);
        let temp_id_cunzai = click_arr.filter((e,i,arr)=>{
            if(cur_num == 0){
                return e.id == (parseInt(cur_num))
            }else{
                return e.id == (parseInt(cur_num))
            }

        });
        console.log(temp_id_cunzai);
        if(temp_id_cunzai[0]){
            console.log("if")
            _this.setState({click_kaiguan:temp_id_cunzai[0].click_kaiguan});
            _this.setState({click_open:1});
            let xuanxiang = temp_id_cunzai[0].sureanswer;
            console.log(document.getElementsByClassName("finall_cont"))
            let dd_ele = "";
            dd_ele = Array.from(document.getElementsByClassName("finall_cont")[temp_key].getElementsByTagName("dd"));
            if(temp_id_cunzai[0].answer == temp_id_cunzai[0].sureanswer){

                let newdd = dd_ele.forEach((e,i)=>{
                    if(e.children[0].innerText == xuanxiang) {
                        e.className = "sure"
                    }else{
                        e.className = ""
                    }
                });
            }else{
                let newdd1 = dd_ele.forEach((e,i)=>{
                    if(e.children[0].innerText == xuanxiang) {
                        e.className = "sure"
                    }else{
                        e.className = "false"
                    }
                });
            }

        }else{
            console.log("else");

            let {temp_key} = _this.props;
            let temp_ele = document.querySelectorAll(".finall_cont")[temp_key];
            let temp_spans = temp_ele.querySelectorAll(".a");
            temp_spans.forEach((e,i)=>{
                let answer = e.parentNode.getAttribute("data-answer");
                e.parentNode.className = ""

            })
             _this.setState({click_kaiguan:true});
            _this.setState({click_open:0});
        }

        })
    }
    componentDidMount(){


    }
    daan=(num)=>{
        if(num == 16){
            return "A"
        }else if(num == 32){
            return "B"
        }else if(num ==64){
            return "C"
        }else if(num ==128){
            return "D"
        }
}
    panduan = (e)=>{//判断点击是否该显示正常内容 onClick事件
        let {click_kaiguan} = this.state;
        console.log(this.props.cur_num);//cur_num 当前是第几题 push这是父级的一个方法
        if(click_kaiguan){
            this.setState({click_kaiguan:false});
             let {adddefen} = this.props; //父级传过来的加分功能 、、暂时不用
            let {defen} = this.state;//自己的得分
            let dd_ele = "";
            let ele = e.target;//DD
            if(ele.tagName == "DD"){
                dd_ele = ele
            }
            if(ele.parentNode.tagName == "DD"){
                dd_ele = e.target.parentNode
            }
            console.log(dd_ele.children[0].innerText);
            console.log(this.props.cont);
            let obj = {id:this.props.cur_num,answer:dd_ele.children[0].innerText,sureanswer:this.daan(this.props.cont.answer),click_kaiguan:false};
            console.log(obj);

            this.props.push(obj); //调用父级的添加数据方法

            // let dd_s = Array.from(dd_ele.parentNode.getElementsByTagName("dd"));//获取所有的dd
            // if(dd_ele.getAttribute("data-answer") == dd_ele.getAttribute("data-sureanswer")){
            //     dd_ele.className = "sure";
            //     console.log("正确");
            //     this.setState({defen:defen+1})
            //
            // }else{
            //     console.log("这是错误的选择")
            //     // dd_s.forEach((e1,i)=>{
            //     //     console.log(e1.getAttribute("data-answer"),e1.getAttribute("data-sureanswer"))
            //     //     if(e1.getAttribute("data-answer") === e1.getAttribute("data-sureanswer")){
            //     //         console.log("jinlail");
            //     //         console.log(e1)
            //     //         // e1.className = "sure"
            //     //     }else{
            //     //         // e1.className = "false"
            //     //     }
            //     // });
            //     let click_open = 1;
            //     this.setState({click_open});
            //     // alert("失败！！")
            //     console.log("错误")
            // }
        }


        //显示解释的内容



    };
    render(){
        let {ti_tip,option,click_open} = this.state;
        let {cont} = this.props;
        if(!cont){
            return (<div></div>)
        }
        //--------------------判断是否是单选题，如果是则显示四个选项
        let optiontype = cont.optionType; //1的时候是单选题 0的时候是判断题 2的时候是多选题
        let dan = (dan1)=>{
            if(dan1 == 1){
                return {
                    display:'block'
                }
            }else if(dan1 == 0){
                return {
                    display:'none'
                }
            }else if(dan1 == 2){
                return {
                    display:'block'
                }
            }
        };
        //-----------------------
        //-----------------------生成选项
        let n = 8;
        let newdd = option.map((e,i)=>{
            n = n*2;
            return (<dd
                    data-answer={n}
                    data-sureanswer={cont.answer}
                    // onClick={()=>{this.panduan(e)}}
                    onClick={this.panduan}
                    key={i}
                >
                    <span className={"a"}>{e}</span>
                    <em>{cont["option"+e]}</em>
                </dd>

            )
        });
        //-----------------------
        let xiangjie = (cont)=>{
            return <div className="ti_xiangqing">
                    <p>试题详解：</p>
                    <div className="ti_introduce">
                        <p dangerouslySetInnerHTML={{ __html: cont.explain }}  />
                    </div>
            </div>
        };

        let panduan_img = (cont)=>{
            let temp_div = (<div className="dd-img">
                <video autoPlay loop src={cont.mediaContent}></video>
                        </div>);
            let temp_img = (<div className="dd-img">
                            <img src={cont.mediaContent} alt=""/>
                        </div>);
            if(cont.mediaContent.indexOf(".mp4") != -1){
                return temp_div
            }else{
                return temp_img
            }

        };
        return(
            <div className="finall_cont fl" id="finall_cont">
                <div className="ti_cont">
                    <dl>
                    <dt data-ti_id = {cont.questionId}>
                        <span>{cont.optionType == "1"?"单":"判"}</span>
                        <em>{cont.question}</em>
                    </dt>
                        {cont.mediaContent?panduan_img(cont):''}

                    <dd  data-answer={ti_tip*(1)} data-sureanswer={cont.answer} onClick={this.panduan}>
                        <span className="a">{option[0]}</span>
                        <em>{cont.optionA}</em>
                    </dd>
                    <dd  data-answer={ti_tip*2} data-sureanswer={cont.answer} onClick={this.panduan}>
                        <span className="a">{option[1]}</span>
                        <em>{cont.optionB}</em>
                    </dd>
                    <dd data-answer={ti_tip*(4)} style={dan(optiontype)} data-sureanswer={cont.answer} onClick={this.panduan}>
                        <span className="a">{option[2]}</span>
                        <em>{cont.optionC}</em>
                    </dd>
                    <dd data-answer={ti_tip*(8)} style={dan(optiontype)} data-sureanswer={cont.answer} onClick={this.panduan}>
                        <span className="a">{option[3]}</span>
                        <em>{cont.optionD}</em>
                    </dd>
                    </dl>
                    </div>

                {click_open == 1?xiangjie(cont):""}




            </div>
        )
    }
}
export default Lianxiti1;
/*
//这是车友分析功能
<div className="ti_cheyoufenxi">
                    <p>车友分析：</p>

                    <div className="fenxi_cont clear">
                    <div className="user_logo fl">
                        <img src="" alt="" />
                    </div>
                    <div className="user_info fl">
                        <div className="user_name clear">
                            <span className="fl">hello</span><em className="fr">2018-0-0</em>
                        </div>
                        <div className="user_comment">
                            哈哈，你是傻子吗
                        </div>
                    </div>
                    </div>
                    <div className="fenxi_more" onClick={this.more}>加载更多</div>
                    </div>
 */