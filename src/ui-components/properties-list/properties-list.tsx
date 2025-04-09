"use client";
import { PropertyCard } from "@/models";
import { CSSProperties, forwardRef, memo, PropsWithChildren } from "react";
import { GridComponents, VirtuosoGrid } from "react-virtuoso";
import { PropertyCardComponent } from "../property-card";
interface GridComponentsProps {
  style: CSSProperties;
}
interface PropertiesListProps {
  data?: PropertyCard[];
}
const gridComponents = {
  List: forwardRef(
    (
      { style, children, ...props }: PropsWithChildren<GridComponentsProps>,
      ref: React.Ref<HTMLDivElement>
    ) => (
      <div
        ref={ref}
        {...props}
        className="gap-4"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          ...style,
        }}
      >
        {children}
      </div>
    )
  ),
};
export const PropertiesList = memo(({ data }: PropertiesListProps) => (
  <VirtuosoGrid
    useWindowScroll
    style={{ width: "100%", paddingTop: 16, paddingBottom: 16 }}
    totalCount={data?.length}
    data={data}
    components={gridComponents as GridComponents}
    itemContent={(i, item) => <PropertyCardComponent key={i} {...item} />}
  />
));
