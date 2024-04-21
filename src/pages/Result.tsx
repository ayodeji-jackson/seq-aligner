import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import getWatermanMatrixCells, { Cell } from "../utils/waterman";
import { useLocation } from "react-router-dom";
import './Result.css';
import getDotMatrixCells from "../utils/dotMatrix";

export default function Result() {
  const [seq1, seq2, match, mismatch, gap] = useLocation().state;
  const [algo, setAlgo] = useState<'waterman' | 'matrix'>('waterman');

  return (
    <div>
      <div className="flex justify-center gap-10">
        <label><input type='radio' name='algo' value='waterman' onChange={() => setAlgo('waterman')} checked={algo === 'waterman'} /><span className="ml-2">Smith-Watermann</span></label>
        <label><input type='radio' value='matrix' name="algo" onChange={() => setAlgo('matrix')} checked={algo === 'matrix'} /><span className="ml-2">Dot Matrix</span></label>
      </div>

      <Table
        cells={algo === 'waterman' ? getWatermanMatrixCells(seq1, seq2, match, mismatch, gap) : getDotMatrixCells(seq1, seq2)}
        string1={seq1}
        string2={seq2}
        hasPadding={algo === 'waterman' ? true : false}
        isWindow={false}
      />
    </div>
  );
}

type TableNumberCell = { cells: Cell[][]; alignments: (string | number)[][] };
type TableDotCell = { cells: ({ score: JSX.Element } | { score: string })[][] };

function Table({
  string1,
  string2,
  cells,
  hasPadding,
  isWindow,
}: {
  string1: string;
  string2: string;
  cells: TableNumberCell | TableDotCell;
  hasPadding: boolean;
  isWindow: boolean;
}) {
  const { alignments = [] } = cells as TableNumberCell;
  const modified_string1 = hasPadding ? "i" + string1 : string1;
  const modified_string2 = hasPadding ? "j" + string2 : string2;
  const [maxIters, setMaxIters] = useState(
    modified_string1.length * modified_string2.length - 1
  );
  const [stopIter, setStopIter] = useState(0);

  useEffect(() => {
    let numCircles = 0;
    for (const row of cells.cells) {
      for (const cell of row) {
        if (cell.score !== 0) {
          numCircles++;
        }
      }
    }

    let newMaxIter;
    if (isWindow) {
      newMaxIter = numCircles;
    } else {
      newMaxIter = modified_string1.length * modified_string2.length - 1;
    }

    setMaxIters(newMaxIter);
    setStopIter(Math.min(newMaxIter, stopIter));
  }, [cells.cells, isWindow, stopIter]);

  let currentIter = 0;
  const cellsJSX = [];

  for (let i = 0; i < cells.cells.length + 1; i++) {
    let row;
    if (i === 0) {
      const stringCells = [];
      for (const chr of modified_string2) {
        stringCells.push(
          <div className="table_cell table_header" key={uuidv4()}>
            {chr}
          </div>
        );
      }
      row = [
        <div className="table_cell table_header" key={uuidv4()}>
          &nbsp;
        </div>,
        ...stringCells,
      ];
    } else {
      row = [
        <div className="table_cell table_header" key={uuidv4()}>
          {modified_string1[i - 1]}
        </div>,
      ];
      for (let j = 0; j < cells.cells[0].length; j++) {
        if (cells.cells[i - 1][j].score === 0 && isWindow) {
          currentIter--;
        }
        row.push(
          <div className="table_cell" key={uuidv4()}>
            {currentIter <= stopIter ? cells.cells[i - 1][j].score : " "}
          </div>
        );
        currentIter++;
      }
    }
    cellsJSX.push(
      <div className="table_row" key={uuidv4()}>
        {row}
      </div>
    );
  }

  let alignmentsJSX;
  if (alignments.length !== 0) {
    const alignmentsList = [];
    for (const alignment of alignments) {
      alignmentsList.push(
        <div className="alignment_results" key={uuidv4()}>
          {alignment[0]}
        </div>
      );
      alignmentsList.push(
        <div className="alignment_results" key={uuidv4()}>
          {alignment[1]}
        </div>
      );
      alignmentsList.push(<div key={uuidv4()}>score: {alignment[2]}</div>);
      alignmentsList.push(<div key={uuidv4()} className="separator"></div>);
    }
    alignmentsList.pop();
    alignmentsJSX = (
      <div className="alignments_container">
        <div className="alignments_title">Alignments matched</div>
        {alignmentsList}
      </div>
    );
  }

  return (
      <div className="flex mx flex-col 2xl:mx-auto items-center relative mb-5">
        <div className="horizontal_flex">
          <div className="table_nav_buttons" onClick={() => setStopIter(0)}>
            Start
          </div>
          <div
            className="table_nav_buttons"
            onClick={() => setStopIter(Math.max(stopIter - 1, 0))}
          >
            Previous
          </div>
          <div
            className="table_nav_buttons"
            onClick={() => setStopIter(Math.min(stopIter + 1, maxIters))}
          >
            Next
          </div>
          <div
            className="table_nav_buttons"
            onClick={() => setStopIter(maxIters)}
          >
            End
          </div>
        </div>
        {cellsJSX}
        {alignmentsJSX}
        <button className="md:absolute bg-primary transition hover:brightness-95 text-white px-4 md:px-8 py-3 md:py-3 rounded-md md:rounded-xl bottom-0 right-0 md:text-base">
          Download
        </button>
      </div>
  );
}
