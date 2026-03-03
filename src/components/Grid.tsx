import { AgGridReact } from 'ag-grid-react'
import type { ColDef, ColGroupDef } from 'ag-grid-community'

const Grid = (props: {
  filterColumns: (ColDef<any, any> | ColGroupDef<any>)[] | null | undefined
  data: any[] | null | undefined
}) => {
  const baseCol: ColDef = {
    filter: 'agTextColumnFilter',
    suppressHeaderMenuButton: true,
    pinned: 'left',
    floatingFilter: true,
    width: 150,
    resizable: true
  }

  return (
    <div style={{ height: '600px', width: '100%' }}>
      <AgGridReact
        defaultColDef={{ floatingFilter: true }}
        columnDefs={props.filterColumns?.map((f) => {
          return { ...baseCol, ...f }
        })}
        rowData={props.data}
        suppressMenuHide={false}
      />
    </div>
  )
}

export default Grid
