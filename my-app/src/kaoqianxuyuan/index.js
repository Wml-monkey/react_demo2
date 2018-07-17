/**
 * Created by Administrator on 2018/6/12.
 */
import React from "react";
import Title1 from '../component/title1';
import axios from 'axios';
import '../css/jiakaoquan.css';
import '../css/kaoqianxuyuan.css';

class KaoQianXuYuan extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clubarr:[],//有关于club的信息
            itemlist:[],//有关于评论的信息
            page_num:1,//当前是第几页
            url:"",//url信息
            jinghua:1//判断是最新话题（1），还是精华帖
        }
    }
    componentDidMount(){
        let {match:{params:{id}}} = this.props;

        let {match:{url}} = this.props;

        let newurl = url.split("p")[0]+"p";
        let jinghua = url.split("_")[1]; //判断是最新话题还是精华帖
        let mokuai = url.split("_")[0];//判断这是哪一个模块
        console.log(jinghua);
        this.setState({jinghua});
        this.setState({url:newurl});

        let temp_id = id.split("_")[0];
        let page_num = id.split("p")[1];
        this.setState({page_num});
        let _this = this;
        if(id == temp_id+"_"+jinghua+"_p"+page_num){
            let temp_url = 'http://cheyouquan.kakamobi.com/api/web/club/detail.htm?_appName=jiakaobaodian&_platform=web&_r=110554051023246076068&_saturnVersion=h5&id='+temp_id+'&resign=abcd&_=0.5545022070804786';
            temp_url = temp_url.replace(/\//g,"*");
            temp_url = temp_url.replace(/\?/g,"@");
            let yuming = "http://www.helloliangzhu.com/api/";
            axios.get(yuming+temp_url)
                .then(function(res){
                    console.log(res.data.data);
                    _this.setState({clubarr:res.data.data})
                });
            if(jinghua == 1){
                let temp_url2 = 'http://cheyouquan.kakamobi.com/api/web/topic/list-by-publish-time.htm?_appName=jiakaobaodian&_platform=web&_r=112523320347023548071&_saturnVersion=h5&clubId='+temp_id+'&limit=20&page='+page_num+'&_=0.7421692021817297';
                temp_url2 = temp_url2.replace(/\//g,"*");
                temp_url2 = temp_url2.replace(/\?/g,"@");
                axios.get(yuming+temp_url2)
                    .then(function(res){
                        console.log(res.data.data.itemList);
                        _this.setState({itemlist:res.data.data.itemList})
                    })
            }else if(jinghua === "2"){
                let temp_url3 = 'http://cheyouquan.kakamobi.com/api/web/topic/list-by-jinghua.htm?_appName=jiakaobaodian&_platform=web&_r=112427473059586154090&_saturnVersion=h5&clubId='+temp_id+'&limit=20&page='+page_num+'&_=0.7263585633719101';
                temp_url3 = temp_url3.replace(/\//g,"*");
                temp_url3 = temp_url3.replace(/\?/g,"@");
                axios.get(yuming+temp_url3)
                    .then(function(res){
                        console.log(res.data.data.itemList);
                        _this.setState({itemlist:res.data.data.itemList})
                    })
            }

        }
    };

    ding = (arr1)=>{
        console.log(arr1);
        if(!arr1){
            return
        }
        let newarr1 = arr1.map((e,i)=>{
            return (
                <li>
                    <a href="" id={e.topicId}>
                        <em>顶</em><span>{e.title}</span>
                    </a>
                </li>
            )
        });
        return newarr1
    };
    moreimg = (arr)=>{
        let newarr = arr.map((e,i)=>{
            return <img src={e.list.url} alt=""/>
        });
        return newarr;
    }
    render(){
    let {clubarr,itemlist,page_num,url,jinghua} = this.state;
    let newitemlist = itemlist.map((e,i)=>{
        return (
             <li key={i}>
                    <div className="luntan_title clear">
                        <div className="luntan_title_img fl">
                            <img src={e.author.avatar} alt=""/>
                        </div>
                        <div className="luntan_title_cont fl">
                            <span>{e.author.name}</span>
                            <span className="from">来自： <em>{e.author.cityName}</em></span>
                        </div>
                    </div>
                    <p>{e.title}</p>

                    <div className="luntan_img">
                        {e.imageList?this.moreimg(e.imageList):""}
                    </div>
                    <div className="luntan_time">
                        <span>{new Date(e.createTime).toLocaleDateString().replace(/\//g, "-")}</span> <a href="">{e.author.commentCount}</a>
                    </div>
                </li>
        )
    })

    return (

        <div className="cont">
            <Title1 tempname={"考前许愿"} tempurl={this.props}/>

            <div className="kaoqianxuyuan clear">
                <div className="kaoqianshequ_logo fl">
                    <img src={clubarr.iconUrl} alt=""/>
                </div>
                <div className="kaoqianshequ_cont fl">
                    <p>{clubarr.name}社区</p>
                    <div className="chengyuan_tiezi">
                        <span>成员<em>{(clubarr.memberCount / 10000).toFixed(2)}</em>万</span><span>帖子<em>{(clubarr.topicCount / 10000).toFixed(2)}</em>万</span>
                    </div>
                    <div className="kaoqian_jieshao">
                        {clubarr.desc}
                    </div>
                </div>
            </div>

            <div className="huati_title">
                <a href={url.split("_")[0]+"_1_p"+page_num} className={jinghua ==1?"active":""}>最新话题</a>
                <a href={url.split("_")[0]+"_2_p"+page_num} className={jinghua ==2?"active":""}>精华贴</a>
            </div>
            <ul className="zuixin_huati">
                {this.ding(clubarr.noticeList)}
            </ul>
            <ul className="huati_luntan">
                {newitemlist}
            </ul>
            <div className="huati_page_num">
    <span>
        <a href={page_num-1<= 0?url+"1":url+(page_num-1)} className="shangyiye"></a>
        <span><em>{page_num}</em>/<i>500</i></span>
        <a href={(parseInt(page_num)+1)>=500?url+500:url+(parseInt(page_num)+1)} className="xiayiye"></a>
    </span>
            </div>

            <dl className="qitalanmu">
                <dt>其他栏目</dt>
                <dd className="clear">
                    <a href="">考前许愿</a>
                    <a href="">科目一</a>
                    <a href="">学车趣事</a>
                    <a href="">考前许愿</a>
                    <a href="">科目一</a>
                    <a href="">学车趣事</a>
                    <a href="">考前许愿</a>
                    <a href="">科目一</a>
                    <a href="">学车趣事</a>
                    <a href="">考前许愿</a>
                </dd>
            </dl>


            <div className="lujing">
                <a href="">首页</a>
                <a href="" className="jiantou">北京科目一</a>
                <a href="" className="jiantou">考前许愿</a>
            </div>
            <div className="corporation">
                <p>北京木仓科技有限公司版权所有 | 京ICP备11009001号-1</p>
                <p>商务合作：cooperation@mucang.cn</p>
            </div>
        </div>

    )
    }
}

export default KaoQianXuYuan;