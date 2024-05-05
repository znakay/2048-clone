import { useState } from 'react';
import Tile from '../../molecules/Tile';
import './index.scss';

const Field = () => {
  const [matrix, setMatrix] = useState<number[][] | null>([
    [2, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);

  const calcTilesPosition = matrix?.reduce(
    (acc: number[][], curr: number[], rowIndex: number) => {
      curr.forEach((element, colIndex) => {
        if (element) {
          acc.push([rowIndex, colIndex]);
        }
      });
      return acc;
    },
    []
  );

  return (
    <div className="field">
      <div className="field__container">
        <div className="field__grid-container">
          <div className="field__grid-row">
            <div className="field__grid-tile" data-row="0" data-col="0"></div>
            <div className="field__grid-tile" data-row="0" data-col="1"></div>
            <div className="field__grid-tile" data-row="0" data-col="2"></div>
            <div className="field__grid-tile" data-row="0" data-col="3"></div>
          </div>
          <div className="field__grid-row">
            <div className="field__grid-tile" data-row="1" data-col="0"></div>
            <div className="field__grid-tile" data-row="1" data-col="1"></div>
            <div className="field__grid-tile" data-row="1" data-col="2"></div>
            <div className="field__grid-tile" data-row="1" data-col="3"></div>
          </div>
          <div className="field__grid-row">
            <div className="field__grid-tile" data-row="2" data-col="0"></div>
            <div className="field__grid-tile" data-row="2" data-col="1"></div>
            <div className="field__grid-tile" data-row="2" data-col="2"></div>
            <div className="field__grid-tile" data-row="2" data-col="3"></div>
          </div>
          <div className="field__grid-row">
            <div className="field__grid-tile" data-row="3" data-col="0"></div>
            <div className="field__grid-tile" data-row="3" data-col="1"></div>
            <div className="field__grid-tile" data-row="3" data-col="2"></div>
            <div className="field__grid-tile" data-row="3" data-col="3"></div>
          </div>
        </div>
        <div className="field__tiles">
          {calcTilesPosition?.map(([row, col]) => (
            <Tile value={2} row={row} col={col} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Field;
