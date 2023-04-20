import userSetting from "@/settings/userSetting";
import { getRequestToken, resultError, resultSuccess } from "../_util";
import type { MockMethod } from "vite-plugin-mock";
import type { requestParams } from "../_util";

export function createFakeUserList() {
  return [
    {
      token: userSetting.token,
      id: "1400814d9eae4211bc156611140d29bb",
      createId: null,
      createTime: null,
      updateId: null,
      updateTime: null,
      projectId: "0000000002",
      orgId: "e588675571ce11ebbe000242ac110002",
      appUserId: null,
      userName: "ptadmin",
      accountId: "ptadmin",
      fullName: "平台管理员",
      idCard: null,
      sex: null,
      email: null,
      phone: null,
      cellphone: "",
      postCode: null,
      postName: null,
      loginIp: null,
      loginTime: null,
      enableCode: null,
      macAddress: null,
      forbidden: "1",
      userType: null,
      remark: null,
      isAdmin: "1",
      isDefault: null,
      sort: null,
      org: {
        id: "e588675571ce11ebbe000242ac110002",
        createId: "ad4a13dde7d645a693efc591c57b4e93",
        createTime: 1613641899000,
        updateId: "50ebee6471cf11ebbe000242ac110002",
        updateTime: 1646294935000,
        projectId: "0000000002",
        name: "指挥部",
        aliasName: "指挥部",
        code: "ptzhb",
        type: "1",
        tenderCode: "ptzhb",
        tenderName: "指挥部",
        tenderType: "1",
        keyProcess: null,
        onlineTime: 1613606400000,
        sort: 1.0,
        corpId: "5623cfbe3dbf11ebb48c0242ac110012",
        companyId: null,
        corpName: "南京飞搏智能交通技术有限公司",
        lng: null,
        lat: null,
        lng_bd09: null,
        lat_bd09: null,
        parents: [],
        online: null,
        selected: null,
        project: null,
        isDefault: null,
        userId: null,
        forbidden: null,
      },
      project: {
        id: "0000000002",
        createId: "ad4a13dde7d645a693efc591c57b4e93",
        createTime: 1453108401000,
        updateId: "50ebee6471cf11ebbe000242ac110002",
        updateTime: 1628733408000,
        name: "方舟智慧工程云平台",
        shortName: "工程云平台",
        code: "fzpt",
        type: null,
        corpId: null,
        status: null,
        startTime: null,
        endTime: null,
        lng: null,
        lat: null,
        lngBd09: null,
        latBd09: null,
        remarks: null,
        regionDictId: null,
        initialize: "1",
        tenantInit: "1",
        deleted: "0",
        corpName: null,
        corpList: [],
      },
      roleList: [
        {
          id: "dbbe550871cd11ebbe000242ac110002",
          createId: "ad4a13dde7d645a693efc591c57b4e93",
          createTime: 1613641453000,
          updateId: "50ebee6471cf11ebbe000242ac110002",
          updateTime: 1628756445000,
          projectId: "0000000002",
          name: "平台管理",
          code: "sys_manage",
          remarks: "平台管理员",
          sort: 1,
          isSystemManage: "0",
          isProjectManage: "0",
        },
      ],
      portalInfos: [
        {
          clientType: "1",
          portalId: "aa58ae008b4011eda3e80242ac110007",
        },
      ],
      accountName: "ptadmin",
    },
  ];
}

export default [
  {
    url: "/api/sys/v1/xdesk/user/profile",
    method: "get",
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError("Invalid token");
      const checkUser = createFakeUserList().find(
        (item) => item.token === token
      );
      if (!checkUser) {
        return resultError(
          "The corresponding user information was not obtained!"
        );
      }
      return resultSuccess(checkUser);
    },
  },
] as MockMethod[];
