import { useEffect, useState } from "react";
import "./main-title.module.css";

type tMainTitleProps = {
  isShowData: boolean;
};
export default function MainTitle(props: tMainTitleProps) {
  const { isShowData } = props;

  const defaultClassnameMainTitle = "rchr-main-title";
  const [classNameOfMainTitle, setClassName] = useState(
    defaultClassnameMainTitle
  );

  useEffect(() => {
    if (isShowData === true) {
      setClassName(`${defaultClassnameMainTitle} inactive`);
    } else {
      setClassName(defaultClassnameMainTitle);
    }
  }, [isShowData]);
  return (
    <div className={classNameOfMainTitle}>
      <p>무엇이든 크롤링 해보세요.</p>
    </div>
  );
}
