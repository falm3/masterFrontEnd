import React from "react";
import { ListComponent } from "./list.component";
import { MemberEntity } from "/list.vm";
import { FilterContext } from "@/core/filter";


export const ListContainer: React.FC = () => {
  const filterContext = React.useContext(FilterContext);

  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [organization, setOrganization] = React.useState(filterContext.organizationName);
  
  const handleFilter=()=>{
    filterContext.setOrganizationName(organization)
  }

  const handleReset=()=>{
    setOrganization('lemoncode');
    filterContext.setOrganizationName('lemoncode');

  }

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${filterContext.organizationName}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json));
  }, [filterContext.organizationName]);

  return <>
    <div>
      <input placeholder="filter by organization" value={organization} onChange={(e)=>setOrganization(e.target.value)}  />
      <button onClick={handleFilter}>
        filter
      </button>
    </div>
    {!!members && members.length>2 ?(
    <ListComponent members={members} />
    ):(
    <>
      <h2>Back to the list page</h2>
      <div>The organization does not exist. Please press the button <br/><br/>
        <button onClick={handleReset}>
          Reset the list
        </button>
      </div>
    </>
    )}
  </>;
};

