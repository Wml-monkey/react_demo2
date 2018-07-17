/**
 * Created by Administrator on 2018/7/11.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Remenhuati extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            huati_arr:[],//话题里面的arr
            all_cont:{},//所有的数据及总数
            page_num:1,//当前请求的页码
            url:'',//进来的时候的url
        }
    }
    componentDidMount(){
        console.log(this.props.url);
        this.setState({huati_arr:[]})
        let {match:{params:{id}}} = this.props.url;
        let {match:{url}} = this.props.url;
        console.log(id)
        let newurl = url.split("p")[0]+"p";
        this.setState({url:newurl});
        let page_num = id.split("p")[1];
        console.log(page_num);
        this.setState({page_num});
        let _this = this;
        let temp_url = 'http://cheyouquan.kakamobi.com/api/web/jiakao/list-by-jinghua.htm?_appName=jiakaobaodian&_platform=web&_r=13897043283100829083&_saturnVersion=h5&page='+page_num+'&_=0.44027349934255144';
        temp_url = temp_url.replace(/\//g,"*");
        temp_url = temp_url.replace(/\?/g,"@");
        let yuming = "http://www.helloliangzhu.com/api/";
        console.log(yuming+temp_url)
        axios.get(yuming+temp_url)
            .then(function (res) {
                let all_cont = res.data.data;
                _this.setState({all_cont});
                let huati_arr = res.data.data.itemList;
                console.log(huati_arr);
                _this.setState({huati_arr});
            })
    }
     img = (cont)=>{
        let newimg = cont.map((e,i)=>{
            return <img key={i} src={e.list.url} alt="" />
        });
        return newimg
    };
    render(){
        let {huati_arr,all_cont,url,page_num} = this.state;
        let newarr = huati_arr.map((e,i)=>{
            return <dd key={i}>
            <div className="huati_title clear">
                <div className="img fl">
                    <img src={e.author.avatar} alt="" />
                </div>
                <div className="name fl">
                    <span className="mingzi">{e.author.name}</span>
                    <span className="didian">来自 :<em>{e.author.cityName}</em></span>
                </div>
            </div>
            <p className="huati_sub">
                <span><em className="jing">精</em><em className="sub_title">{e.summary}</em></span>

            </p>
            <div className="huati_img">
                {this.img(e.imageList)}
            </div>
            <div className="huati_time">
                <span>{new Date(e.createTime).toLocaleDateString().replace(/\//g, "-")}</span> <em>{e.commentCount}</em>
            </div>
        </dd>
        });
        return (<div>
                    <dl className="remenhuati_1">
                        <dt>热门话题</dt>
                        {newarr}
                    </dl>
                    <div className="page">
                        <Link to={page_num-1<= 0?url+"1":url+(page_num-1)}><a className="zuojiantou"></a></Link><span><em>{page_num}</em>/<em>{all_cont.pageCount}</em></span><Link to={parseInt(page_num)+1>=all_cont.pageCount?url+all_cont.pageCount:url+(parseInt(page_num)+1) }><a className="youjiantou" ></a></Link>
                    </div>
        </div>)
    }
}
export default Remenhuati;