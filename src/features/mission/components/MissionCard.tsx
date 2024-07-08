import { Card } from "@nextui-org/react";
import classNames from "classnames";
import React from "react";
import JsonView from "react18-json-view";
import styles from "./GridMissions.module.css";
import MissionCardActions from "./MissionCardActions";
import {
  AvailablesMission,
  CurrentMission,
  Mission,
  OldMission,
} from "../missionApiTypes";

type Type = "old" | "active" | "pending";
type MissionCommon =
  | Mission
  | OldMission
  | AvailablesMission
  | CurrentMission
  | undefined;

interface Props {
  type?: Type;
  mission: MissionCommon;
}

const MissionCard = ({ mission, type }: Props) => {
  const isOldType = type === "old";
  const canShowButtons = !isOldType;

  if (!mission?.mission) <></>;

  return (
    <Card
      className={classNames(styles.card, {
        [styles.old]: isOldType,
      })}
      shadow="lg"
    >
      <JsonView src={mission}></JsonView>
      {canShowButtons && (
        <div className={styles.card__buttons}>
          <MissionCardActions mission={mission?.mission} />
        </div>
      )}
    </Card>
  );
};

export default MissionCard;
