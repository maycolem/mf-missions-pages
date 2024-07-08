import { missionApi } from "@/src/features/mission/missionApi";

const rootMiddleware = (getDefaultMiddleware) => {
  return getDefaultMiddleware().concat(missionApi.middleware);
};

export default rootMiddleware;
