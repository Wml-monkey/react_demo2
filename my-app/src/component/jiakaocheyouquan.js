/**
 * Created by Administrator on 2018/6/20.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom'
class Jiakaocheyouquan extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dot:1,//当前第一个点亮
        }
    }
    componentDidMount(){

        let list = this.refs.list;
        let startx = 0;
        let movex = 0;
        let startleft = 0;
        let box_width = 0;
        let width = window.innerWidth;
        let touchend = (ev)=>{
            if(parseFloat(list.style.left)>0){
                console.log(1)
                list.style.left = "0px";
                this.setState({dot:1})
            };
            if(parseFloat(list.style.left)<-width && parseFloat(list.style.left)>-width*2){
                this.setState({dot:2});
                console.log(2);
            }
            if(parseFloat(list.style.left)<-width*2){
                this.setState({dot:3});
                list.style.left = -width*2+"px";
            }
            // if(parseFloat(list.style.left)<-box_width){
            //     list.style.left = box_width+"px"
            // }
            list.removeEventListener("touchmove",touchmove);
            list.removeEventListener("touchend",touchend)
        };
        let touchmove = (ev)=>{
            movex = ev.changedTouches[0].pageX-startx;
            list.style.left = parseFloat(startleft)+movex + "px"
        };
        let touchstart = (ev)=>{
            box_width= parseFloat(window.getComputedStyle(list).width)-window.innerWidth;
            list.style.position = "relative";
            startleft = list.style.left;
            startx = ev.changedTouches[0].pageX;
            list.addEventListener("touchmove",touchmove);
            list.addEventListener("touchend",touchend)
        }
        list.addEventListener("touchstart",touchstart)
    }
    render(){
        let init_style = {
            position:"relative",
            left:"0px"
        };
        let {dot} = this.state;
       return(
             <div className="jiakaocheyouquan">
                    <p>驾考车友圈 <a href="">更多</a></p>
                    <div className="clear cheyouquan_list" ref="list" style={init_style}>
                        <Link to="/club/351_1_p1">考前许愿</Link>
                        <Link to="/club/347_1_p1">科目一</Link>
                        <Link to="/club/348_1_p1">科目二</Link>
                        <Link to="/club/349_1_p1">科目三</Link>
                        <Link to="/club/350_1_p1">科目四</Link>
                        <Link to="/club/345_1_p1">晒驾照</Link>
                        <Link to="/club/551_1_p1">狼族自驾</Link>
                        <Link to="/club/341_1_p1">校花校草</Link>
                        <Link to="/club/2028_1_p1">教练之家</Link>
                        <Link to="/club/2030_1_p1">提车作业</Link>
                    </div>
                    <div className="dot">
                        <span className={dot == 1?"active":''}></span>
                        <span className={dot == 2?"active":''}></span>
                        <span className={dot == 3?"active":''}></span>
                    </div>
                </div>
       )
    }
}

export default Jiakaocheyouquan;