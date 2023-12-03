import {
  Box,
  ListItemIcon, Collapse, List, ListItemButton, ListItemText,
} from '@mui/material';

import { grey } from '@mui/material/colors';
import {
  ExpandMore, FiberManualRecord,
  ChevronRightOutlined,
} from '@mui/icons-material';
import { useState, ElementType, FC } from 'react';

export interface MenuItemSubProps {
  title: string;
  url: string;
}

export interface MenuItemProps {
  title: string;
  url: string;
  icon: ElementType;
  subtitle: MenuItemSubProps[];
}
const MenuItem: FC<MenuItemProps> = ({
  title, url, icon: Icon, subtitle,
}) => {
  const [open, setOpen] = useState(true);
  return (
    <List>
      <ListItemButton>
        <ListItemIcon>
          <Box
            sx={{
              ml: 2,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': {
                backgroundColor: grey[300],
                borderRadius: '1px',
              },
            }}
            onClick={() => setOpen(!open)}
          >
            {open
              ? <ExpandMore />
              : <ChevronRightOutlined />}
          </Box>
        </ListItemIcon>
        <ListItemIcon sx={{ mr: -2 }}>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {
            subtitle.map((subItem) => (
              <ListItemButton key={subItem.title} sx={{ pl: 10 }}>
                <ListItemIcon>
                  <FiberManualRecord sx={{ fontSize: '16px' }} />
                </ListItemIcon>
                <ListItemText primary={subItem.title} />
              </ListItemButton>
            ))
          }
        </List>
      </Collapse>
    </List>
  );
};

export default MenuItem;
