"use client"

import Image from "next/image";
import data from "../utils/data.json";
import * as XLSX from "xlsx";

export default function Home() {
  const handleExportData = () => {
    var wb = XLSX.utils.book_new(), ws =  XLSX.utils.json_to_sheet(data);

    XLSX.utils.book_append_sheet(wb, ws, "TransacoesCP2");

    XLSX.writeFile(wb, "FinanceiroCP2.xlsx");

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        className="bg-gray-500 rounded-md p-6"
        onClick={() => handleExportData()}
      >
        Gerar planilha
      </button>
      <div>
        {data.map((i) => (
          <div className="flex gap-2 border border-blue-400 rounded-md m-3 p-4">
            <div>{i.valor}</div>
            <div>{i.nome}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
