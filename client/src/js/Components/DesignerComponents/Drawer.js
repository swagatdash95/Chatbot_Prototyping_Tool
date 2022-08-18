import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PersonIcon from "@mui/icons-material/Person";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.primary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.primary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: "var(--tree-view-color)",
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));
function StyledTreeItem(props) {
  const { bgColor, color, labelIcon: LabelIcon, labelText, ...other } = props;

  return (
    <StyledTreeItemRoot
      label={
        <Box sx={{ display: "flex", alignItems: "center", p: 0.5, pr: 0 }}>
          <Box
            component={LabelIcon}
            color="inherit"
            sx={{ mr: 1, height: "4vh" }}
          />
          <Typography
            variant="body2"
            sx={{ fontWeight: "inherit", flexGrow: 1 }}
          >
            {labelText}
          </Typography>
        </Box>
      }
      // style={{
      //   '--tree-view-color': color,
      //   '--tree-view-bg-color': bgColor,
      // }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  // labelIcon: PropTypes.elementType.isRequired,
  labelText: PropTypes.string.isRequired,
};

export default function Drawer({ clickEvent }) {
  return (
    <TreeView
      aria-label="Entities"
      defaultExpanded={["1"]}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 12 }} />}
      sx={{
        height: "100vh",
        maxWidth: 200,
        overflowY: "auto",
        backgroundColor: "#18328F",
        width: 300,
      }}
    >
      <StyledTreeItem
        nodeId="1"
        labelText="Bot Response"
        labelIcon={SmartToyIcon}
        onClick={(event) => clickEvent(event, "Bot")}
        sx={{
          backgroundColor: "rgba(255,255,255,0.3)",
          margin: "0.5vh",
          borderRadius: "5px",
        }}
      />
      <StyledTreeItem
        nodeId="2"
        labelText="User Response"
        labelIcon={PersonIcon}
        sx={{
          backgroundColor: "rgba(255,255,255,0.3)",
          margin: "0.5vh",
          borderRadius: "5px",
        }}
      >
        <StyledTreeItem
          nodeId="3"
          labelText="Text"
          // labelIcon={SupervisorAccountIcon}
          color="#1a73e8"
          bgColor="#e8f0fe"
          onClick={(event) => clickEvent(event, "UserText")}
        />
        <StyledTreeItem
          nodeId="4"
          labelText="Yes/No"
          // labelIcon={InfoIcon}
          color="#e3742f"
          bgColor="#fcefe3"
          onClick={(event) => clickEvent(event, "YesNo")}
        />
        <StyledTreeItem
          nodeId="5"
          labelText="Button"
          // labelIcon={ForumIcon}
          color="#a250f5"
          bgColor="#f3e8fd"
          onClick={(event) => clickEvent(event, "button")}
        />
        <StyledTreeItem
          nodeId="6"
          labelText="Numeric"
          // labelIcon={LocalOfferIcon}
          color="#3c8039"
          bgColor="#e6f4ea"
        />
      </StyledTreeItem>
      <StyledTreeItem
        nodeId="7"
        onClick={(event) => clickEvent(event, "end")}
        labelText="End Node"
        labelIcon={StopCircleIcon}
        sx={{
          backgroundColor: "rgba(255,255,255,0.3)",
          margin: "0.5vh",
          borderRadius: "5px",
        }}
      />
      <StyledTreeItem
        nodeId="8"
        onClick={(event) => clickEvent(event, "save")}
        labelText="Save Flow"
        labelIcon={SaveAltIcon}
        sx={{
          backgroundColor: "rgba(255,255,255,0.3)",
          margin: "0.5vh",
          borderRadius: "5px",
          alignSelf: "end",
        }}
      />
    </TreeView>
  );
}
