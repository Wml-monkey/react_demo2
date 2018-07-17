import React from "react";
// import {fecth} from 'isomorphic-fetch';
import "../css/jiakaoquan.css";

import "../css/school.css";
import School_head from '../component/school_header';
import Paihang from '../component/school_paihang';
import Title1 from '../component/title1';
class School extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr:[]
        }
    }



    render(){

        return (
            <div className="cont">
                        <Title1/>
                        <School_head/>
                        <Paihang/>


                        <div className="chakan_more">
                            查看更多
                        </div>
                        <dl className="xueyuanpingjia">
                            <dt>
                                学员评价
                            </dt>
                            <dd className="clear">
                                <div className="xueyuanpingjia_img fl">
                                    <img src={require("../images/xueyuanpingjia_img.png")} alt="" />
                                </div>
                                <div className="xueyuanpingjia_info fl">
                                    <p>用户5247550583</p>
                                    <div className="xueyuanpingjia_stare">
                                        <i></i>
                                        <span><em>5</em>分</span>
                                    </div>
                                    <div className="xueyuanpingjia_pingjia">
                                        规模很大，环境好，设施好，管理好，管理人员很人性化，服务人员很负责
                                    </div>
                                    <div className="xueyuanpingjia_time">
                                        2018-05-17 <i className="fr">0</i>
                                    </div>
                                </div>

                            </dd>
                            <dd className="clear">
                                <div className="xueyuanpingjia_img fl">
                                    <img src={require("../images/xueyuanpingjia_img.png")} alt="" />
                                </div>
                                <div className="xueyuanpingjia_info fl">
                                    <p>用户5247550583</p>
                                    <div className="xueyuanpingjia_stare">
                                        <i></i>
                                        <span><em>5</em>分</span>
                                    </div>
                                    <div className="xueyuanpingjia_pingjia">
                                        规模很大，环境好，设施好，管理好，管理人员很人性化，服务人员很负责
                                    </div>
                                    <div className="xueyuanpingjia_time">
                                        2018-05-17 <i className="fr">0</i>
                                    </div>
                                </div>

                            </dd>
                            <dd className="clear">
                                <div className="xueyuanpingjia_img fl">
                                    <img src={require("../images/xueyuanpingjia_img.png")} alt="" />
                                </div>
                                <div className="xueyuanpingjia_info fl">
                                    <p>用户5247550583</p>
                                    <div className="xueyuanpingjia_stare">
                                        <i></i>
                                        <span><em>5</em>分</span>
                                    </div>
                                    <div className="xueyuanpingjia_pingjia">
                                        规模很大，环境好，设施好，管理好，管理人员很人性化，服务人员很负责
                                    </div>
                                    <div className="xueyuanpingjia_time">
                                        2018-05-17 <i className="fr">0</i>
                                    </div>
                                </div>

                            </dd>
                            <dd className="clear">
                                <div className="xueyuanpingjia_img fl">
                                    <img src={require("../images/xueyuanpingjia_img.png")} alt="" />
                                </div>
                                <div className="xueyuanpingjia_info fl">
                                    <p>用户5247550583</p>
                                    <div className="xueyuanpingjia_stare">
                                        <i></i>
                                        <span><em>5</em>分</span>
                                    </div>
                                    <div className="xueyuanpingjia_pingjia">
                                        规模很大，环境好，设施好，管理好，管理人员很人性化，服务人员很负责
                                    </div>
                                    <div className="xueyuanpingjia_time">
                                        2018-05-17 <i className="fr">0</i>
                                    </div>
                                </div>

                            </dd>


                        </dl>
                        <div className="xiangguansousuo school_sousuo">
                            <dl>
                                <dt>相关搜索</dt>
                                <dd className="clear">
                                    <span>北京驾校哪家强</span>
                                    <span>北京驾校排名</span>
                                    <span>北京科目一考试</span>
                                    <span>北京科目四考试</span>
                                </dd>
                            </dl>
                        </div>
                        <div className="xiangguansousuo school_sousuo">
                            <dl>
                                <dt>热门区域</dt>
                                <dd className="clear">
                                    <span>广州驾校</span>
                                    <span>深圳驾校</span>
                                    <span>重庆驾校</span>
                                    <span>南京驾校</span>
                                    <span>广州驾校</span>
                                    <span>深圳驾校</span>
                                    <span>重庆驾校</span>
                                    <span>南京驾校</span>
                                    <span>广州驾校</span>
                                    <span>深圳驾校</span>
                                    <span>重庆驾校</span>
                                    <span>南京驾校</span>
                                </dd>
                            </dl>
                            <div className="jiaxiao_more">
                                <span>查看更多 ∨</span>
                            </div>
                        </div>
                        <div className="tuijianjiaxiao school_sousuo">
                            <dl>
                                <dt>推荐驾校</dt>
                                <dd className="clear">
                                    <span>东方时尚驾校</span>
                                    <span>公交驾校</span>
                                    <span>海淀驾校</span>
                                    <span>东方时尚驾校</span>
                                    <span>公交驾校</span>
                                    <span>海淀驾校</span>
                                    <span>东方时尚驾校</span>
                                    <span>公交驾校</span>
                                    <span>海淀驾校</span>
                                     <span>海淀驾校</span>
                                </dd>
                            </dl>
                        </div>
                        <div className="jiaxiaojieshao">
                            北京驾校哪个好？北京驾校报名价格多少？ 驾考宝典依托海量的用户数据统计，为您提供更加客观全面的北京驾校排名查询， 真实的北京驾校用户数量及评论内容，助您轻松选择适合自己的驾校。
                        </div>
                        <div className="lujing">
                            <a href="">首页</a>
                            <a href="" className="jiantou">北京驾校</a>
                        </div>
                        <div className="corporation">
                            <p>北京木仓科技有限公司版权所有 | 京ICP备11009001号-1</p>
                            <p>商务合作：cooperation@mucang.cn</p>
                        </div>
            </div>

        )
    }
}

export default School;