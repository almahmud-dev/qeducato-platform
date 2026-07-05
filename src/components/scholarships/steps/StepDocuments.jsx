"use client";

import {
  LuFileText,
  LuAward,
  LuReceipt,
  LuMail,
  LuCreditCard,
  LuImage,
} from "react-icons/lu";
import { documentRequirements } from "@/helper/scholarships/scholarshipsData";
import DocumentDropzone from "../DocumentDropzone";

const iconMap = {
  LuFileText,
  LuAward,
  LuReceipt,
  LuMail,
  LuCreditCard,
  LuImage,
};

function StepDocuments({ files, updateFile }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {documentRequirements.map((doc) => (
        <DocumentDropzone
          key={doc.id}
          icon={iconMap[doc.icon]}
          label={doc.label}
          description={doc.description}
          required={doc.required}
          file={files[doc.id]}
          onFileChange={(file) => updateFile(doc.id, file)}
        />
      ))}
    </div>
  );
}

export default StepDocuments;