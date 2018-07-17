/**
 * Created by Administrator on 2018/7/2.
 */
import React from 'react';
import axios from 'axios';
class Cheyoufenxi extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            jinghua : this.props.jinghua,
            click_num :1
        }
    }
    componentDidMount(){

    }
    more=()=>{
        // let {click_num,jinghua} = this.state;
        // let {cur_ti,all_id} = this.props;
        // let _this = this;
        // if(click_num == 1){
        //     axios.get('https://dianping-v2.kakamobi.com/api/web/shiti/jinghua-list.htm?_appName=jiakaobaodian&_platform=wap&_r=11528747749855586107&placeToken=5bee2e55901b4de5b15b735eba3056fa&topic='+all_id[cur_ti]+'&_=0.7167125294851742')
        //     .then(function (res) {
        //         let temp_jinghua = res.data.data.jinghuaList;
        //         jinghua = jinghua.concat(temp_jinghua);
        //         _this.setState({jinghua})
        //     });
        // }
        // this.setState({click_num:click_num+1})
    }
    render(){
        let {jinghua} = this.state ;
        let temp_jinghua = jinghua.map((e,i)=>{
            return <div key={i} className="fenxi_cont clear">
                    <div className="user_logo fl">
                        <img src={e.author.avatar} alt="" />
                    </div>
                    <div className="user_info fl">
                        <div className="user_name clear">
                            <span className="fl">{e.author.nickname}</span><em className="fr">{new Date(e.createTime).toLocaleDateString().replace(/\//g, "-")}</em>
                        </div>
                        <div className="user_comment">
                            {e.content}
                        </div>
                    </div>
                    </div>
        })
        return(
            <div className="ti_cheyoufenxi">
                    <p>车友分析：</p>
                    {temp_jinghua}
                    <div className="fenxi_more" onClick={this.more}>加载更多</div>
                    </div>
        )
    }
};
export default Cheyoufenxi;