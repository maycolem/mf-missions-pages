import {
  useGetMissionsQuery,
  useGetUserMissionsQuery,
} from "@/src/features/mission/missionApi";
import classNames from "classnames";
import { Inter } from "next/font/google";
import "react18-json-view/src/style.css";
import styles from "@/src/styles/home.module.css";
import { Chip } from "@nextui-org/react";
import { MissionCard, MissionGrid } from "@/src/features/mission/components";
import { useUserSelector } from "@/src/features";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const { session } = useUserSelector();
  const { data: dataPublicMissions } = useGetMissionsQuery(null, {
    skip: session,
  });
  const {
    data: dataUserMissions,
    isLoading,
    isFetching,
  } = useGetUserMissionsQuery(session, {
    skip: !session,
  });

  console.log(dataUserMissions);
  console.log("isLoading => ", isLoading);
  console.log("isFetching => ", isFetching);

  return (
    <>
      <main className={classNames(inter.className, styles.home)}>
        {session ? (
          <>
            <Chip variant="dot" color="success">
              Activos
            </Chip>
            <div style={{ maxWidth: "400px" }}>
              <MissionCard
                mission={dataUserMissions?.currentMission}
                type={"active"}
              />
            </div>
            <Chip variant="dot" color="warning">
              Disponibles
            </Chip>
            <MissionGrid missions={dataUserMissions?.availables_missions} />
            <Chip variant="dot" color="default">
              Antiguos
            </Chip>
            <MissionGrid missions={dataUserMissions?.oldMissions} type="old" />
          </>
        ) : (
          <MissionGrid missions={dataPublicMissions} />
        )}
      </main>
    </>
  );
}
