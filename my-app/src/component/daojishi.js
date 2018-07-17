/**
 * Created by Administrator on 2018/7/10.
 */
import  React from 'react';
class Daojishi extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            shijian:"",//定时器里的时间
            dingshiqi:"",//启动的定时器，时间为0时，关闭
        }
    }

    componentDidMount(){
        let {dingshiqi} = this.state;
        let _this = this;
        let nowtime = new Date();
        let nowmin = nowtime.getMinutes();
        let futer_time = nowtime.setMinutes(nowmin+45);
        dingshiqi = setInterval(function () {
            let nowtime1 = new Date();
            let shijiancha = futer_time - nowtime1;
            let second = Math.ceil(shijiancha/1000);
            let min = parseInt(second/60);
            let s = second - min*60;
            if(min<10){
                min = "0"+min;
            }else{
                min = ""+min;
            }
            if(s<10){
                s = "0"+s;
            }else{
                s = ""+s;
            }
            if(min == "00" && s == "00"){
               clearInterval(dingshiqi)
                _this.props.qiangzhi()
            }
            // console.log(min+":"+s);
            _this.setState({shijian:min+":"+s})
        },1000);
        this.setState({dingshiqi})
    }
    componentWillUnmount(){ //组件从DOM中移除的时候调用

    }

    render(){
        let {shijian} = this.state;
        let {cur_num} = this.props;
        return(
            <div className="moniti_bottom">
                <strong className="top_ti" onClick={this.pre}>上一题</strong>
                <strong className="xia_ti" onClick={this.next}>下一题</strong>
                <strong className="zongti"><em>{cur_num}</em>/<i>100</i></strong>
                <span className="shijian" id="shijian">{shijian}</span>
            </div>
        )
    }


}
export default Daojishi;