import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { FaGitAlt } from 'react-icons/fa';
import { Link } from '@mui/material';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Modal({open, setOpen, dataProject}) {


  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {dataProject.name}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Link href={dataProject.url} rel="noreferrer" target='_blank'>
          <Box gutterBottom width='100%' component='img' src={dataProject.img}/>
          </Link>
        </DialogContent >  
        <DialogContent dividers>
        <Typography  gutterBottom>
          <Typography display='inline' variant='h6' color='black' >
          Descrição : 
          </Typography>
          {' '}
          {dataProject.desc}
          </Typography>
          </DialogContent>
        <DialogContent dividers>
        <Typography display='flex' justifyContent="center" alignItems='center'>
          GitHub : 
            <Link href={dataProject.git} rel="noreferrer" target='_blank' >
              <FaGitAlt fontSize='30px' color="black" />
            </Link>
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}