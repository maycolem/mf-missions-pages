import { BaseResponse } from "@/src/types";

export interface GetMissionsResponse extends BaseResponse {
  missions: Mission[];
}

export interface Mission {
  mission: string;
  name: string;
  objectives: Objective[];
  init_date: string;
  end_date: string;
  prize: number;
  cms: CMS;
}

export interface CMS {
  "en-US": EnUs;
  "es-ES": EnUs;
}

export interface EnUs {
  summary_title: string;
  summary_body: string;
  summary_image: string;
  title: string;
  body: string;
  image: string;
}

export interface Objective {
  objective: string;
  name: string;
  type: string;
  amount: string;
  description: string;
}

export interface GetUserMissionsResponse extends BaseResponse {
  oldMissions: OldMission[];
  availables_missions: AvailablesMission[];
  currentMission: CurrentMission;
}

export interface CurrentMission {
  company: string;
  mission: string;
  db: number;
  user: string;
  status: string;
  enroll_date: string;
  expiration_date: string;
  end_date: null;
  data: Data;
  game: null;
  operation: null;
  cancelled_date: null;
  missionDefinition: MissionDefinition;
}
export interface MissionDefinition {
  mission: string;
  name: string;
  prize: number;
  cms: CMS;
  objectives: Objective[];
  init_date: string;
  end_date: string;
}

export interface AvailablesMission {
  mission: string;
  name: string;
  objectives: Objective[];
  init_date: string;
  end_date: string;
  prize: number;
  cms: CMS;
}

export interface OldMission {
  company: string;
  mission: string;
  db: number;
  user: string;
  status: string;
  enroll_date: string;
  expiration_date: string;
  end_date: null;
  data: Data;
  game: null;
  operation: null;
  cancelled_date: string;
}

export interface Data {}
