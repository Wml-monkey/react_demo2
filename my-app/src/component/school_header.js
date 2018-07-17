/**
 * Created by Administrator on 2018/6/25.
 */
import React from 'react';
import Title1 from './title1';
import Navschool from './nav_school';
class School_head extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        let {match:{params:{id}}} = this.props;


        return(
            <div>
            <Title1 tempurl={this.props}/>
            <div>
                <div className="ads">
                    <img src={require("../images/ads_img.jpeg")} alt="" />
                </div>
                <div className="search">
                    <input type="text" placeholder="查找驾校" /><span>搜索</span>
                </div>
            </div>
                </div>
        )
    }
}
export default School_head