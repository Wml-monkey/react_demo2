/**
 * Created by Administrator on 2018/6/29.
 */
import React from 'react';
import axios from 'axios';
import '../css/school.css';
import '../css/jiaxiao_index.css';

class Banxing extends React.Component{
    constructor(props){
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
        }
    }
    more = ()=>{
        let _this = this;
        let {temp_url:{match:{params:{id}}}} = this.props;
        //班型more：https://api2.jiakaobaodian.com/api/h5/jiaxiao/list-jiaxiao-course.htm?_appName=jiakaobaodian&_platform=wap&_r=12065263530306770071&jiaxiaoId=8562&_=0.0205680188104429
        axios.get("https://api2.jiakaobaodian.com/api/h5/jiaxiao/list-jiaxiao-course.htm?_appName=jiakaobaodian&_platform=wap&_r=12065263530306770071&jiaxiaoId="+id+"&_=0.0205680188104429")
            .then(function (res) {
                // console.log(res.data.data.itemList);
                let newarr = res.data.data.itemList;
                // console.log(newarr);
                let {courses} = _this.state;
                _this.setState({courses:newarr})
                var temp_more = document.getElementById("more");
                temp_more.style.display = "none"

            })
    }
    componentDidMount(){
        const _this = this;
        let {temp_url:{match:{params:{id}}}} = this.props;
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
            })
        axios.get("https://api2.jiakaobaodian.com/api/h5/jiaxiao/list-jiaxiao-dianping-by-ids.htm?_appName=jiakaobaodian&_platform=wap&_r=16757899990973002106&jiaxiaoIds="+id+"%2C15288%2C8562&_=0.11977388884621587")
            .then(function(res){
                let newdianping = res.data.data.itemList;
                _this.setState({dianping:newdianping});
            })
    }
    render(){
        let {temp_url:{match:{params:{id}}}} = this.props;
        console.log(id)
        let {name,score,rank,xueyuan,logo,img_count,courses,courseCount,dianping} = this.state;
        console.log(name);
        console.log(id);
        console.log(courses)
        let newcourses = courses.map((e,i)=>{
            return <li key={i} className="clear">
                <div className="ban_title fl">
                    <p id="courses"><span>{e.name}</span> <em>￥</em><i>{e.price}</i></p>
                    <div className="jieshao">
                        {e.desc}
                    </div>
                </div>
                <div className="xunjia fr">
                    <a href="">在线询价</a>
                </div>
            </li>
        });
        let newdianping = dianping.map((e,i)=>{
            let p_style = {
                "padding":0
            }
            return <dd key={i} className="clear">
            <div className="img fl">
                <img src={e.author.avatar} alt="" />
            </div>
            <div className="xueyuan_cont fl">
                <div className="title___2">{e.author.nickname}</div>
                <div className="pingfen clear">
                    <div className="box"></div>
                    <div className="fenshu"><span>{JSON.parse(e.extraData).avgScore}</span><i>分</i></div>
                </div>
                <p style={p_style}>{e.content}</p>
                <div className="xueyuan_time clear">
                    <div className="time fl">
                        {new Date(e.createTime).toLocaleDateString().replace(/\//g, "-")}
                    </div>
                    <div className="zan fr">
                        {e.zanCount}
                    </div>
                </div>

            </div>
        </dd>
        });
        let {temp_url:{match:{params:{nav}}}} = this.props;
        console.log(nav);
        return(

            <div className="jiaxiao_xijie">

        <ul className="ban_list">
            {newcourses}
        </ul>
        <div className="xiangguansousuo school_sousuo">
             <div className="jiaxiao_more">
            <span id="more" onClick={this.more}>查看全部班型（共<em>{courseCount}</em>个） ∨</span>
        </div>
    </div>
                <dl className="xueyuanpingjia__1">
        <dt><span>学员评价(<em>1665</em>)</span> <a href=""></a></dt>
        {newdianping}
    </dl>
    </div>
        )
    }
}
export default Banxing;