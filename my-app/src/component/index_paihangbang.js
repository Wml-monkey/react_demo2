/**
 * Created by Administrator on 2018/6/20.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
class Jiaxiao extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            arr:[],
        }
    }
    componentWillMount(){
        const _this = this;
        axios.get('https://jiaxiao.kakamobi.cn/api/web/v3/jiaxiao/list-rank.htm?_appName=jiakaobaodian&_platform=wap&_r=114081614752795610084&cityCode=110000&_=0.65584806268613')
            .then(function (res) {
                let newarr = res.data.data.itemList;
                _this.setState({arr:newarr})
            })
    }
    fn(i){
        switch (i){
            case 0:
                return "first_paizi";
            case 1:
                return "second_paizi";
            case 2:
                return "third_paizi";
        }
    }
    render(){
        let {arr} = this.state;
        let newarr = arr.slice(0,3);
        console.log(newarr);
        let newarr1 = newarr.map((e,i)=>{
            return <Link key={i} to={"/jiaxiao_index/"+e.jiaxiaoId+"/banxing"}>
                    <li className={this.fn(i)}>
                        <div className="jiaxiao_img fl">
                            <img src={e.logo} alt="" />
                        </div>
                        <div className="jiaxiao_info fl">
                            <p className="jiaxiao_title">{e.name}</p>
                            <p className="jiaxiao_xueyuan">周新增学员：<span>{e.weeklyStudentCount}</span>人</p>
                            <p className="score">评分：<span>{e.scoreDetail.avgScore}</span></p>
                        </div>
                    </li>
                        </Link>
        })
       return(
             <ul className="jiaxiao">
                 {newarr1}
                </ul>
       )
    }
}

export default Jiaxiao;