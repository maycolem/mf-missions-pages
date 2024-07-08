import { useAppSelector } from "@/src/app";

const useUserSelector = () => {
  return {
    user: useAppSelector((state) => state.user?.user),
    session: useAppSelector((state) => state.user?.user?.session),
  };
};

export default useUserSelector;
