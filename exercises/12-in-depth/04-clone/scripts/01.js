const clone = obj =>
    Array.isArray(obj)
      ? obj.map(item => clone(item))
      : obj instanceof Date
        ? new Date(obj.getTime())
        : (typeof obj === 'object') && obj
          ? Object.getOwnPropertyNames(obj).reduce((o, prop) => ({ ...o, [prop]: clone(obj[prop]) }), {})
          : obj;
          
  let original = { prop1: "Original", objProp: { prop1: "Original" } };
  let swallowCopy = { ...original };
  let clonedObj = clone(original);
  
  clonedObj.prop1 = "Changed";
  clonedObj.objProp.prop1 = "Changed";
  
  console.log(`Original objects properties are '${original.prop1}' and '${original.objProp.prop1}'`);
  
  swallowCopy.prop1 = "Changed";
  swallowCopy.objProp.prop1 = "Changed";
  
  console.log(`Original objects properties are '${original.prop1}' and '${original.objProp.prop1}'`);