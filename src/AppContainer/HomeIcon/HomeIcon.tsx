import { useEffect, useState } from "react";
import "./home-icon.module.css";

type tHomeIconPros = {
  isShowData: boolean;
  setIsShowData: Function;
  setStateLinksJson: Function;
};
export default function HomeIcon(props: tHomeIconPros) {
  const { isShowData, setIsShowData, setStateLinksJson } = props;
  const defaultClassName = "rchr-home-icon material-icons md-32";
  const [classNameToHomeIcon, setClassName] = useState(defaultClassName);

  const onClick = () => {
    setIsShowData(false);
  };

  const initDataTable = (blankData: []) => {
    setStateLinksJson(blankData);
  };

  useEffect(() => {
    if (isShowData === true) {
      setClassName("rchr-home-icon material-icons md-32 active");
      initDataTable([]);
    } else {
      setClassName(defaultClassName);
    }
  }, [isShowData]);

  return (
    <div className={classNameToHomeIcon} onClick={onClick}>
      <div className="">
        <span>home</span>
      </div>
    </div>
  );
}
