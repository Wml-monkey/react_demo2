/**
 * Created by Administrator on 2018/7/14.
 */
import React from 'react';
import '../css/defenmask.css';

class Defenmask extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    jixu = ()=>{
        this.props.jixudati()
    };
    jiaojuan = ()=>{
        this.props.qiangzhi()
    };
    componentDidMount(){
        let mask = document.getElementsByClassName("mask")[0];

        mask.addEventListener("touchstart",function (ev) {
            console.log("22")
            ev.stopPropagation()
        });
    }
    render(){
        let {click_arr} = this.props;
        let zhengque = [];
        if(!click_arr){
            return <div className="mask" style={this.props.haha == 0?{display:"none"}:{display:"block"}}></div>
        }
        zhengque = click_arr.filter((e,i)=>{
                return e.answer == e.sureanswer
            });

        return (
            <div className="mask" style={this.props.haha == 0?{display:"none"}:{display:"block"}}>
                <div className="defen clear" >
                    <p>您已经回答了<span>{click_arr.length}</span>题,考试得了 <span>{zhengque.length}</span>分，确定要交卷吗？</p>
                    <div className="jixu" onClick={this.jixu}>继续答题</div>
                    <div className="jiaojuan" onClick={this.jiaojuan}>交卷</div>
                </div>
            </div>
        )
    }
}
export default Defenmask