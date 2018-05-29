import React from 'react';
import {Switch, Route} from 'react-router-dom';
//患友
import PatientIndex from './patient/PatientIndex'; //患友首页
import PatientSelect from './patient/PatientSelect'; //选择患友群
import ImDetailGroupinfo from './patient/ImDetailGroupinfo'; // 患友群信息
import ImGroupNickEdit from './patient/ImGroupNickEdit'; // 修改群昵称
import ImDetail from './patient/ImDetail'; // 群聊页面
import FindChatLogs from './patient/FindChatLogs'; // 查找聊天内容

//医生录
import DoctorIndex from './doctor/DoctorIndex';
import MyDoctor from './doctor/MyDoctor'; //我的医生
import DoctorMessageHistory from './doctor/DoctorMessageHistory'; // 医生留言
import OrderList from './doctor/OrderList'; //咨询订单
import DoctorCallFor from './doctor/DoctorCallFor'; //去约医生
import SearchDoctors from './doctor/SearchDoctors'; //搜索全部医生
//医生录=>我的医生
import DoctorDetail from './doctor/DoctorDetail'; // 医生资料详情
import DoctorGoodAt from './doctor/DoctorGoodAt'; // 医生擅长
import DoctorComplaintContent from './doctor/DoctorComplaintContent'; // 投诉医生
import DoctorPatientEvaluation from './doctor/DoctorPatientEvaluation'; // 患者评价
import Doctorintro from './doctor/Doctorintro'; //医生简介
import MedicalRecordSet from './doctor/MedicalRecordSet'; //开放病历本设置
import LetterList from './doctor/LetterList'; // 去留言
import MedicalList from './doctor/MedicalList'; //家庭病历本
import DoctorHeadlines from './doctor/DoctorHeadlines'; //医生头条
import DoctorHeadlinesDetail from './doctor/DoctorHeadlinesDetail'; //医生头条
import SearchMyDoctors from './doctor/SearchMyDoctors'; //搜索我的医生
//医生录=>去留言
import SearchChatLogs from './doctor/SearchChatLogs'; //搜索聊天记录
//医生录=>去约医生
import AdvisorySelect from './doctor/AdvisorySelect'; //选择咨询时间段
import AdvisorySelectInfo from './doctor/AdvisorySelectInfo'; //选择基本信息
import PayForOrder from './doctor/PayForOrder'; //支付订单页
import SearchAppointList from './doctor/SearchAppointList'; //去约医生-医生列表搜索
//医生录=>去约医生=>选择基本信息
//问诊人病历本 //过敏情况 添加家族病史 添加手术史 选择婚育状态 健康形态 添加疾病名称 患病时长
import PatientsMedicalRecords from './doctor/PatientsMedicalRecords';
//医生录->去约医生=>完善基本信息
import PatientsCondition from './doctor/PatientsCondition'; //本次病情描述

