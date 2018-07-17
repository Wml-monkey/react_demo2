import React from "react";
import '../css/school.css';
import '../css/jiaxiao_index.css';
import Title1 from '../component/title1';
import axios from "axios";
import Banxing from '../component/jiaxiao_index_banxing';
import Jianjie from '../component/jiaxiao_index_jianjie';
import Xunlianchang from '../component/jiaxiao_index_xunlianchang';
import Jiaolian from '../component/jiaxiao_index_jiaolian';
import Taolun from '../component/jiaxiao_index_taolun';

class JiaxiaoIndex extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            score: '',
            rank: '',
            xueyuan: '',
            logo: '',
            img_count: '',
            courses: [],
            dianping:[],
            courseCount:'',
            nav_arr:['banxing','jianjie','xunlianchang','jiaolian','taolun'],
            nav_arr_font:['班型','简介','训练场','教练','讨论']

        }
    }
    fenlei = (nav)=>{
        switch (nav){
            case "banxing":
                return <Banxing temp_url={this.props}/>;
            case "jianjie":
                return <Jianjie temp_url={this.props}/>;
            case "xunlianchang":
                return <Xunlianchang temp_url={this.props}/>;
            case "jiaolian":
                return <Jiaolian temp_url={this.props}/>;
            case "taolun":
                return <Taolun temp_url={this.props}/>;
        }
    };
    componentDidMount(){
        const _this = this;
        let {match:{params:{id}}} = this.props;
        console.log("component"+id);
        axios.get("https://jiaxiao.kakamobi.cn/api/web/v3/jiaxiao/view-rank.htm?_appName=jiakaobaodian&_platform=wap&_r=18369200161814120068&jiaxiaoId="+id+"&limit=10&page=1&_=0.9182057594001916")
            .then(function (res) {
                let newname = res.data.data.name;
                let newscore = res.data.data.score;
                let newrank = res.data.data.cityRank;
                let xueyuan = (res.data.data.totalStudentCount/10000).toFixed(1);
                let logo = res.data.data.logo;
                let img_count = res.data.data.imageCount;
                let courses = res.data.data.courses;
                let courseCount = res.data.data.courseCount;
                _this.setState({name:newname,score:newscore,rank:newrank,xueyuan:xueyuan,logo,img_count,courses,courseCount})
            });
    }
    render(){
        let {match:{params:{id}}} = this.props;
        let {name,score,rank,xueyuan,logo,img_count,courses,courseCount,dianping} = this.state;
        let {match:{params:{nav}}} = this.props;
        // console.log(nav);
        console.log(id)
        let {nav_arr,nav_arr_font} = this.state;
        let newnavarr = nav_arr.map((e,i)=>{
            console.log(e)
            let className = e==nav?"active":'';
            if(i == nav_arr.length-1){
                className += "  last_taolun"
            }
            return <a  className={className} key={i} href={"/jiaxiao_index/"+id+"/"+e}>{nav_arr_font[i]}</a>;
        });
        return(
            <div className="cont">
    <Title1 tempname={name} tempurl={this.props}/>
    <div className="img">
        <img src={logo} alt="" />
        <p><span>1</span>/<em>{img_count}</em></p>
    </div>
    <div className="jiaxiao_cont">
        <div className="jiaxiao_index_title">
            <h2>{name}<span></span></h2>
            <p><span><em>评分</em><i>{score}</i></span><span><em>排名</em><i>{rank}</i></span><span><em>学员</em><i>{xueyuan}万</i></span></p>
        </div>
        <div className="jiaxiao_index_weizhi clear">
            <span className="jiaxiao_didian_title">{name}</span>
            <span className="jiaxiao_didian_juli"><em>15.3km</em><i></i></span>
        </div>
    </div>
     <div className="jiaxiao_xijie">
         <nav>
             {newnavarr}
        </nav>
     </div>
    {this.fenlei(nav)}
    <div className="xiangguansousuo school_sousuo">
        <dl>
            <dt>推荐驾校</dt>
            <dd className="clear">
                <span>广州驾校</span>
                <span>深圳驾校</span>
                <span>重庆驾校</span>
                <span>南京驾校</span>
            </dd>
        </dl>
    </div>
    <div className="lujing">
        <a href="">首页</a>
        <a href="" className="jiantou">北京驾校</a>
        <a href="" className="jiantou">东方时尚驾校</a>
    </div>
    <div className="corporation">
        <p>北京木仓科技有限公司版权所有 | 京ICP备11009001号-1</p>
        <p>商务合作：cooperation@mucang.cn</p>
    </div>
    <div className="mianfeizixun">免费咨询</div>

</div>
        )
    }
}
        export default JiaxiaoIndex