export const getContracts=({...props})=> {
    fetch(`https://demoapi.jcadevdomain.com/api/${props.isPagination ? 'contract' : 'contract-all'}`,{
        headers: {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    })
        .then((res) => res.json())
        .then((contracts) => {
            props.setContracts(props.isPagination ? contracts.data : contracts)
            props.setLoading(false)
            props.setHasError(false)
        },
    (error) => {
        props.setLoading(false);
        props.setHasError(true)
        console.log(error, 'has error in api');
    })
}