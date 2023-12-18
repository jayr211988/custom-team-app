"use client"

import {Container, Flex, Heading, Text, Table,TextFieldInput, Separator} from '@radix-ui/themes';
import EmptyMessage from './EmptyMessage';
import ErrorMessage from './ErrorMessage';
import LoadingMessage from './LoadingMessage';
import numberWithCommas from '@/utils/numberWithComma';
import { useEffect, useState } from 'react';

export default function DashBoardTable() {
  
  const [contracts, setContracts] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
 
  useEffect(() => {
    console.time();
    fetch('https://demoapi.jcadevdomain.com/api/contract-all',{
      headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((contracts) => {
        setContracts(contracts)
        setLoading(false)
        setHasError(false)
        console.timeEnd();
      },
      (error) => {
        setLoading(false);
        setHasError(true)
        console.log(error, 'has error in api');
        console.timeEnd();
      })
  }, [])
 
  if (isLoading) return <LoadingMessage/>
  if (hasError) return <ErrorMessage/>
  if (!contracts) return <EmptyMessage/>

  return (
      <div id="contract-table"> 
        <div className="flex justify-between ">
          <Heading>Demo Sample List</Heading>
          <TextFieldInput 
            placeholder="Search by contract number" 
            style={{width: '200px'}}
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
