import {Container, Flex, Heading, Text, Table} from '@radix-ui/themes';
import ErrorMessage from './ErrorMessage';

async function getContracts() {
  try {
    const contract =  await fetch('http://64.227.105.223/api/contract',{mode: 'no-cors'});
    const contractResponse =  await contract.json()
    console.log(contractResponse, 'contracts', contractResponse.length)
    return contractResponse.data;
  } catch (error) {
    return null;
  }
  
}

export default async function DashBoardTable() {
  
  const hasContractsData = await getContracts();

  return (
      <>
        {
          hasContractsData ?
          <> 
            <Heading>Demo Sample List</Heading>
            <Table.Root variant="surface">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Contract Number</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Tenant Type</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Branch Code</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Tenant</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Contract Date</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>SAP Contract Number</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
      
              <Table.Body>
                  {hasContractsData.map((contract, i) => (
                      <Table.Row key={i}>
                      <Table.RowHeaderCell>{contract['contract_no']}</Table.RowHeaderCell>
                      <Table.Cell>{contract['tenant_type']}</Table.Cell>
                      <Table.Cell>{contract['branch_code']}</Table.Cell>
                      <Table.Cell>{contract['tenant_type_ri']}</Table.Cell>
                      <Table.Cell>{contract['contract_active_on_date']} </Table.Cell>
                      <Table.Cell>{contract['sap_contract_no']}</Table.Cell>
                    </Table.Row>
                  ))}
              </Table.Body>
            </Table.Root>
          </>
          : <ErrorMessage/>
        }
      </>
      
  )
}
