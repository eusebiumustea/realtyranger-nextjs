"use client";
import { manageProperty } from "@/helpers/admin/manage-properties";
import { replaceElementAtIndex } from "@/helpers/data-structure";
import { Property } from "@/models";
import { buttonTheme } from "@/theme/button";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { BsPlusLg } from "react-icons/bs";
import { FaRegFileImage } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { Input } from "../input";

export function PropertyManagerForms({ property }: { property?: Property }) {
  const router = useRouter();
  const { handleSubmit, register, control } = useForm<Property>({
    defaultValues: {
      title: property?.title || "",
      price: property?.price || "",
      description: property?.description || "",
      dealType: property?.dealType || "sell",
      bathrooms: property?.bathrooms || 1,
      bedrooms: property?.bedrooms || 1,
      sqmeter: property?.sqmeter || 0,
      location: property?.location || "",
      address: property?.address || "",
      propertyType: property?.propertyType || "apartment",
      propertyFeatures: property?.propertyFeatures || [
        { title: "This is a template", description: "Description of feature" },
      ],
    },
  });
  const imagesForm = useForm({
    defaultValues: { images: property?.images || [] },
  });
  const onSubmit = useCallback(
    handleSubmit(async (propertyPayload) => {
      const images = imagesForm.getValues("images");
      console.log(images);

      await manageProperty({ ...property, ...propertyPayload, images });
      router.replace("/property-manager");
    }),
    []
  );
  return (
    <div className="w-full flex flex-col gap-4 justify-center">
      <h1 className="text-2xl mx-2 font-semibold font-ptsans">Images</h1>
      <Controller
        control={imagesForm.control}
        render={({ field }) => (
          <div className="w-full flex flex-col justify-center items-center gap-y-8">
            <div className="w-full justify-center flex flex-wrap gap-1">
              {field.value.map((img, i) => (
                <div
                  className="flex w-full 2sm:max-w-[320px] sm:max-w-52 sm:max-h-96 flex-col items-center justify-center"
                  key={i}
                >
                  <img className="object-cover w-full h-full" src={img} />
                  <button
                    onClick={() =>
                      field.onChange(field.value.filter((e) => e !== img))
                    }
                    className={buttonTheme({
                      variant: "icon-text",
                    })}
                  >
                    <RiDeleteBinLine color="red" size={16} />
                  </button>
                </div>
              ))}
            </div>
            <label
              className={buttonTheme({
                variant: "icon-text",
                className: "cursor-pointer",
              })}
              htmlFor="file-picker"
            >
              <FaRegFileImage size={18} />
              <span>Add image</span>
            </label>
            <input
              onChange={(e) => {
                const file = e.target.files?.item(0);
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (e) => {
                  field.onChange([...field.value, e.target?.result]);
                };
                reader.readAsDataURL(file);
              }}
              type="file"
              accept="image/*"
              multiple={false}
              id="file-picker"
              className={`hidden`}
            />
          </div>
        )}
        name="images"
      />
      <Input
        placeholder="Enter the property title"
        label="Title"
        className="border"
        {...register("title", { required: "Please enter the title" })}
      />
      <Input
        placeholder="Price of the property"
        label="Price"
        className="border"
        {...register("price", { required: "Please enter the price" })}
      />
      <Input
        placeholder="Describe the property"
        component="textarea"
        label="Description"
        className="border w-full min-h-32"
        {...register("description", {
          required: "Please enter the descrption",
        })}
      />
      <Input
        options={["apartment", "house"]}
        component="select"
        label="Property type"
        className="border w-full min-h-32"
        {...register("propertyType", {
          required: "Please select the property type",
        })}
      />
      <Input
        options={["sell", "rent"]}
        component="select"
        label="Deal type"
        className="border w-full min-h-32"
        {...register("dealType", { required: "Please select the deal" })}
      />
      <Input
        label="Number of bathrooms"
        className="border max-w-40"
        inputMode="numeric"
        type="number"
        {...register("bathrooms", {
          required: "Please enter the number of bathrooms",
          valueAsNumber: true,
        })}
      />
      <Input
        label="Number of bedrooms"
        className="border max-w-40"
        inputMode="numeric"
        type="number"
        {...register("bedrooms", {
          required: "Please enter the number of bedrooms",
          valueAsNumber: true,
        })}
      />
      <Input
        label="Square meter ( m2 )"
        className="border max-w-40"
        inputMode="numeric"
        type="number"
        {...register("sqmeter", {
          required: "Please enter the sqmeter",
          valueAsNumber: true,
        })}
      />
      <Input
        placeholder="Enter the property location name"
        label="Location Name (city, country, county)"
        className="border"
        {...register("location", {
          required: "Please enter the location name",
        })}
      />
      <Input
        placeholder="Enter the property address"
        label="Adress"
        className="border"
        {...register("address", {
          required: "Please enter the property adress",
        })}
      />
      <div className="flex flex-col my-2 gap-y-2">
        <h1 className="text-2xl mx-2 font-semibold font-ptsans">
          Property Features
        </h1>
        <Controller
          name="propertyFeatures"
          render={({ field: { value, onChange } }) => (
            <>
              {value.map((feature, i) => (
                <div
                  key={i}
                  className="w-full items-start justify-center flex flex-col sm:flex-row"
                >
                  <div className="w-full flex flex-col my-2 gap-y-2" key={i}>
                    <Input
                      component="input"
                      placeholder="Title"
                      className="border w-full self-center"
                      value={feature.title}
                      onChange={(e) =>
                        onChange(
                          replaceElementAtIndex(value, i, {
                            ...feature,
                            title: e.target.value,
                          })
                        )
                      }
                    />

                    <Input
                      component="textarea"
                      placeholder="Description"
                      className="border"
                      value={feature.description}
                      onChange={(e) =>
                        onChange(
                          replaceElementAtIndex(value, i, {
                            ...feature,
                            description: e.target.value,
                          })
                        )
                      }
                    />
                  </div>
                  <button
                    onClick={() =>
                      onChange(value.filter((_, index) => i !== index))
                    }
                    className={buttonTheme({
                      variant: "icon-text",
                      className: "self-start sm:self-center",
                    })}
                  >
                    <RiDeleteBinLine color="red" size={16} />
                  </button>
                </div>
              ))}
              <button
                onClick={() =>
                  onChange([...value, { title: "", description: "" }])
                }
                className={buttonTheme({
                  variant: "icon-text",
                  className: "self-center",
                })}
              >
                <BsPlusLg size={16} />

                <span className="text-base font-ptsans">Add new feature</span>
              </button>
            </>
          )}
          control={control}
        />
      </div>
      <button
        onClick={onSubmit}
        className={buttonTheme({
          variant: "primary",
          className: "sm:min-w-44 self-end",
        })}
      >
        Save
      </button>
    </div>
  );
}
