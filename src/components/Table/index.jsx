import { useState, useEffect } from "react";
import axios from "axios";
const Table = () => {
  let [data, setData] = useState([]);
  const url = "http://localhost:8000/mahasiswa";
  const getData = async () => {
    return axios.get(url).then((res) => {
      setData((data = res.data));
    });
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="w-full max-w-2xl mx-auto bg-white  rounded-lg shadow-xl border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-bold text-gray-800">Data Mahasiswa</h2>
        </header>
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Nama</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Email</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">NIM</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {data.map((x, i) => (
                  <tr key={i}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="font-medium text-gray-800">
                          {x.name}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{x.email}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium">{x.nim}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
