import { styled, TableCell, Theme, TableRow } from "@material-ui/core";
import { MultiHeaderDisplayOnlyTableCellProps, ColumnType } from "./interfaces";

const _getCellColor = (theme: Theme, type: ColumnType) => {
    switch (type) {
        case 'danger':
            return theme.palette.error.light;
        case 'header':
            return theme.palette.primary.light;
        default:
            return undefined;
    }
}

// TODO Make it work fine
export const StyledTableRow = styled(TableRow)({
    '& th:first-child': {
        borderLeft: 'none !important'
    },
    '& th:last-child': {
        borderRight: 'none !important'
    }
});

export const StyledTableCell = styled(TableCell)<Theme, MultiHeaderDisplayOnlyTableCellProps>(({theme, type}) => ({
    borderLeft: `1px solid rgba(224, 224, 224, 1)`, // TODO fix
    borderRight: `1px solid rgba(224, 224, 224, 1)`, // TODO fix
    backgroundColor: _getCellColor(theme, type) // TODO fix
}));