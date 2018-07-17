/**
 * Created by Administrator on 2018/6/25.
 */
import React from 'react';
import Navschool from './nav_school';
import {Link} from 'react-router-dom'
import axios from 'axios';
class Paihang extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr:[],
            nav_arr:['paihang','juli','koubei','price'],
            page_num:1,
            dianpingarr:[],
            tuijian:[]
            // nav_arr:['paihang','juli','koubei','price']
        }
    }
    typefn(ii){
            switch(ii){
                case "paihang":
                    return 10;
                case "juli":
                    return 8;
                 case "koubei":
                    return 1;
                 case "price":
                    return 4;
            }
        }
    componentWillMount(){
        // console.log(this.props+"111");
        let {match:{params:{id}}} = this.props;
        let {page_num} = this.state;
        console.log(id);
        let type = 0;
        console.log(page_num+"page_num");

        const _this = this;
        let temp_url1 = "https://api2.jiakaobaodian.com/api/h5/jiaxiao/list-jiaxiaos.htm?_appName=jiakaobaodian&_platform=wap&_r=113539616092751084087&cityCode=110000&latitude=39.908546&limit=20&longitude=116.397501&page="+page_num+"&sortType="+this.typefn(id)+"&_=0.6691487114541608";
        temp_url1 = temp_url1.replace(/\//g,"*");
        temp_url1 = temp_url1.replace(/\?/g,"@");
        let yuming = "http://www.helloliangzhu.com/api/";
        console.log(yuming+temp_url1)
        axios.get(yuming+temp_url1)
            .then(function (res) {
                // console.log(res)
                // console.log(res.data.data.itemList);
                let newarr = res.data.data.itemList;
                // console.log(newarr);
                _this.setState({arr:newarr})

            });
        let temp_url2 = "https://api2.jiakaobaodian.com/api/h5/jiaxiao/list-jiaxiao-dianping-by-ids.htm?_appName=jiakaobaodian&_platform=wap&_r=16757899990973002106&jiaxiaoIds=8480%2C15288%2C8562&_=0.11977388884621587";
        temp_url2 = temp_url2.replace(/\//g,"*");
        temp_url2 = temp_url2.replace(/\?/g,"@");
        axios.get(yuming+temp_url2)
            .then(function (res) {
                // console.log(res);
                let newarr = res.data.data.itemList;
                // console.log(newarr);
                _this.setState({dianpingarr:newarr})
            });
        let temp_url3 = "https://api2.jiakaobaodian.com/api/h5/jiaxiao/list-jiaxiaos.htm?_appName=jiakaobaodian&_platform=wap&_r=113539616092751084087&cityCode=110000&latitude=39.908546&limit=20&longitude=116.397501&page=1&sortType=10&_=0.6197280530415143";
        temp_url3 = temp_url3.replace(/\//g,"*");
        temp_url3 = temp_url3.replace(/\?/g,"@");
        axios.get(yuming+temp_url3)
            .then(function (res) {
                // console.log(res);
                let newarr = res.data.data.itemList;
                console.log(newarr);
                _this.setState({tuijian:newarr})
            })
    }

    fn(i){

                switch (i){
                    case 0:
                        return "li_first clear";
                        break;
                    case 1:
                        return "li_second clear";
                         break;
                    case 2:
                        return "li_third clear";
                         break;
                    default:
                        return "clear"
                }
            }
    distance(num){
        let temp_num = num/1000;
        return temp_num.toFixed(1)
    }
    studentcount(num){
        let temp_num = num/10000;
        return temp_num.toFixed(2)
    };

    more=()=>{
        let {page_num,arr} = this.state;
        let {match:{params:{id}}} = this.props;
        page_num++;
        const _this = this;
        let temp_url16 = "https://api2.jiakaobaodian.com/api/h5/jiaxiao/list-jiaxiaos.htm?_appName=jiakaobaodian&_platform=wap&_r=113539616092751084087&cityCode=110000&latitude=39.908546&limit=20&longitude=116.397501&page="+page_num+"&sortType="+this.typefn(id)+"&_=0.6691487114541608";
        temp_url16 = temp_url16.replace(/\//g,"*");
        temp_url16 = temp_url16.replace(/\?/g,"@");
        let yuming = "http://www.helloliangzhu.com/api/";
        axios.get(yuming+temp_url16)
        // axios.get()
            .then(function (res) {
                // console.log(res.data.data.itemList);
                let newarr = res.data.data.itemList;
                // console.log(newarr);
                _this.setState({arr:arr.concat(newarr),page_num})

            })
    }
    render(){
        let {match:{params:{id}}} = this.props;
        console.log(id);
        let {arr,dianpingarr,tuijian} = this.state;
        let {nav_arr} = this.state;
        // let {nav_arr} = this.state;
        // console.log(arr);
        let style = {
            width:"6.7rem"
        };
        let newArr = arr.map((e,i)=>{
          let tem_num = e.score/5*4.2+'rem';
            let iStyle = {
                width:tem_num
            };
            // console.log(this.fn(i))
            return <Link key={i} to={"/jiaxiao_index/"+e.jiaxiaoId+"/banxing"}><li  data-index={this.fn(i)} className={this.fn(i)}>
                                <div className="list_img fl">
                                    <img src={e.logo.original} alt="" />
                                    <div className="vip"></div>
                                </div>
                                <div className="list_info fl">
                                    <div className="jiaxiao_name clear"><i>{e.name}</i>
                                        <div className="jiaxiao_xiaotubiao">
                                            <div className="hao">
                                                <img src={require("../images/hao.png")} alt="" />
                                            </div>
                                            <div className="da">
                                                <img src={require("../images/da.png")} alt="" />
                                            </div>
                                            <div className="kuai">
                                                <img src={require("../images/kuai.png")} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jiaxiao_score clear">
                                        <div className="star fl">
                                            <i style={iStyle}></i>
                                        </div>
                                        <div className="score fl">{e.score}分</div>
                                        <div className="juli fr">{this.distance(e.distance)}km</div>

                                    </div>
                                    <div className="jiaxiao_rmb">
                                        <span>￥<em>{e.price}</em></span>
                                        <span><em>{this.studentcount(e.studentCount)}</em>万学员</span>
                                    </div>
                                </div>
                            </li>
                </Link>
        });
        let dianpingarr1 = dianpingarr.map((e,i)=>{
            // console.log(JSON.parse(e.extraData));
            // console.log(JSON.parse(e.extraData).avgScore);
            return <dd key={i} className="clear">
                    <div className="xueyuanpingjia_img fl">
                        <img src={e.author.avatar} alt="" />
                    </div>
                    <div className="xueyuanpingjia_info fl">
                        <p>用户{e.id}</p>
                        <div className="xueyuanpingjia_stare">
                            <i style={style}></i>
                            <span><em>{JSON.parse(e.extraData).avgScore?JSON.parse(e.extraData).avgScore:"5"}</em>分</span>
                        </div>
                        <div className="xueyuanpingjia_pingjia">
                            {e.content}
                        </div>
                        <div className="xueyuanpingjia_time">
                            {new Date(e.publishTime).toLocaleDateString().replace(/\//g,'-')} <i className="fr">{e.zanCount}</i>
                        </div>
                    </div>

                </dd>
        });
        let tuijianarr = tuijian.map((e,i)=>{
            return <a href={"/jiaxiao_index/"+e.jiaxiaoId+"/banxing"}><span key={i}>{e.name}</span></a>
        })
        return (
            <div>
                <Navschool id={id} nav_arr={nav_arr}/>
            <ul className="jiaxiao_lists">{newArr}</ul>
            <div className="chakan_more" onClick={this.more}>
                查看更多
            </div>
            <dl className="xueyuanpingjia">
                <dt>
                    学员评价
                </dt>
                {dianpingarr1}


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
                        {tuijianarr}
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
export default Paihang