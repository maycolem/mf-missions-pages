import { useAppDispatch } from "@/src/_app";
import { resetUser, setUser } from "@/src/features";
import { useLoginMutation } from "@/src/features/mission/missionApi";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import styles from "./Setup.module.css";
import classNames from "classnames";
import useUserSelector from "@/src/features/user/useUserSelector";

const Setup = ({ children }) => {
  const dispatch = useAppDispatch();
  const { user } = useUserSelector();
  const [login] = useLoginMutation();
  const [alias, setAlias] = useState("maycol.elcorrobarrutia@apuestatotal.com");
  const [password, setPassword] = useState("Password_123");
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = () => {
    setIsLoading(true);
    login({
      alias,
      password,
    })
      .unwrap()
      .then((user) => {
        dispatch(setUser(user?.user));
        setIsLoading(false);
      });
  };
  const handleLogout = () => {
    dispatch(resetUser());
  };

  return (
    <>
      <header className={styles.header}>
        <Input
          className={classNames(styles.input, styles.email)}
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          type="email"
          label="Email"
          size="sm"
        />
        <Input
          className={classNames(styles.input)}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          label="Password"
          size="sm"
        />
        <Button
          onClick={handleLogin}
          className={classNames(styles.button)}
          color="primary"
          isLoading={isLoading}
          isDisabled={isLoading}
        >
          Login staging calimaco
        </Button>
        <Button
          onClick={handleLogout}
          className={classNames(styles.button)}
          color="warning"
          isLoading={isLoading}
          isDisabled={isLoading}
        >
          Cerrar sesión {user?.alias}
        </Button>
      </header>
      {children}
    </>
  );
};

export default Setup;
