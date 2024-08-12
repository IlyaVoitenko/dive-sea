import { useState } from "react";
import iconEdit from "../../../assets/edit.svg";
import iconUpload from "../../../assets/icons/File Upload/Line.svg";

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
const CreateNFTForm = () => {
  const [isCheckedDirectSale, setIsCheckedDirectSale] = useState(false);
  const [isCheckedPutOnSale, setIsCheckedPutOnSale] = useState(false);
  const [uploadFile, setUploadUser] = useState(null);

  const handleCheckboxChangeDirectSale = () =>
    setIsCheckedDirectSale(!isCheckedDirectSale);

  const handleCheckboxChangePutOnSale = () =>
    setIsCheckedPutOnSale(!isCheckedPutOnSale);

  const handlePartOneChange = (e, setFieldValue) => {
    const value = e.value.replace(/\D/g, "");
    let newValue = value;
    if (newValue.length <= 3) {
      setFieldValue("sizeOne", newValue);
      if (value.length === 3) document.getElementById("sizeTwo").focus();
    }
  };
  let stocks = [];
  for (let i = 1; i <= 100; i++) {
    if (i < 10) stocks.push("00" + i);
    else if (i < 100) stocks.push("0" + i);
    else stocks.push("" + i);
  }
  const handlePartTwoChange = (target, setFieldValue) => {
    let value = target.value.replace(/\D/g, "");
    if (value.length <= 3) setFieldValue("sizeTwo", value);
  };

  return (
    <Formik
      initialValues={{
        tags: "",
        name: "",
        sizeOne: "",
        sizeTwo: "",
        description: "",
        royalty: "",
        price: "",
        stock: "",
        typeCrypto: "",
        putOnSale: false,
        directSale: false,
        fileUser: "",
      }}
      validationSchema={Yup.object({
        sizeOne: Yup.string()
          .matches(/^\d{3}$/, "Must be exactly 3 digits")
          .required("Required"),
        sizeTwo: Yup.string()
          .matches(/^\d{3}$/, "Must be exactly 3 digits")
          .required("Required"),
        name: Yup.string().required("Required"),
        description: Yup.string().required("Required"),
        royalty: Yup.string().required("Required"),
        price: Yup.string().required("Required"),
        stock: Yup.string().required("Required"),
        file: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className="flex w-full justify-evenly mobile:items-center flex-row-reverse mobile:flex-col tablet:flex-col">
          <div className="flex items-start justify-center pt-[4%]">
            <div className="  flex flex-col justify-between items-center w-full desktop:w-[468px] desktop:h-[533px] laptop:w-[332.83px] laptop:h-[379.06px] tablet:w-[332.83px] tablet:h-[379.06px] mobile:h-[496px] mobile:w-[310.56px]">
              <label
                htmlFor="fileUser"
                className="shadow-boxShadowUpload bg-[#FCFCFD] flex flex-col border-none items-center justify-center cursor-pointer uploadSizeContainer"
              >
                {uploadFile ? (
                  <img
                    className="uploadSizeContainer "
                    src={uploadFile && uploadFile}
                  />
                ) : (
                  <div className="flex  flex-col items-center justify-between  desktop:w-[178.06px] desktop:h-[116.05px] laptop:w-[126.63px] laptop:h-[82.58px] tablet:w-[126.63px] tablet:h-[82.58px] mobile:w-[132.01px] mobile:h-[85.49px]">
                    <img
                      src={uploadFile ? uploadFile : iconUpload}
                      className=" desktop:h-[51.24px] desktop:w-[51.24px] laptop:w-[36.47px] laptop:h-[36.47px] tablet:w-[36.47px] tablet:h-[36.47px] mobile:w-[37.99px] mobile:h-[37.99px]"
                    />
                    <span className=" font-poppins text-center text-[#777E90] font-[400] desktop:text-[15.37px] desktop:leading-[25.62px] laptop:text-[10.93px] laptop:leading-[18.22px] tablet:text-[10.93px] tablet:leading-[18.22px] mobile:text-[11.4px] mobile:leading-[18.99px]">
                      PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.
                    </span>
                  </div>
                )}
              </label>
              <Field
                id="fileUser"
                name="fileUser"
                type="file"
                placeholder="Upload"
                accept="image/png,.jpg,.jpeg,.svg"
                onChange={({ currentTarget }) => {
                  if (!currentTarget.files) return;

                  setUploadUser(URL.createObjectURL(currentTarget.files[0]));
                  setFieldValue("image", currentTarget.files[0]);
                }}
                className="hidden"
              />
              <label
                htmlFor="fileUser"
                className="formBtnTextCreateNFT flex justify-center items-center desktop:rounded-[16px] laptop:rounded-[11.38px] tablet:rounded-[11.38px] mobile:rounded-[15.2px] bg-[#141416] desktop:w-[327px] desktop:h-[63px]  laptop:w-[232.56px] laptop:h-[44.8px]  tablet:w-[232.56px] tablet:h-[44.8px]  mobile:w-[224px] mobile:h-[60px]"
              >
                Upload
              </label>
            </div>
          </div>
          <div className="flex justify-evenly flex-col  desktop:h-[1200px] desktop:w-[702.1px] laptop:h-[900px] laptop:w-[499.32px] tablet:h-[900px] tablet:w-[710.38px] mobile:h-[1000px] mobile:w-[313.46px]">
            <section className="containerField">
              <label htmlFor="name" className="labelForm">
                Name
              </label>
              <img src={iconEdit} alt="iconEdit" className="formIconEdit" />
              <Field
                name="name"
                className="fieldForm"
                placeholder="ArtWork Name"
                type="text"
              />
            </section>
            <section className="relative flex flex-col justify-between desktop:h-[210px] laptop:h-[149.35px] tablet:h-[149.35px]  mobile:h-[135.39px]">
              <label htmlFor="description" className="labelForm">
                Description
              </label>
              <img
                src={iconEdit}
                alt="iconEdit"
                className="formIconEdit top-[30%]"
              />
              <Field
                name="description"
                as="textarea"
                placeholder="Enter Your Description"
                className="fieldForm pt-5 desktop:h-[165px] laptop:h-[117.35px] tablet:h-[117.35px] mobile:h-[106.38px]"
              />
            </section>
            <div className="flex  containerSizeAndRoyalty">
              <section className="flex flex-col  justify-between selectRoyaltyFormCreateNFTContainer">
                <label htmlFor="royal" className="labelForm">
                  Royalty
                </label>
                <Field
                  as="select"
                  className="fieldForm selectRoyaltyFormCreateNFT text-[#9596A6] fieldsSizeAndRoyaltyText desktop:w-[146.95px] desktop:h-[63.39px]  laptop:w-[104.51px] laptop:h-[45.08px] tablet:w-[104.51px] tablet:h-[45.08px] mobile:w-[94.74px] mobile:h-[40.87px] desktop:rounded-[12.33px] laptop:rounded-[8.77px] tablet:rounded-[8.77px] mobile:rounded-[7.95px] "
                  name="price"
                >
                  <option value="Royalty">Royalty</option>
                  <option value="Royalty">Royalty</option>
                  <option value="Royalty">Royalty</option>
                </Field>
              </section>
              <section className="flex flex-col justify-between ml-9 ">
                <label htmlFor="sizeOne" className="labelForm">
                  Size
                </label>
                <section className="flex justify-center items-center desktop:w-[131px] desktop:h-[63px] laptop:w-[93.17px] laptop:h-[44.8px] tablet:w-[93.17px] tablet:h-[44.8px] mobile:w-[84.46px] mobile:h-[40.62px] desktop:rounded-[12.33px] laptop:rounded-[8.77px] tablet:rounded-[8.77px] mobile:rounded-[7.95px]  bg-[#EFEFEF]  text-[#9596A6] fieldsSizeAndRoyaltyText">
                  <span>Ex - </span>
                  <Field
                    type="text"
                    name="sizeOne"
                    placeholder="000"
                    onChange={({ target }) =>
                      handlePartOneChange(target, setFieldValue, values)
                    }
                    className="w-[25%] text-center border-none focus:outline-none bg-[#EFEFEF]"
                  />
                  <span> x </span>
                  <Field
                    id="sizeTwo"
                    type="text"
                    name="sizeTwo"
                    placeholder="000"
                    onChange={({ target }) =>
                      handlePartTwoChange(target, setFieldValue, values)
                    }
                    className="w-[25%] text-center  border-none focus:outline-none bg-[#EFEFEF]"
                  />
                </section>
              </section>
            </div>

            <section className="containerField">
              <label htmlFor="name" className="labelForm">
                Tags
              </label>
              <img src={iconEdit} alt="iconEdit" className="formIconEdit" />
              <Field
                name="tags"
                className="fieldForm"
                placeholder="Beautiful Castle, Monkeys ETC"
                type="text"
              />
            </section>
            <section className="flex justify-between">
              <div className="containerField w-full">
                <label htmlFor="name" className="labelForm">
                  Price
                </label>
                <div className="selectFormCreateNFTContainer flex">
                  <Field
                    as="select"
                    className="fieldForm selectFormCreateNFT text-[#9596A6] rounded-tr-[0px] rounded-br-[0px] pr-6"
                    name="typeCrypto"
                  >
                    <option value="eth">eth</option>
                    <option value="eth">eth</option>
                    <option value="eth">eth</option>
                  </Field>
                  <span className="bg-[#EFEFEF] text-[#DADADA] flex justify-center items-center text-[30px] laptop:text-[25px] tablet:text-[25px] mobile:text-[25px]">
                    |
                  </span>
                  <Field
                    name="price"
                    className="fieldForm rounded-tl-[0px] rounded-bl-[0px] w-[70%] mobile:w-[50%] pr-1"
                    placeholder="0.00007 ETC"
                    type="text"
                  />
                </div>
              </div>
              <section className="flex flex-col  justify-between selectRoyaltyFormCreateNFTContainer">
                <label htmlFor="royal" className="labelForm">
                  In stock
                </label>
                <Field
                  as="select"
                  className="fieldForm selectRoyaltyFormCreateNFT text-[#9596A6] fieldsSizeAndRoyaltyText desktop:w-[146.95px] desktop:h-[63.39px]  laptop:w-[104.51px] laptop:h-[44.09px] tablet:w-[104.51px] tablet:h-[45.08px] mobile:w-[94.74px] mobile:h-[40.87px] desktop:rounded-[12.33px] laptop:rounded-[8.77px] tablet:rounded-[8.77px] mobile:rounded-[7.95px] "
                  name="stock"
                >
                  {stocks &&
                    stocks.map((stock) => (
                      <option key={stock} value={stock}>
                        {stock}
                      </option>
                    ))}
                </Field>
              </section>
            </section>

            <label className="containerToggle">
              <section className="flex flex-col justify-between h-full">
                <span className="toggleTitle">Put On Sale</span>
                <p className="toggleSubtitle">
                  People Will Bids On Your NFT Project
                </p>
              </section>
              <div className="relative">
                <Field
                  type="checkbox"
                  checked={isCheckedPutOnSale}
                  onChange={handleCheckboxChangePutOnSale}
                  className="sr-only"
                  name="putOnSale"
                />
                <div
                  className={`toggleFormBg ${
                    isCheckedPutOnSale ? "bg-black" : "bg-[#E7E4E4]"
                  }`}
                ></div>
                <div
                  className={`toggleFormCircle ${
                    isCheckedPutOnSale
                      ? "toggleFormCircleActive"
                      : "toggleFormCircleNotActive"
                  }`}
                ></div>
              </div>
            </label>

            <label className="containerToggle">
              <section className="flex flex-col justify-between h-full">
                <span className="toggleTitle">Direct Sale</span>
                <p className="toggleSubtitle">No Bids - Only Direct Selling</p>
              </section>
              <div className="relative">
                <Field
                  type="checkbox"
                  checked={isCheckedDirectSale}
                  onChange={handleCheckboxChangeDirectSale}
                  className="sr-only"
                  name="directSale"
                />
                <div
                  className={`toggleFormBg ${
                    isCheckedDirectSale ? "bg-black" : "bg-[#E7E4E4]"
                  }`}
                ></div>
                <div
                  className={`toggleFormCircle ${
                    isCheckedDirectSale
                      ? "toggleFormCircleActive"
                      : "toggleFormCircleNotActive"
                  }`}
                ></div>
              </div>
            </label>
            <button type="submit" className="btnFormCreateNFT ">
              Create
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateNFTForm;
