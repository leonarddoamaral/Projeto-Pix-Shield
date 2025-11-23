import Alert from '@mui/material/Alert';

interface AlertaProps{
    severity: 'error' | 'warning' | 'info' | 'success'; 
    messageAlert: string;
}

function Alerta(prop: AlertaProps){
    return(

        <Alert  variant="filled" severity={prop.severity}>{prop.messageAlert}</Alert>
    )

}
export default Alerta

