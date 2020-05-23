import React, { FC } from 'react';
import { MultiHeaderDisplayOnlyTableProps, TableRowData, TableColumnData} from './interfaces';
import { TableContainer, Paper, TableHead, Table, TableBody, TableFooter, TablePagination } from '@material-ui/core';
import TablePaginationActions from '@material-ui/core/TablePagination/TablePaginationActions';
import { StyledTableCell, StyledTableRow } from './styles';

const TableRowSection: FC<TableRowData> = ({ columns }) => (
    <StyledTableRow>
        {
            columns?.map((column: TableColumnData) => (
                <TableColumnSection {...column} />
            ))
        }
    </StyledTableRow>
);

const TableColumnSection: FC<TableColumnData> = ({
    data,
    colSpan,
    rowSpan,
    type
}) => (
    <StyledTableCell type={type} colSpan={colSpan} rowSpan={rowSpan}>
        {data}
    </StyledTableCell>
);

const MultiHeaderDisplayOnlyTable: FC<MultiHeaderDisplayOnlyTableProps> = ({
    headers,
    data,
    totalCount,
    rowsPerPage,
    page,
    onChangePage,
    onChangeRowsPerPage
}) => {
    const changePageHandler = React.useCallback((
        _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, 
        page: number
    ) => {
        onChangePage(page);
    }, [onChangePage]);

    const changeRowsPerPageHandler = React.useCallback((
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        const rowsPerPage: number = parseInt(event.target.value);
        onChangeRowsPerPage(rowsPerPage);
    }, [onChangeRowsPerPage]);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    {
                        headers.map((header: TableRowData) => (
                            <TableRowSection {...header} />
                        ))
                    }
                </TableHead>
                <TableBody>
                    {
                        data.map((datum: TableRowData) => (
                            <TableRowSection {...datum} />
                        ))
                    }
                </TableBody>
                <TableFooter>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 50, { label: 'Все', value: -1 }]}
                        colSpan={3}
                        count={totalCount}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={changePageHandler}
                        onChangeRowsPerPage={changeRowsPerPageHandler}
                        ActionsComponent={TablePaginationActions}
                        />
                </TableFooter>
            </Table>
        </TableContainer>
    );
};

export default MultiHeaderDisplayOnlyTable;