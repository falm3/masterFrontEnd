import React from "react";
import { FilterType } from "./filter.vm";

interface OrganizationContext extends FilterType {
  setOrganizationName: (value: string) => void;
}

export const FilterContext = React.createContext<OrganizationContext>({
  organizationName: "",
  setOrganizationName: (value) => {},
});

export const FilterContextProvider = props => {
  const [organizationName, setOrganizationName] = React.useState("lemoncode")

  return(
    <FilterContext.Provider value={{organizationName, setOrganizationName}}>
      {props.children}
    </FilterContext.Provider>
  )
}