import { useEffect, useState } from "react";
import { tLinksJson } from "../AppContainer";
import "./excel-downloader.module.css";

type tExcelDw = {
  stateLinksJson: tLinksJson;
};

export default function ExcelDownloader(props: tExcelDw) {
  const { stateLinksJson } = props;

  const defaultClassName = "excel-dw-container";
  const [classNameToExcelDw, setclassNameToExcelDw] =
    useState(defaultClassName);

  useEffect(() => {
    if (stateLinksJson.length !== 0) {
      setclassNameToExcelDw(`${defaultClassName} active`);
    } else {
      setclassNameToExcelDw(defaultClassName);
    }
  }, [stateLinksJson]);

  return stateLinksJson.length !== 0 ? (
    <div className={classNameToExcelDw}>
      <div className="excel-dw">
        <p>엑셀파일 내려받기123</p>
      </div>
    </div>
  ) : null;
}
