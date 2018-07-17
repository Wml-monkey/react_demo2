import React from 'react';
import '../css/index.css';
import '../css/school.css';
import '../css/jiakaoquan.css';
import axios from 'axios';
import Remenhuati from '../component/remenhuati';
import Title1 from '../component/title1';
import Jiakaocheyouquan from '../component/jiakaocheyouquan';
import {Link} from "react-router-dom"

class Jiakaoquan extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount(){

    }

    render(){

        return(
            <div className="cont">
    <Title1 tempname={"驾考圈"} tempurl={this.props}/>
    <Jiakaocheyouquan/>
    <Remenhuati url={this.props}/>
    <div className="lujing">
        <a href="">首页</a>
        <a href="/jiakaoquan/p1" className="jiantou">驾考圈</a>
    </div>
    <div className="corporation">
        <p>北京木仓科技有限公司版权所有 | 京ICP备11009001号-1</p>
        <p>商务合作：cooperation@mucang.cn</p>
    </div>
        
        </div>
        )
    }
}

export default Jiakaoquan