import { forwardRef, useImperativeHandle, useState } from "react";

/**
 * You have to use the forwardRef to make this component referenceable
 */
const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  //The alter toggle function can be accessed anywhere from the parent component
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <div>
      <button>Button from Child</button>
      {toggle && <span>Toggled</span>}
    </div>
  );
});

export default Button;
