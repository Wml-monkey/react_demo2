/**
 * Created by Administrator on 2018/7/14.
 */
import React from 'react';
import "../css/defenmask.less"
class Qiangzhijieshu extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
        let mask = document.getElementsByClassName("qiangzhijieshu")[0];

        mask.addEventListener("touchstart",function (ev) {
            console.log("22")
            ev.stopPropagation()
        });
    }

    render(){
        let {click_arr} = this.props;
        let newarr = click_arr.filter((e,i)=>{
            return e.answer == e.sureanswer
        });
        return(
            <div className="qiangzhijieshu" style={this.props.qiangzhikaiguan == 0?{display:"none"}:{dispaly:"block"}}>
                <div className="zongdefen">
                    本次考试结束!!
                    您的得分为 <span>{newarr.length}</span>分
                </div>
                <a className="fanhui" href="/monikaoshi_index">返回</a>
            </div>
        )
    }
}
export default Qiangzhijieshu