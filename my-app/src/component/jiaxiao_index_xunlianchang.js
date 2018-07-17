/**
 * Created by Administrator on 2018/6/29.
 */
/**
 * Created by Administrator on 2018/6/29.
 */
import React from 'react';

class Xunlianchang extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div className="cont">




    <div className="jiaxiao_xijie">

        <div className="xunlianchang clear">
            <div className="xunlian_img fl">
                <img src={require("../images/xunlian_img.jpg")} alt="" />
            </div>
            <div className="xunlian_cont fl">
                <p><span>大兴训练场</span> <em>最近</em></p>
                <div className="xunlian_dizhi">
                    大兴区黄村金星西路19号
                </div>
                <div className="xunlian_neirong">
                    距离<span>16.2</span>km <em>科二、科三</em>
                </div>
            </div>
        </div>
    </div>
        </div>
        )
    }
}
export default Xunlianchang;