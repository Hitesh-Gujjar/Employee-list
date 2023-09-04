import React, { useState,useEffect } from "react";
import EployeeForm from "../../components/EployeeForm";
import { getBranch, getMasterSalesOffice, getRegion } from "../../api/api";

function AddEmployee() {
  const [region, setRegion] = useState([]);
  const [branch, setBranch] = useState([]);
  const [salesOffice, setSalesOffice] = useState([]);

  const getRegionOption = async () => {
    getRegion().then((res) => {
      if (res.data.status === 200) {
        setRegion(res.data.data);
      }
    });
  };

  const getBranchOption = async () => {
    getBranch().then((res) => {
      if (res.data.status === 200) {
        setBranch(res.data.data);
      }
    });
  };

  const getSalesOfficeOption = async () => {
    getMasterSalesOffice().then((res) => {
      if (res.data.status === 200) {
        setSalesOffice(res.data.data);
      }
    });
  };

  useEffect(() => {
    getRegionOption();
    getBranchOption();
    getSalesOfficeOption();
  }, []);
  return (
    <>
      <div className="w-full flex justify-center items-center text-center my-12">
        <div className="h-16 w-4/5 items-center text-left border-b border-gray-400">
          <span className="text-2xl font-semibold items-center">Employee</span>
        </div>
      </div>
      <div className="w-full flex justify-center items-center text-center my-12">
        <div className="w-4/5">
          <EployeeForm
            region={region}
            branch={branch}
            salesOffice={salesOffice}
          />
        </div>
      </div>
    </>
  );
}

export default AddEmployee;
