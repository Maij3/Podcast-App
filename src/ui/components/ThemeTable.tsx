import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import { StyledTableCell, StyledTableRow } from "./StyleComponents";
import { FC } from "react";
import { Link } from "react-router-dom";
import { getFormat, getFormatMinutes } from "../../helpers";

interface Props {
  results: [];
}

export const ThemeTable: FC<Props> = ({ results }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Duration</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((row: any, key: any) => {
            if (key >= 1) {
              return (
                <StyledTableRow key={row?.trackName}>
                  <StyledTableCell component="th">
                    <Link
                      to={`/podcast/${row?.collectionId}/episode/${row?.trackId}`}
                      style={{ textDecoration: "none", color: "unset" }}
                    >
                      {row?.trackName}
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell>
                    {getFormat(new Date(row?.releaseDate))}
                  </StyledTableCell>
                  <StyledTableCell>
                    {getFormatMinutes(row?.trackTimeMillis)}
                  </StyledTableCell>
                </StyledTableRow>
              );
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
