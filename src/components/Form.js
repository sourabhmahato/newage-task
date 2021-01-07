import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '74%',
    margin: '0 auto',
  },
  inline: {
    display: 'flex',
    '& > *': {
        margin: theme.spacing(0.5),
        flex: 1,
      },
  },
  formControl: {
    margin: theme.spacing(0.5),
    minWidth: 120,
  },
  btnContainer: {
    margin: '10px 0',
    textAlign: 'center'
  },
  btn: {
    padding: '10px 30px',
    border: '1px solid #444'
  }
}));

export default function BasicTextFields({handleProgressSubmit, formData}) {
  const classes = useStyles();
  const [team, setTeam] = React.useState('');
  const [assignee, setAssignee] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [task, setTask] = React.useState('');
  const [jiraId, setJiraId] = React.useState('');
  const [xdLink, setXdLink] = React.useState('');
  const [dueDate, setDueDate] = React.useState('');

  const handleClick = () => {
    handleProgressSubmit({team, assignee, status, task, jiraId, xdLink, dueDate})
    setTeam("")
    setAssignee("")
    setStatus("")
    setTask("")
    setJiraId("")
    setXdLink("")
    setDueDate("")
  }
  useEffect(() => {
    if(formData){
      setTeam(formData.team);
      setAssignee(formData.assignee);
      setStatus(formData.status);
      setTask(formData.task);
      setJiraId(formData.jiraId);
      setDueDate(formData.dueDate);
      setXdLink(formData.xdLink);
    }
  }, [formData])

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.inline}>
        <TextField id="outlined-basic" value={task} label="Enter Task Name" variant="outlined" onChange={e => setTask(e.target.value)} />
        <TextField id="outlined-basic" value={jiraId} label="Enter Jira ID" variant="outlined" onChange={e => setJiraId(e.target.value)} />
        <TextField
          id="date"
          value={dueDate}
          defaultValue={dueDate}
          type="date"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={e => setDueDate(e.target.value)}
        />
      </div>
      <div className={classes.inline}>
        <TextField id="outlined-basic" value={xdLink} label="Enter XD Link" variant="outlined" onChange={e => setXdLink(e.target.value)} />
      </div>
      <div className={classes.inline}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Select Team</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={team}
          onChange={e => setTeam(e.target.value)}
          label="Select Team"
        >
          <MenuItem value={"Team Level 1"}>Team Level 1</MenuItem>
          <MenuItem value={"Team Level 2"}>Team Level 2</MenuItem>
          <MenuItem value={"Team Level 3"}>Team Level 3</MenuItem>
          <MenuItem value={"Team Level 4"}>Team Level 4</MenuItem>
          <MenuItem value={"Team Level 5"}>Team Level 5</MenuItem>
          <MenuItem value={"Team Level 6"}>Team Level 6</MenuItem>
          <MenuItem value={"Team Level 7"}>Team Level 7</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Select Assignee</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={assignee}
          onChange={e => setAssignee(e.target.value)}
          label="Select Assignee"
        >
          <MenuItem value={'Gaurav'}>Gaurav</MenuItem>
          <MenuItem value={'Tanzil'}>Tanzil</MenuItem>
          <MenuItem value={'Minaj'}>Minaj</MenuItem>
          <MenuItem value={'BK'}>BK</MenuItem>
          <MenuItem value={'Sudha'}>Sudha</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Select Status</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={status}
          onChange={e => setStatus(e.target.value)}
          label="Select Status"
        >
          <MenuItem value={'In QC'}>QC</MenuItem>
          <MenuItem value={'UAT'}>UAT</MenuItem>
          <MenuItem value={'In Progress'}>In Progress</MenuItem>
          <MenuItem value={'Completed'}>Completed</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div className={classes.btnContainer}>
        <Button className={classes.btn} size="medium" variant="outlined" onClick={handleClick}>Add / Update</Button>
      </div>
    </form>
  );
}
