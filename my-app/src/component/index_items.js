/**
 * Created by Administrator on 2018/6/20.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom'
class Items extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
       return(
            <section>
               <ul className="items clear">
                    <Link to="/school/paihang"><li>
                        <span className="item_span_1"></span>
                        <p>找驾校</p>
                    </li></Link>
                    <li>
                        <span className="item_span_2"></span>
                        <p>找教练</p>
                    </li>
                    <li>
                        <span className="item_span_3"></span>
                        <p>找陪练</p>
                    </li>
                    <Link to="/jiakaoquan/p1">
                    <li>
                        <span className="item_span_4"></span>
                        <p>驾考圈</p>
                    </li>
                    </Link>
                    <Link to="/xiazai">
                    <li>
                        <span className="item_span_5"></span>
                        <p>软件下载</p>
                    </li>
                    </Link>
                </ul>
            </section>
       )
    }
}

export default Items;