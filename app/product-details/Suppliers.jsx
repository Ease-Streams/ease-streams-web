"use client";
import React, { useEffect, useState } from "react";
import SupplierList from "./SupplierList";
import RightDrawerSendEnquiry from "../components/RightDrawerSendEnquiry";

const Suppliers = ({
  supplierData,
  brandsData,
  productData,
  PAYLOAD_CMS_IMG_SERVER,
}) => {
  const [suppliers, setSuppliers] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedSuppliers, setSelectedSuppliers] = useState([]);
  const [supplier, setSupplier] = useState([]);


  useEffect(() => {
    setBrands(brandsData);
    if (selectedBrand !== "All") {
      const matchingSuppliers = supplierData.filter((supplier) =>
        supplier.brandsRef.some((brand) => brand.title === selectedBrand)
      );
      setSuppliers(matchingSuppliers);
    } else {
      setSuppliers(supplierData);
    }
  }, [selectedBrand, brandsData, supplierData]);

  const handleClick = (e,data) => {
    setSupplier(data)
  };

  const handleSelectChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleCheckboxChange = (supplierId) => {
    setSelectedSuppliers((prevSelected) =>
      prevSelected.includes(supplierId)
        ? prevSelected.filter((id) => id !== supplierId) // Deselect supplier
        : [...prevSelected, supplierId] // Select supplier
    );
  };

  const handleSendEnquiry = (e) => {
    const selectedSuppliersData = suppliers.filter((supplier) =>
      selectedSuppliers.includes(supplier.id)
    );
    handleClick(e,selectedSuppliersData)

    // Add logic to send inquiry to selected suppliers
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
                  defaultValue="All"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option value="All">All brands</option>
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
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
          {suppliers?.map((supplier, index) => (
            <SupplierList
              data={supplier}
              key={index}
              PAYLOAD_CMS_IMG_SERVER={PAYLOAD_CMS_IMG_SERVER}
              onCheckboxChange={handleCheckboxChange}
              isSelected={selectedSuppliers.includes(supplier.id)}
              selectedSuppliers={selectedSuppliers}
              handleClick={handleClick}
            />
          ))}
        </div>
        {selectedSuppliers.length > 0 && (
          <button
            className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
            onClick={handleSendEnquiry}>
            Send Enquiry to Selected Suppliers ({selectedSuppliers.length})
          </button>
        )}
      </div>
      <RightDrawerSendEnquiry supplier={supplier} setSupplier={setSupplier} productData={productData} PAYLOAD_CMS_IMG_SERVER={PAYLOAD_CMS_IMG_SERVER} setSelectedSuppliers={setSelectedSuppliers} />
    </>
  );
};

export default Suppliers;