import AdvisoryMedicalHistory from './doctor/AdvisoryMedicalHistory'; //看病记录
//就诊医院 填写科室 化验单 医嘱与用药 没有我的指标
import FillAddvisroyInfo from './doctor/FillAddvisroyInfo';
import AdvisoryGetHelp from './doctor/AdvisoryGetHelp'; //获得帮助
//咨询订单=>订单详情
import OrderListDetail from './doctor/OrderListDetail';
import OrderRefunded from './doctor/OrderRefunded'; //退款结果页
import MemberInfo from './doctor/MemberInfo'; //病情主诉列表
import AddRecordPerson from './doctor/AddRecordPerson'; //添加家庭病历本
import MedicalRecordsInfo from './doctor/MedicalRecordsInfo'; //个人病例页
import FillRecordsLink from './doctor/FillRecordsLink'; //填写医院检查链接
import MedicalRecordsCreate from './doctor/MedicalRecordsCreate'; //创建看病记录
import FillRecordsTarget from './doctor/FillRecordsTarget'; //填写看病指标
//我的
import UserIndex from './my/UserIndex'; //我的设置首页
import UserPersonDetail from './my/UserPersonDetail'; //个人信息
import UserFavorite from './my/UserFavorite'; //我的收藏
import SanJiaInforDetail from './my/SanJiaInforDetail'; //三甲科普咨询详情
import MedicineList from './my/MedicineList'; //药物知识列表
import MedicineListDetail from './my/MedicineListDetail'; //药物知识商品详情
import UserSetting from './my/UserSetting'; //设置
//填写信息页-输入框
import FillInputItem from './other/FillInputItem';
//填写信息页-勾选
import FillCheckbox from './other/FillCheckbox';
const Pages = () => (
  <div>
    <Switch>
      {/* 患友 */}
      <Route exact path="/" component={PatientIndex} />
      <Route path="/DoctorIndex" component={DoctorIndex} />
      <Route path="/my" component={UserIndex} />
      <Route path="/PatientSelect" component={PatientSelect} />
      <Route path="/ImDetailGroupinfo" component={ImDetailGroupinfo} />
      <Route path="/ImGroupNickEdit" component={ImGroupNickEdit} />
      <Route path="/ImDetail" component={ImDetail} />
      <Route path="/FindChatLogs" component={FindChatLogs} />
      {/* 医生录 */}
      <Route path="/MyDoctor" component={MyDoctor} />
      <Route path="/SearchMyDoctors" component={SearchMyDoctors} />
      <Route path="/OrderList" component={OrderList} />
      <Route path="/DoctorCallFor" component={DoctorCallFor} />
      <Route path="/SearchDoctors" component={SearchDoctors} />
      {/* 医生录=>我的医生 */}
      <Route path="/DoctorDetail" component={DoctorDetail} />
      <Route path="/DoctorGoodAt" component={DoctorGoodAt} />
      <Route path="/DoctorMessageHistory" component={DoctorMessageHistory} />
      <Route
        path="/DoctorComplaintContent"
        component={DoctorComplaintContent}
      />
      <Route
        path="/DoctorPatientEvaluation"
        component={DoctorPatientEvaluation}
      />
      {/* 去留言 */}
      <Route path="/LetterList" component={LetterList} />
      {/* 医生录=>去留言 */}
      <Route path="/SearchChatLogs" component={SearchChatLogs} />
      {/* 医生简介 */}
      <Route path="/Doctorintro" component={Doctorintro} />
      {/* 开放病历本设置 */}
      <Route path="/MedicalRecordSet" component={MedicalRecordSet} />
      {/* 家庭病历本 */}
      <Route path="/MedicalList" component={MedicalList} />
      <Route path="/DoctorHeadlines" component={DoctorHeadlines} />
      <Route path="/DoctorHeadlinesDetail" component={DoctorHeadlinesDetail} />
      {/* 医生录=>去约医生 */}
      <Route path="/AdvisorySelect" component={AdvisorySelect} />
      <Route path="/AdvisorySelectInfo" component={AdvisorySelectInfo} />
      <Route path="/PayForOrder" component={PayForOrder} />
      {/* 去约医生-医生列表搜索 */}
      <Route path="/SearchAppointList" component={SearchAppointList} />
      {/* 医生录=>去约医生=>选择基本信息 */}
      <Route
        path="/PatientsMedicalRecords"
        component={PatientsMedicalRecords}
      />
      {/* 医生录->去约医生=>完善基本信息=>本次病情描述 */}
      <Route path="/PatientsCondition" component={PatientsCondition} />
      {/* 看病记录 */}
      <Route
        path="/AdvisoryMedicalHistory"
        component={AdvisoryMedicalHistory}
      />
      {/* 就诊医院 填写科室 化验单 医嘱与用药 没有我的指标*/}
      <Route path="/FillAddvisroyInfo" component={FillAddvisroyInfo} />
      {/* 病情主诉列表 */}
      <Route path="/AdvisoryGetHelp" component={AdvisoryGetHelp} />
      {/* 咨询订单=>订单详情 */}
      <Route path="/OrderListDetail" component={OrderListDetail} />
      {/* 咨询订单=>订单详情=>退款结果页  */}
      <Route path="/OrderRefunded" component={OrderRefunded} />
      {/* 咨询订单=>订单详情=>病情主诉列表 */}
      <Route path="/MemberInfo" component={MemberInfo} />
      {/* 添加家庭病历本 */}
      <Route path="/AddRecordPerson" component={AddRecordPerson} />
      {/* 个人病例页 */}
      <Route path="/MedicalRecordsInfo" component={MedicalRecordsInfo} />
      {/* 填写医院检查链接 */}
      <Route path="/FillRecordsLink" component={FillRecordsLink} />
      {/* 填写看病指标 */}
      <Route path="/FillRecordsTarget" component={FillRecordsTarget} />;

      {/* 创建看病记录 */}
      <Route path="/MedicalRecordsCreate" component={MedicalRecordsCreate} />
      {/* //我的 */}
      <Route path="/UserPersonDetail" component={UserPersonDetail} />
      <Route path="/UserFavorite" component={UserFavorite} />
      <Route path="/SanJiaInforDetail" component={SanJiaInforDetail} />
      <Route path="/MedicineList" component={MedicineList} />
      <Route path="/UserSetting" component={UserSetting} />
      <Route path="/MedicineListDetail" component={MedicineListDetail} />
      {/* 填写信息页 */}
      <Route path="/FillInputItem" component={FillInputItem} />
      <Route path="/FillCheckbox" component={FillCheckbox} />
    </Switch>
  </div>
);

export default Pages;
