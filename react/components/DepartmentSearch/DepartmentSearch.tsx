import React, { useState} from "react";
import { DepartmentGroup } from "../DepartmentGroup/DepartmentGroup";
import { useQuery } from 'react-apollo';
//@ts-ignore
import { useCssHandles } from "vtex.css-handles"
import QUERY_VALUE from '../../graphql/getDepartmentGroup.graphql'
//@ts-ignore
import { SearchBar } from 'vtex.store-components';
import { Loading } from "../Loading/Loading";
import './DepartmentSearch.css'

export const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE)
  const [slug, setSlug] = useState("");
  console.log(setSlug)

  const CSS_HANDLES = ["container__content","container__search"]
  const handles = useCssHandles(CSS_HANDLES)


  return (
    <div className={handles.container__search}>
      {
        loading ?
          <div>
            <Loading/>
        </div> :
          <div className={handles.container__content}>
            <DepartmentGroup
              departments={data?.categories}
              handleSetSlug={slug}
            />
            <SearchBar
              customSearchPageUrl={slug}
              placeholder='Qué buscas en Sony?'
              displayMode="search-and-clear-buttons"
              maxWidth={300}
            />
        </div>
      }
    </div>
  )
}


