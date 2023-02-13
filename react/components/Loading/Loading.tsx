import React from "react";
//@ts-ignore
import { useCssHandles } from "vtex.css-handles"
import './Loading.css'


export const Loading = () => {
  const CSS_HANDLES = ["loading", "container__loading"]
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <div className={ handles.container__loading}>
      <div className={ handles.loading}>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
  )
}
