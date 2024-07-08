import React from "react";
import styles from "./GridMissions.module.css";
import {
  AvailablesMission,
  Mission,
  OldMission,
} from "@/src/features/mission/missionApiTypes";
import MissionCard from "./MissionCard";

type Type = "old" | "active" | "pending";
type MissionCommon = Mission | OldMission | AvailablesMission;

interface Props {
  type?: Type;
  missions: MissionCommon[] | undefined;
}

const MissionGrid = ({ missions, type }: Props) => {
  if (!missions) return;
  return (
    <div className={styles.missions}>
      {missions.map((m) => {
        return (
          <MissionCard key={m.mission} mission={m} type={type}></MissionCard>
        );
      })}
    </div>
  );
};

export default MissionGrid;
