import { routes } from "@/core";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MemberEntity } from "./list.vm";

interface Props {
  members: MemberEntity[];
}

export const ListComponent: React.FC<Props> = (props) => {
  const { members } = props;
  return (
    <>
      <h2>Hello from List page</h2>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={routes.details(member.login)}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
    </>
  );

  // return (
  //   !!members && members.length>2 ?
  //     <>
  //       <h2>Hello from List page</h2>
  //       <div className="list-user-list-container">
  //         <span className="list-header">Avatar</span>
  //         <span className="list-header">Id</span>
  //         <span className="list-header">Name</span>
  //         {members.map((member) => (
  //           <React.Fragment key={member.id}>
  //             <img src={member.avatar_url} />
  //             <span>{member.id}</span>
  //             <Link to={routes.details(member.login)}>{member.login}</Link>
  //           </React.Fragment>
  //         ))}
  //       </div>
  //     </>
  //     :
  //     <>
  //       <h2>Back to the list page</h2>
  //       <div>the organization does not exist</div>
        
  //     </>
  // );


  



  // 
  // (  
  // ):
  //   <>
  //   hola
  //   </>
  
}; 