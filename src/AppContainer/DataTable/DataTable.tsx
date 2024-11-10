import React, { useEffect, useState, memo } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ScaleLoader from "react-spinners/ScaleLoader";
import "./data-table.module.css";
import { tScrappeds, tLinksJson } from "../AppContainer";

type tDataTableProps = {
  isShowData: boolean;
  setIsShowData: (show: boolean) => void;
  stateLinksJson: tLinksJson; // 이미 배열 타입으로 가정합니다.
};

// 로딩 스피너 컴포넌트
const LoadingSpinner = ({ isLoading }: { isLoading: boolean }) => {
  const [remainingTime, setRemainingTime] = useState(60); // 초기 남은 시간 설정

  useEffect(() => {
    // 타이머 설정: isLoading이 true일 때만 타이머가 실행되도록 설정
    if (isLoading && remainingTime > 0) {
      const timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000); // 1초 간격으로 실행

      return () => clearInterval(timer); // 컴포넌트가 언마운트될 때 타이머 정리
    }
  }, [isLoading, remainingTime]);

  return (
    <div className="loading-container">
      <ScaleLoader color="#36d7b7" loading={isLoading} />
      <div className="loading-message">
        <p>데이터를 불러오는 중이에요. 남은 시간 {remainingTime}초</p>
      </div>
    </div>
  );
};

// 테이블 컴포넌트
const DataTableContent = memo(
  ({ columns, data }: { columns: string[]; data: tLinksJson }) => (
    <table className="responsive-table">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.nick}</td>
            <td>{row.title}</td>
            <td>
              <a href={row.link} target="_blank" rel="noopener noreferrer">
                블로그 바로가기
              </a>
            </td>
            <td>{row.visitors}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
);

export default function DataTable({
  isShowData,
  stateLinksJson,
}: tDataTableProps) {
  const DEFAULT_CLASS_NAME = "table-container";
  const [classNameOfTable, setClassNameOfTable] = useState(DEFAULT_CLASS_NAME);
  const [isLoading, setIsLoading] = useState(true);

  const columns = ["블로거 닉네임", "포스팅 제목", "링크", "방문자수"];

  // 데이터가 로드될 때 로딩 상태 업데이트
  useEffect(() => {
    setIsLoading(stateLinksJson.length === 0); // 데이터가 없는 경우에만 로딩 상태 유지
  }, [stateLinksJson]);

  // 테이블 클래스 이름 업데이트
  useEffect(() => {
    setClassNameOfTable(
      isShowData ? `${DEFAULT_CLASS_NAME} active` : DEFAULT_CLASS_NAME
    );
  }, [isShowData]);

  return (
    <div className={classNameOfTable}>
      {isLoading ? (
        <LoadingSpinner isLoading={isLoading} />
      ) : (
        <DataTableContent columns={columns} data={stateLinksJson} />
      )}
    </div>
  );
}
