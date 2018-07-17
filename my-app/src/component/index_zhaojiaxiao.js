/**
 * Created by Administrator on 2018/6/20.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
class Zhaojiaxiao extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            BaoMingCount:0
        }
    }
    componentDidMount(){
        const _this = this;
        let temp_url = 'https://jiaxiao.kakamobi.cn/api/web/v3/jiaxiao/baoming-count.htm?_appName=jiakaobaodian&_platform=wap&_r=114598740896165932104&_=0.13638913223226856';
        temp_url = temp_url.replace(/\//g,"*");
        temp_url = temp_url.replace(/\?/g,"@");
        let yuming = "http://www.helloliangzhu.com/api/";
        axios.get(yuming+temp_url)
            .then(function (res) {
                let count = res.data.data.baomingCount;
                console.log(count);
                _this.setState({BaoMingCount:count})
            })
    }
    render(){
        let {BaoMingCount} = this.state;
       return(
             <div className="zhaojiaxiao">
                    <div className="zhaojiaxiao_left fl">
                        <p>已有<span>{BaoMingCount}</span>名学员</p>
                        <p>在驾考宝典上找到合适的驾校</p>
                    </div>
                    <div className="zhaojiaxiao_img fr">
                        <a href=""></a>
                    </div>
                </div>
       )
    }
}

export default Zhaojiaxiao;