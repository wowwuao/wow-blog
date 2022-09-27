const getValidValue = (value: any, filter?: boolean): any => {
  if (value) {
    if (Array.isArray(value)) {
      return value.length > 0 ? value : null;
    }

    if (typeof value === 'object') {
      const keys = Object.keys(value);
      if (keys.length > 0) {
        keys.forEach((i) => {
          if (!value[i] && value[i] !== 0) {
            delete value[i];
          }
        });
        return Object.keys(value).length === 0 ? null : value;
      }
      return null;
    }
    return value;
  }
  return null;
};

console.log(getValidValue({ a: '', b: null }));