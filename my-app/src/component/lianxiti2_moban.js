/**
 * Created by Administrator on 2018/7/5.
 */
import React from 'react';

class Lianxiti2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ti_tip:16, //每个题的答案的基数
            option:['A','B','C','D'], //每一个选项A.B,C,D
        }
    }
    componentDidMount(){

    }
    render(){
        let {ti_tip,option} = this.state;
        let {cont} = this.props;
        if(!cont){
            return (<div></div>)
        }
        return(
            <div className="finall_cont fl">
                <div className="ti_cont">
                    <dl>
                    <dt data-ti_id = {cont.questionId}>
                        <span>{cont.optionType == "1"?"单":"判"}</span>
                        <em>{cont.question}</em>
                    </dt>
                    <dd data-answer={ti_tip*(1)} data-sureanswer={cont.answer} onClick={this.panduan}>
                        <span className="a">{option[0]}</span>
                        <em>{cont.optionA}</em>
                    </dd>
                    <dd data-answer={ti_tip*2} data-sureanswer={cont.answer} onClick={this.panduan}>
                        <span className="a">{option[1]}</span>
                        <em>{cont.optionB}</em>
                    </dd>
                    <dd data-answer={ti_tip*(4)} data-sureanswer={cont.answer} onClick={this.panduan}>
                        <span className="a">{option[2]}</span>
                        <em>{cont.optionC}</em>
                    </dd>
                    <dd data-answer={ti_tip*(8)} data-sureanswer={cont.answer} onClick={this.panduan}>
                        <span className="a">{option[3]}</span>
                        <em>{cont.optionD}</em>
                    </dd>
                    </dl>
                    </div>


                    <div className="ti_xiangqing">
                    <p>试题详解：</p>
                    <div className="ti_introduce">
                        <p dangerouslySetInnerHTML={{ __html: cont.explain }}  />
                    </div>
            </div>


                    <div className="ti_cheyoufenxi">
                    <p>车友分析：</p>

                    <div className="fenxi_cont clear">
                    <div className="user_logo fl">
                        <img src="" alt="" />
                    </div>
                    <div className="user_info fl">
                        <div className="user_name clear">
                            <span className="fl">hello</span><em className="fr">2018-0-0</em>
                        </div>
                        <div className="user_comment">
                            哈哈，你是傻子吗
                        </div>
                    </div>
                    </div>
                    <div className="fenxi_more" onClick={this.more}>加载更多</div>
                    </div>
            </div>
        )
    }
}
export default Lianxiti2