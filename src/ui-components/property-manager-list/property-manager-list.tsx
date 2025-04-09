"use client";
import { PropertyCard } from "@/models";
import { Virtuoso } from "react-virtuoso";
import { EditPropertyCard } from "../edit-property-card";
import { buttonTheme } from "@/theme/button";
import { redirect, useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";

export function PropertyManagerList({
  properties,
}: {
  properties: PropertyCard[];
}) {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() =>
          router.push("/property-manager/create", { scroll: false })
        }
        className={buttonTheme({
          variant: "icon-text",
          className:
            "fixed right-0 bottom-0 m-8 sm:m-16 z-20 gap-x-1 bg-white hover:bg-slate-50",
        })}
      >
        <BsPlusLg size={16} />
        <h1 className="text-xl">Create</h1>
      </button>
      <Virtuoso
        useWindowScroll
        style={{
          height: "100%",
          width: "100%",
        }}
        data={properties}
        components={{
          List: ({ children, ref, ...props }) => (
            <div
              {...props}
              className="flex flex-col gap-y-4 my-4 justify-center items-center"
              ref={ref}
            >
              {children}
            </div>
          ),
        }}
        itemContent={(i, property) => (
          <EditPropertyCard key={i} {...property} />
        )}
      />
    </>
  );
}
