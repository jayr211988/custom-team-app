
"use client"

import {Container, Flex, Heading, Text, Table,TextFieldInput, Separator} from '@radix-ui/themes';
import ErrorMessage from './ErrorMessage';
import LoadingMessage from './LoadingMessage';
import numberWithCommas from '@/utils/numberWithComma';
import { useEffect, useState } from 'react';

export default  function DashBoardTable() {
  
  const [contracts, setContracts] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [searchText, setSearchText] = useState('')
 
  useEffect(() => {
    console.time();
    fetch('http://64.227.105.223/api/contract-all')
      .then((res) => res.json())
      .then((data) => {
        setContracts(data)
        setLoading(false)
        console.timeEnd();
      },
      (error) => {
        setIsLoaded(true);
        console.log(error, 'has error in api');
        console.timeEnd();
      })
  }, [])
 
  if (isLoading) return <LoadingMessage/>
  if (!contracts) return <ErrorMessage/>

  return (
      <div id="contract-table"> 
        <div className="flex justify-between ">
          <Heading>Demo Sample List</Heading>
          <TextFieldInput 
            placeholder="Search by contract number" 
            style={{width: '200px'}}
            // onChange={({target: {value}})=>setSearchText(value)}
          />
        </div>
        <Separator color='transparent' size={2} style={{height: '20px', background: 'transparent'}}/>
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
            {contracts.map((contract, i) => (
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
        <Text as='div' >Total Contracts: {numberWithCommas(contracts.length)}</Text>
      </div>
  )
}
