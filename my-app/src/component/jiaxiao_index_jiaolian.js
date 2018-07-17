/**
 * Created by Administrator on 2018/6/29.
 */
/**
 * Created by Administrator on 2018/6/29.
 */
/**
 * Created by Administrator on 2018/6/29.
 */
import React from 'react';

class Jiaolian extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <div className="cont">




    <div className="jiaxiao_xijie">

        <ul className="jiaolian_list">
            <li>
                <div className="touxiang_box fl">
                    <div className="touxiang">
                        <img src={require("../images/jiaolian_touxiang.png")} alt="" />
                    </div>
                    <div className="vip"></div>
                </div>
                <div className="jiaolian_cont fl">
                    <div className="jiaolian_name">
                        <span>吴斌</span><em>9年教龄</em>
                    </div>
                    <div className="jiaolian_score">
                        <div className="stare fl">
                            <div className="stare_new"></div>
                        </div>
                        <div className="score fl"><span>3.0</span>分</div>
                    </div>
                    <div className="xueyuan">
                        学员 <em>3</em>
                    </div>
                </div>

            </li>
            <li>
                <div className="touxiang_box fl">
                    <div className="touxiang">
                        <img src={require("../images/jiaolian_touxiang.png")} alt="" />
                    </div>
                    <div className="vip"></div>
                </div>
                <div className="jiaolian_cont fl">
                    <div className="jiaolian_name">
                        <span>吴斌</span><em>9年教龄</em>
                    </div>
                    <div className="jiaolian_score">
                        <div className="stare fl">
                            <div className="stare_new"></div>
                        </div>
                        <div className="score fl"><span>3.0</span>分</div>
                    </div>
                    <div className="xueyuan">
                        学员 <em>3</em>
                    </div>
                </div>

            </li>
            <li>
                <div className="touxiang_box fl">
                    <div className="touxiang">
                        <img src={require("../images/jiaolian_touxiang.png")} alt="" />
                    </div>
                    <div className="vip"></div>
                </div>
                <div className="jiaolian_cont fl">
                    <div className="jiaolian_name">
                        <span>吴斌</span><em>9年教龄</em>
                    </div>
                    <div className="jiaolian_score">
                        <div className="stare fl">
                            <div className="stare_new"></div>
                        </div>
                        <div className="score fl"><span>3.0</span>分</div>
                    </div>
                    <div className="xueyuan">
                        学员 <em>3</em>
                    </div>
                </div>

            </li>
        </ul>
    </div>
        </div>
        )
    }
}
export default Jiaolian;