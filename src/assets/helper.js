const convertSelectOption = (data) => {
  let Option = [];
  data.length > 0 &&
    data.forEach((val) => {
      Option.push({ label: val.name, value: val.id });
    });
  return Option;
};

export { convertSelectOption };
