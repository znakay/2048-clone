import './index.scss';

type TileProps = {
  value: number;
  row: number;
  col: number;
};

const Tile = ({ value, row, col }: TileProps) => {
  const classes = ['tile', `tile_position-r${row}-c${col}`, `tile_2`];
  return (<div className={classes.join(' ')}>{value}</div>);
};

export default Tile;
