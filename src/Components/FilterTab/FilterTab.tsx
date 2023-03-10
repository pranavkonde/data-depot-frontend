import React, { useEffect, useRef, useState } from "react";
import "./FilterTab.scss";

interface Props {
  setFilteredFilesData: React.Dispatch<React.SetStateAction<any[]>>;
  filesData: any[];
}

const FilterTab: React.FC<Props> = ({ filesData, setFilteredFilesData }) => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const filterInput = useRef<HTMLInputElement>(null);

  const filterData = () => {
    if (
      filterInput?.current?.value &&
      filterInput?.current?.value?.length > 0
    ) {
      setFilteredFilesData(
        filesData.filter((item) =>
          item?.fileName
            ?.toLowerCase()
            .includes(filterInput?.current?.value?.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    switch (activeTab) {
      case "all":
        setFilteredFilesData(filesData);
        break;
      case "active":
        setFilteredFilesData(
          filesData.filter((item) => item?.fileStatus === "CAR Created")
        );
        break;
      case "expired":
        setFilteredFilesData(
          filesData.filter((item) => item?.fileStatus !== "CAR Created")
        );
        break;
      default:
        setFilteredFilesData(filesData);
        break;
    }

    return () => {};
  }, [activeTab]);

  return (
    <div className="FilterTab _card">
      <div className="FilterTab__TabBox">
        <div
          className={activeTab === "all" ? "tab active" : "tab"}
          onClick={() => setActiveTab("all")}
        >
          All URLs
        </div>
        <div
          className={activeTab === "active" ? "tab active" : "tab"}
          onClick={() => setActiveTab("active")}
        >
          Active URLs
        </div>
        <div
          className={activeTab === "expired" ? "tab active" : "tab"}
          onClick={() => setActiveTab("expired")}
        >
          Expired URLs
        </div>
      </div>
      <div className="FilterTab__SearchBox">
        <input type="text" placeholder="Search" ref={filterInput} />
        <button
          className="_buttonOutline"
          onClick={() => {
            filterData();
          }}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterTab;
