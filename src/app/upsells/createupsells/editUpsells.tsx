"use client";
import React, { useEffect } from "react";

import { Toaster } from "react-hot-toast";
import handleApiCallFetch from "@/components/handleApiCallFetch";
import { envConfig } from "@/utility/environment";
import MoreSettings from "./moresettings";
import PhoneStructure from "./phone";
import Loader from "../loading";
import { Property } from "./page";

interface EditUpsellProps {
  upsell_id: string;
  title: string;
  shortDescription: string;
  price: string;
  attachedProperties: Property[];
  selectedImage: File | null;
  templateImageUrl: string;
  isLoading: boolean;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setShortDescription: React.Dispatch<React.SetStateAction<string>>;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  setAttachedProperties: React.Dispatch<React.SetStateAction<Property[]>>;
  setSelectedImage: React.Dispatch<React.SetStateAction<null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  goBack: () => void;
  handleImageUpload: (e: any) => void;
  handleDragOver: (e: any) => void;
  handleDrop: (e: any) => void;
  fetchListingData: () => void;
}

const EditUpsell = (props: EditUpsellProps) => {
  // console.log(props.attachedProperties);

  // useEffect(() => {
  //   props.attachedProperties !== null &&
  //     fetchAssociatedListing(props.upsell_id);
  // }, [props.upsell_id]);

  // const fetchAssociatedListing = async (id: string) => {
  //   const apiUrl = `${envConfig.backendUrl}/upsell/listing?upSellId=${id}`;
  //   const params = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   props.setIsLoading(true);
  //   const result: any = await handleApiCallFetch(apiUrl, params);

  //   props.setIsLoading(false);
  //   props.setAttachedProperties((prevProperties) =>
  //     prevProperties?.map((property) => {
  //       const updatedProperty = result.data?.find(
  //         (item: any) => item.id === property.id
  //       );
  //       return updatedProperty
  //         ? { ...property, status: 1 }
  //         : { ...property, status: 0 };
  //     })
  //   );
  // };

  return (
    <div className="flex flex-col items-center justify-start w-[100%] py-5">
      <Toaster position="top-center" reverseOrder={false} />

      {props.isLoading ? (
        <Loader />
      ) : (
        <div className="flex justify-center">
          <div className="flex flex-col items-center justify-start h-[85vh] overflow-y-scroll">
            <Toaster position="top-center" reverseOrder={false} />
            <div>
              <div className="grid grid-cols-3 gap-4 px-8 pt-8 bg-gradient-to-r from-[#FFFFFF] to-[#F4EBFF] shadow-md rounded-t-lg">
                <div className="col-span-1">
                  <div className="text-xl leading-5 font-semibold text-[#222222] mb-1">
                    Edit Upsells
                  </div>
                  <p className="text-sm font-normal text-[#222222]">
                    Build your own upsell
                  </p>
                </div>
              </div>

              <div
                className="grid grid-cols-3 gap-10 pb-8 bg-gradient-to-r from-[#FFFFFF] to-[#F4EBFF] shadow-md pr-10 pl-8 rounded-b-lg"
                onDragOver={props.handleDragOver}
                onDrop={props.handleDrop}
              >
                <div className="col-span-2">
                  <div className="flex items-center gap-10 mt-4 mb-5">
                    <div className="w-[240px] h-[120px] overflow-hidden">
                      {props.selectedImage ? (
                        <img
                          src={URL.createObjectURL(props.selectedImage)}
                          alt="Selected"
                          className="w-full h-full object-cover rounded-md"
                        />
                      ) : props.templateImageUrl ? (
                        <img
                          src={`${envConfig.backendUrl}/${props.templateImageUrl}`}
                          alt="Selected"
                          className="w-full h-full object-cover rounded-md"
                        />
                      ) : (
                        <div className="h-[120px] border border-dashed border-[#E9ECF3] p-[5px] rounded-lg">
                          <div className="flex items-center justify-center w-full h-full px-6 py-[16px] bg-[#E9ECF3] rounded-md">
                            <div className="flex flex-col items-center gap-[10px]">
                              <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_9473_795)">
                                  <path
                                    d="M20 10.6666H20.0133"
                                    stroke="#6F6883"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M16.6667 28H8C6.93913 28 5.92172 27.5786 5.17157 26.8284C4.42143 26.0783 4 25.0609 4 24V8C4 6.93913 4.42143 5.92172 5.17157 5.17157C5.92172 4.42143 6.93913 4 8 4H24C25.0609 4 26.0783 4.42143 26.8284 5.17157C27.5786 5.92172 28 6.93913 28 8V16.6667"
                                    stroke="#6F6883"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M4 21.3333L10.6667 14.6667C11.904 13.476 13.4293 13.476 14.6667 14.6667L20 20"
                                    stroke="#6F6883"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M18.6665 18.6666L19.9998 17.3333C20.8932 16.4746 21.9332 16.2346 22.9092 16.6133"
                                    stroke="#6F6883"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M21.3335 25.3334H29.3335"
                                    stroke="#6F6883"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M25.3335 21.3334V29.3334"
                                    stroke="#6F6883"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_9473_795">
                                    <rect width="32" height="32" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                              <span className="text-xs leading-[14px] font-medium text-[#222222]">
                                jpeg or png upto 2024 KB
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col justify-between h-[120px] py-3">
                      <h3 className="text-base leading-5 font-medium text-[#222222] mb-1">
                        Product Image
                      </h3>
                      <p className="text-xs leading-5 font-normal text-[#222222] mb-4">
                        Only image files are allowed to be uploaded here.
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={props.handleImageUpload}
                        className="hidden"
                        id="imageInput"
                      />
                      <label
                        htmlFor="imageInput"
                        className="bg-[#F5F0FB] text-[#7000FF] text-sm font-medium w-fit px-5 py-[10px] rounded-lg cursor-pointer"
                      >
                        Upload Image
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col mb-7">
                    <div className="mb-5 col-span-full">
                      <label
                        htmlFor="title"
                        className="block text-xs font-medium text-[#222222] mb-[6px]"
                      >
                        Title<span className="text-[#AD0C0C]"> *</span>
                      </label>
                      <input
                        type="text"
                        id="title"
                        className="text-sm font-normal text-[#72767A] border border-[#E9ECF3] rounded-lg px-4 py-[13px] w-[560px] focus:outline-none transition duration-300"
                        placeholder="Enter title here"
                        value={props.title}
                        onChange={(e) => props.setTitle(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-5 col-span-full">
                      <label
                        htmlFor="shortDescription"
                        className="block text-xs font-medium text-[#222222] mb-[6px]"
                      >
                        Short description
                      </label>
                      <textarea
                        id="description"
                        className="text-sm font-normal text-[#72767A] border border-[#E9ECF3] rounded-lg px-4 py-[13px] w-[560px] h-[90px] focus:outline-none transition duration-300"
                        placeholder="Write Description here"
                        value={props.shortDescription}
                        onChange={(e) =>
                          props.setShortDescription(e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="flex gap-[10px]">
                      <div className="">
                        <label
                          htmlFor="price"
                          className="flex text-xs font-medium text-[#222222] mb-[6px]"
                        >
                          Price
                          <span className="text-[#AD0C0C] mr-[6px]"> *</span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_9473_755)">
                              <path
                                d="M8.00016 1.33337C11.6822 1.33337 14.6668 4.31804 14.6668 8.00004C14.6682 9.75036 13.9812 11.431 12.7541 12.6791C11.527 13.9273 9.85826 14.6427 8.10818 14.6711C6.35809 14.6995 4.66706 14.0384 3.40016 12.8307C2.13327 11.623 1.39216 9.96548 1.33683 8.21604L1.3335 8.00004L1.33616 7.81337C1.43483 4.21804 4.38016 1.33337 8.00016 1.33337ZM8.00016 7.33337H7.3335L7.2555 7.33804C7.09346 7.35731 6.94413 7.43534 6.83577 7.55735C6.72742 7.67936 6.66757 7.83687 6.66757 8.00004C6.66757 8.16322 6.72742 8.32072 6.83577 8.44273C6.94413 8.56474 7.09346 8.64277 7.2555 8.66204L7.3335 8.66671V10.6667L7.33816 10.7447C7.35571 10.8935 7.42288 11.0321 7.52884 11.138C7.63479 11.244 7.77335 11.3112 7.92216 11.3287L8.00016 11.3334H8.66683L8.74483 11.3287C8.89364 11.3112 9.0322 11.244 9.13815 11.138C9.24411 11.0321 9.31128 10.8935 9.32883 10.7447L9.3335 10.6667L9.32883 10.5887C9.31289 10.4527 9.25545 10.3249 9.16432 10.2227C9.07319 10.1204 8.9528 10.0488 8.8195 10.0174L8.74483 10.004L8.66683 10V8.00004L8.66216 7.92204C8.64461 7.77323 8.57744 7.63467 8.47149 7.52872C8.36553 7.42276 8.22697 7.35559 8.07816 7.33804L8.00016 7.33337ZM8.00683 5.33337L7.92216 5.33804C7.76013 5.35731 7.61079 5.43534 7.50244 5.55735C7.39408 5.67936 7.33424 5.83687 7.33424 6.00004C7.33424 6.16322 7.39408 6.32072 7.50244 6.44273C7.61079 6.56474 7.76013 6.64277 7.92216 6.66204L8.00016 6.66671L8.08483 6.66204C8.24686 6.64277 8.3962 6.56474 8.50455 6.44273C8.61291 6.32072 8.67275 6.16322 8.67275 6.00004C8.67275 5.83687 8.61291 5.67936 8.50455 5.55735C8.3962 5.43534 8.24686 5.35731 8.08483 5.33804L8.00683 5.33337Z"
                                fill="#C6CBD5"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_9473_755">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </label>
                        <input
                          type="number"
                          id="price"
                          className="text-sm font-normal text-[#72767A] border border-[#E9ECF3] rounded-lg px-4 py-[13px] w-[180px] focus:outline-none transition duration-300"
                          placeholder="Price"
                          value={props.price}
                          onChange={(e) => props.setPrice(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <MoreSettings
                    attachedProperties={props.attachedProperties}
                    setAttachedProperties={props.setAttachedProperties}
                    fetchListingData={props.fetchListingData}
                  />
                </div>

                <div className="col-span-1">
                  <PhoneStructure
                    image={
                      props.selectedImage
                        ? URL.createObjectURL(props.selectedImage)
                        : props.templateImageUrl
                        ? `${envConfig.backendUrl}/${props.templateImageUrl}`
                        : ""
                    }
                    textContent={{
                      title: props.title,
                      description: props.shortDescription,
                      price: props.price,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditUpsell;
