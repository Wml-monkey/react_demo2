/**
 * Created by Administrator on 2018/6/20.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom'
class Kaoshi extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
       return(
             <div className="kaoshi clear">
                    <Link to="/monikaoshi_index">
                    <div className="monikaoshi fl">
                        <p>模拟考试</p>
                        <span>练习和模拟考试</span>
                    </div>
                        </Link>
                    <Link to="/tiku">
                    <div className="jiakaotiku fr">
                        <p>驾考题库</p>
                        <span>按章节练习</span>
                    </div>
                        </Link>
                </div>
       )
    }
}

export default Kaoshi;