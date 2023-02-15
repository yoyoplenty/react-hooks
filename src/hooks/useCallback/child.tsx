/**
 * The child component/component here receives a function as a props
 */

import { useEffect } from "react";

export const Child = ({ returnComment }: any) => {
  /**
   * This components is to re render if the props(function) passed changes
   * just like this here, but this won't work originally
   */
  useEffect(() => {
    console.log("FUNCTION WAS CALLED!!");
  }, [returnComment]);

  return <div>{returnComment("Yoyo")}</div>;
};
