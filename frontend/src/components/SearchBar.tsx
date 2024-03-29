import { Button, ClickAwayListener, Grow, MenuList, OutlinedInput, Paper, Popper, Stack } from '@mui/material'
import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

interface SearchBarMenuProps {
  menuItems: string[]
}

export const SearchBarMenu: React.FC<SearchBarMenuProps> = ({ menuItems }) => {
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement | null>(null)
  const [selectedFilter, setSelectedFilter] = React.useState('All')

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: React.MouseEvent<HTMLLIElement, MouseEvent> | React.TouchEvent<HTMLLIElement> | MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }
    setOpen(false)
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          variant="contained"
          onClick={handleToggle}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            textTransform: 'capitalize',
            '&:hover': { bgcolor: '#9e9e9e' },
            bgcolor: '#eee',
            borderRadius: 10,
          }}
        >
          {selectedFilter}
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} placement="top-start" transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'top-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper sx={{ zIndex: 1 }}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="composition-menu" aria-labelledby="composition-button" onKeyDown={handleListKeyDown}>
                    {menuItems?.map((item, index) => (
                      <MenuItem
                        onClick={(event) => {
                          setSelectedFilter(item)
                          handleClose(event)
                        }}
                        key={`search-${index + 1}`}
                      >
                        {item}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  )
}

const SearchBar: React.FC = () => {
  const menuItems = ['All', 'Projects', 'Users', 'Time', 'Action']

  return (
    <OutlinedInput
      placeholder="Search by user, project name and action..."
      // variant="outlined"
      fullWidth
      sx={{
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 2,
        color: '#fff',
        bgcolor: '#34394b',
      }}
      endAdornment={<SearchBarMenu menuItems={menuItems} />}
    />
  )
}

export default SearchBar
