/**
 * Created by Administrator on 2018/6/20.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom'
class Paihangbang extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
       return(
             <div className="paihangbang clear">
                    <span className="fl span_paihangbang_1">权威排行榜</span>
                    <span className="fr span_paihangbang_2">更多</span>
                </div>
       )
    }
}

export default Paihangbang;