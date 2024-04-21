const getDotMatrixCells = (string1: string, string2: string) => {
  const cells = [];
  for (let i = 0; i < string1.length; i++) {
      const row = [];
      for (let j = 0; j < string2.length; j++) {
          const isMatch = string1[i] === string2[j];
          if (isMatch) {
              row.push({ score: <div className="dot_font text-3xl font-[1000]">·</div> });
          } else {
              row.push({ score: ' ' });
          }
      }
      cells.push(row);
  }
  return { cells: cells };
};

export default getDotMatrixCells;