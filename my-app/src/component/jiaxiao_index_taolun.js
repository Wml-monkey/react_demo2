/**
 * Created by Administrator on 2018/6/29.
 */
/**
 * Created by Administrator on 2018/6/29.
 */
/**
 * Created by Administrator on 2018/6/29.
 */
/**
 * Created by Administrator on 2018/6/29.
 */
import React from 'react';

class Taolun extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        let style = {
            "padding":0
        }
        return (
            <div className="cont">




    <div className="jiaxiao_xijie">

        <ul className="jiaxiao_taolun">
            <li className="clear">
                <div className="user_img fl">
                    <img src={require("../images/user_img.jpg")} alt="" />
                </div>
                <div className="user_comment fl">
                    <div className="user_name">
                        <span>雪雪</span><em>北京</em>
                    </div>
                    <p className="huati" style={style}>考科目一</p>
                    <div className="user_tupian">
                        <img src={require("../images/user_tupian.jpeg")} alt="" />
                        <img src={require("../images/user_tupian.jpeg")} alt="" />
                        <img src={require("../images/user_tupian.jpeg")} alt="" />
                    </div>
                    <div className="user_time">
                        <span>2小时前</span><em>0</em>
                    </div>
                </div>
            </li>
            <li className="clear">
                <div className="user_img fl">
                    <img src={require("../images/user_img.jpg")} alt="" />
                </div>
                <div className="user_comment fl">
                    <div className="user_name">
                        <span>雪雪</span><em>北京</em>
                    </div>
                    <p className="huati" style={style}>考科目一</p>
                    <div className="user_tupian">
                        <img src={require("../images/user_tupian.jpeg")} alt="" />
                        <img src={require("../images/user_tupian.jpeg")} alt="" />
                        <img src={require("../images/user_tupian.jpeg")} alt="" />
                    </div>
                    <div className="user_time">
                        <span>2小时前</span><em>0</em>
                    </div>
                </div>
            </li>
            <li className="clear">
                <div className="user_img fl">
                    <img src={require("../images/user_img.jpg")} alt="" />
                </div>
                <div className="user_comment fl">
                    <div className="user_name">
                        <span>雪雪</span><em>北京</em>
                    </div>
                    <p className="huati" style={style}>考科目一</p>
                    <div className="user_tupian">
                        <img src={require("../images/user_tupian.jpeg")} alt="" />
                        <img src={require("../images/user_tupian.jpeg")} alt="" />
                        <img src={require("../images/user_tupian.jpeg")} alt="" />
                    </div>
                    <div className="user_time">
                        <span>2小时前</span><em>0</em>
                    </div>
                </div>
            </li>
        </ul>
        <div className="jiaxiao_taolun_more">
            <em>查看更多讨论(共<span>10000</span>个)</em>
        </div>
    </div>
        </div>
        )
    }
}
export default Taolun;