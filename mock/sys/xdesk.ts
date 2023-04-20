import type { MockMethod } from "vite-plugin-mock";
import type { requestParams } from "~/mock/_util";
import { getRequestToken, resultError, resultSuccess } from "~/mock/_util";

const createFakeClientCardsList = () => [
  {
    id: "55140450e20f4498998a84809072e9d3",
    componentName: "组件一",
    name: "组件一111",
    kind: "1",
    remark: "adfadf",
    key: "Weather",
    clientUrl: "/sys",
    clientId: "0000000001",
  },
  {
    id: "22d15cc7eef047aa9e4baf8c644d49d9",
    componentName: "组件二",
    name: "组件二",
    kind: "3",
    remark: "55555",
    key: "Calender",
    clientUrl: "1111",
    clientId: "9a749bc126d14839a72e74341ca45f5a",
  },
];

const createFakeDeskInfo = () => {
  return {
    id: "000405628ede461bb12ca9ba533d5c25",
    userId: "1400814d9eae4211bc156611140d29bb",
    orgId: "e588675571ce11ebbe000242ac110002",
    projectId: "0000000002",
    content:
      '[{"id":"7e475b573c2745a895f39bcb41b612af","name":"主页","icon":"i-carbon:home","children":[{"id":"928812eba71e4eada63824ab1b35a295","name":"日历","component":"Calender2x2","size":"2x2","type":"component","h":2,"w":2,"x":4,"y":0},{"id":"ab92b2daf86d4b19b178c1dec18147ec","name":"天气","component":"Weather2x4","size":"2x4","type":"component","h":2,"w":4,"x":0,"y":0},{"id":"ea9811e4d6aa4e55bff62b5191fcf96b","name":"倒计时","component":"CountDown2x1","size":"2x1","type":"component","h":2,"w":1,"x":6,"y":0}]}]',
  };
};

export default [
  {
    url: "/api/sys/v1/xdesk/user/userXDesk/clientCardsList",
    method: "post",
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError("Invalid token");
      return resultSuccess(createFakeClientCardsList());
    },
  },
  {
    url: "/api/sys/v1/xdesk/user/userXDesk/getDeskInfo",
    method: "post",
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError("Invalid token");
      return resultSuccess(createFakeDeskInfo());
    },
  },
] as MockMethod[];
