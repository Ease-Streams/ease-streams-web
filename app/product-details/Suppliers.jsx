"use client";
import React from "react";
import SupplierList from "./SupplierList";
import { useEffect, useState } from "react";
import RightDrawerSendEnquiry from "../components/RightDrawerSendEnquiry";

const Suppliers = ({ supplierData, brandsData, productData }) => {
  const [suppliers, setSuppliers] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("All");
  useEffect(() => {
    // Update the brands state
    setBrands(brandsData);
    if (selectedBrand !== "All") {
      // Filter suppliers only if selectedBrand is not "All"
      const matchingSuppliers = supplierData.filter((supplier) =>
        supplier.brandsRef.some((brand) => brand.title === selectedBrand)
      );
      setSuppliers(matchingSuppliers);
    } else {
      // If selectedBrand is "All", show all suppliers or handle accordingly
      setSuppliers(supplierData);
    }
  }, [selectedBrand, brandsData, supplierData]);

  const handleSelectChange = (event) => {
    setSelectedBrand(event.target.value);
  };
  return (
    <>
      <div className="flex flex-col gap-3 w-full lg:max-w-[22%] xl:max-w-[25%] sticky top-[22%]">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-2">Suppliers</h2>
          {brands && (
            <div className="flex flex-col">
              <div className="w-44">
                <select
                  id="options"
                  name="options"
                  onChange={handleSelectChange}
                  value={selectedBrand}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option value="All" selected>
                    All brands
                  </option>
                  {brands?.map((brand, index) => (
                    <option key={index} value={brand.title}>
                      {brand.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>
        <hr />
        <div className="flex xl:flex-col flex-wrap gap-5">
          {suppliers?.map((supplier, index) => (
            <SupplierList data={supplier} key={index} />
          ))}
        </div>
      </div>
      <RightDrawerSendEnquiry productData={productData} />
    </>
  );
};

export default Suppliers;
