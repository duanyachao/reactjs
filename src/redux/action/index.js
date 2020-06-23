/*
 * action 类型
 */
export const type = {
  DOLOGIN:'DOLOGIN',
  SWITCH_MENU: 'SWITCH_MENU',
  GETCHILDNODE:'GETCHILDNODE'
};
//登录
export function doLogin(userInfo) {
  return {
    type: type.DOLOGIN,
    userInfo
  };
}
// 点击某一机构节点，加载其下级机构数据
export function getChildNode(orgType,parentNode) {
  return {
    type: type.GETCHILDNODE,
    parentNode,
    orgType
  };
}
// 菜单点击切换，修改面包屑名称
export function switchMenu(menuName) {
  return {
    type: type.SWITCH_MENU,
    menuName
  };
}
