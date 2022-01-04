import React, { Suspense, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
const Base64Util = React.lazy(() => import("Base64UtilApp_Remote/Base64Util"));
const JSONPrettyUtil = React.lazy(() =>
  import("JSONPrettyUtilApp_Remote/JSONPrettyUtil"),
);

export default function UtilsPage(props) {
  const getBreadcrumb = (indexUtil) => {
    if (indexUtil === 1) {
      return "Base64 Util";
    } else if (indexUtil === 2) {
      return "Pretty JSON";
    }
  };
  return (
    <>
      {props.indexUtil !== 0 ? (
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => props.toHome(0)}>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">
              {getBreadcrumb(props.indexUtil)}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      ) : null}

      <>
        {props.indexUtil === 1 && (
          <Suspense fallback={<h1>Error Loading base64 util</h1>}>
          <Base64Util />
        </Suspense>
        )}
      </>
      <>
        {props.indexUtil === 2 && (
          <Suspense fallback={<h1>Error Loading Json Pretty</h1>}>
            <JSONPrettyUtil />
          </Suspense>
        )}
      </>
    </>
  );
}
