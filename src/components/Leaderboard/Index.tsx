import { useEffect, useState } from "react";
import { truncateString } from "../../utils/truncateString";
import {
  CupIcon,
  FirstPosition,
  SecondPosition,
  ThirdPosition,
  UserIcon,
} from "../Icons/Leaderboard";
import {
  LeaderboardPageStyles,
  NoDataStyles,
  TableStyles,
  TrStyles,
} from "./Style";
import { colorCodes } from "./data";
import { BACKEND_URL } from "../../libs/config";
import axios from "axios";
import { ButtonLoader } from "../Layout/Styles";
import { formatSeconds } from "../../utils/formatTime";

export const LeaderboardPage = () => {
  const [leaderboardData, setLeaderboardData] = useState<ITableData[] | null>(
    null
  );
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/attempts/rankings`)
      .then((res) => {
        // console.log(res.data);
        setLeaderboardData(res.data);
      })
      /* eslint-disable @typescript-eslint/no-explicit-any */
      .catch((error: any) => console.log(error));
  }, []);
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
          <tbody>
            {leaderboardData &&
              leaderboardData?.length > 0 &&
              leaderboardData.map((ele, index) => (
                <TableRow
                  key={index}
                  index={index}
                  {...ele}
                />
              ))}
          </tbody>
        </TableStyles>
        {leaderboardData === null && <ButtonLoader />}
        {leaderboardData !== null && leaderboardData.length === 0 && (
          <NoDataStyles>
            <h2>No Data Found</h2>
          </NoDataStyles>
        )}
      </div>
    </LeaderboardPageStyles>
  );
};

export interface ITableData {
  name: string;
  position: string;
  moves: number;
  duration: number;
  score?: number;
  id: string;
  email_address?: string;
}
interface ITableRow extends ITableData {
  index: number;
}

export const TableRow: React.FC<ITableRow> = ({
  name,
  moves,
  duration,
  index,
  position,
}) => {
  return (
    <TrStyles custom={index}>
      <td className="pos">
        {position === "1" ? (
          <FirstPosition />
        ) : position === "2" ? (
          <SecondPosition />
        ) : position === "3" ? (
          <ThirdPosition />
        ) : (
          <div className="circle">
            <p>{position}</p>
          </div>
        )}
      </td>
      <td>
        <div className="fl">
          <UserIcon $colorCode={colorCodes[index % colorCodes.length]} />
          <p>{truncateString(name, 20)}</p>
        </div>
      </td>
      <td>
        <p>{moves}</p>
      </td>
      <td>
        <p>{formatSeconds(duration)}</p>
      </td>
    </TrStyles>
  );
};
