export type Props = {
    departments: [Category],
    handleSetSlug: any
}

export type Category = {
    id: number,
    name: string,
    slug: string
}
