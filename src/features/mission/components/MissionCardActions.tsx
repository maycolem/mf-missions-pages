import useUserSelector from "@/src/features/user/useUserSelector";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import React from "react";
import {
  useCancelUserMissionMutation,
  useEnrollUserMissionMutation,
} from "../missionApi";

const MissionCardActions = ({ mission }) => {
  const { session } = useUserSelector();
  const [enroll] = useEnrollUserMissionMutation();
  const [cancel] = useCancelUserMissionMutation();

  const handleEnRollMission = () => {
    enroll({ session, mission });
  };
  const handleCancelMission = () => {
    cancel({ session, mission });
  };

  return (
    <>
      {session ? (
        <Button color="primary" onClick={handleEnRollMission}>
          Unirme
        </Button>
      ) : (
        <Popover color="foreground" placement="top" showArrow={true}>
          <PopoverTrigger>
            <Button color="primary">Unirme</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-2">Inicia sesión</div>
          </PopoverContent>
        </Popover>
      )}
      {session ? (
        <Button color="default" onClick={handleCancelMission}>
          Cancelar
        </Button>
      ) : (
        <Popover color="foreground" placement="top" showArrow={true}>
          <PopoverTrigger>
            <Button color="default">Cancelar</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-2">Inicia sesión</div>
          </PopoverContent>
        </Popover>
      )}
    </>
  );
};

export default MissionCardActions;
