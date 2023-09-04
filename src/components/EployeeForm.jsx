import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { createEmployee, getDepartment, getDesignation } from "../api/api";
import { convertSelectOption } from "../assets/helper";

const blankObject = {
  name: "waqkar fsdfsd",
  masterDepartmentId: 1,
  masterRegionIds: [2],
  masterBranchIds: [13],
  masterSalesOfficeIds: [2],
  masterDesignationId: 1,
  mobile: 9999999999,
  actualDesignation: "test field",
  userId: 1,
  email: "test@email.com",
  isViewCustomers: true,
  isViewQuotation: true,
  actualDesignationId: 1,
  nextUserId: 1,
  copsUserId: 1,
  isCOPSMainUser: true,
  isCOPSOutOfOffice: true,
  maxLoadPerDay: 10,
  totalCapacity: 10,
  maxLoadOwnBranch: 10,
  maxLoadOtherBranch: 10,
  priorityOtherBranch: 10,
};

function EployeeForm({ region, branch, salesOffice }) {
  const { register, handleSubmit, control, errors } = useForm();
  const [designationOption, setDesignationOption] = useState([]);
  const [departmentOption, setDepartmentOption] = useState([]);

  const [selectedOption, setSelectedOption] = useState({
    region: "",
    branch: "",
  });
  const regionOption = useMemo(() => {
    return convertSelectOption(region);
  }, [region]);

  const branchOption = useMemo(() => {
    return convertSelectOption(
      branch.filter((val) => val.masterRegionId === selectedOption.region)
    );
  }, [selectedOption.region]);

  const salesOption = useMemo(() => {
    return convertSelectOption(
      salesOffice.filter((val) => val.masterBranchId === selectedOption.region)
    );
  }, [selectedOption.region, selectedOption.branch]);

  const getDepartmentOption = () => {
    getDepartment().then((res) => {
      if (res.data.status === 200) {
        setDepartmentOption(convertSelectOption(res.data.data));
      }
    });
  };

  const getDesignationOptio = () => {
    () => {
      getDesignation().then((res) => {
        console.log("res", res);
        if (res.data.status === 200) {
          setDesignationOption(convertSelectOption(res.data.data));
        }
      });
    };
  };

  useEffect(() => {
    getDepartmentOption();
    getDesignationOptio();
  }, []);

  const onSubmit = async (data) => {
    const response = await createEmployee(blankObject);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="my-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6 grid gap-6 grid-cols-12">
            <div className="col-span-6 text-end">EMP ID :</div>
            <div className="col-span-6">
              <input
                type="text"
                id="emp_id"
                placeholder="EMP ID"
                {...register("emp_id")}
                required
                className="border border-gray-300 bg-white shadow-md w-full h-9 px-2 py-1 rounded-md "
                control={control}
              />
            </div>
          </div>

          <div className="col-span-6 grid gap-6 grid-cols-12">
            <div className="col-span-6 text-end">EMP Name :</div>
            <div className="col-span-6">
              <input
                type="text"
                id="name"
                placeholder="EMP Name"
                {...register("name")}
                required
                className="border border-gray-300 bg-white shadow-md w-full h-9 px-2 py-1 rounded-md "
              />
            </div>
          </div>

          <div className="col-span-6 text-left items-startttt grid gap-6 grid-cols-12">
            <div className="col-span-6 text-end">Region:</div>
            <div className="col-span-6">
              <Controller
                name="masterRegionIds"
                control={control}
                render={({ field: { onChange, value, ref, name } }) => (
                  <Select
                    options={regionOption}
                    value={regionOption.find((c) => c.value === value)}
                    onChange={(val) => {
                      onChange([val.value]);
                      setSelectedOption({
                        ...selectedOption,
                        region: val.value,
                      });
                    }}
                    required
                  />
                )}
                rules={{ required: true }}
              />
            </div>
          </div>

          <div className="col-span-6 text-left items-startttt grid gap-6 grid-cols-12">
            <div className="col-span-6 text-end">Branch:</div>
            <div className="col-span-6">
              <Controller
                name="masterBranchIds"
                control={control}
                render={({ field: { onChange, value, ref, name } }) => (
                  <Select
                    options={branchOption}
                    value={branchOption.find((c) => c.value === value)}
                    onChange={(val) => {
                      onChange([val.value]);
                      setSelectedOption({
                        ...selectedOption,
                        branch: val.value,
                      });
                    }}
                    required
                  />
                )}
                rules={{ required: true }}
              />
            </div>
          </div>

          <div className="col-span-6 text-left items-startttt grid gap-6 grid-cols-12">
            <div className="col-span-6 text-end">Sale Office:</div>
            <div className="col-span-6">
              <Controller
                name="masterSalesOfficeIds"
                control={control}
                render={({ field: { onChange, value, ref, name } }) => (
                  <Select
                    options={salesOption}
                    value={salesOption.find((c) => c.value === value)}
                    onChange={(val) => {
                      onChange([val.value]);
                    }}
                    required
                  />
                )}
                rules={{ required: true }}
              />
            </div>
          </div>

          <div className="col-span-6 text-left items-startttt grid gap-6 grid-cols-12">
            <div className="col-span-6 text-end">Department:</div>
            <div className="col-span-6">
              <Controller
                name="masterDepartmentId"
                control={control}
                render={({ field: { onChange, value, ref, name } }) => (
                  <Select
                    options={departmentOption}
                    className="shadow-lg"
                    value={departmentOption.find((c) => c.value === value)}
                    onChange={(val) => onChange([val.value])}
                    required
                  />
                )}
                rules={{ required: true }}
              />
            </div>
          </div>

          {/* <div className="col-span-6 text-left items-startttt grid gap-6 grid-cols-12">
          <div className="col-span-6 text-end">Designation:</div>
          <div className="col-span-6">
            <Controller
              name="masterDesignationId"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  options={designationOption}
                  className="shadow-sm border border-gray-100 rounded-md"
                  value={designationOption.find((c) => c.value === value)}
                  onChange={(val) => onChange([val.value])}
                />
              )}
              rules={{ required: true }}
            />
          </div>
        </div> */}

          <div className="col-span-6 grid gap-6 grid-cols-12">
            <div className="col-span-6 text-end">Actual designation:</div>
            <div className="col-span-6">
              <input
                type="number"
                id="actualDesignationId"
                {...register("actualDesignationId")}
                required
                className="border border-gray-300 bg-white shadow-md w-full h-9 px-2 py-1 rounded-md "
              />
            </div>
          </div>

          <div className="col-span-6 grid gap-6 grid-cols-12">
            <div className="col-span-6 text-end">UserId:</div>
            <div className="col-span-6">
              <input
                type=""
                id="mobile"
                {...register("mobile")}
                required
                className="border border-gray-300 bg-white shadow-md w-full h-9 px-2 py-1 rounded-md "
              />
            </div>
          </div>

          <div className="col-span-6 grid gap-6 grid-cols-12">
            <div className="col-span-6 text-end">Mobile:</div>
            <div className="col-span-6">
              <input
                type="number"
                id="mobile"
                {...register("mobile")}
                required
                className="border border-gray-300 bg-white shadow-md w-full h-9 px-2 py-1 rounded-md "
              />
            </div>
          </div>

          <div className="col-span-6 grid gap-6 grid-cols-12">
            <label htmlFor="email" className="col-span-6 text-end">
              Email :
            </label>
            <div className="col-span-6">
              <input
                type="email"
                id="email"
                placeholder="email"
                {...register("email")}
                required
                className="border border-gray-300 bg-white shadow-md w-full h-9 px-2 py-1 rounded-md "
              />
            </div>
          </div>

          <div className="col-span-12 max-sm:col-span-12 grid gap-6 grid-cols-12">
            <div className="col-span-3 max-sm:col-span-12 text-end">
              MaxLoad Per Day:
            </div>
            <div className="col-span-3 max-sm:col-span-12">
              <input
                type="number"
                id="maxLoadPerDay"
                placeholder="MaxLoad Per Day"
                {...register("maxLoadPerDay")}
                required
                className="border border-gray-300 bg-white shadow-md w-full h-9 px-2 py-1 rounded-md "
              />
            </div>
          </div>

          <div className="col-span-6 grid gap-6 grid-cols-12">
            <div className="col-span-6 text-end">Priority Other Branch:</div>
            <div className="col-span-6">
              <input
                type="number"
                id="maxLoadOtherBranch"
                placeholder="Priority Other Branch"
                {...register("priorityOtherBranch")}
                required
                className="border border-gray-300 bg-white shadow-md w-full h-9 px-2 py-1 rounded-md "
              />
            </div>
          </div>

          <div className="col-span-6 grid gap-6 grid-cols-12">
            <div className="col-span-6 text-end">MaxLoad Other Branch:</div>
            <div className="col-span-6">
              <input
                type="number"
                id="maxLoadOtherBranch"
                placeholder="MaxLoad Other Branch"
                {...register("maxLoadOtherBranch")}
                required
                className="border border-gray-300 bg-white shadow-md w-full h-9 px-2 py-1 rounded-md "
              />
            </div>
          </div>

          <div className="col-span-12 max-sm:col-span-6 grid gap-6 grid-cols-12">
            <div className="col-span-3 max-sm:col-span-6 text-end">
              MaxLoad Own Branch:
            </div>
            <div className="col-span-3 max-sm:col-span-6">
              <input
                type="number"
                id="maxLoadOwnBranch"
                placeholder="MaxLoad Own Branch"
                {...register("maxLoadOwnBranch")}
                required
                className="border border-gray-300 bg-white shadow-md w-full h-9 px-2 py-1 rounded-md "
              />
            </div>
          </div>
        </div>
      </form>
      <div className="w-full flex justify-end">
        <button
          type="submit"
          onClick={() => onSubmit("data")}
          className="text-md w-32  bg-blue-700 hover:bg-blue-400 rounded-lg shadow-md py-2 text-white"
        >
          Save
        </button>
      </div>
    </>
  );
}

export default EployeeForm;
