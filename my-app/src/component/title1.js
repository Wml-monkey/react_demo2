/**
 * Created by Administrator on 2018/6/25.
 */
/**
 * Created by Administrator on 2018/6/20.
 */
import React from 'react';
import {Link} from 'react-router-dom'
import Addrlist from './addr_list.js';
let hello = require('../func/title/title');





class Title1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            onOff:false
        }
    };
    click = () => {
        let {onOff} = this.state;
        // console.log(hello.default);
        hello.default();
        onOff = true;
        this.setState({onOff})
    };
    linktoroot = () => {
        window.location.href = "/"
    };
    render(){
        let {tempname,tempurl} = this.props;
        // console.log(this.props)
        // console.log(tempurl)
        let {history:{goBack}} = tempurl;
        // console.log(goBack)
       return(
            <section>
                <div className="clear fenye_title">
                    <a className="fl" onClick={goBack} href="javascript:;"></a>
                    <div className="car fl" onClick={this.linktoroot}></div>
                    <div className="jiakaoquan_zhuye fl">{tempname?tempname:"全国"}</div>
                    <div className="set fr"></div>
                    <div className="area fr" onClick={this.click}>全国</div>
                </div>
                <div className="title_white"></div>
                <Addrlist/>
            </section>
       )
    }
}

export default Title1;