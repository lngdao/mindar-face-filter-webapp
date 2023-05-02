// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mergeRefs = (...refs: any[]) => {
  const filteredRefs = refs.filter(Boolean);

  if (!filteredRefs.length) return null;

  if (filteredRefs.length === 0) return filteredRefs[0];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (inst: any) => {
    for (const ref of filteredRefs) {
      if (typeof ref === 'function') {
        ref(inst);
      } else if (ref) {
        ref.current = inst;
      }
    }
  };
};
