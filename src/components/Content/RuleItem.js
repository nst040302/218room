import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    headerContainer: {
        backgroundColor: '#ccc'
    },
    header: {
        letterSpacing: '1px',
    },
    titleContainer:{
        display: 'flex',
        marginBottom: '7px'
    }
});

const RuleItem = ({ header, data }) => {
    const classes = useStyles()
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.headerContainer}
            >
                <Typography variant="h6" className={classes.header}>{header}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {data.map((item, index) => (
                    <div className={classes.titleContainer}>
                        {item.details ? <AddIcon fontSize="small"/>: <RemoveIcon fontSize="small"/>}
                        <Typography key={index} variant='subtitle2'>{item.title}</Typography>
                    </div>
                ))}
            </AccordionDetails>
        </Accordion>
    )
}

export default RuleItem