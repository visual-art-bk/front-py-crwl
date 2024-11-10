import { useEffect, useState } from "react";
import "./excel-downloader.module.css";

type tExcelDw = {
  isShowData: boolean;
};
export default function ExcelDownloader(props: tExcelDw) {
  const { isShowData } = props;

  const defalutClassName = "excel-dw-container";
  const [classNameToExcelDw, setclassNameToExcelDw] =
    useState(defalutClassName);
    
  useEffect(() => {
    if (isShowData === true) {
      setclassNameToExcelDw(`${defalutClassName} active`);
      console.log(
        "isShowData",
        isShowData,
        "현재 엑셀다운로더 클래스네임",
        classNameToExcelDw
      );
    } else {
      setclassNameToExcelDw(defalutClassName);
      console.log(
        "isShowData",
        isShowData,
        "현재 엑셀다운로더 클래스네임",
        classNameToExcelDw
      );
    }
  }, [isShowData]);
  return (
    <div className={classNameToExcelDw}>
      <div className="excel-dw">
        <p>엑셀파일 내려받기</p>
      </div>
    </div>
  );
}
