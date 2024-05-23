import { truncateString } from "../../utils/truncateString";
import {
  CupIcon,
  FirstPosition,
  SecondPosition,
  ThirdPosition,
  UserIcon,
} from "../Icons/Leaderboard";
import { LeaderboardPageStyles, TableStyles, TrStyles } from "./Style";
import { LeaderboardData, colorCodes } from "./data";

export const LeaderboardPage = () => {
  return (
    <LeaderboardPageStyles>
      <div className="cont">
        <div className="head">
          <CupIcon />
          <h3>Leaderboard</h3>
        </div>
        <TableStyles>
          <thead>
            <tr>
              <th>#</th>
              <th>Player</th>
              <th>Moves</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody
          >
            {LeaderboardData.map((ele, index) => (
              <TableRow
                key={index}
                player={ele.player}
                moves={ele.moves}
                time={ele.time}
                index={index}
              />
            ))}
          </tbody>
        </TableStyles>
      </div>
    </LeaderboardPageStyles>
  );
};

export interface ITableData {
  player: string;
  moves: number;
  time: string;
}
interface ITableRow extends ITableData {
  index: number;
}

export const TableRow: React.FC<ITableRow> = ({
  player,
  moves,
  time,
  index,
}) => {
  return (
    <TrStyles custom={index}>
      <td className="pos">
        {index === 0 ? (
          <FirstPosition />
        ) : index === 1 ? (
          <SecondPosition />
        ) : index === 2 ? (
          <ThirdPosition />
        ) : (
          <div className="circle">
            <p>{index + 1}</p>
          </div>
        )}
      </td>
      <td>
        <div className="fl">
          <UserIcon $colorCode={colorCodes[index % colorCodes.length]} />
          <p>{truncateString(player, 20)}</p>
        </div>
      </td>
      <td>
        <p>{moves}</p>
      </td>
      <td>
        <p>{time}</p>
      </td>
    </TrStyles>
  );
};
