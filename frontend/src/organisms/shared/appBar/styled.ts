import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme: Theme) => {
    console.log(theme.zIndex.drawer);
    return createStyles({
        appBar: {
          zIndex: theme.zIndex.drawer + 1,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        },
        appBarShift: {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
        menuButton: {
          marginRight: 36,
        },
        hide: {
          display: 'none',
        }
      })
});