import React from "react";
import Button from "@mui/material/Button"
import Drawer from "@mui/material/Drawer"
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar, Divider } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { BiSolidDashboard } from "react-icons/bi";
import { BiBookBookmark } from "react-icons/bi";
import { BiSolidInbox } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";

export default function SideDrawer() {
    const [open, setOpen] = React.useState(false);
    const userName = 'Tummy';
    const toggleDrawer = (isOpen: boolean) => () => {
        setOpen(isOpen);
    };
    const DrawerList = (
        <Box
            sx={{
                width: 250,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: 2,
            }}
        >
            <Avatar className="w-16 h-16" />
            <h2 className="m-2" >{userName}</h2>
            <Divider sx={{ width: '100%', marginBottom: 1 }} />
            <List sx={{ width: '100%' }}>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><BiSolidDashboard className="w-6 h-6" /></ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><BiSolidInbox className="w-6 h-6" /></ListItemIcon>
                        <ListItemText primary="Inventory" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><BiBookBookmark className="w-6 h-6" /></ListItemIcon>
                        <ListItemText primary="Order" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding className="hover:bg-red-100">
                    <ListItemButton>
                        <ListItemIcon>
                            <BiLogOut className="text-red-500 w-6 h-6" />
                        </ListItemIcon>
                        <ListItemText primary="Logout" className="text-red-500" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
    return (
        <>
            <Button onClick={toggleDrawer(true)} startIcon={<ArrowForwardIosIcon />} />
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>
    );
}