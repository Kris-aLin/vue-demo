// 获取各个页面的数据
import jsonp from '../common/js/jsonp';
import axios from 'axios';

// 基础URL
const BASEURL = "http://h5.palalife.com/Public/palalife/palaispaEcateVue/";

/**
 * 获取enrollment页面的数据
 */
export function getEnrollment() {
  let enrollmentSubURL = "enrollment.php";
  let url = BASEURL + enrollmentSubURL;
  return jsonp(url);
}