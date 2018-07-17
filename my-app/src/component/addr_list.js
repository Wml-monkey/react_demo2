/**
 * Created by Administrator on 2018/6/25.
 */

import React from 'react';
import '../css/addr_list.css';

class Addrlist extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    click = ()=>{
        var addr_cont = document.querySelector(".addr_cont");
        addr_cont.style.left = -window.innerWidth + 'px';
        addr_cont.style.transition = '.3s'
    };

    addr_click = (ev)=>{
        ev.stopPropagation();
    };
    render(){
        return(
            <div className="addr_cont clear" onClick={this.click}>
    <div className="addr" onClick={this.addr_click} >
        <div className="shengfen">
            <dl>
                <dt>A</dt>
                <dd className="last">安徽</dd>
            </dl>
            <dl>
                <dt>B</dt>
                <dd className="active last">北京</dd>
            </dl>
            <dl>
                <dt>C</dt>
                <dd className="last">重庆</dd>
            </dl>
            <dl>
                <dt>F</dt>
                <dd className="last">福建</dd>
            </dl>
            <dl>
                <dt>G</dt>
                <dd>广东</dd>
                <dd>广西</dd>
                <dd>贵州</dd>
                <dd className="last">甘肃</dd>
            </dl>
            <dl>
                <dt>H</dt>
                <dd>河北</dd>
                <dd>黑龙江</dd>
                <dd>河南</dd>
                <dd>湖北</dd>
                <dd>湖南</dd>
                <dd className="last">海南</dd>
            </dl>
            <dl>
                <dt>L</dt>
                <dd className="last">辽宁</dd>
            </dl>
            <dl>
                <dt>N</dt>
                <dd>内蒙古</dd>
                <dd className="last">宁夏</dd>
            </dl>
            <dl>
                <dt>Q</dt>
                <dd className="last">青海</dd>
            </dl>
            <dl>
                <dt>S</dt>
                <dd>山西</dd>
                <dd>上海</dd>
                <dd>山东</dd>
                <dd>四川</dd>
                <dd className="last">陕西</dd>
            </dl>
            <dl>
                <dt>T</dt>
                <dd className="last">天津</dd>
            </dl>
            <dl>
                <dt>X</dt>
                <dd>西藏</dd>
                <dd className="last">新疆</dd>
            </dl>
            <dl>
                <dt>Y</dt>
                <dd className="last">云南</dd>
            </dl>
            <dl>
                <dt>Z</dt>
                <dd className="last">浙江</dd>
            </dl>
        </div>
        <div className="shiqu">
            <ul>
                <li>福州</li>
                <li>厦门</li>
                <li>三明</li>
                <li className="last">泉州</li>
            </ul>
        </div>
    </div>
</div>

        )
    }
}

export default Addrlist;