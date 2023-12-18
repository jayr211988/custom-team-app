"use client"
import { useEffect, useState } from 'react';
import LoadingMessage from './LoadingMessage';
import ErrorMessage from './ErrorMessage';
import EmptyMessage from './EmptyMessage';


export default function LoadingTable({isLoading,hasError,isEmpty,DataComponent}) {
 
  if (isLoading) return  <LoadingMessage/>
  if (hasError) return <ErrorMessage/>
  if (isEmpty) return <EmptyMessage/>

  return (
    <div id="contract-table"> 
        <DataComponent/>
    </div>
  )
}
