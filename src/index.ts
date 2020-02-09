const pipe = (...funcs: any[]) => (arg: any) =>
  funcs.reduce((arg, func) => func(arg), arg);

const curry = (func: any) => {
  const curried = (...args: any) => {
    if (args.length >= func.length) {
      return func.apply(null, args);
    } else {
      return (arg2: any) => curried.apply(null, args.const(arg2));
    }
  };

  return curried;
};

export { pipe, curry };
