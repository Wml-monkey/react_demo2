/**
 * Created by Administrator on 2018/6/20.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import Addrlist from './addr_list.js';
let hello = require('../func/title/title');





class Title extends React.Component{
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
    render(){
       return(
            <section>
                <div className="title clear">
                    <Link to="/"><a className="fl logo_bg"></a></Link>
                    <div className="set fr"></div>
                    <div className="area fr" onClick={this.click}>全国</div>
                </div>
                <div className="title_white"></div>
                <Addrlist/>
            </section>
       )
    }
}

export default Title;