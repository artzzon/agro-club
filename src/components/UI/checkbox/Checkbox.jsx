import React from "react";
import { FilterContext } from "../../../App";
import styles from "./Checkbox.module.scss";

const Checkbox = () => {
  const { activeStatus, setActiveStatus } = React.useContext(FilterContext);
  const changeStatus = React.useCallback(
    (status) => {
      setActiveStatus({
        ...activeStatus,
        [status]: !activeStatus[status],
      });
    },
    [activeStatus, setActiveStatus]
  );

  return (
    <div className={styles.container}>
      <h4>STATUS</h4>
      <div className={styles.checkbox_container}>
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            name="Limited"
            checked={activeStatus.limited}
            onChange={() => changeStatus("isLimited")}
          />
          <span>Limited</span>
        </div>
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            name="New"
            checked={activeStatus.new}
            onChange={() => changeStatus("isNew")}
          />
          <span>New</span>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
