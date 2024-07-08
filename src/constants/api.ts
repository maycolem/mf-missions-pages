const CalimacoApiType = {
  contents: "/contents",
  data: "/data",
};
export const CalimacoApi = {
  base: process.env.REACT_APP_CALIMACO_API_BASE,
  company: process.env.REACT_APP_COMPANY,
  currency: process.env.REACT_APP_CURRENCY,
  baseAuth: process.env.REACT_APP_CALIMACO_API_BASE_AUTH,
  missions: {
    getMissions: `${CalimacoApiType.contents}/getMissions`,
    getUserMissions: `${CalimacoApiType.data}/getUserMissions`,
    enrollUserMission: `${CalimacoApiType.data}/enrollUserMission`,
    cancelUserMission: `${CalimacoApiType.data}/cancelUserMission`,
  },
};
