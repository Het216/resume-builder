import { resumeInfo } from "@/types/types";
import React from "react";

const SummaryPreview: React.FC<{ resumeInfo: resumeInfo }> = ({
  resumeInfo,
}) => {
  return (
    <div>
      <h2 className="text-lg font-bold mt-3">SUMMARY</h2>

      <hr className="border-[2px] rounded-md" style={{ borderColor: "#000" }} />

      <p className="text-xs my-2">{resumeInfo?.summary}</p>
    </div>
  );
};

export default SummaryPreview;
