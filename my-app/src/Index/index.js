import React from "react";
import "./index.css";
import {Route,Link} from "react-router-dom";
import Title from '../component/title';
import Ads from '../component/ads';
import Items from '../component/index_items';
import Kaoshi from '../component/index_kaoshi';
import Zhaojiaxiao from '../component/index_zhaojiaxiao';
import Paihangbang from '../component/index_paihangbang';
import Jiaxiao from '../component/jiaxiao';
import Jiaolian_paihangbang from '../component/jiaolian_paihangbang';
import Kemu from '../component/kemu';
import Jiakaocheyouquan from '../component/jiakaocheyouquan';


class Index extends React.Component{

    render(){
        return(

            <div className="cont">
                <Title/>
                <Ads/>
                <Items/>
                <Kaoshi/>
                <Zhaojiaxiao/>
                <Paihangbang/>
                <Jiaxiao/>
                <Jiaolian_paihangbang/>
                <Kemu/>
                <Jiakaocheyouquan/>
                <div className="jiaotongbiaozhi">
                    <p>交通标志更多</p>
                    <div className="jiaotongbiaozhi_list clear">
                        <a href="/jiaotongbiaozhidaquan">交通标志</a>
                        <a href="/jiaotongbiaozhidaquan">仪表盘指示灯</a>
                        <a href="/jiaotongbiaozhidaquan">新版交警手势</a>
                        <a href="/jiaotongbiaozhidaquan">车内功能按钮</a>
                        <a href="/jiaotongbiaozhidaquan">交通事故图解</a>
                    </div>
                </div>
                <div className="xuecheshipin">
                    <p>学车视频 <a href="">更多</a></p>
                    <ul className="shipin_list clear">
                        <li>
                            <div className="shipin_img">
                                <img src={require('../images/video_list.png')} alt="" />
                                <a href="#"></a>
                            </div>
                            <p>学车科目三上车学车科目<br />三上车学车科目三上车学车科目三上车</p>
                            <div className="play_num">
                                <p className="clear">
                                    <span>30.21</span>万
                                    <em>2018-05-07</em>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="shipin_img">
                                <img src={require('../images/video_list.png')} alt="" />
                                <a href=""></a>
                            </div>
                            <p>学车科目三上车准备</p>
                            <div className="play_num">
                                <p className="clear">
                                    <span>30.21</span>万
                                    <em>2018-05-07</em>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="shipin_img">
                                <img src={require('../images/video_list.png')} alt="" />
                                <a href=""></a>
                            </div>
                            <p>学车科目三上车准备</p>
                            <div className="play_num">
                                <p className="clear">
                                    <span>30.21</span>万
                                    <em>2018-05-07</em>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="shipin_img">
                                <img src={require('../images/video_list.png')} alt="" />
                                <a href=""></a>
                            </div>
                            <p>学车科目三上车准备</p>
                            <div className="play_num">
                                <p className="clear">
                                    <span>30.21</span>万
                                    <em>2018-05-07</em>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="shipin_img">
                                <img src={require('../images/video_list.png')} alt="" />
                                <a href=""></a>
                            </div>
                            <p>学车科目三上车准备</p>
                            <div className="play_num">
                                <p className="clear">
                                    <span>30.21</span>万
                                    <em>2018-05-07</em>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="shipin_img">
                                <img src={require('../images/video_list.png')} alt="" />
                                <a href=""></a>
                            </div>
                            <p>学车科目三上车准备</p>
                            <div className="play_num">
                                <p className="clear">
                                    <span>30.21</span>万
                                    <em>2018-05-07</em>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="xuechezhinan">
                    <p>
                        <span>学车指南</span>
                        <em>更多</em>
                    </p>
                    <ul>
                        <Link to='/zixunxiangqing'>
                        <li className="clear">
                            <div className="img fl">
                                <img src={require('../images/xuechezhinan_img.jpeg')} alt="" />
                            </div>
                            <div className="img_info fl">
                                <p>科目二只要掌握这个，轻松通过不是梦！</p>
                                <div className="liulan_num">
                                    <span>驾考咨询</span>
                                    <em>53万次浏览</em>
                                    <time>2018-05-14</time>
                                </div>
                            </div>
                        </li>
                            </Link>
                        <Link to='/zixunxiangqing'>
                        <li className="clear">
                            <div className="img fl">
                                <img src={require('../images/xuechezhinan_img.jpeg')} alt="" />
                            </div>
                            <div className="img_info fl">
                                <p>科目二只要掌握这个，轻松通过不是梦！</p>
                                <div className="liulan_num">
                                    <span>驾考咨询</span>
                                    <em>53万次浏览</em>
                                    <time>2018-05-14</time>
                                </div>
                            </div>
                        </li>
                            </Link>
                        <li className="add">
                            <p>道路速度记不清？时速题巧计来帮你</p>
                            <div className="add_img">
                                <img src={require('../images/add_img.jpeg')} alt="" />
                                <img src={require('../images/add_img.jpeg')} alt="" />
                                <img src={require('../images/add_img.jpeg')} alt="" />
                            </div>
                            <div className="add_info">
                                <span>驾考宝典</span>
                                <span>9万次浏览</span>
                                <em>2018-05-09</em>
                            </div>
                        </li>
                        <li className="clear">
                            <div className="img fl">
                                <img src={require('../images/xuechezhinan_img.jpeg')} alt="" />
                            </div>
                            <div className="img_info fl">
                                <p>科目二只要掌握这个，轻松通过不是梦！</p>
                                <div className="liulan_num">
                                    <span>驾考咨询</span>
                                    <em>53万次浏览</em>
                                    <time>2018-05-14</time>
                                </div>
                            </div>
                        </li>
                        <li className="clear">
                            <div className="img fl">
                                <img src={require('../images/xuechezhinan_img.jpeg')} alt="" />
                            </div>
                            <div className="img_info fl">
                                <p>科目二只要掌握这个，轻松通过不是梦！</p>
                                <div className="liulan_num">
                                    <span>驾考咨询</span>
                                    <em>53万次浏览</em>
                                    <time>2018-05-14</time>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="corporation">
                    <p>北京木仓科技有限公司版权所有 | 京ICP备11009001号-1</p>
                    <p>商务合作：cooperation@mucang.cn</p>
                </div>
            </div>

        )
    }
}

export default Index;