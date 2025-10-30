import React, { useState } from "react";

function Object() {
  const [obj, setObj] = useState({ name: "Rahul", age: 33 });
  function change(e) {
    const { name, value } = e.target;
    // setObj({ ...obj, [name]: value }); not recommented, will create new obj in faster batch updates
    setObj((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input name="name" type="text" value={obj.name} onChange={change} />
      <input name="age" type="number" value={obj.age} onChange={change} />
      <pre>{JSON.stringify(obj)}</pre>
    </div>
  );
}

export default Object;
