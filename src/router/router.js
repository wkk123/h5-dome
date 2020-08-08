import asyncComponent from "@/utils/asyncComponent";
const home = asyncComponent(() => import("@/pages/home/home"));
const interim = asyncComponent(() => import("@/pages/interim/interim"));
const question = asyncComponent(() => import("@/pages/question/question"));
const payment = asyncComponent(() => import("@/pages/payment/payment"));
const result = asyncComponent(() => import("@/pages/result/result"));
const routes = [
  {
    path: "/home",
    component: home,
    title: "首页",
  },
  {
    path: "/interim",
    component: interim,
    title: "过渡",
  },
  {
    path: "/question",
    component: question,
    title: "问题",
  },
  {
    path: "/payment",
    component: payment,
    title: "付款",
  },
  {
    path: "/result",
    component: result,
    title: "结果",
  },
];

export default routes;