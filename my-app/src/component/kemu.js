/**
 * Created by Administrator on 2018/6/20.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom'
class Kemu extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
       return(
             <div className="kemu">
                    <dl>
                        <dt>
                            <span className="ke_1">科目一</span><span className="ke_1_info">小车(C1)理论考试</span><span className="ke_more">更多</span>
                        </dt>
                        <dd className="clear">
                            <Link to='/monikaoshi/shunxulianxiti'>
                            <div className="shunxu">
                                顺序练习
                            </div>
                                </Link>
                            <Link to='/monikaoshi/zhangjielianxi_index'>
                            <div className="zhangjie">
                                章节练习
                            </div>
                                </Link>
                            <Link to='/monikaoshi/zhuanxianglianxi_index'>
                            <div className="zhuanxiang">
                                专项练习
                            </div>
                                </Link>
                            <Link to='/monikaoshi/quanzhenmoni/quanzhenmoni1'>
                            <div className="moni">
                                全真模拟
                            </div>
                            </Link>
                        </dd>
                    </dl>
                    <dl className="ke4">
                        <dt>
                            <span className="ke_1">科目四</span><span className="ke_1_info">小车(C1)理论考试</span><span className="ke_more">更多</span>
                        </dt>
                        <dd className="clear">
                            <Link to='/monikaoshi/4_shunxulianxiti/shunxu'>
                            <div className="shunxu">
                                顺序练习
                            </div>
                                </Link>
                            <Link to='/monikaoshi/4_zhangjielianxi_index'>
                            <div className="zhangjie">
                                章节练习
                            </div>
                                </Link>
                            <Link to='/monikaoshi/4_zhuanxianglianxi_index'>
                            <div className="zhuanxiang">
                                专项练习
                            </div>
                                </Link>
                            <Link to='/monikaoshi/quanzhenmoni/quanzhenmoni4'>
                            <div className="moni">
                                全真模拟
                            </div>
                            </Link>
                        </dd>
                    </dl>
                    <ul className="kemu_3_4 clear">
                        <li>
                            <div className="video">
                                <img src={require('../images/video_1.png')} alt="" />
                                <a href=""></a>
                            </div>
                            <p>科目二 <span>学车视频</span></p>
                        </li>
                        <li>
                            <div className="video">
                                <img src={require('../images/video_1.png')} alt="" />
                                <a href=""></a>
                            </div>
                            <p>科目三 <span>学车视频</span></p>
                        </li>
                    </ul>
                </div>
       )
    }
}

export default Kemu;