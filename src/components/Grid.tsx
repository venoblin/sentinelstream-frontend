import type { ColDef, ColGroupDef } from 'ag-grid-community'
import { AgGridReact } from 'ag-grid-react'
import { useAgGridHelpers } from '../hooks/useAgGridHelpers'

const Grid = (props: {
  filterColumns: (ColDef<any, any> | ColGroupDef<any>)[] | null | undefined
  data: any[] | null | undefined
}) => {
  const { containerProps, agGridProps } = useAgGridHelpers()

  return (
    <div {...containerProps}>
      <AgGridReact
        {...agGridProps}
        defaultColDef={{ floatingFilter: true }}
        columnDefs={props.filterColumns?.map((f) => {
          return { filter: 'agTextColumnFilter', ...f }
        })}
        rowData={props.data}
        suppressMenuHide={false}
      />
    </div>
  )
}

export default Grid
