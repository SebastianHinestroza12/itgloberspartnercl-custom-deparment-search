import React from 'react';
//@ts-ignore
import { useCssHandles } from "vtex.css-handles"
import * as Interfaces from "../../interfaces/index";
import './DepartmentGroup.css'

export const DepartmentGroup = ({ departments,  handleSetSlug }: Interfaces.Props) => {
  const onHandleSetSlug = (e: any) => {
    handleSetSlug(`${e.target.value}/$\{term\}?_q=$\{term\}&map=ft`)
  }

  const departmentOptions: any = departments.map((department: Interfaces.Category) => {
        return (
            <option
            value={department.slug}
            key={department.id}
            >
                {department.name}
            </option>
        )
  })

  const CSS_HANDLES = ["select", "options",  "container__select"]
  const handles = useCssHandles(CSS_HANDLES)

  console.log(onHandleSetSlug)
  return (
    <div className={ handles.container__select}>
      <select
        className={ handles.select}
        onChange={onHandleSetSlug}
        defaultValue="value0">
        <option
          disabled
          className={ handles.options}
          value="value0"
        >Seleccione una opción</option>
          {departmentOptions}
      </select>
    </div>
  )
}
