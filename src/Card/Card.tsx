import React from "react";
type Props ={
    header : string ,
    footer : string ,
    size : number,
    children? : |React.ReactChild
        | React.ReactChild[];
}
export default const  Card :React.FCpro){
    const {header,footer,size,children}=props;
    return(
        <div className={"text-center card col-"+size+" ml-1"}>
            <div className={"card-header"}>
                {header||null}
            </div>
            <div className={"card-body"}>
                {children}
            </div>
            <div className={"card-footer"}>
                {footer||null}
            </div>
        </div>
    );
}