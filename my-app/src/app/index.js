import React from "react";
import {Route,Link,Redirect,NavLink,Switch} from "react-router-dom";
import Index from "../Index/index";
import School from "../school/index";
import Jiakaoquan from "../jiakaoquan/index";
import Jiaotongbiaozhi from "../jiaotongbiaozhi/index";
import JiaxiaoIndex from "../jiaxiao_index/index";
import JiaxiaoJianjie from "../jiaxiao_jianjie/index";
import JiaxiaoJiaolian from "../jiaxiao_jiaolian/index";
import JiaxiaoTaolun from "../jiaxiao_taolun/index";
import JiaxiaoXunlianchang from "../jiaxiao_xunlianchang/index";
import XiaZai from "../xiazai/index";
import MonikaoshiIndex from "../monikaoshiindex/index";
import ShunxuLianxiTi from '../shunxulianxi/index';
import ZhangJieLianXiIndex from '../zhangjielianxi/index';
import ZhangJieLianXiIndex4 from '../zhangjielianxi/index4';
import ZhuanXinagLianXiIndex from '../zhuanxianglianxi/index';
import ZhuanXinagLianXiIndex4 from '../zhuanxianglianxi/index4';
import QuanZhenMoNi from '../quanzhenmoni/index';
import TiKu from '../tiku/index';
import Tikulianxiti from '../component/Tiku_lianxiti';
import JiaXiaoAds from '../jiaxiao_ads/index';
import KaoQianXuYuan from '../kaoqianxuyuan/index';
import ZiXunXiangQing from '../zixunxiangqing/index';
import School_head from '../component/school_header';
import Paihang from '../component/school_paihang';
import Shitimoban from '../component/shitimoban';
import Shitimoban4 from '../component/shitimoban4';
import Shitimobankaoshi from '../component/shitimobankaoshi';
import Remenhuati from '../component/remenhuati';



class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Route exact path="/" component={Index}/>
                <Route path="/school" component={School_head}/>
                <Route path="/school/:id" component={Paihang}/>
                <Route path='/xiazai' component={XiaZai}/>
                <Route path="/jiakaoquan/:id" component={Jiakaoquan}/>
                <Route path="/jiaotongbiaozhidaquan" component={Jiaotongbiaozhi}/>
                <Route exact path="/jiaxiao_index/:id/:nav" component={JiaxiaoIndex}/>
                <Route path="/jiaxiao_jianjie" component={JiaxiaoJianjie}/>
                <Route path="/jiaxiao_jiaolian" component={JiaxiaoJiaolian}/>
                <Route path="/jiaxiao_taolun" component={JiaxiaoTaolun}/>
                <Route path="/jiaxiao_xunlianchang" component={JiaxiaoXunlianchang}/>
                <Route path="/monikaoshi_index" component={MonikaoshiIndex}/>
                <Route path='/monikaoshi/shunxulianxiti' component={ShunxuLianxiTi}/>
                <Route path='/monikaoshi/4_shunxulianxiti/:id' component={Shitimoban}/>
                <Route exact path='/monikaoshi/zhangjielianxi_index' component={ZhangJieLianXiIndex}/>
                <Route path='/monikaoshi/zhangjielianxi_index/:id' component={Shitimoban}/>
                <Route exact path='/monikaoshi/4_zhangjielianxi_index/:id' component={Shitimoban4}/>
                <Route exact path='/monikaoshi/4_zhangjielianxi_index' component={ZhangJieLianXiIndex4}/>
                <Route exact path='/monikaoshi/zhuanxianglianxi_index' component={ZhuanXinagLianXiIndex}/>
                <Route path='/monikaoshi/zhuanxianglianxi_index/:id' component={Shitimoban}/>
                <Route exact path='/monikaoshi/4_zhuanxianglianxi_index' component={ZhuanXinagLianXiIndex4}/>
                <Route path='/monikaoshi/4_zhuanxianglianxi_index/:id' component={Shitimoban4}/>
                <Route path='/monikaoshi/quanzhenmoni/:id' component={Shitimobankaoshi}/>
                <Route exact path='/tiku' component={TiKu}/>
                <Route path='/tiku/:id' component={Tikulianxiti}/>
                <Route path='/jiaxiaoads' component={JiaXiaoAds}/>
                <Route path='/kaoqianxuyuan' component={KaoQianXuYuan}/>
                <Route path='/zixunxiangqing' component={ZiXunXiangQing}/>

                <Route path='/club/:id' component={KaoQianXuYuan}/>
            </div>
        )
    }

}

export default App;

